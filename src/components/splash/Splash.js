import React, { Component } from "react";
import {
    View,
    StatusBar,
    StyleSheet
} from "react-native";
import Logo from '../Logo';
import AsyncStorage from '@react-native-community/async-storage';

export default class Splash extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.wrapper}>
                <StatusBar barStyle="light-content" backgroundColor="#3498db" />
                <View style={styles.logoContainer}>
                    <Logo />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: "white",
        flex: 1,
        alignItems: "center"
    },
    logoContainer: {
        alignItems: "center",
        justifyContent: "center",
        flex: 1
    },
    spinnerTextStyle: {
        color: "#FFF"
    }
});