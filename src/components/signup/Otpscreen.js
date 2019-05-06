import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TextInput,
  StatusBar,
  TouchableHighlight
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { Icon, Container, Header, Item, Form, Button, Left } from 'native-base';
import DropdownAlert from 'react-native-dropdownalert';
import { ScrollView } from 'react-native-gesture-handler';

import Footers from '../Footers'
import { get_remote_data } from '../../services/serverEndpoints';

export default class OtpScreen extends Component {
  state = {
    mobile: '',
    otp: '',
    user_otp: '',
    countdown: true,
    distance: 0,
    countdownDate: 0
  }

  static navigationOptions = {
    header:null,
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    try {
      AsyncStorage.getItem('mobile').then((result) => {
        this.setState({mobile: result});
      });
      AsyncStorage.getItem('otp_nm').then((result) => {
        this.setState({otp: result});
      });
      this.timer();
    } catch (e) {
      this.dropdown.alertWithType('error', 'Property Strength', e.message);
    }
  }

  componentWillUnmount() {
    clearInterval(this._interval);
  }

  timer = () => {
    try {
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
    } catch (e) {}
  }

  otp_check = async () => {
    try {
      if (isNaN(this.state.user_otp)) throw Error('OTP must be a number');
      if (this.state.user_otp.length < 6) throw Error('OTP must be of 6 digits');
      if(Number(this.state.otp) === Number(this.state.user_otp)) {
        this.props.navigation.navigate('Profile');
      } else {
        throw Error('Invalid OTP entered');
      }
    } catch (e) {
      this.dropdown.alertWithType('error', 'Property Strength', e.message);
    }
  };

  handleResendOTP = async () => {
    try {
      const value = await AsyncStorage.getItem('mobile');
      const data = { mobile: value };
        const responseData = await get_remote_data('POST', '/users/resend-otp', data);
        if (responseData['status'] === 200) {
          this.setState({ otp: responseData['data']['otp'] });
          await AsyncStorage.setItem('otp_nm', JSON.stringify(this.state.otp));
          console.log(this.state.otp);
        } else {
          throw Error(responseData['message']);
        }
    } catch (e) {
      this.dropdown.alertWithType('error', 'Property Strength', e.message);
    }
  }

  render() {
    var countdown;
    if (this.state.countdown) {
      countdown = (
        <Text style={{ color:'#555', textAlign:'center', marginTop:30, letterSpacing:1, fontFamily: "Lato-Bold"}}>
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
          <Text style={{ color:'blue', textAlign:'center', marginTop:30, letterSpacing:1, fontFamily: "Lato-Bold"}} onPress={() => {
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
        <Header style={styles.header_style}>
          <StatusBar backgroundColor="#d52331" />
          <Left>
            <TouchableHighlight style={{alignItems: 'center'}}>
              <Button
                transparent
                style={{alignItems: 'center', justifyContent: 'center'}}
                onPress={() => {
                  this.props.navigation.navigate('Signup')
                }}
              >
                <Icon name='ios-arrow-back' style={styles.icon_back}/>
                <Text style={styles.icon_text}> Back</Text>
              </Button>
            </TouchableHighlight>
          </Left>
        </Header>
        <ScrollView contentContainerStyle={{flex: 1}}>
          <View style={{flex: 1, margin: 15}}>
            <View style={{flex: 1, justifyContent: 'center'}}>
              <StatusBar backgroundColor="#d52331" />
              <Text style={styles.mobile_warn_txt}>Enter the 6 digit OTP sent to you at</Text>
              <Text style={styles.mobile_text}>+91{this.state.mobile}</Text>
              <KeyboardAvoidingView behavior="position">
                <Form style={{alignItems:'center',width:'100%'}}>
                  <Item style={{marginTop: 20, marginBottom: 20, borderBottomColor: 'black', width:'100%'}}>
                    <TextInput
                      placeholder='OTP'
                      keyboardType="phone-pad"
                      style={styles.input}
                      value={this.state.user_otp}
                      onChangeText={val => this.setState({ user_otp: val })}
                      maxLength={6}
                    />
                  </Item>
                  <View style={{alignItems:'center', justifyContent:'center',}}>
                    <Button rounded block style={styles.button} onPress={() => this.otp_check()}>
                      <Text style={styles.text}>Submit</Text>
                    </Button>
                  </View>
                </Form>
              </KeyboardAvoidingView>
              {countdown}
              <Text style={styles.edit_number} onPress={() => { this.props.navigation.goBack() }}>EDIT MOBILE NUMBER</Text>
            </View>
          </View>
        </ScrollView>
        <Footers/>
        <DropdownAlert ref={ref => this.dropdown = ref} />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "rgb(192,0,0)",
    height: 40,
    marginTop:20,
    width:200
  },
  text: {
    color:'white',
    fontSize:20,
    letterSpacing:1,
    fontFamily: "Lato-Bold"
  },
  input:{
    fontFamily:'Roboto-Medium',
    fontSize:15,
    letterSpacing:1,
    width:'100%',
    paddingLeft:0,
    marginLeft:0
  },
  header_style:{
    backgroundColor: '#fff',
    borderBottomWidth: 0.5,
    borderBottomColor: '#e2e2e2',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  icon_back:{
    color: 'rgb(192,0,0)',
    fontWeight: 'bold',
    fontSize: 35,
    alignItems: 'center'
  },
  icon_text:{
    fontSize: 18,
    color: 'rgb(192,0,0)',
    fontFamily: "Lato-Bold",
    textTransform: "capitalize"
  },
  mobile_warn_txt:{
    color: '#555',
    textAlign: 'center',
    letterSpacing: 1,
    fontSize: 17,
    fontFamily: "Roboto-Medium"
  },
  mobile_text:{
    color: '#555',
    textAlign: 'center',
    fontFamily: "Lato-Bold",
    letterSpacing: 1,
    fontSize: 17
  },
  resend_otp:{
    color: '#555',
    textAlign: 'center',
    marginTop: 30,
    letterSpacing: 1,
    fontFamily: "Lato-Bold"
  },
  edit_number:{
    color: 'rgb(192,0,0)',
    textAlign: 'center',
    marginTop: 30,
    letterSpacing: 1,
    fontFamily: "Lato-Bold"
  }
}); 