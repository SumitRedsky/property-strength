import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, Image } from 'react-native';
import { Header, Left, Container, Button, Body, Item, Icon, Content, Input } from 'native-base';

import ProjectSlider from './ProjectSlider';
// import TopHeader from './TopHeader';
// import { get_remote_data_with_get } from '../services/serverEndpoints';

export default class Home extends Component {
  static navigationOptions = {
    header: null,
    // drawerIcon: ({ tintColor }) =>(
    //   <Image source={require('../../../assets/images/user.png')} style={{height:24, width:24}}/>
    // )
  };

  render() {
    return (
      <Container keyboardShouldPersistTaps={'handled'}>
        <Header style={{ backgroundColor: '#fff', borderBottomColor: '#e2e2e2', borderBottomWidth: 0.5, alignItems: 'center' }}>
          <StatusBar backgroundColor="#d52331" translucent={false} />
          <Left style={{ flex: 1 }}>
            <Button transparent>
              <Icon name='menu' style={{ color: 'black', fontSize: 30, fontWeight: 'bold' }} onPress={() => this.props.navigation.toggleDrawer()} />
            </Button>
          </Left>
          <Body style={{ height: 40, flex: 4 }}>
            <Item searchBar rounded style={{ backgroundColor: '#e2e2e2', height: 40, }}>
              <Icon name="ios-search" />
              <Input placeholder="Search" style={{ color: 'white' }} />
            </Item>
          </Body>
        </Header>
        <Content style={{ backgroundColor: '#e2e2e2' }} >
          {/* <TopHeader /> */}
          <View>
            <ProjectSlider />
          </View>
        </Content>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  sliderText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  },
  sliderText1: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'normal'
  },
  builderName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    color: 'black',
    width: '50%',
    letterSpacing: 0.5
  },
  builderName1: {
    fontSize: 15,
    fontWeight: 'normal',
    marginTop: 20,
    textAlign: 'right',
    color: 'black',
    width: '50%',
    letterSpacing: 0.5
  }
});
