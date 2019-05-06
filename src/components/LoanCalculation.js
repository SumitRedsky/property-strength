import React, {Component} from 'react';
import {View, TouchableHighlight, StatusBar,TextInput } from 'react-native';
import { Container, Header, Left, Body, Content, H1,Text, H3, Button,Item, Input, Picker} from 'native-base';
import Pie from 'react-native-pie';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons'


export default class LoanCalculation extends Component{
    static navigationOptions = {
        header: null,
      }

      constructor(props) {
        super(props);
        this.state = {
          selected: "key0"
        };
      }

    render(){
        return(
            <Container>
                <Header style={{backgroundColor:'#343434', borderBottomWidth:0}}>
                 <StatusBar backgroundColor="#262626" translucent={false}/>
                    <Left>
                        <TouchableHighlight style={{alignItems:'center'}}>
                            <Button transparent style={{alignItems:'center', justifyContent:'center'}} onPress={()=> {this.props.navigation.navigate('ProjectMoreDetails')}}>
                                <Icon name='arrow-left' style={{color:'white',fontWeight:'bold',fontSize:35,alignItems:'center'}}></Icon>
                            </Button>
                        </TouchableHighlight>
                    </Left>
                    <Body>
                        <H3 style={{color:'white', letterSpacing:1}}>Monthly Cost Calculator</H3>
                    </Body>
                </Header>
                <Header style={{height:100, backgroundColor:'#343434'}}>
                <StatusBar backgroundColor="#262626" translucent={false}/>
                    <Left>
                        <Pie
                            radius={40}
                            innerRadius={25}
                            series={[20, 80]}
                            colors={['#9d64e3', '#20b261']} 
                        />
                    </Left>
                    <Body style={{flex:1,}}>
                        <View style={{paddingBottom:20,width:'100%', justifyContent:'flex-end',alignItems:'flex-end'}}>
                            <H1 style={{color:'white', textAlign:'right', fontSize:30}}>Rs.1989 <Text style={{color:'white',fontSize:20 }}>/mo</Text></H1>
                        </View>
                    </Body>
                </Header>
                <Content >
                    <View style={{flexDirection:'row',marginTop:20,paddingBottom:20,borderBottomWidth:1, borderBottomColor:'#e2e2e2'}}>
                        <View style={{flexDirection:'row', flex:1,alignItems:'center', paddingLeft:15}}>
                            <Icon name="circle" style={{color:'#20b261',paddingRight:15}}></Icon>
                            <Text style={{fontSize:17, color:'black'}}>Principal</Text>
                        </View>
                        <Text style={{fontSize:17,flex: 1,textAlign:'right',color:'black',paddingRight:15}}>Rs.1,124</Text>
                    </View>
                    <View style={{borderBottomWidth:1, borderBottomColor:'#e2e2e2',paddingTop:20,paddingBottom:20}}>
                        <View style={{flexDirection:'row',paddingBottom:20}}>
                            <View style={{flex:1,alignItems:'flex-start', paddingLeft:15,paddingRight:15}}>
                                <Text>Home Price</Text>
                                <Item style={{borderBottomColor:'black'}}>
                                <Input value="50,00,000" />
                                </Item>
                            </View>
                            <View style={{flex:1}}>
                                
                            </View>
                        </View>
                        <View style={{flexDirection:'row', paddingBottom:20}}>
                            <View style={{flex:1,alignItems:'flex-start', paddingLeft:15}}>
                                <Text>Down Payment</Text>
                                <Item style={{borderBottomColor:'black'}}>
                                    <Input value="50,000"/>
                                </Item>
                            </View>
                            <View style={{flex:1,alignItems:'flex-start', paddingLeft:15,paddingRight:15}}>
                                <Text>Down Payment(%)</Text>
                                <Item style={{borderBottomColor:'black'}}>
                                    <Input value="10%" />
                                </Item>
                            </View>
                        </View>
                        <View style={{flexDirection:'row', paddingBottom:20}}>
                            <View style={{flex:1,alignItems:'flex-start', paddingLeft:15}}>
                                <Text>Loan Tenure</Text>
                                <Item style={{borderBottomColor:'black'}}>
                                    <Picker
                                        mode="dropdown"
                                        iosIcon={<Icon name="ios-arrow-down" />}
                                        selectedValue={this.state.selected}
                                        style={{width:'100%',fontSize:12}}
                                    >
                                        <Picker.Item label="5 Years" value="key0" style={{fontSize:12}}/>
                                        <Picker.Item label="10 Years" value="key1" />
                                        <Picker.Item label="15 Years" value="key2" />
                                        <Picker.Item label="20 Years" value="key3" />
                                        <Picker.Item label="25 Years" value="key4" />
                                        <Picker.Item label="30 Years" value="key5" />
                                        <Picker.Item label="35 Years" value="key6" />
                                        <Picker.Item label="40 Years" value="key7" />
                                    </Picker>
                                </Item>
                            </View>
                            <View style={{flex:1,alignItems:'flex-start', paddingLeft:15,paddingRight:15}}>
                                <Text>Interest Rate</Text>
                                <Item style={{borderBottomColor:'black'}}>
                                    <Input value="10%" />
                                </Item>
                            </View>
                        </View>
                    </View>
                    <View style={{flexDirection:'row',marginTop:20,paddingBottom:20,borderBottomWidth:1, borderBottomColor:'#e2e2e2'}}>
                        <View style={{flexDirection:'row', flex:1,alignItems:'center',paddingLeft:15}}>
                            <Icon name="circle" style={{color:'#9d64e3',paddingRight:15}}></Icon>
                            <Text style={{fontSize:17, color:'black'}}>Interest</Text>
                        </View>
                        <Text style={{fontSize:17,flex: 1,textAlign:'right',color:'black',paddingRight:15,}}>10%</Text>
                    </View>
                </Content>
            </Container>
        )
    }
}