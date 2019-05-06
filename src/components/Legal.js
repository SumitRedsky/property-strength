import React, {Component} from 'react';
import {StyleSheet,StatusBar,TouchableHighlight} from 'react-native';
import { Container, Header, Content,Button, Icon, Text, Left, Body, Title, List, ListItem, Right } from 'native-base';


export default class Legal extends Component {
    render() {
        return(
            <Container>
                <Header style={{backgroundColor:'#fff', borderBottomWidth:0.5, borderBottomColor:'#e2e2e2'}}>
                    <StatusBar backgroundColor="#d52331"/>
                    <Left>
                    <TouchableHighlight style={{alignItems:'center'}}>
                        <Button transparent style={{alignItems:'center', justifyContent:'center'}} onPress={()=> {this.props.navigation.goBack()}}>
                        <Icon name='ios-arrow-back' style={{color:'rgb(192,0,0)',fontWeight:'bold',fontSize:35,alignItems:'center'}}></Icon>
                        <Text style={{fontSize:18,color:'rgb(192,0,0)',letterSpacing:1,fontFamily:"Lato-Bold",textTransform:"capitalize"}}> Back</Text>
                        </Button>
                    </TouchableHighlight>
                    </Left>
                    <Body style={{}}>
                        <Title style={{fontSize:20,color:'black',textAlign:'left',letterSpacing:1,fontFamily:"Lato-Bold"}}><Text>Legal</Text></Title>
                    </Body>
                </Header>
                <Content>
                    <List>
                        <ListItem>
                        <Left>
                            <Text style={{fontSize:17,fontFamily:'Roboto-Medium',letterSpacing:1,lineHeight:20, color:'#555'}}>Privacy Policy</Text>
                        </Left>
                        <Right>
                            <Icon name="ios-arrow-forward" />
                        </Right>
                        </ListItem>
                        <ListItem >
                        <Left>
                            <Text style={{fontSize:17,fontFamily:'Roboto-Medium',letterSpacing:1,lineHeight:20, color:'#555'}}>Terms & Condition</Text>
                        </Left>
                        <Right>
                            <Icon name="ios-arrow-forward" />
                        </Right>
                        </ListItem>
                        <ListItem>
                        <Left>
                            <Text style={{fontSize:17,fontFamily:'Roboto-Medium',letterSpacing:1,lineHeight:20, color:'#555'}}>About Us</Text>
                        </Left>
                        <Right>
                            <Icon name="ios-arrow-forward" />
                        </Right>
                        </ListItem>
                    </List>
                </Content>
            </Container>
        )
    }
}