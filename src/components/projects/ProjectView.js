import React, { Component } from 'react';
import { StyleSheet, Image, Text, View, StatusBar, Dimensions } from 'react-native';
import { H1, Container, Header, Content, Card, H3, Footer, FooterTab, } from 'native-base';
import { Button, Tab, Tabs, ScrollableTab, TabHeading, Fab } from 'native-base';
import Carousel from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons'
import ProjectFooter from '../ProjectFooter';

const { height, width } = Dimensions.get("window");

export default class ProjectView extends Component {
  static navigationOptions = {
    header: null,
  }

  constructor(props) {
    super(props);
    this.state = {
      errors: [],
      data: ''
    }
    this.props = props;
    this._carousel = {};
  }

  init() {
    this.state = {
      videos: [
        {
          id: "WpIAc9by5iU",
          image: require('../../../assets/images/prop1.jpg'), // "http://localhost:8081/images/prop1.jpg",
          title: "Dlf Avenue Park",
        }, {
          id: "sNPnbI1arSE",
          image: require('../../../assets/images/prop2.jpg'),
          title: "Dlf Avenue Park",
        }, {
          id: "VOgFZfRVaww",
          image: require('../../../assets/images/prop3.jpg'),
          title: "Dlf Avenue Park",
        },
        {
          id: "VOgFZfRVawv",
          image: require('../../../assets/images/prop1.jpg'),
          title: "Dlf Avenue Park",
        }
      ]
    };
    // console.log("ThumbnailCarousel Props: ", this.props)
  }

  handleSnapToItem(index) {
    //  console.log("snapped to ", index)
  }

  _renderItem = ({ item, index }) => {
    // console.log("rendering,", index, item)
    return (
      <View style={{ width: "100%", height: 250 }}>
        <Image source={item.image} style={{ height: 250, position: 'relative', resizeMode: "contain", width: '100%' }} />
        <Icon name="arrow-left" style={styles.icon1} onPress={() => this.props.navigation.goBack()}></Icon>
        <Icon name="camera" style={styles.icon}><Text style={{ fontFamily: "Roboto-Medium" }}> 1/12</Text></Icon>
        <Button style={styles.buttonNew}><Text style={{ color: 'white', fontSize: 15, fontFamily: "Lato-Bold", letterSpacing: 1 }}>New</Text></Button>
        <View style={{ position: 'absolute', bottom: 0, width: '100%', backgroundColor: 'black' }}>
          <Text style={styles.sliderText}>{item.title}</Text>
        </View>
      </View>
    );
  }

  render() {
    return (
      <Container>
        <Header style={{ height: 250, width: "100%", paddingLeft: 0, paddingRight: 0, backgroundColor: 'white' }}>
          <StatusBar backgroundColor="transparent" translucent={true} />
          <Carousel
            ref={(c) => { this._carousel = c; }}
            data={this.state.videos}
            renderItem={this._renderItem.bind(this)}
            // onSnapToItem={this.handleSnapToItem.bind(this)}
            sliderWidth={width}
            itemWidth={width}
            activeSlideAlignment={'start'}
            enableMomentum={true}
          />
        </Header>
        <Content style={{ backgroundColor: '#e2e2e2' }}>
          <Card>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20, marginRight: 15, marginLeft: 15 }}>
              <View>
                <Text style={{ fontFamily: "Roboto-Medium" }}>Rs. <H3 style={{ letterSpacing: 1, fontFamily: "Lato-Bold" }}>2,02,0000</H3></Text>
              </View>

              <View style={{ flexDirection: 'row' }}>
                <Icon name="share-variant" style={{ marginRight: 15, fontSize: 25, color: 'black' }}></Icon>
                <Icon name="heart-outline" style={{ marginRight: 15, fontSize: 25, color: 'black' }}></Icon>
                <Icon name="dots-vertical" style={{ fontSize: 25, color: 'black' }}></Icon>
              </View>
            </View>
            <Text style={{ letterSpacing: 1, color: '#555', marginLeft: 15, fontFamily: "Roboto-Medium" }}>Sector 40, Gurgaon</Text>
            <View style={{ marginTop: 15, paddingBottom: 15, flexDirection: 'row', justifyContent: 'space-around', borderBottomWidth: 1, borderBottomColor: '#e4e4e4' }}>
              <View style={{ width: width * 0.3 }}>
                <Text style={{ textAlign: 'center', fontSize: 15, color: 'black', fontFamily: "Lato-Bold", letterSpacing: 1 }}>Unit Available</Text>
                <Text style={{ textAlign: 'center', fontFamily: "Roboto-Medium", letterSpacing: 1 }}>300</Text>
              </View>
              <View style={{ width: width * 0.3 }}>
                <Text style={{ textAlign: 'center', fontSize: 15, color: 'black', fontFamily: "Lato-Bold", letterSpacing: 1 }}>Landmark</Text>
                <Text style={{ textAlign: 'center', fontFamily: "Roboto-Medium", letterSpacing: 1 }}>Dawarka ExpressWay</Text>
              </View>
              {/* <View>
                <Text style={{textAlign:'center',fontSize:20, color:'black'}}>1,676</Text>
                <Text >Sq.ft</Text>
              </View> */}
              <View style={{ width: width * 0.3 }}>
                <Text style={{ textAlign: 'center', fontSize: 15, color: 'black', fontFamily: "Lato-Bold", letterSpacing: 1 }}>Area</Text>
                <Text style={{ textAlign: 'center', fontFamily: "Roboto-Medium", letterSpacing: 1 }}>40 Acres</Text>
              </View>
            </View>
          </Card>
          <Card>
            <H3 style={{ fontFamily: "Lato-Bold", letterSpacing: 1, padding: 15 }}>Overview</H3>
            <Text style={styles.text}>loremLorem ipsum dolor sit amet lorem Lorem ipsum dolor sit amet lorem Lorem ipsum dolor sit amet loremLorem ipsum dolor sit amet loremLorem ipsum dolor sit amet loremLorem ipsum dolor sit amet lorem</Text>
          </Card>
          <Card>
            <H3 style={{ fontWeight: '600', padding: 15 }}>Master Plan</H3>
            <View style={{ padding: 10, justifyContent: 'center', alignItems: 'center' }}>
              <Image source={require('../../../assets/images/masterPlan.jpg')} style={{ width: '100%', height: 300 }}></Image>
            </View>

          </Card>
          <Card>
            <H3 style={{ fontWeight: '600', padding: 15 }}>Floor Plans</H3>
            <Tabs renderTabBar={() => <ScrollableTab />} tabBarUnderlineStyle={{ backgroundColor: "red" }} >
              <Tab heading={<TabHeading style={{ backgroundColor: "#fff" }}><H3 style={{ fontSize: 18, fontFamily: "Lato-Bold", letterSpacing: 1 }}>3 BHK</H3><Text style={{ fontFamily: "Roboto-Medium", letterSpacing: 1 }}> 1000 Sq.ft</Text></TabHeading>} style={styles.tabss}>
                <Image source={require('../../../assets/images/floor1.jpg')} style={styles.tabImage}></Image>
                <Text style={styles.moreDetails} onPress={() => this.props.navigation.navigate('ProjectMoreDetails')}>MORE DETAILS</Text>
              </Tab>
              <Tab heading={<TabHeading style={{ backgroundColor: "#fff" }}><H3 style={{ fontSize: 18, fontFamily: "Lato-Bold", letterSpacing: 1 }}>3 BHK</H3><Text style={{ fontFamily: "Roboto-Medium", letterSpacing: 1 }}> 1200 Sq.ft</Text></TabHeading>} style={styles.tabss}>
                <Image source={require('../../../assets/images/floor2.jpg')} style={styles.tabImage}></Image>
                <Text style={styles.moreDetails} onPress={() => this.props.navigation.navigate('ProjectMoreDetails')}>MORE DETAILS</Text>
              </Tab>
              <Tab heading={<TabHeading style={{ backgroundColor: "#fff" }}><H3 style={{ fontSize: 18, fontFamily: "Lato-Bold", letterSpacing: 1 }}>3 BHK</H3><Text style={{ fontFamily: "Roboto-Medium", letterSpacing: 1 }}> 1500 Sq.ft</Text></TabHeading>} style={styles.tabss}>
                <Image source={require('../../../assets/images/floor3.jpg')} style={styles.tabImage}></Image>
                <Text style={styles.moreDetails} onPress={() => this.props.navigation.navigate('ProjectMoreDetails')}>MORE DETAILS</Text>
              </Tab>
              <Tab heading={<TabHeading style={{ backgroundColor: "#fff" }}><H3 style={{ fontSize: 18, fontFamily: "Lato-Bold", letterSpacing: 1 }}>2 BHK</H3><Text style={{ fontFamily: "Roboto-Medium", letterSpacing: 1 }}> 1100 Sq.ft</Text></TabHeading>} style={styles.tabss}>
                <Image source={require('../../../assets/images/floor1.jpg')} style={styles.tabImage}></Image>
                <Text style={styles.moreDetails} onPress={() => this.props.navigation.navigate('ProjectMoreDetails')}>MORE DETAILS</Text>
              </Tab>
              <Tab heading={<TabHeading style={{ backgroundColor: "#fff" }}><H3 style={{ fontSize: 18, fontFamily: "Lato-Bold", letterSpacing: 1 }}>2 BHK</H3><Text style={{ fontFamily: "Roboto-Medium", letterSpacing: 1 }}> 1000 Sq.ft</Text></TabHeading>} style={styles.tabss}>
                <Image source={require('../../../assets/images/floor2.jpg')} style={styles.tabImage}></Image>
                <Text style={styles.moreDetails} onPress={() => this.props.navigation.navigate('ProjectMoreDetails')}>MORE DETAILS</Text>
              </Tab>
              <Tab heading={<TabHeading style={{ backgroundColor: "#fff" }}><H3 style={{ fontSize: 18, fontFamily: "Lato-Bold", letterSpacing: 1 }}>2 BHK</H3><Text style={{ fontFamily: "Roboto-Medium", letterSpacing: 1 }}> 800 Sq.ft</Text></TabHeading>} style={styles.tabss}>
                <Image source={require('../../../assets/images/floor3.jpg')} style={styles.tabImage}></Image>
                <Text style={styles.moreDetails} onPress={() => this.props.navigation.navigate('ProjectMoreDetails')}>MORE DETAILS</Text>
              </Tab>
            </Tabs>
          </Card>
          <Card>
            <H3 style={{ fontFamily: "Lato-Bold", letterSpacing: 1, padding: 15 }}>Amenities</H3>
            <View style={{ marginTop: 15, paddingBottom: 15, flexDirection: 'row', justifyContent: 'space-around' }}>
              <View style={{ flex: 1 }}>
                <Icon name="wifi" style={{ fontSize: 30, color: 'rgb(192,0,0)', textAlign: 'center' }}></Icon>
                <Text style={styles.amenities}>wifi</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Icon name="pool" style={{ fontSize: 30, color: 'rgb(192,0,0)', textAlign: 'center' }}></Icon>
                <Text style={styles.amenities}>Swimming Pool</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Icon name="dumbbell" style={{ fontSize: 30, color: 'rgb(192,0,0)', textAlign: 'center' }}></Icon>
                <Text style={styles.amenities} >Gym</Text>
              </View>
            </View>
            <View style={{ marginTop: 15, paddingBottom: 15, flexDirection: 'row', justifyContent: 'space-around' }}>
              <View style={{ flex: 1 }}>
                <Icon name="hospital-building" style={{ fontSize: 30, color: 'rgb(192,0,0)', textAlign: 'center' }}></Icon>
                <Text style={styles.amenities}>Vastu Compliant</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Icon name="water-percent" style={{ fontSize: 30, color: 'rgb(192,0,0)', textAlign: 'center' }}></Icon>
                <Text style={styles.amenities}>Water Purifier</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Icon name="phone-classic" style={{ fontSize: 30, color: 'rgb(192,0,0)', textAlign: 'center' }}></Icon>
                <Text style={styles.amenities}>Intercom</Text>
              </View>
            </View>
            <Text style={styles.seeAll} onPress={() => this.props.navigation.navigate('Amenities')}>SEE ALL</Text>
          </Card>
        </Content>
        <ProjectFooter />
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  sliderText: {
    color: 'white',
    fontSize: 14,
    fontFamily: "Lato-Bold",
    width: '100%',
    paddingTop: 5,
    paddingBottom: 5,
    letterSpacing: 1,
    marginLeft: 10
  },
  icon: {
    position: 'absolute',
    top: 40,
    right: 10,
    color: 'white',
    fontSize: 18
  },
  icon1: {
    position: 'absolute',
    top: 40,
    left: 10,
    color: 'white',
    fontSize: 30
  },
  buttonNew: {
    position: 'absolute',
    bottom: 50,
    left: 10,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#0060DF',
    height: 35,
  },
  text: {
    fontSize: 16,
    padding: 15,
    paddingTop: 0,
    color: 'grey',
    borderBottomWidth: 1,
    borderBottomColor: '#e2e2e2',
    fontFamily: "Roboto-Medium",
    letterSpacing: 1
  },
  moreDetails: {
    width: '100%',
    fontSize: 16,
    paddingTop: 15,
    color: 'blue',
    fontFamily: "Roboto-Medium",
    letterSpacing: 1,
    textAlign: 'right'
  },
  seeAll: {
    width: '100%',
    fontSize: 16,
    padding: 15,
    fontFamily: "Roboto-Medium",
    color: 'rgb(192,0,0)',
    letterSpacing: 1,
    textAlign: 'center',
    borderTopWidth: 1,
    borderTopColor: '#e2e2e2'
  },
  tabss: {
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  tabImage: {
    width: '100%',
    height: 250
  },
  amenities: {
    color: 'black',
    textAlign: 'center',
    fontFamily: "Roboto-Medium",
    fontSize: 15,
    letterSpacing: 1
  }
});