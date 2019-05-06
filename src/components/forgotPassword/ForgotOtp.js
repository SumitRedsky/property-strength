import React, {Component} from 'react';
import { StyleSheet, Text, View, StatusBar, KeyboardAvoidingView, TouchableHighlight, TextInput } from 'react-native';
import { Container, Form, Button, Header, Left, Icon, Item } from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';
import Footers from '../Footers';


export default class ForgotOtp extends Component {
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
              <Button transparent style={{alignItems:'center', justifyContent:'center'}} onPress={()=> {this.props.navigation.goBack()}}>
                <Icon name='ios-arrow-back' style={{color:'rgb(192,0,0)',fontWeight:'bold',fontSize:35,alignItems:'center'}}></Icon>
                <Text style={{fontSize:18,color:'rgb(192,0,0)',fontFamily:"Lato-Bold",textTransform:"capitalize"}}> Back</Text>
              </Button>
            </TouchableHighlight>
          </Left>
        </Header>
        <ScrollView contentContainerStyle={{flex:1}}>
          <KeyboardAvoidingView style={{flex: 1, margin:15 }} behavior="padding" enabled>
            <View style={{flex:1, justifyContent: 'center', alignItems: 'center' }}>
              <StatusBar backgroundColor="#d52331" />
              <Text style={{color:'#555',textAlign:'center', letterSpacing:1, fontSize:17, fontFamily: "Roboto-Medium"}}>Enter the 6 digit OTP sent to you at</Text>
              <Text style={{color:'#555',textAlign:'center', fontFamily: "Lato-Bold", letterSpacing:1,fontSize:17}}>+9199999999</Text>
              <Form style={{alignItems:'center',width:'100%'}}>
                <Item style={{marginTop:20, marginBottom: 20, borderBottomColor:'black', width:'100%'}}>
                  <TextInput placeholder='OTP' maxLength={6} keyboardType="phone-pad" style={styles.input}/>
                </Item>
                <View style={{alignItems:'center', justifyContent:'center',}}>
                    <Button rounded style={styles.button} onPress={()=> this.props.navigation.navigate('ForgotPassword')}>
                       <Text style={styles.text}>Submit</Text>
                    </Button>
                </View>
              </Form>
              <Text style={{color:'rgb(192,0,0)', textAlign:'center',marginTop:30, letterSpacing:1,fontFamily: "Lato-Bold"}} onPress={()=> {this.props.navigation.goBack()}}>EDIT MOBILE NUMBER</Text>
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
    letterSpacing: 1,
    width:'100%',
  }
});