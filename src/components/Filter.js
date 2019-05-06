import React, {Component} from 'react';
import {AppRegistry,processColor, StyleSheet, View, TextInput,TouchableHighlight, StatusBar} from 'react-native';
import {  Button, Input,Text, Icon, Header,Left, Tabs, Tab, Container, ScrollableTab, Footer, FooterTab, Content, Body, Title} from 'native-base';
import FiltersComp from './FiltersComp'

export default class Cheque extends Component {
    static navigationOptions = {
        header:null,
      }

    render () {
        return (
            <Container>
                <Header style={{backgroundColor:'#fff', borderBottomWidth:0.5, borderBottomColor:'#e2e2e2',justifyContent:'flex-start', alignItems:'center'}}>
                    <StatusBar backgroundColor="#d52331"  />
                    <Left>
                        <TouchableHighlight style={{alignItems:'center'}}>
                        <Button transparent style={{alignItems:'center', justifyContent:'center'}} onPress={()=> {this.props.navigation.goBack()}}>
                            <Icon name='ios-arrow-back' style={{color:'rgb(192,0,0)',fontWeight:'bold',fontSize:35,alignItems:'center'}}></Icon>
                            <Text style={{fontSize:18,color:'rgb(192,0,0)',fontFamily:"Lato-Bold",textTransform:"capitalize"}}> Back</Text>
                        </Button>
                        </TouchableHighlight>
                    </Left>
                    <Body style={{}}>
                        <Title style={{color:'black',textAlign:'left',fontFamily:"Lato-Bold"}}><Text style={{fontSize:18}}>Search</Text></Title>
                    </Body>
                </Header> 
                <Content>
                    <Tabs >
                        <Tab heading="BUY" tabStyle={{ backgroundColor: "#fff"  }} textStyle={{color:'black'}} activeTabStyle={{ backgroundColor: "rgb(192,0,0)" }} tabBarUnderlineStyle={{color:'rgb(192,0,0)'}}>
                           <FiltersComp/> 
                        </Tab> 
                        <Tab heading="RENT"  tabStyle={{ backgroundColor: "#fff" }} activeTabStyle={{ backgroundColor: "rgb(192,0,0)" }} textStyle={{color:'black'}} tabBarUnderlineStyle={{color:'rgb(192,0,0)'}}>
                           <FiltersComp/>
                        </Tab>
                    </Tabs>
                </Content>
                
                <Footer style={{backgroundColor:'white', paddingTop:10,marginLeft:15, marginRight:15}}>
                    {/* <FooterTab style={{ borderTopWidth:1, borderTopColor:'#e2e2e2',justifyContent:'center',alignItems:'center',}}> */}
                        <Button rounded block style={styles.button}>
                            <Text style={styles.text}>Search</Text>
                        </Button>
                    {/* </FooterTab> */}
                </Footer>
            </Container>
            
        )
    }
}

const styles =  StyleSheet.create({
    button: {
        backgroundColor: "rgb(192,0,0)",
        height: 40,
        marginLeft:15,
        marginRight:15,
        width:'100%'
    },
      text: {
        color:'white',
        fontWeight:'bold',
        fontSize:20,
        lineHeight:20,
        textTransform:'capitalize'
    },
    
});

