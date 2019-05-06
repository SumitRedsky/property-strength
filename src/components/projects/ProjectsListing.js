import React, {Component} from 'react';
import { StyleSheet, View, Image, StatusBar, TouchableHighlight, FlatList } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import DropdownAlert from 'react-native-dropdownalert';
import { Header, Item, Left, Input, Container, Button, Right, Body, Icon, Content, Text, Card } from 'native-base';

// import TopHeader from '../TopHeader';
import { get_remote_data } from '../../services/serverEndpoints';

export default class ProjectsListing extends Component{
  static navigationOptions = {
      header:null
  };

  constructor(props) {
    super(props);
    this.state = {
      token: '',
      data: ''
    }
  }

  componentDidMount() {
    AsyncStorage.getItem('token').then((result) => {
        this.setState({token: result});
        this.getData();
    });
  }

  getData = async () => {
    try {
      const { navigation } = this.props;
      const developer_id = navigation.getParam('developer_id');
      const header = {'Authorization': `Bearer ${JSON.parse(this.state.token)}`};
      const responseData = await get_remote_data('GET', `/projects/get-projects-by-developer/${developer_id}`, null, header);
      if (responseData['status'] === 200) {
        this.setState({ data: responseData['data']['developer'][0] });
      } else {
        throw Error(responseData["message"]);
      }
    } catch(e) {
      this.dropdown.alertWithType('error', 'Property Strength', e.message);
    }
  };

  render() {
    return (
      <Container>
        <Header style={{backgroundColor: '#fff', borderBottomColor: '#e2e2e2', borderBottomWidth: 0.5}}>
          <StatusBar backgroundColor="#d52331" translucent={false} />
          <Left style={{flex: 1.5}}>
            <TouchableHighlight style={{alignItems: 'center'}}>
              <Button
                transparent
                style={{alignItems: 'center', justifyContent: 'center'}}
                onPress={() => {
                  this.props.navigation.navigate('Home')
                }}
              >
                <Icon name='ios-arrow-back' style={{ color: 'rgb(192,0,0)', fontWeight: 'bold', fontSize: 35, alignItems: 'center' }}></Icon>
                <Text style={{ fontSize: 18, color: 'rgb(192,0,0)', fontFamily: "Lato-Bold", textTransform: "capitalize" }}>Back</Text>
              </Button>
            </TouchableHighlight>
          </Left>
          <Body style={{height: 40, flex: 4}}>
            <Item searchBar rounded style={{backgroundColor: '#e2e2e2', height: 40,}}>
              <Icon name="ios-search"/>
              <Input placeholder="Search" style={{color: 'white'}}/>
            </Item>
          </Body>
          {/* <Right style={{flex: 1}}>
            <Text
              onPress={() => this.props.navigation.navigate('Filter')}
              style={{fontSize: 20, fontFamily: 'Lato-Bold'}}>Filter
            </Text>
          </Right> */}
        </Header>
        <Content style={{backgroundColor: '#e2e2e2'}}>
          {/* <TopHeader/> */}
          <FlatList
            data={this.state.data.projects}
            keyExtractor={(item, index) => item._id}
            renderItem={({ item }) => {
              var imageURL;
              item.pictures.forEach(pic => {
                if (pic.is_main) imageURL = pic.url;
              });
              return (
                <Card style={{marginTop: 5}}>
                  <TouchableHighlight onPress={() => this.props.navigation.navigate('ProjectView', { project_id: item._id })}>
                    <Image
                      source={{ uri: imageURL }}
                      style={{width: '100%', height: 200, borderRadius: 4, position: 'relative'}}/>
                  </TouchableHighlight>
                  <Icon name="heart" style={styles.icon}></Icon>
                  <View style={{ position: 'absolute', width: '100%', backgroundColor: 'black', opacity: 0.4, bottom: 0, left: 0, top: 140 }}></View>
                  <View style={{position: 'absolute', bottom: 10, left: 10}}>
                    <Text style={styles.sliderText}>{item.project_name.substring(0, 30)}</Text>
                    <Text style={styles.sliderText1}>{item.address.substring(0, 40)}</Text>
                  </View>
                </Card>
              );
            }}
          />
        </Content>
        <DropdownAlert ref={ref => this.dropdown = ref} />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  sliderText: {
    color: 'white',
    fontSize:18,
    letterSpacing:1,
    fontFamily:"Lato-Bold"
  },
  sliderText1: {
    color: 'white',
    fontSize:15,
    letterSpacing:1,
    fontFamily:"Roboto-Medium"
  },
  icon: {
    position: 'absolute',
    top:10,
    right:10,
    color:'white',
    fontSize:35
  }
});