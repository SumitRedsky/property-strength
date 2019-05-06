import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons'
import { Footer, Fab, Button } from 'native-base';
import { withNavigation } from 'react-navigation';
import { Dimensions, View } from 'react-native'
import ActionButton from 'react-native-action-button';

const { height, width } = Dimensions.get('window');

class ProjectFooter extends Component {

  static navigationOptions = {
    header: null,
  }

  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
  }

  render() {
    return (
      <ActionButton style={{ marginLeft: width * 0.7, marginTop: height * 0.4, transform: [{ rotate: '-90deg' }] }} position={"right"} autoInactive active={this.state.active} size={width * 0.15} spacing={width * 0.03} onPress={() => this.setState({ active: !this.state.active })} buttonColor="rgba(231,76,60,1)" >
        <ActionButton.Item buttonColor='rgb(192,0,0)' size={width * 0.1}>
          <Icon name="book" style={{ fontSize: 20, color: 'white', transform: [{ rotate: '90deg' }] }} />
        </ActionButton.Item>
        <ActionButton.Item buttonColor='rgb(192,0,0)' size={width * 0.1}>
          <Icon name="email" style={{ fontSize: 20, color: 'white', transform: [{ rotate: '90deg' }] }} />
        </ActionButton.Item>
        <ActionButton.Item buttonColor='rgb(192,0,0)' size={width * 0.1}>
          <Icon name="contact-mail" style={{ fontSize: 20, color: 'white', transform: [{ rotate: '90deg' }] }} />
        </ActionButton.Item>
        <ActionButton.Item buttonColor='rgb(192,0,0)' size={width * 0.1}>
          <Icon name="phone-in-talk" style={{ fontSize: 20, color: 'white', transform: [{ rotate: '90deg' }] }} />
        </ActionButton.Item>
        <ActionButton.Item buttonColor='#25d366' size={width * 0.1}>
          <Icon name="whatsapp" style={{ fontSize: 20, color: 'white', transform: [{ rotate: '90deg' }] }} />
        </ActionButton.Item>
        <ActionButton.Item buttonColor='#rgb(192,0,0)' size={width * 0.1} onPress={() => alert("wechat tapped!")} >
          <Icon name="wechat" style={{ fontSize: 20, color: 'white', transform: [{ rotate: '90deg' }] }} />
        </ActionButton.Item>
      </ActionButton>
    )
  }
}

export default withNavigation(ProjectFooter);  