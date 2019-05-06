import React, { Component } from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView,TextInput, StatusBar, TouchableHighlight } from 'react-native';
import { Icon, Container, Item, Button, Form, Header, Left} from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';

import Footers from '../Footers';


export default class ForgotPassword extends Component {
    static navigationOptions = {
        header:null
      };

  render() {
    return (
      <Container>
          <Header style={{backgroundColor:'#fff', borderBottomWidth:0.5, borderBottomColor:'#e2e2e2',justifyContent:'flex-start', alignItems:'center'}}>
          <StatusBar backgroundColor="#d52331" />
          <Left>
            <TouchableHighlight style={{alignItems:'center'}}>
              <Button transparent style={{alignItems:'center', justifyContent:'center'}} onPress={()=> {this.props.navigation.navigate('Login')}}>
                <Icon name='ios-arrow-back' style={{color:'rgb(192,0,0)',fontWeight:'bold',fontSize:35,alignItems:'center'}}></Icon>
                <Text style={{fontSize:18,color:'rgb(192,0,0)',fontFamily:"Lato-Bold",textTransform:"capitalize"}}> Back</Text>
              </Button>
            </TouchableHighlight>
          </Left>
        </Header>
        <ScrollView contentContainerStyle={{flex:1}}>
          <KeyboardAvoidingView style={{flex: 1, margin:15 }} behavior="padding" enabled>
            <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
                <Form style={{alignItems:'center',width:'100%'}}>
                  <Item style={{borderBottomColor:'black',marginTop:20, width:'100%'}}>
                    <Icon active name='lock' />
                    <TextInput
                      placeholder='Password *'
                      style={styles.input}
                    />
                  </Item>
                  <Item style={{borderBottomColor:'black',marginTop:20, width:'100%'}}>
                    <Icon active name='lock' />
                    <TextInput
                      secureTextEntry={true}
                      placeholder='Confirm Password *'
                      style={styles.input}
                    />
                  </Item>
                  <View style={{alignItems:'center', justifyContent:'center',}}>
                    <Button block rounded style={styles.button}>
                        <Text style={styles.text} onPress={()=> this.props.navigation.navigate('Login')}>Set Password</Text>
                    </Button>
                  </View>
                </Form>
              </View>
          </KeyboardAvoidingView>
        </ScrollView>
        <Footers/>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "rgb(192,0,0)",
    height: 40,
    marginTop: 40,
    width:200
  },
  text: {
    color: 'white',
    fontSize:20,
    fontFamily: 'Lato-Bold',
    letterSpacing: 1
  },
  forgotPasswordText: {
    color: '#555', 
    textAlign: 'right',
    marginTop: 10,
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
  input:{
    fontFamily: 'Roboto-Medium',
    fontSize: 15
  }
});