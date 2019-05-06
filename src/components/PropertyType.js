import React, {Component} from 'react';
import {View, Text, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import Carousel from 'react-native-snap-carousel';
import { ScrollView } from 'react-native-gesture-handler';
const horizontalMargin = 5;
const slideWidth = 100;

const sliderWidth = Dimensions.get('window').width;
const itemWidth = slideWidth + horizontalMargin * 2;
const itemHeight = 80;


export default class PropertyType extends Component{

    static navigationOptions = {
        header: null,
      }
    

    constructor(props){
        super();
        this.state = {
          errors: []
        }
        this.props = props;
        this._carousel = {};
        this.init();
      }

    init(){
        this.state = {
          videos: [
            {
              icon: "city",
              title: "Flat",
            }, 
            {
                icon: "city",
                title: "House/Villa",
            },
            {
                icon: "city",
                title: "Plot",
            },
            {
                icon: "city",
                title: "Office Space",
            },
            {
                icon: "city",
                title: "Shop/Showroom",
            },
            {
                icon: "city",
                title: "Other Commercial",
            },
          ]
        };
        // console.log("ThumbnailCarousel Props: ", this.props)
      }
      _renderItem = ( {item, index} ) => {
        // console.log("rendering,", index, item)
        return (
          <View style={{paddingHorizontal: horizontalMargin,width: itemWidth,height: itemHeight,backgroundColor:'white',margin:3, alignItems:'center', justifyContent:'center'}} >
            <Icon name={item.icon} style={{fontSize:30, color:'red'}}></Icon>
            <Text style={{color: 'black',fontSize:16,letterSpacing:1,fontFamily:"Lato-Bold",}}>{item.title}</Text>
          
          </View>
        );
      }

    render(){
        return(
            <View style={{marginLeft:15,marginRight:15}}>
                <Text style={{fontSize:18, fontFamily:'Lato-Bold',  letterSpacing:1, color:'black', marginTop:15, marginBottom:15}}>Property Type</Text>
                <ScrollView horizontal>
                    <Carousel
                    ref={ (c) => { this._carousel = c; } }
                    data={this.state.videos}
                    renderItem={this._renderItem.bind(this)}
                    sliderWidth={sliderWidth}
                    itemWidth={itemWidth}
                    inactiveSlideOpacity={1}
                    inactiveSlideScale={1}
                    activeSlideAlignment={'start'}
                    />
                </ScrollView>
            </View>
        )
    }

}