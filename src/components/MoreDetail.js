import React, {Component} from 'react';
import {Text, StyleSheet, StatusBar, View} from 'react-native';
import { Container, Header, Content, Footer, Left, Body, Button, H3, FooterTab } from 'native-base';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons'


export default class MoreDetail extends Component {

    static navigationOptions = {
        header:null,
      };

    render() {
        return(
            <Container>
                <Header style={{backgroundColor:'white'}}>
                 <StatusBar backgroundColor="#d52331"  translucent={false}/>
                    <Left>
                        <Icon name="arrow-left" style={{fontSize:25}} onPress={() => this.props.navigation.goBack()}></Icon>
                    </Left>
                    <Body>
                        <H3 style={{fontFamily:'Lato-Bold', letterSpacing:1,textAlign:'left'}}>More Details</H3>
                        <Text style={{fontSize:18, fontFamily:'Roboto-Medium', letterSpacing:1,color:'grey', lineHeight:26}}>Sector 40, gurgaon</Text>
                    </Body>
                </Header>
                <Content>
                    <View style={{padding:15, borderBottomWidth:1, borderBottomColor:'#e2e2e2'}}>
                        <H3 style={{fontFamily:'Lato-Bold', letterSpacing:1,paddingBottom:15}}>Additional Key Facts</H3>
                        <View style={{flexDirection:'row', alignItems:'center'}}>
                            <Icon name="circle" style={{marginRight:10,}}></Icon>
                            <Text style={{fontSize:18, fontStyle:'normal', color:'grey', lineHeight:26}}>Property Id: #324242</Text>
                        </View>
                        <View style={{flexDirection:'row', alignItems:'center'}}>
                            <Icon name="circle" style={{marginRight:10,}}></Icon>
                            <Text style={{fontSize:18, fontStyle:'normal', color:'grey'}}>Brokered by Shail Seth</Text>
                        </View>
                        <View style={{flexDirection:'row', alignItems:'center'}}>
                            <Icon name="circle" style={{marginRight:10,}}></Icon>
                            <Text style={{fontSize:18, fontStyle:'normal', color:'grey'}}>Updated: 21/04/2018</Text>
                        </View>
                        <View style={{flexDirection:'row', alignItems:'center'}}>
                            <Icon name="circle" style={{marginRight:10,}}></Icon>
                            <Text style={{fontSize:18, fontStyle:'normal', color:'grey'}}>BSP: Rs. 1,80,0000</Text>
                        </View>
                        <View style={{flexDirection:'row', alignItems:'center'}}>
                            <Icon name="circle" style={{marginRight:10,}}></Icon>
                            <Text style={{fontSize:18, fontStyle:'normal', color:'grey', lineHeight:26}}>Build Year: 2015</Text>
                        </View>
                    </View>
                    <View style={{padding:15, borderBottomWidth:1, borderBottomColor:'#e2e2e2'}}>
                        <H3 style={{fontSize:20, paddingBottom:15}}>Bedrooms</H3>
                        <View style={{flexDirection:'row', alignItems:'center'}}>
                            <Icon name="circle" style={{marginRight:10,}}></Icon>
                            <Text style={{fontSize:18, fontStyle:'normal', color:'grey', lineHeight:26}}>Total Room: 5</Text>
                        </View>
                    </View>
                    <View style={{padding:15, borderBottomWidth:1, borderBottomColor:'#e2e2e2'}}>
                        <H3 style={{fontFamily:'Lato-Bold', letterSpacing:1,paddingBottom:15}}>Bathrooms</H3>
                        <View style={{flexDirection:'row', alignItems:'center'}}>
                            <Icon name="circle" style={{marginRight:10,}}></Icon>
                            <Text style={{fontSize:18, fontStyle:'normal', color:'grey', lineHeight:26}}>4</Text>
                        </View>
                    </View>
                    <View style={{padding:15, borderBottomWidth:1, borderBottomColor:'#e2e2e2'}}>
                        <H3 style={{fontFamily:'Lato-Bold', letterSpacing:1, paddingBottom:15}}>Area Info</H3>
                        <View style={{flexDirection:'row', alignItems:'center'}}>
                            <Icon name="circle" style={{marginRight:10,}}></Icon>
                            <Text style={{fontSize:18, fontStyle:'normal', color:'grey', lineHeight:26}}>Super Area: 1,786 Sq.ft</Text>
                        </View>
                        <View style={{flexDirection:'row', alignItems:'center'}}>
                            <Icon name="circle" style={{marginRight:10,}}></Icon>
                            <Text style={{fontSize:18, fontStyle:'normal', color:'grey'}}>Carpet Area: 1,267 Sq.ft</Text>
                        </View>
                    </View>
                    <View style={{padding:15, borderBottomWidth:1, borderBottomColor:'#e2e2e2'}}>
                        <H3 style={{fontFamily:'Lato-Bold', letterSpacing:1, paddingBottom:15}}>Building and Construction</H3>
                        <View style={{flexDirection:'row', alignItems:'center'}}>
                            <Icon name="circle" style={{marginRight:10,}}></Icon>
                            <Text style={{fontSize:18, fontFamily:'Roboto-Medium', letterSpacing:1, color:'grey', lineHeight:26}}>Status: Active</Text>
                        </View>
                        <View style={{flexDirection:'row', alignItems:'center'}}>
                            <Icon name="circle" style={{marginRight:10,}}></Icon>
                            <Text style={{fontSize:18, fontFamily:'Roboto-Medium', letterSpacing:1, color:'grey'}}>Furnished: Semi</Text>
                        </View>
                        <View style={{flexDirection:'row', alignItems:'center'}}>
                            <Icon name="circle" style={{marginRight:10,}}></Icon>
                            <Text style={{fontSize:18, fontFamily:'Roboto-Medium', letterSpacing:1, color:'grey', lineHeight:26}}>Ownership: Freeholg</Text>
                        </View>
                        <View style={{flexDirection:'row', alignItems:'center'}}>
                            <Icon name="circle" style={{marginRight:10,}}></Icon>
                            <Text style={{fontSize:18, fontFamily:'Roboto-Medium', letterSpacing:1, color:'grey'}}>Property Condition: New</Text>
                        </View>
                        <View style={{flexDirection:'row', alignItems:'center'}}>
                            <Icon name="circle" style={{marginRight:10,}}></Icon>
                            <Text style={{fontSize:18, fontFamily:'Roboto-Medium', letterSpacing:1, color:'grey', lineHeight:26}}>Property Type: Flat</Text>
                        </View>
                    </View>
                </Content>
                <Footer>
                    <FooterTab style={{backgroundColor:'white', borderTopWidth:1, borderTopColor:'#e2e2e2'}}>
                        <Button rounded block style={styles.button}>
                            <Text style={styles.text} onPress={() => this.props.navigation.navigate('ContactAgent')}>Ask A Question</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "rgb(192,0,0)",
        height: 40,
        marginLeft:15,
        marginRight:15,
        marginTop:8
    },
      text: {
        color:'white',
        fontFamily:'Lato-Bold',
        letterSpacing:1,
        fontSize:20
    },
})

