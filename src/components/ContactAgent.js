import React, {Component} from 'react';
import {Text,processColor, StyleSheet, View, TextInput} from 'react-native';
import {  Button, Item, H3, Textarea} from 'native-base';


export default class ContactAgent extends Component {
    static navigationOptions = {
        headerTitle: 'Get Details',
      }

    render () {
        return (
            <View style={{flex:1, justifyContent:'center'}}>
            
                <H3 style={{fontFamily:'Lato-Bold',letterSpacing:1,padding:15}}>Contact For more info</H3>
                <Text style={{fontSize:16,fontFamily:'Roboto-Medium',letterSpacing:1,padding:15, paddingTop:0, color:'grey'}}>Your info will go to local agents who can answer your questions</Text>
                <Item style={{marginRight:15,marginLeft:15,marginTop:15,borderBottomColor:'black',}}>
                    <TextInput  placeholder='Name' style={styles.input} />
                </Item>
                <Item style={{marginRight:15,marginLeft:15,marginTop:15,borderBottomColor:'black',}}>
                    <TextInput placeholder='Email' style={styles.input} />
                </Item>
                <Item style={{marginRight:15,marginLeft:15,marginTop:15,borderBottomColor:'black'}}>
                    <TextInput placeholder='Mobile No.' keyboardType="phone-pad" style={styles.input}/>
                </Item>
                <Item style={{marginRight:15,marginLeft:15,marginTop:15,borderBottomColor:'black',width:'100%', borderBottomWidth:1}}>
                    <Textarea rowSpan={5}  placeholder="Message" style={styles.input} />
                </Item>
                <Button block rounded style={styles.button}>
                   <Text style={styles.text}>Contact Agent</Text>
                </Button>
            </View>
       
      )
  }
}

const styles =  StyleSheet.create({
    button: {
        backgroundColor: "rgb(192,0,0)",
        height: 50,
        marginTop:20,
        marginLeft:15,
        marginRight:15,
      },
      text: {
        color:'white',
        fontFamily:'Lato-Bold',
        fontSize:20
      },
      input:{
        fontSize:15,
        fontFamily:'Roboto-Medium',
        letterSpacing:1,
        width:'100%'
      }
});