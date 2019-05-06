import React, { Component } from 'react'
import { View, Image } from 'react-native'

export default class Logo extends Component {
    render() {
        return (
            <View style={{alignItems:'center',flex:1, justifyContent:'center'}}>
                <Image source={require('../../assets/images/PropYantra.png')} style={{resizeMode:'contain',width:350, marginBottom:20}}></Image>
            </View>
        )
    }
}