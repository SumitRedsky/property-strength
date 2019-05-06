import React, {Component} from 'react';
import {View} from 'react-native';
import {Button, Picker, Text,Icon} from 'native-base';


export default class TopHeader extends Component {

    constructor(props) {
        super(props);
        this.state = {
          selected: "key0"
        };
      }
      onValueChange(value) {
        this.setState({
          selected: value
        });
      }

    render() {
        return(
            <View style={{flexDirection:'row'}}>
          <View style={{marginLeft:15, marginTop:5,flex:1}}>
            <Button rounded style={{backgroundColor:'white',textAlign:'center', height:20, borderColor:'black',width:'100%',alignItems:'center'}}>
             <Text style={{textAlign:'center', width:'100%',color:'black',fontSize:12,fontFamily:"Roboto-Medium",letterSpacing:1}}>66684 Result</Text>
            </Button>
          </View>
          <View style={{marginLeft:15, marginTop:5, flex:1}}>
            <Button rounded style={{backgroundColor:'white', height:20, borderColor:'black'}}>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="ios-arrow-down" />}
                selectedValue={this.state.selected}
                style={{width:'100%'}}
                itemTextStyle={{fontSize: 12,fontFamily:"Roboto-Medium", letterSpacing:1}}
                activeItemTextStyle={{fontSize: 12,fontFamily:"Roboto-Medium", letterSpacing:1}}

              >
                <Picker.Item label="Relevance" value="key0"/>
                <Picker.Item label="Price, High to Low" value="key1" />
                <Picker.Item label="Price, Low to High" value="key2" />
                <Picker.Item label="Number of Photos" value="key3" />
                <Picker.Item label="Number of Listing" value="key4" />
              </Picker>
            </Button>
          </View>
        </View>
        )
    }
}