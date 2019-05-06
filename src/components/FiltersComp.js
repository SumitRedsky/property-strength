import React, {Component} from 'react'
import {AppRegistry, Text,processColor, StyleSheet, View, Slider, Dimensions} from 'react-native';
import {  Button, Input, Item, Segment, Picker,Form} from 'native-base';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import PropertyType from './PropertyType';

export default class FiltersComp extends Component {

    static navigationOptions = {
        header: null,
      }

      constructor(props) {
        super(props);
        this.state = {
          selected: "key0"
        };
        this.state = { mode: '1bhk', count: 0,
        };
        this.state = { 
          sliderValue: 100
      }
    }

      onValueChange(value) {
        this.setState({
          selected: value
        });
      }
    
      

    render(){
        console.log(this.state.mode)
        return(
            <View style={{backgroundColor:'#e2e2e2'}}>
            <View style={{marginLeft:15,marginRight:15}}>
                <Text style={{fontSize:18, fontFamily:'Lato-Bold', letterSpacing:1, color:'black', marginTop:15, marginBottom:15}}>Location</Text>
                <View searchBar style={{backgroundColor:'white', height:50}}>
                    <Item>
                        <Input placeholder="Search" />
                        <Icon name="location-searching" />
                    </Item>
                </View> 
            </View>
            <PropertyType/>
            <View style={{marginLeft:15,marginRight:15}}> 
                <Text style={{fontSize:18, fontFamily:'Lato-Bold', letterSpacing:1, color:'black', marginTop:15, marginBottom:15}}>Area</Text>
                <View style={{backgroundColor:'white', padding:15}}>
                    <Text style={{fontFamily:'Roboto-Medium',fontSize:15,letterSpacing:1,paddingBottom:15}}>{this.state.sliderValue} to 3000+</Text>
                    <Slider maximumValue={3000} minimumValue={0} step={100}  minimumTrackTintColor='red'
                        maximumTrackTintColor='red'  thumbTintColor='red'
                        value={this.state.sliderValue}
                        onValueChange={sliderValue => this.setState({sliderValue})}
                        style={{height:15}}>
                    </Slider>
                </View>
            </View>
            <View style={{marginLeft:15,marginRight:15}}> 
                <Text style={{fontSize:18, fontFamily:'Lato-Bold', letterSpacing:1, color:'black', marginTop:15, marginBottom:15}}>Bedroom</Text>
                <Segment style={{width:'100%', backgroundColor:'white', height: 50 }}>
                    <Button first active={this.state.mode == '1bhk'} onPress={() => this.setState({ mode: '1bhk' })} style={(this.state.mode == "1bhk") ? styles.selectedButtonStyle : styles.buttonStyle}><Text style={(this.state.mode == "1bhk") ? styles.selectedtextstyle : styles.textstyle}>1</Text></Button>
                    <Button active={this.state.mode == '2bhk'} onPress={() => this.setState({ mode: '2bhk' })} style={(this.state.mode == "2bhk") ? styles.selectedButtonStyle : styles.buttonStyle}><Text style={(this.state.mode == "2bhk") ? styles.selectedtextstyle : styles.textstyle}>2</Text></Button>
                    <Button  active={this.state.mode == '3bhk'} onPress={() => this.setState({ mode: '3bhk' })} style={(this.state.mode == "3bhk") ? styles.selectedButtonStyle : styles.buttonStyle}><Text style={(this.state.mode == "3bhk") ? styles.selectedtextstyle : styles.textstyle}>3</Text></Button>
                    <Button active={this.state.mode == '4bhk'} onPress={() => this.setState({ mode: '4bhk' })} style={(this.state.mode == "4bhk") ? styles.selectedButtonStyle : styles.buttonStyle}><Text style={(this.state.mode == "4bhk") ? styles.selectedtextstyle : styles.textstyle}>4</Text></Button>
                    <Button last active={this.state.mode == '>4bhk'} onPress={() => this.setState({ mode: '>4bhk' })} style={(this.state.mode == ">4bhk") ? styles.selectedButtonStyle : styles.buttonStyle}><Text style={(this.state.mode == ">4bhk") ? styles.selectedtextstyle : styles.textstyle}>>4</Text></Button>
                </Segment>
            </View>
            <View style={{marginLeft:15,marginRight:15}}> 
                <Text style={{fontSize:18, fontFamily:'Lato-Bold', letterSpacing:1, color:'black', marginTop:15, marginBottom:15}}>Bathroom</Text>
                <Segment style={{width:'100%', backgroundColor:'white', height: 50,padding:0 }}>
                    <Button first active={this.state.mode == '1bhk'} onPress={() => this.setState({ mode: '1bhk' })} style={(this.state.mode == "1bhk") ? styles.selectedButtonStyle : styles.buttonStyle}><Text style={(this.state.mode == "1bhk") ? styles.selectedtextstyle : styles.textstyle}>1</Text></Button>
                    <Button active={this.state.mode == '2bhk'} onPress={() => this.setState({ mode: '2bhk' })} style={(this.state.mode == "2bhk") ? styles.selectedButtonStyle : styles.buttonStyle}><Text style={(this.state.mode == "2bhk") ? styles.selectedtextstyle : styles.textstyle}>2</Text></Button>
                    <Button  active={this.state.mode == '3bhk'} onPress={() => this.setState({ mode: '3bhk' })} style={(this.state.mode == "3bhk") ? styles.selectedButtonStyle : styles.buttonStyle}><Text style={(this.state.mode == "3bhk") ? styles.selectedtextstyle : styles.textstyle}>3</Text></Button>
                    <Button active={this.state.mode == '4bhk'} onPress={() => this.setState({ mode: '4bhk' })} style={(this.state.mode == "4bhk") ? styles.selectedButtonStyle : styles.buttonStyle}><Text style={(this.state.mode == "4bhk") ? styles.selectedtextstyle : styles.textstyle}>4</Text></Button>
                    <Button last active={this.state.mode == '>4bhk'} onPress={() => this.setState({ mode: '>4bhk' })} style={(this.state.mode == ">4bhk") ? styles.selectedButtonStyle : styles.buttonStyle}><Text style={(this.state.mode == ">4bhk") ? styles.selectedtextstyle : styles.textstyle}>>4</Text></Button>
                </Segment>
            </View>
            <View style={{marginLeft:15,marginRight:15, marginBottom:15}}> 
                <Text style={{fontSize:18, fontFamily:'Lato-Bold', letterSpacing:1, color:'black', marginTop:15, marginBottom:15}}>Budget</Text>
                <View style={{flexDirection:'row'}}>
                    <View style={{ flex:1,borderWidth:1, borderColor:'#e2e2e2' , height:50}}>
                        <Picker
                        mode="dropdown"
                        iosIcon={<Icon name="arrow-down" style={{backgroundColor:'black'}}/>}
                        style={{ backgroundColor:'white', }}
                        selectedValue={this.state.selected}
                        onValueChange={this.onValueChange.bind(this)}
                        >
                        <Picker.Item label="MIN" value="key0" />
                        <Picker.Item label="5 Lac" value="key1" />
                        <Picker.Item label="10 Lac" value="key2" />
                        <Picker.Item label="20 Lac" value="key3" />
                        <Picker.Item label="30 Lac" value="key4" />
                        <Picker.Item label="40 Lac" value="key5" />
                        <Picker.Item label="50 Lac" value="key6" />
                        <Picker.Item label="60 Lac" value="key7" />
                        <Picker.Item label="70 Lac" value="key8" />
                        <Picker.Item label="80 Lac" value="key9" />
                        <Picker.Item label="90 Lac" value="key10" />
                        <Picker.Item label="1 Cr" value="key11" />
                        <Picker.Item label="1.2 Cr" value="key12" />
                        <Picker.Item label="1.4 Cr" value="key13" />
                        <Picker.Item label="1.6 Cr" value="key14" />
                        <Picker.Item label="1.8 Cr" value="key15" />
                        <Picker.Item label="2 Cr" value="key16" />
                        <Picker.Item label="2.3 Cr" value="key17" />
                        <Picker.Item label="2.6 Cr" value="key18" />
                        <Picker.Item label="3 Cr" value="key19" />
                        <Picker.Item label="3.5 Cr" value="key20" />
                        <Picker.Item label="4 Cr" value="key21" />
                        <Picker.Item label="5 Cr" value="key22" />
                        </Picker>
                    </View>
                    <View style={{flex:1,borderWidth:1, borderColor:'#e2e2e2', marginLeft:15, height:50}}>
                        <Picker
                        mode="dropdown"
                        iosIcon={<Icon name="arrow-down" style={{color:'black'}} />}
                        style={{ backgroundColor:'white', }}
                        selectedValue={this.state.selected}
                        onValueChange={this.onValueChange.bind(this)}
                        >
                        <Picker.Item label="MAX" value="key0" />
                        <Picker.Item label="50 Lac" value="key1" />
                        <Picker.Item label="60 Lac" value="key2" />
                        <Picker.Item label="70 Lac" value="key3" />
                        <Picker.Item label="80 Lac" value="key4" />
                        <Picker.Item label="90 Lac" value="key5" />
                        <Picker.Item label="1 Cr" value="key6" />
                        <Picker.Item label="1.2 Cr" value="key7" />
                        <Picker.Item label="1.4 Cr" value="key8" />
                        <Picker.Item label="1.6 Cr" value="key9" />
                        <Picker.Item label="1.8 Cr" value="key10" />
                        <Picker.Item label="2 Cr" value="key11" />
                        <Picker.Item label="2.3 Cr" value="key12" />
                        <Picker.Item label="2.6 Cr" value="key13" />
                        <Picker.Item label="3 Cr" value="key14" />
                        <Picker.Item label="3.5 Cr" value="key15" />
                        <Picker.Item label="4 Cr" value="key16" />
                        <Picker.Item label="4.5 Cr" value="key17" />
                        <Picker.Item label="5 Cr" value="key18" />
                        <Picker.Item label="10 Cr" value="key19" />
                        <Picker.Item label="15 Cr" value="key20" />
                        <Picker.Item label="15+ Cr" value="key21" />
                        </Picker>
                    </View>
                </View>
            </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    selectedButtonStyle:{
        flex:1,
        borderWidth:1, 
        borderColor:'rgb(192,0,0)',
        backgroundColor:'rgb(192,0,0)',
        justifyContent:'center',
        height:50
    },
    buttonStyle: {
        flex:1,
        borderWidth:3, 
        borderColor:'#e2e2e2',
        justifyContent:'center',
        height:50 
    },
    textstyle:{
        fontSize:18,
        fontFamily:'Roboto-Medium',
        color:'black'
    },
    selectedtextstyle:{
        fontSize:18,
        fontFamily:'Roboto-Medium',
        color:'white'
    },
    thumb: {
        width: 30,
        height: 30,
        borderRadius: 30 / 2,
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 2,
        shadowOpacity: 0.35,
      },
      sliderText: {
        color: 'black',
        fontSize:16,
        letterSpacing:1, 
        fontFamily:"Lato-Bold",
        // padding:20
      },

})