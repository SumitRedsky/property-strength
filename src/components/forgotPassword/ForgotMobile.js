import React, {Component} from 'react';
import { StyleSheet, Text, View, StatusBar, KeyboardAvoidingView, TouchableHighlight } from 'react-native';
import { Container, Form, Button, Header,Left,Icon } from 'native-base';
import PhoneInput from 'react-native-phone-input';
import { ScrollView } from 'react-native-gesture-handler';
import Footers from '../Footers';


export default class ForgotMobile extends Component {
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
        <ScrollView contentContainerStyle={{ flex:1 }}>
          <KeyboardAvoidingView style={{ flex: 1, margin: 15, marginTop: 0 }} behavior="padding" enabled>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <Form style={{alignItems:'center',width:'100%'}}>
                <View>
                  <PhoneInput
                    initialCountry='in'
                    style={{
                      marginTop:20,
                      marginBottom: 20,
                      borderBottomWidth:1,
                      height:48,
                      fontSize:20,
                      width:'100%'
                    }}
                    ref={ref => { this.phone = ref; }}
                  />
                </View>
                <Text style={{color: '#555', textAlign: 'left',fontFamily: "Roboto-Medium", letterSpacing: 1 }}>OTP verification will be sent. Message and data rates may apply.</Text>
                <View style={{alignItems:'center', justifyContent:'center',}}>
                  <Button rounded  style={styles.button} onPress={() => this.props.navigation.navigate('ForgotOtp')}>
                    <Text style={styles.text}>Next</Text>
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
  input:{
    width: '80%',
    fontFamily: 'Roboto-Medium',
    fontSize: 15,
    letterSpacing: 1
  }
});