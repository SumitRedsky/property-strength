import React, { Component } from 'react';
import { StyleSheet, Text, StatusBar, Linking, Image, View, Dimensions } from 'react-native';
import { Footer, Button, FooterTab, Fab } from 'native-base';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons'
import ActionButton from 'react-native-action-button';

const { height, width } = Dimensions.get('window');

export default class Footers extends Component {
  static navigationOptions = {
    header: null
  };
  constructor(props) {
    super(props)
    this.state = {
      active: false
    };
  }
  render() {
    return (
      // <View>
      //   <Fab
      //     active={this.state.active}
      //     direction="left"
      //     containerStyle={{ marginTop: 20 }}
      //     style={{ backgroundColor: 'rgb(192,0,0)', }}
      //     position="bottomRight"
      //     onPress={() => this.setState({ active: !this.state.active })}>
      //     <Icon name="gesture-tap" style={{ fontSize: 40 }}></Icon>
      //     <Button style={{ backgroundColor: 'rgb(192,0,0)' }}>
      //       <Icon name="wechat" style={{ fontSize: 25, color: 'white' }} />
      //     </Button>
      //     <Button style={{ backgroundColor: '#25d366' }}>
      //       <Icon name="whatsapp" style={{ fontSize: 20, color: 'white' }} />
      //     </Button>
      //     <Button disabled style={{ backgroundColor: 'rgb(192,0,0)' }}>
      //       <Icon name="email" style={{ fontSize: 20, color: 'white' }} />
      //     </Button>
      //   </Fab>
      // </View>
      <ActionButton style={{ marginLeft: width * 0.7, marginTop: height * 0.4, transform: [{ rotate: '-90deg' }] }} position={"right"} autoInactive active={this.state.active} size={width * 0.15} spacing={width * 0.03} onPress={() => this.setState({ active: !this.state.active })} buttonColor="rgba(231,76,60,1)" >
        <ActionButton.Item buttonColor='rgb(192,0,0)' size={width * 0.1}>
          <Icon name="email" style={{ fontSize: 20, color: 'white', transform: [{ rotate: '90deg' }] }} />
        </ActionButton.Item>
        <ActionButton.Item buttonColor='rgb(192,0,0)' size={width * 0.1}>
          <Icon name="whatsapp" style={{ fontSize: 20, color: 'white', transform: [{ rotate: '90deg' }] }} />
        </ActionButton.Item>
        <ActionButton.Item buttonColor='rgb(192,0,0)' size={width * 0.1} onPress={() => alert("wechat tapped!")}>
          <Icon name="wechat" style={{ fontSize: 20, color: 'white', transform: [{ rotate: '90deg' }] }} />
        </ActionButton.Item>
      </ActionButton>
    )
  }
}