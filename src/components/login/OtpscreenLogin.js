import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TextInput,
  StatusBar,
  TouchableHighlight,
  Keyboard
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import DropdownAlert from 'react-native-dropdownalert';
import {
  Icon,
  Container,
  Header,
  Item,
  Form,
  Button,
  Left
} from 'native-base';
import Footers from '../Footers'
import { ScrollView } from 'react-native-gesture-handler';
import Spinner from "react-native-loading-spinner-overlay";
import { get_remote_data } from '../../services/serverEndpoints';

export default class OtpScreenLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobile: '',
      otp: '',
      user_otp: '',
      countdown: true,
      distance: 0,
      countdownDate: 0,
      spinner: false
    }
  }

  componentDidMount() {
    AsyncStorage.getItem('mobile').then((result) => {
      this.setState({ mobile: result });
    });
    AsyncStorage.getItem('otp_nm').then((result) => {
      this.setState({ otp: result });
    });
    this.timer();
  }

  componentWillUnmount() {
    clearInterval(this._interval);
  }

  timer = () => {
    this.setState({
      countdown: true,
      distance: 0,
      countdownDate: new Date().getTime() + 20000
    });
    this._interval = setInterval(() => {
      var now = new Date().getTime();
      this.setState({ distance: this.state.countdownDate - now });
      if (this.state.distance < 0) {
        clearInterval(this._interval);
        this.setState({ countdown: false });
      }
    }, 1000);
  }

  otp_check = async () => {
    this.setState({ spinner: true });
    try {
      if (isNaN(this.state.user_otp)) throw Error('OTP must be a number');
      if (this.state.user_otp.length < 6) throw Error('OTP must be of 6 digits');
      if (Number(this.state.otp) !== Number(this.state.user_otp)) throw Error('Invalid OTP entered');
      let data = {
        'mobile': this.state.mobile,
        'otp': this.state.otp
      };
      let responseData = await get_remote_data('POST', '/users/verify-mobile-login', data);
      if (responseData['status'] === 200) {
        this.setState({ spinner: false });
        let token = responseData['data']['token'];
        await AsyncStorage.setItem('login_status', 'true');
        await AsyncStorage.setItem('token', JSON.stringify(token));
        this.props.navigation.navigate('Home');
      } else {
        this.setState({ spinner: false });
        throw Error(responseData['message']);
      }
    } catch (e) {
      this.setState({ spinner: false });
      this.dropdown.alertWithType('error', 'Property Strength', e.message);
    }
  };

  handleResendOTP = async () => {
    const data = { mobile: this.state.mobile };
    const responseData = await get_remote_data('POST', '/users/resend-otp', data);
    if (responseData['status'] === 200) {
      this.setState({ otp: responseData['data']['otp'] });
      console.log(this.state.otp);
    } else {
      alert(responseData['message']);
    }
  }

  static navigationOptions = {
    header: null,
  };

  render() {
    var countdown;
    if (this.state.countdown) {
      countdown = (
        <Text style={{ color: '#555', textAlign: 'center', marginTop: 30, letterSpacing: 1, fontFamily: "Lato-Bold" }}>
          Resend OTP in {
            Math.floor((this.state.distance % (1000 * 60 * 60)) / (1000 * 60)) > 9 ? Math.floor((this.state.distance % (1000 * 60 * 60)) / (1000 * 60)) : '0' + Math.floor((this.state.distance % (1000 * 60 * 60)) / (1000 * 60))
          }
          :{
            Math.floor((this.state.distance % (1000 * 60)) / 1000) > 9 ? Math.floor((this.state.distance % (1000 * 60)) / 1000) : '0' + Math.floor((this.state.distance % (1000 * 60)) / 1000)
          }
        </Text>);
    } else {
      countdown = (
        <View>
          <Text style={{ color: 'blue', textAlign: 'center', marginTop: 30, letterSpacing: 1, fontFamily: "Lato-Bold" }} onPress={() => {
            this.handleResendOTP();
            this.timer();
          }}>
            Resend OTP
          </Text>
        </View>
      );
    }
    return (
      <Container>
        <Header style={{ backgroundColor: '#fff', borderBottomWidth: 0.5, borderBottomColor: '#e2e2e2', justifyContent: 'flex-start', alignItems: 'center' }}>
          <StatusBar backgroundColor="#d52331" />
          <Left>
            <TouchableHighlight style={{ alignItems: 'center' }}>
              <Button transparent style={{ alignItems: 'center', justifyContent: 'center' }} onPress={() => { this.props.navigation.navigate('Login') }}>
                <Icon name='ios-arrow-back' style={{ color: 'rgb(192,0,0)', fontWeight: 'bold', fontSize: 35, alignItems: 'center' }}></Icon>
                <Text style={{ fontSize: 18, color: 'rgb(192,0,0)', fontFamily: "Lato-Bold", textTransform: "capitalize" }}> Back</Text>
              </Button>
            </TouchableHighlight>
          </Left>
        </Header>
        <ScrollView contentContainerStyle={{ flex: 1 }} keyboardShouldPersistTaps='always'>
          {/* <KeyboardAvoidingView style={{flex: 1, margin:15 }} behavior="padding" enabled> */}
          <View style={{ flex: 1, justifyContent: 'center' }}>
            <StatusBar backgroundColor="#d52331" />
            <Text style={{ color: '#555', textAlign: 'center', letterSpacing: 1, fontSize: 17, fontFamily: "Roboto-Medium" }}>Enter the 6 digit OTP sent to you at</Text>
            <Text style={{ color: '#555', textAlign: 'center', fontFamily: "Lato-Bold", letterSpacing: 1, fontSize: 17 }}>+91{this.state.mobile}</Text>
            <Form style={{ alignItems: 'center', width: '100%' }}>
              <Item style={{ marginTop: 20, marginBottom: 20, borderBottomColor: 'black', width: '100%' }}>
                <TextInput placeholder='OTP' maxLength={6} keyboardType="phone-pad" style={styles.input} onChangeText={(user_otp) => this.setState({ user_otp })} />
              </Item>
              <View style={{ alignItems: 'center', justifyContent: 'center', }}>
                <Button rounded block style={styles.button} onPress={this.otp_check}>
                  <Text style={styles.text}>Submit</Text>
                </Button>
              </View>
            </Form>
            <Spinner
              visible={this.state.spinner}
              textContent={"Loading..."}
              textStyle={styles.spinnerTextStyle}
            />
            {countdown}
            <Text style={{ color: 'rgb(192,0,0)', textAlign: 'center', marginTop: 30, letterSpacing: 1, fontFamily: "Lato-Bold" }} onPress={() => { this.props.navigation.goBack() }}>EDIT MOBILE NUMBER</Text>
          </View>
          {/* </KeyboardAvoidingView> */}
        </ScrollView>
        <Footers />
        <DropdownAlert ref={ref => this.dropdown = ref} />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "rgb(192,0,0)",
    height: 40,
    marginTop: 20,
    width: 200
  },
  text: {
    color: 'white',
    // fontWeight:'bold',
    fontSize: 20,
    letterSpacing: 1,
    fontFamily: "Lato-Bold"
  },
  input: {
    fontFamily: 'Roboto-Medium',
    fontSize: 15,
    letterSpacing: 1,
    width: '100%',
  }
}); 