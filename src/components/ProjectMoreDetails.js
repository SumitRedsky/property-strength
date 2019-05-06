import React, {Component} from 'react';
import {StyleSheet, Image,Text, View, StatusBar, TextInput, Dimensions} from 'react-native';
import { H1, Container, Header, Content, Card, H3, Item, Textarea, Footer, FooterTab, Fab} from 'native-base';
import { Button} from 'native-base';
import Carousel from 'react-native-snap-carousel';
import PieCharts from './PieCharts';
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons'
import { ProjectFooter } from './ProjectFooter';

export default class ProjectMoreDetails extends Component {
  static navigationOptions = {
    header: null,
  }

  constructor(props){
    super(props);
    this.state = {
      active: false
    };
    // this.state = {
    //   active: false
    // };
    
    this.props = props;
    this._carousel = {};
    this.init();
  }

  init(){
    this.state = {
      videos: [
        {
          id: "WpIAc9by5iU",
          image: require('../../assets/images/prop1.jpg'), // "http://localhost:8081/images/prop1.jpg",
          title: "Dlf Avenue Park",
        }, {
          id: "sNPnbI1arSE",
          image: require('../../assets/images/prop2.jpg'),
          title: "Dlf Avenue Park",
        }, {
          id: "VOgFZfRVaww",
          image: require('../../assets/images/prop3.jpg'),
          title: "Dlf Avenue Park",
        },
        {
          id: "VOgFZfRVawv",
          image: require('../../assets/images/prop1.jpg'),
          title: "Dlf Avenue Park",
        }
      ]
    };
    // console.log("ThumbnailCarousel Props: ", this.props)
  }

  handleSnapToItem(index){
   //  console.log("snapped to ", index)
  }

  _renderItem = ( {item, index} ) => {
    // console.log("rendering,", index, item)
    return (
      <View style={{ height: viewportHeight }} >
         <Image source={item.image} style={{height:250,position: 'relative', width:'100%',opacity: .8}}/>
         <Icon name="arrow-left" style={styles.icon1} onPress={() => this.props.navigation.navigate('ProjectView')}></Icon>
         <Icon name="camera" style={styles.icon}><Text> 1/12</Text></Icon>
         <Button style={styles.buttonNew}><Text style={{color:'white', fontSize: 18, fontWeight:'500', letterSpacing:1}}>New</Text></Button>
         <View style={{position:'absolute', bottom: 0, width:'100%', backgroundColor:'black'}}>
            <Text style={styles.sliderText}>{ item.title }</Text>
         </View>
      </View>
    );
  }

  render() { 
    return(
      <Container>
        <Header style={{height:250, paddingLeft:0, paddingRight:0, backgroundColor:'white'}}>
        <StatusBar backgroundColor="transparent" translucent={true}/>
          <Carousel
            ref={ (c) => { this._carousel = c; } }
            data={this.state.videos}
            renderItem={this._renderItem.bind(this)}
            // onSnapToItem={this.handleSnapToItem.bind(this)}
            sliderWidth={viewportWidth}
              itemWidth={viewportWidth}
              slideStyle={{ width: viewportWidth }}
              inactiveSlideOpacity={1}
              inactiveSlideScale={1}
            />
        </Header>
        <Content style={{backgroundColor:'#e2e2e2'}}>
          <Card>
            <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:20, marginRight:15, marginLeft:15}}>
              <View>
              <Text style={{fontFamily:"Roboto-Medium"}}>Rs. <H3 style={{letterSpacing:1,fontFamily:"Lato-Bold"}}>2,02,0000</H3></Text>
              </View>
            
              <View style={{flexDirection:'row'}}>
              <Icon name="share-variant" style={{marginRight:15,fontSize:25, color:'black'}}></Icon>
                <Icon name="heart-outline" style={{marginRight:15,fontSize:25, color:'black'}}></Icon>
                <Icon name="dots-vertical" style={{fontSize:25, color:'black'}}></Icon>
              </View>
            </View>
            <Text style={{ letterSpacing:1,color:'#555',  marginLeft:15,fontFamily:"Roboto-Medium"}}>Sector 40, Gurgaon</Text>
            <View style={{marginTop:15, paddingBottom:15, flexDirection:'row', justifyContent:'space-around',borderBottomWidth:1, borderBottomColor:'#e4e4e4'}}>
              <View >
                <Text style={{textAlign:'center',fontSize:15, color:'black',fontFamily:"Lato-Bold"}}>3</Text>
                <Text style={{fontFamily:"Roboto-Medium",letterSpacing:1}}>Beds</Text>
              </View>
              <View>
                <Text style={{textAlign:'center',fontSize:15, color:'black',fontFamily:"Lato-Bold"}}>2</Text>
                <Text style={{fontFamily:"Roboto-Medium",letterSpacing:1}}>Baths</Text>
              </View>
              <View>
                <Text style={{textAlign:'center',fontSize:15, color:'black',fontFamily:"Lato-Bold"}}>1,676</Text>
                <Text style={{fontFamily:"Roboto-Medium",letterSpacing:1}}>Sq.ft</Text>
              </View>
              <View>
                <Text style={{textAlign:'center',fontSize:20, color:'black',fontFamily:"Lato-Bold"}}>1.00</Text>
                <Text style={{fontFamily:"Roboto-Medium",letterSpacing:1}}>Acre lot</Text>
              </View>
            </View>
          </Card>
          <Card>
           <H3 style={{fontFamily:"Lato-Bold",letterSpacing:1,padding:15}}>Overview</H3>
           <Text style={styles.overview}>loremLorem ipsum dolor sit amet lorem Lorem ipsum dolor sit amet lorem Lorem ipsum dolor sit amet loremLorem ipsum dolor sit amet loremLorem ipsum dolor sit amet loremLorem ipsum dolor sit amet lorem</Text>
           <View style={{flexDirection:'row', justifyContent:'space-between', padding:15, borderBottomWidth:1, borderBottomColor:'#e2e2e2'}}>
             <Text style={styles.overviewheading}>Status</Text>
             <Text style={styles.overviewvalue}>Active</Text>
           </View>
           <View style={{flexDirection:'row', justifyContent:'space-between', padding:15, borderBottomWidth:1, borderBottomColor:'#e2e2e2'}}>
             <Text style={styles.overviewheading}>Transaction Type</Text>
             <Text style={styles.overviewvalue}>New</Text>
           </View>
           <View style={{flexDirection:'row', justifyContent:'space-between', padding:15, borderBottomWidth:1, borderBottomColor:'#e2e2e2'}}>
             <Text style={styles.overviewheading}>Basic Sale Price</Text>
             <Text  style={styles.overviewvalue}>5,00,000</Text>
           </View>
           <View style={{flexDirection:'row', justifyContent:'space-between', padding:15, borderBottomWidth:1, borderBottomColor:'#e2e2e2'}}>
             <Text style={styles.overviewheading}>Approval Authrity</Text>
             <Text  style={styles.overviewvalue}>Huda</Text>
           </View>
           <View style={{flexDirection:'row', justifyContent:'space-between', padding:15, borderBottomWidth:1, borderBottomColor:'#e2e2e2'}}>
             <Text style={styles.overviewheading}>Super Area</Text>
             <Text  style={styles.overviewvalue}>1,676 Sq.ft.</Text>
           </View>
           <View style={{flexDirection:'row', justifyContent:'space-between', padding:15, borderBottomWidth:1, borderBottomColor:'#e2e2e2'}}>
             <Text style={styles.overviewheading}>Furnished</Text>
             <Text  style={styles.overviewvalue}>Semi Furnished</Text>
           </View>
           <Text style={{fontSize:15,padding:15, color:'blue', letterSpacing:1,fontFamily:'Lato-Bold'}} onPress={() => this.props.navigation.navigate('MoreDetail')}>MORE DETAILS</Text>
          </Card>
          <Card style={{height:400}}> 
            <H3 style={{fontFamily:"Lato-Bold",letterSpacing:1,padding:15}}>Floor Plan</H3>
           <Image source={require('../../assets/images/floor1.jpg')} style={{width:'100%',height:300}}></Image>
          </Card>
          <Card style={{height:400, padding:15}}> 
            <H3 style={{fontFamily:"Lato-Bold",letterSpacing:1,paddingBottom:15}}>Monthly Cost</H3>
            <PieCharts/>
          </Card>
          <Card>
            <H3 style={{fontFamily:"Lato-Bold",letterSpacing:1,padding:15}}>Contact For more info</H3>
            <Text style={{fontSize:16,padding:15, paddingTop:0, color:'grey',fontFamily:"Roboto-Medium",letterSpacing:1}}>Your info will go to local agents who can answer your questions</Text>
            <Item style={{marginRight:15,marginLeft:15,marginTop:15,borderBottomColor:'black',}}>
              <TextInput  placeholder='Name'  style={styles.input}/>
            </Item>
            <Item style={{marginRight:15,marginLeft:15,marginTop:15,borderBottomColor:'black',}}>
              <TextInput placeholder='Email' style={styles.input}/>
            </Item>
            <Item style={{marginRight:15,marginLeft:15,marginTop:15,borderBottomColor:'black'}}>
              <TextInput placeholder='Mobile No.' keyboardType="phone-pad" style={styles.input}/>
            </Item>
            <Item style={{marginRight:15,marginLeft:15,marginTop:15,borderBottomColor:'black', borderBottomWidth:1}}>
              <Textarea rowSpan={3}  placeholder="Message" style={styles.input} />
            </Item>
            <Button block rounded style={styles.button}>
              <Text style={styles.text}>Contact Agent</Text>
            </Button>
          </Card>
        </Content>
        <ProjectFooter/>
      </Container>
    )} 
}

const styles = StyleSheet.create({
  sliderText: {
    color: 'white',
    fontSize:14,
    fontFamily:"Lato-Bold",
    width:'100%',
    paddingTop:5,
    paddingBottom:5,
    letterSpacing:1,
    marginLeft:10
  },
  icon: {
    position: 'absolute',
    top:40,
    right:10,
    color:'white',
    fontSize:18
  },
  icon1: {
    position: 'absolute',
    top:40,
    left:10,
    color:'white',
    fontSize:30
  },
  buttonNew: {
    position: 'absolute',
    bottom:50,
    left:10,
    paddingLeft:10,
    paddingRight:10,
    backgroundColor:'#0060DF',
    height: 35,
  },
  text: {
    color:'white',
    fontFamily:"Lato-Bold",
    fontSize:20
  },
  text1: {
    color:'red',
    fontFamily:"Lato-Bold",
    fontSize:20
  },
  overview:{
    fontSize:16,
    padding:15,
    paddingTop:0,
    color:'grey',
    fontFamily:"Roboto-Medium",
    letterSpacing:1,
    borderBottomWidth:1,
    borderBottomColor:'#e2e2e2'
  },
  overviewheading:{
    fontSize:17,
    color:'grey',
    letterSpacing:1,
    fontFamily:"Roboto-Medium"
  },
  overviewvalue:{
    fontSize:17,
    color:'black', 
    letterSpacing:1,
    fontFamily:"Lato-Bold"
  },
  button: {
    backgroundColor: "rgb(192,0,0)",
    height: 50,
    marginTop:30,
    marginBottom:30,
    marginLeft:15,
    marginRight:15,
  },
  input:{
    fontSize:15,
    fontFamily:'Roboto-Medium',
    letterSpacing:1,
    width:'100%',
    color:'#e2e2e2'
  }
 
});