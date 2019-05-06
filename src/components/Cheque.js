import React, {Component} from 'react';
import {Text,processColor, StyleSheet, View, TextInput} from 'react-native';
import {  Button, Picker, Icon, Item} from 'native-base';


export default class Cheque extends Component {
    static navigationOptions = {
        headerTitle: 'Payment',
      }

      constructor(props) {
        super(props);
        this.state = {
          selected: "key0"
        };
      }
      onValueChange(value) {
        this.setState({
          selected: value
        });
      }

    render () {
        return (
            <View style={{margin:15, flex:1, justifyContent:'center'}}>
              <Item style={{marginTop:20, borderBottomColor:'black',}}> 
                  <TextInput placeholder='Name.' style={styles.input}/>
              </Item>
              <Item style={{marginTop:20, borderBottomColor:'black'}}>
                  <TextInput placeholder='Property Name' style={styles.input}/>
              </Item>
              <Item style={{marginTop:20, borderBottomColor:'black',}}> 
                  <TextInput placeholder='Price' style={styles.input}/>
              </Item>
              <Item style={{marginTop:20, borderBottomColor:'black'}}>
                  <TextInput placeholder='Token Money'  style={styles.input}/>
              </Item>
              <View style={{marginTop:20,borderBottomWidth:1, borderBottomColor: 'black'}}>
                <Picker
                        mode="dropdown"
                        iosIcon={<Icon name="arrow-down" />}
                        style={styles.input}
                        selectedValue={this.state.selected}
                        onValueChange={this.onValueChange.bind(this)}>
                        <Picker.Item label="Select Bank" value="key0" style={styles.input}/>
                        <Picker.Item label="SBI" value="key1" style={styles.input}/>
                        <Picker.Item label="HDFC" value="key2" style={styles.input}/>
                        <Picker.Item label="ICICI" value="key3" style={styles.input}/>
                        <Picker.Item label="Axis Bank" value="key4" style={styles.input}/>
                    </Picker>
                </View>
                <Item style={{marginTop:20, borderBottomColor:'black',}}> 
                    <TextInput placeholder='Account No.' style={styles.input}/>
                </Item>
                <Item style={{marginTop:20, borderBottomColor:'black'}}>
                    <TextInput placeholder='Cheque No.'  style={styles.input}/>
                </Item>
                <Button rounded  block style={styles.button} > 
                    <Text style={styles.text}>Submit</Text>
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