import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  Text,
  View,
  Dimensions,
  TouchableHighlight,
  TouchableOpacity,
  FlatList
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { Card, Container, Content } from 'native-base'
import Carousel from 'react-native-snap-carousel';
import { withNavigation } from 'react-navigation';
import DropdownAlert from 'react-native-dropdownalert';

const horizontalMargin = 5;
const slideWidth = 200;

const sliderWidth = Dimensions.get('window').width;
const itemWidth = slideWidth + horizontalMargin * 2;
const itemHeight = 100;

import { get_remote_data } from '../../services/serverEndpoints';

export class ProjectSlider extends Component {
  static navigationOptions = {
    header: null,
  }

  constructor(props) {
    super(props);
    this.state = {
      errors: [],
      token: '',
      data: null
    }
    this.props = props;
    this._carousel = {};
  }

  componentDidMount() {
    AsyncStorage.getItem('token').then((result) => {
      this.setState({ token: result });
      this.get_data();
    });
  }

  get_data = async () => {
    try {
      let header = { 'Authorization': `Bearer ${JSON.parse(this.state.token)}` };
      let responseData = await get_remote_data('GET', '/projects', null, header);
      if (responseData['status'] === 200) {
        let data = responseData['data']['developers'];
        this.setState({ data: data });
      } else {
        throw Error(responseData['message']);
      }
    } catch (e) {
      this.dropdown.alertWithType('error', 'Property Strength', e.message);
    }
  };

  _renderItem = ({ item, index }) => {
    var imageURL;
    item.pictures.forEach(pic => {
      if (pic.is_main) imageURL = pic.url;
    });
    return (
      <View style={{ paddingHorizontal: horizontalMargin, width: itemWidth, height: itemHeight }}>
        <TouchableHighlight
          underlayColor={'transparent'}
          onPress={() => this.props.navigation.navigate('ProjectView', { project_id: item._id })}
        >
          <Image
            source={{ uri: imageURL }}
            style={{ position: 'relative', resizeMode: 'stretch', height: '100%', width: '100%', }}
          />
        </TouchableHighlight>
        <TouchableOpacity style={{
          position: 'absolute',
          width: '100%',
          backgroundColor: 'black',
          opacity: 0.3,
          bottom: 0,
          left: 5,
          top: 60
        }}>
        </TouchableOpacity>
        <View style={{ position: 'absolute', width: '100%', color: 'white', bottom: 5, left: 10 }}>
          <Text style={styles.sliderText}>{item.project_name.substring(0, 19)}</Text>
          <Text style={styles.sliderText1}>{item.address.substring(0, 24)}</Text>
        </View>
      </View>
    );
  }

  render() {
    return (
      <Container style={{ height: "100%" }} keyboardShouldPersistTaps={'handled'}>
        <Content style={{ height: "100%", backgroundColor: '#e2e2e2' }}>
          <FlatList
            data={this.state.data}
            keyExtractor={(item, index) => item._id}
            renderItem={({ item }) => {
              if (item.projects.length > 0) {
                return (
                  <Card style={{ paddingBottom: 5, marginBottom: 0 }}>
                    <View style={{ flexDirection: 'row', marginLeft: 10, marginRight: 10 }}>
                      <Text style={styles.builderName}>{item.developer_name}</Text>
                      <Text
                        style={styles.builderName1}
                        onPress={() => { this.props.navigation.navigate('ProjectsListing', { developer_id: item._id }); }}
                      >View all
                      </Text>
                    </View>
                    <Carousel
                      ref={(c) => {
                        this._carousel = c;
                      }}
                      data={item.projects}
                      renderItem={this._renderItem.bind(this)}
                      sliderWidth={sliderWidth}
                      itemWidth={itemWidth}
                      activeSlideAlignment={'start'}
                      inactiveSlideOpacity={1}
                      inactiveSlideScale={1}
                    />
                  </Card>
                );
              }
            }}
          />
        </Content>
        <DropdownAlert ref={ref => this.dropdown = ref} />
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  builderName: {
    marginTop: 0,
    marginBottom: 0,
    color: 'black',
    width: '50%',
    letterSpacing: 1,
    fontFamily: "Lato-Bold"
  },
  builderName1: {
    marginTop: 0,
    textAlign: 'right',
    color: 'rgb(192,0,0)',
    width: '50%',
    letterSpacing: 1,
    fontFamily: "Roboto-Medium"
  },
  sliderText: {
    color: 'white',
    fontSize: 14,
    letterSpacing: 1,
    fontFamily: "Lato-Bold",
    textTransform: "capitalize"
  },
  sliderText1: {
    color: 'white',
    fontSize: 12,
    letterSpacing: 1,
    fontFamily: "Roboto-Medium"
  },
});

export default withNavigation(ProjectSlider);