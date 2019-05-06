import React, { Component } from 'react';
import { StyleSheet, View, Text, StatusBar, TextInput, TouchableHighlight, KeyboardAvoidingView } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import DropdownAlert from 'react-native-dropdownalert';
import { Icon, Title, Container, Header, Item, Content, Form, Body, Button, Left } from 'native-base';

import Footers from '../Footers';

export default class Profile extends Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      company_name: '',
      password: '',
      confirm_password: '',
      user_type: ''
    };
  }

  componentDidMount() {
    try {
      AsyncStorage.getItem('user_type').then((result) => {
        this.setState({ user_type: result });
      });
    } catch (e) { }
  }

  update_data = async () => {
    try {
      var msg = '';
      if (this.state.firstname.trim() === '') msg += 'Please provide firstname.\n';
      if (this.state.lastname.trim() === '') msg += 'Please provide lastname.\n';
      if (this.state.email.trim() !== '') {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(this.state.email)) msg += 'Please provide the valid email.\n';
      }
      if (this.state.password.trim() === '' || this.state.password.length < 8) msg += 'Password must be minimum of 8 letters.\n';
      if (this.state.password.trim() !== this.state.confirm_password.trim()) msg += `Password doesn't match.\n`;
      if (msg.trim() !== '') throw Error(msg);

      await AsyncStorage.setItem('firstname', this.state.firstname);
      await AsyncStorage.setItem('lastname', this.state.lastname);
      if (this.state.email.trim() !== '') await AsyncStorage.setItem('email', this.state.email);
      if (this.state.company_name.trim() !== '') await AsyncStorage.setItem('company_name', this.state.company_name);
      await AsyncStorage.setItem('password', this.state.password);
      this.props.navigation.navigate('Agreeterms');
    } catch (e) {
      this.dropdown.alertWithType('error', 'Property Strength', msg);
    }
  }

  render() {
    var company;
    if (this.state.user_type === 'broker') {
      company = (
        <View style={{ justifyContent: 'center', alignItems: 'center', marginRight: 15, marginLeft: 8 }}>
          <Item style={{ marginTop: 20, borderBottomColor: 'black', width: '100%', }}>
            <Icon active name='ios-people' />
            < TextInput placeholder='Company Name' style={styles.input} onChangeText={(company_name) => this.setState({ company_name })} />
          </Item>
        </View>
      );
    } else {
      company = (null);
    }
    return (
      <Container>
        <Header style={{ backgroundColor: '#fff', borderBottomWidth: 0.5, borderBottomColor: '#e2e2e2' }}>
          <StatusBar backgroundColor="#d52331" />
          <Left>
            <TouchableHighlight style={{ alignItems: 'center' }}>
              <Button transparent style={{ alignItems: 'center', justifyContent: 'center' }} onPress={() => { this.props.navigation.navigate('Signup') }}>
                <Icon name='ios-arrow-back' style={{ color: 'rgb(192,0,0)', fontWeight: 'bold', fontSize: 35, alignItems: 'center' }}></Icon>
                <Text style={{ fontSize: 18, color: 'rgb(192,0,0)', fontFamily: "Lato-Bold", textTransform: "capitalize" }}> Back</Text>
              </Button>
            </TouchableHighlight>
          </Left>
          <Body style={{}}>
            <Title style={{ color: 'black', textAlign: 'left', fontFamily: "Lato-Bold" }}><Text>Profile</Text></Title>
          </Body>
          {/* <Right/> */}
        </Header>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginRight: 15, marginLeft: 15 }}>
          <Text style={{ textAlign: 'center', marginTop: 10, fontSize: 15, letterSpacing: 1, fontFamily: "Roboto-Medium" }}>Fill the below Information</Text>
          <View style={{ height: "80%", alignItems: 'center', width: '100%' }}>
            <View style={{ width: "95%", height: "15%", marginTop: 10, alignItems: 'center', justifyContent: 'center', flexDirection: "row" }}>
              <Icon active name='person' />
              <TextInput placeholder='Firstname *' style={styles.input} onChangeText={(firstname) => this.setState({ firstname })} />
            </View>
            <View style={{ width: "100%", height: 1, backgroundColor: "black" }}></View>
            <View style={{ width: "95%", height: "15%", marginTop: 10, alignItems: 'center', justifyContent: 'center', flexDirection: "row" }}>
              <Icon active name='person' />
              <TextInput placeholder='Lastname *' style={styles.input} onChangeText={(lastname) => this.setState({ lastname })} />
            </View>
            <View style={{ width: "100%", height: 1, backgroundColor: "black" }}></View>
            <View style={{ width: "95%", height: "15%", marginTop: 10, alignItems: 'center', justifyContent: 'center', flexDirection: "row" }}>
              <Icon active name='md-mail' />
              <TextInput placeholder='Email' keyboardType='email-address' style={styles.input} onChangeText={(email) => this.setState({ email })} />
            </View>
            <View style={{ width: "100%", height: 1, backgroundColor: "black" }}></View>
            <View style={{ width: "95%", height: "15%", marginTop: 10, alignItems: 'center', justifyContent: 'center', flexDirection: "row" }}>
              <Icon active name='lock' />
              <TextInput secureTextEntry={true} placeholder='Password *' style={styles.input} onChangeText={password => this.setState({ password })} />
            </View>
            <View style={{ width: "100%", height: 1, backgroundColor: "black" }}></View>
            <View style={{ width: "95%", height: "15%", marginTop: 10, alignItems: 'center', justifyContent: 'center', flexDirection: "row" }}>
              <Icon active name='lock' />
              <TextInput secureTextEntry={true} placeholder='Confirm Password *' style={styles.input} onChangeText={confirm_password => this.setState({ confirm_password })} />
            </View>
            <View style={{ width: "100%", height: 1, backgroundColor: "black" }}></View>
            <View style={{ height: "10%", alignItems: 'center', justifyContent: 'center', }}>
              <Button block rounded style={styles.button}>
                <Text style={styles.text} onPress={this.update_data}>Register</Text>
              </Button>
            </View>
          </View>
        </View>
        <Footers />
        <DropdownAlert ref={ref => this.dropdown = ref} messageNumOfLines={0} />
      </Container >
    );
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "rgb(192,0,0)",
    height: 40,
    marginTop: 30,
    width: 200

  },
  text: {
    color: 'white',
    letterSpacing: 1,
    fontFamily: 'Lato-Bold',
    fontSize: 20
  },
  input: {
    fontFamily: 'Roboto-Medium',
    fontSize: 15,
    width: '100%',
  }
}); 