import React, { Component } from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput, StatusBar, Dimensions } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import DropdownAlert from 'react-native-dropdownalert';
import { Icon, Container, Item, Button, Form } from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';

import Footers from '../Footers';
import ProjectFooter from '../ProjectFooter';
import Logo from '../Logo';
import { get_remote_data } from '../../services/serverEndpoints';
import Spinner from "react-native-loading-spinner-overlay";

const { height, width } = Dimensions.get('window');

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobile: '',
      password: '',
      spinner: false
    }
  }

  componentDidMount() {
    AsyncStorage.getAllKeys().then(AsyncStorage.multiRemove);
  }

  static navigationOptions = {
    header: null
  };

  update_form_data = async () => {
    try {
      this.setState({ spinner: true });
      var msg = '';
      if (this.state.mobile.trim() === '') msg += 'Please enter mobile/email.\n';
      if (this.state.password.trim() === '') msg += 'Please enter password.';
      if (msg.trim() !== '') throw Error(msg);
      let data = {
        'mobile': this.state.mobile,
        'password': this.state.password
      };
      let responseData = await get_remote_data('POST', '/users/mobile-login', data);
      if (responseData['status'] === 200) {
        let otp = responseData['data']['otp'];
        console.log(otp);
        this.setState({ spinner: false });
        await AsyncStorage.setItem('mobile', this.state.mobile);
        await AsyncStorage.setItem('otp_nm', JSON.stringify(otp));
        this.props.navigation.navigate('Otpscreenlogin');
      } else {
        this.setState({ spinner: false });
        throw Error(responseData['message']);
      }
    } catch (e) {
      this.dropdown.alertWithType('error', 'Property Strength', e.message);
      this.setState({ spinner: false });
    }
  }

  render() {
    return (
      <Container>
        <StatusBar backgroundColor="#d52331" />
        <ScrollView style={{ flex: 1 }} keyboardShouldPersistTaps='always'>
          {/* <KeyboardAvoidingView style={{ flex: 1, margin: 15, marginLeft: 0 }} behavior="height" enabled> */}
          <View style={{ flex: 1, height: height * 0.4, justifyContent: 'center', alignSelf: "center" }}>
            <Logo />
          </View>
          <View style={{ flex: 1, height: height * 0.6 }} >
            <Form style={{ alignItems: 'center', width: '100%' }}>
              <Item style={{ borderBottomColor: 'black', width: '100%', marginTop: 10 }}>
                <Icon active name='person' />
                <TextInput
                  placeholder='Mobile No./Email *'
                  style={styles.input}
                  onChangeText={(val) => this.setState({ mobile: val })}
                />
              </Item>
              <Item style={{ borderBottomColor: 'black', marginTop: 20, width: '100%' }}>
                <Icon active name='lock' />
                <TextInput
                  secureTextEntry={true}
                  placeholder='Password *'
                  style={styles.input}
                  onChangeText={(val) => this.setState({ password: val })}
                />
              </Item>
              <View style={{ alignItems: 'center', justifyContent: 'center', }}>
                <Button block rounded style={styles.button} onPress={this.update_form_data}>
                  <Text style={styles.text} >Login</Text>
                </Button>
              </View>
            </Form>
            <Spinner
              visible={this.state.spinner}
              textContent={"Loading..."}
              textStyle={styles.spinnerTextStyle}
            />
            <Text style={styles.forgotPasswordText} onPress={() => this.props.navigation.navigate('ForgotMobile')}>FORGOT PASSWORD</Text>
            <Text style={styles.newAccount} onPress={() => this.props.navigation.navigate('Signup')}>CREATE A NEW ACCOUNT</Text>
            {/* <ProjectFooter /> */}
            <Footers />
          </View>
          {/* </KeyboardAvoidingView> */}
          <DropdownAlert ref={ref => this.dropdown = ref} />
        </ScrollView>
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
    fontSize: 20,
    fontFamily: 'Lato-Bold',
    letterSpacing: 1
  },
  forgotPasswordText: {
    color: '#555',
    textAlign: 'right',
    marginTop: 20,
    letterSpacing: 1,
    fontFamily: 'Lato-Bold'
  },
  newAccount: {
    color: 'rgb(192,0,0)',
    textAlign: 'center',
    fontSize: 15,
    marginTop: 20,
    letterSpacing: 1,
    fontFamily: 'Lato-Bold'
  },
  input: {
    fontFamily: 'Roboto-Medium',
    fontSize: 15,
    letterSpacing: 1,
    width: '100%'
  }
});