import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, StatusBar } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {Icon, Container, Content, Button } from 'native-base';

import { get_remote_data } from '../../services/serverEndpoints';

export default class AgreeTerms extends Component {
  static navigationOptions = {
    header:null,
  };

  constructor(props) {
    super(props);
    this.state = {
      otp: '',
      mobile: '',
      firstname: '',
      lastname: '',
      email: '',
      user_type: '',
      company_name: '',
      password: '',
      confirm_password: ''
    };
  }

  componentDidMount() {
    this.load_memory();
  }

  load_memory = async () => {
    try {
      AsyncStorage.getItem('mobile').then((result) => {
        this.setState({mobile: result});
      });
      AsyncStorage.getItem('otp_nm').then((result) => {
        this.setState({otp: result});
      });
      AsyncStorage.getItem('firstname').then((result) => {
        this.setState({firstname: result});
      });
      AsyncStorage.getItem('lastname').then((result) => {
        this.setState({lastname: result});
      });
      AsyncStorage.getItem('email').then((result) => {
        this.setState({email: result});
      });
      AsyncStorage.getItem('user_type').then((result) => {
        this.setState({user_type: result});
      });
      AsyncStorage.getItem('company_name').then((result) => {
        this.setState({company_name: result});
      });
      AsyncStorage.getItem('password').then((result) => {
        this.setState({password: result, confirm_password: result});
      });
    } catch (e) {}
  };

  update_form_data = async () => {
    try {
      let data = {
        mobile: this.state.mobile,
        otp: this.state.otp,
        firstname: this.state.firstname,
        lastname: this.state.lastname,
        password: this.state.password,
        confirm_password: this.state.confirm_password,
        user_type: this.state.user_type,
        company_name: this.state.company_name,
        is_terms_accepted: true
      };

      let responseData = await get_remote_data('POST', '/users/mobile-signup-profile', data);
      if (responseData['status'] === 200) {
        let token = responseData['data']['token'];
        await AsyncStorage.setItem('login_status', 'true');
        await AsyncStorage.setItem('token', JSON.stringify(token));
        this.props.navigation.navigate('Home');
      } else {
        alert(responseData["message"]);
      }
    } catch (e) {}
  };

  render() {
    return (
      <Container>
        <StatusBar backgroundColor="#d52331" />
        <Content contentContainerStyle={{flex: 1, margin: 15}}>
          <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Image source={require('../../../assets/images/tc.png')} style={styles.top_image}/>
            </View>
            <View style={{flex: 1.5, alignItems: 'flex-end'}}>
              <Text style={styles.instrect_txt}>
                By tapping the arrow below, you agree to PropertyStrength terms of use and privacy policy.
              </Text>
              <Text style={styles.text_2}>
                To learn more, see our
                <Text style={{color: 'blue'}}>Terms & Condition</Text>
                and <Text style={{color: 'blue'}}>Privacy Policy</Text>
              </Text>
              <View style={{width: '100%', alignItems: 'flex-end', textAlign: 'right'}}>
                <Button rounded style={styles.button} onPress={this.update_form_data}>
                  <Icon name="md-arrow-round-forward" style={styles.icon_now_Style} />
                </Button>
              </View>
            </View>
          </View>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "rgb(192,0,0)",
    height: 60,
    width:60,
    marginTop:50,
    alignItems:'center'
  },
  text: {
    color:'white',
    fontWeight:'bold',
    fontSize:20
  },
  top_image: {
    resizeMode: 'contain',
    width: 150
  },
  instrect_txt: {
    color: '#555',
    fontSize: 18,
    textAlign: 'left',
    letterSpacing: 1,
    lineHeight: 30,
    fontFamily: 'Roboto-Medium'
  },
  text_2:{
    color: '#555',
    textAlign: 'left',
    marginTop: 50,
    letterSpacing: 1,
    fontSize: 15,
    lineHeight: 25,
    fontFamily: "Roboto-Medium"
  },
  icon_now_Style: {
    fontSize: 35,
    fontWeight: 'bold'
  }
}); 