import React, {Component} from 'react';
import {Text,processColor, StyleSheet, View} from 'react-native';
import {  Button,} from 'native-base';


export default class Booking extends Component {
    static navigationOptions = {
        headerTitle: 'Book Property',
      }

    render () {
        return (
            <View style={{flex:1, justifyContent:'center'}}>
                <Button rounded block style={styles.button} onPress={() => this.props.navigation.navigate('Cheque')} >
                   <Text style={styles.text}>By Cheque</Text>
                </Button>
                <Button rounded  block style={styles.button} onPress={() => this.props.navigation.navigate('OnlinePayment')}> 
                    <Text style={styles.text}>Payment Gateway</Text>
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
        fontWeight:'bold',
        fontSize:20
      },
});