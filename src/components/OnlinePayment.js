import React, {Component} from 'react';
import {Text,processColor, StyleSheet, View, TextInput} from 'react-native';
import {  Button, Picker, Icon, Item} from 'native-base';


export default class OnlinePayment extends Component {
    static navigationOptions = {
        headerTitle: 'Payment',
      }

    render () {
        return (
            <View style={{margin:15, flex:1, justifyContent:'center'}}>
                <Item style={{marginTop:20, borderBottomColor:'black',}}> 
                    <TextInput placeholder='Name.' style={styles.input}/>
                </Item>
                <Item style={{marginTop:20, borderBottomColor:'black'}}>
                    <TextInput placeholder='Property Name'  style={styles.input}/>
                </Item>
                <Item style={{marginTop:20, borderBottomColor:'black',}}> 
                    <TextInput placeholder='Price' style={styles.input}/>
                </Item>
                <Item style={{marginTop:20, borderBottomColor:'black'}}>
                    <TextInput placeholder='Token Money' style={styles.input}/>
                </Item>
                <Button rounded  block style={styles.button} > 
                    <Text style={styles.text}>Pay Now</Text>
                </Button>
            </View>
       
      )
  }
}

const styles =  StyleSheet.create({
    button: {
        backgroundColor: "rgb(192,0,0)",
        height: 50,
        marginTop:40,
        marginLeft:15,
        marginRight:15,
      },
      text: {
        color:'white',
        fontFamily:'Lato-Bold',
        letterSpacing:1,
        fontSize:20
      },
      input:{
          fontFamily:'Roboto-Medium',
          fontSize:15
      }
});