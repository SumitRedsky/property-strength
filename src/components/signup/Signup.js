import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, KeyboardAvoidingView, Dimensions } from 'react-native';
import NetInfo from "@react-native-community/netinfo";
import DeviceInfo from 'react-native-device-info';
import AsyncStorage from '@react-native-community/async-storage';
import { Container, Form, Button } from 'native-base';
import PhoneInput from 'react-native-phone-input';
import DropdownAlert from 'react-native-dropdownalert';
import { ScrollView } from 'react-native-gesture-handler';

import Logo from '../Logo';
import Splash from '../splash/Splash';
import Footers from '../Footers';
import { get_remote_data } from '../../services/serverEndpoints';
import renderIf from "../signup/renderIf";

const { height, width } = Dimensions.get('window');

export default class Signup extends Component {
  static navigationOptions = {
    header: null
  };

  state = {
    login_status: false,
    otp: '',
    page_open: 'Home',
  }

  constructor(props) {
    super(props);
    this.state = {
      showSignUp: false,
      showSplash: true
    }
  }

  async componentDidMount() {
    const loginStatus = await AsyncStorage.getItem('login_status');
    const token = await AsyncStorage.getItem('token');
    if (loginStatus === 'true' && token.trim() !== '') {
      this.props.navigation.navigate('Home');
    }
    else {
      this.setState({ showSignUp: false })
      this.setState({ showSignUp: true })
    }
    NetInfo.isConnected.fetch().then(isConnected => {
      if (!isConnected) {
        this.dropdown.alertWithType('error', 'Error', 'Please check your internet connection');
      }
      // console.log("Is connected", isConnected);
    });
    var msg = '';
    NetInfo.getConnectionInfo().then(data => {
      msg += `Connection type: ${data.type}\n`;
      msg += `Connection effective type: ${data.effectiveType}\n`;
    });
    DeviceInfo.getBatteryLevel().then(level => { msg += `Battery: ${level}\n` });
    msg += `Brand: ${DeviceInfo.getBrand()}\n`;
    msg += `Carrier: ${DeviceInfo.getCarrier()}\n`;
    msg += `Country: ${DeviceInfo.getDeviceCountry()}\n`;
    msg += `DeviceID: ${DeviceInfo.getDeviceId()}\n`;
    msg += `Device Name: ${DeviceInfo.getDeviceName()}\n`;
    msg += `First Install Time: ${DeviceInfo.getFirstInstallTime()}\n`;
    msg += `Free Disk Storage: ${DeviceInfo.getFreeDiskStorage()}\n`;
    DeviceInfo.getIPAddress().then(ip => { msg += `IP: ${ip}\n`; });
    DeviceInfo.getMACAddress().then(mac => { msg += `MAC address: ${mac}\n` });
    msg += `Phone Number: ${DeviceInfo.getPhoneNumber()}\n`;
    // DeviceInfo.isAirPlaneMode().then(airPlaneModeOn => { console.log(airPlaneModeOn) });
    DeviceInfo.isBatteryCharging().then(isCharging => { msg += `Is Battery Charging: ${isCharging}\n` });
    msg += `Is Emulator: ${DeviceInfo.isEmulator()}`;
    this.dropdown.alertWithType('info', 'Property Strength', msg);
  }

  sent_otp = async (type) => {
    try {
      if (this.phone.isValidNumber() === false) {
        throw Error('Enter a valid mobile number');
      }
      var phone = this.phone.getValue().toString();
      const country = `+${this.phone.getCountryCode()}`.toString();
      phone = phone.substr(country.length);
      await AsyncStorage.setItem('user_type', type);
      const data = { 'mobile': phone, 'user_type': type };
      const responseData = await get_remote_data('POST', '/users/mobile-signup', data);
      if (responseData['status'] === 200) {
        console.log(responseData);
        this.final_step(responseData);
      } else {
        alert(responseData['message']);
      }
    } catch (e) {
      this.dropdown.alertWithType('error', 'Property Strength', e.message);
    }
  };

  async final_step(responseData) {
    var phone = this.phone.getValue().toString();
    const country = `+${this.phone.getCountryCode()}`.toString();
    phone = phone.substr(country.length);
    const otp_now = responseData['data']['otp'];
    await AsyncStorage.setItem('mobile', phone);
    await AsyncStorage.setItem('otp_nm', JSON.stringify(otp_now));
    this.props.navigation.navigate('Otpscreen');
  }

  render() {
    return (
      <Container>
        <StatusBar backgroundColor="#d52331" />
        {renderIf(this.state.showSignUp)(
          <ScrollView style={{ flex: 1 }} keyboardShouldPersistTaps='always'>
            {/* <KeyboardAvoidingView style={{ flex: 1, margin: 15, marginTop: 0 }} enabled> */}
            <View style={{ height: height * 0.4, justifyContent: 'center', alignItems: 'center' }}>
              <Logo />
            </View>
            <View style={{ flex: 1, height: height * 0.6 }}>
              <Form style={{ alignItems: 'center', width: '100%' }}>
                <View>
                  <PhoneInput
                    initialCountry='in'
                    style={{
                      marginTop: 20,
                      marginBottom: 20,
                      borderBottomWidth: 1,
                      height: 48,
                      fontSize: 20,
                      width: '95%'
                    }}
                    ref={ref => { this.phone = ref; }}
                  />
                </View>
                <Text style={{ width: "95%", color: '#555', textAlign: 'left', fontFamily: "Roboto-Medium", letterSpacing: 1 }}>OTP verification will be sent. Message and data rates may apply.</Text>
                <View style={{ alignItems: 'center', justifyContent: 'center', }}>
                  <Button rounded style={styles.button} onPress={() => this.sent_otp('broker')}>
                    <Text style={styles.text}>Agent</Text>
                  </Button>
                  <Button rounded style={styles.button} onPress={() => this.sent_otp('buyer')}>
                    <Text style={styles.text}>Customer</Text>
                  </Button>
                </View>
              </Form>
              <Text style={styles.newAccount} onPress={() => this.props.navigation.navigate('Login')}>ALREADY HAVE ACCOUNT</Text>
              <Footers />
            </View>
            {/* </KeyboardAvoidingView> */}
          </ScrollView>
        )
        }
        <DropdownAlert ref={ref => this.dropdown = ref} messageNumOfLines={0} />
      </Container >
    );
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "rgb(192,0,0)",
    height: 40,
    marginTop: 20,
    width: 200,
  },
  text: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    width: '100%',
    letterSpacing: 1,
    fontFamily: "Lato-Bold"
  },
  newAccount: {
    color: "rgb(192,0,0)",
    textAlign: 'center',
    fontSize: 15,
    marginTop: 20,
    letterSpacing: 1,
    fontFamily: "Lato-Bold"
  },
  input: {
    width: '80%',
    fontFamily: 'Roboto-Medium',
    fontSize: 15,
    letterSpacing: 1
  },
  logoContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1
  }
});