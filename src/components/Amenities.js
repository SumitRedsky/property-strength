import React, {Component} from 'react';
import {Text, StyleSheet, StatusBar, View} from 'react-native';
import { Container, Header, Content, Footer, Left, Body, Button, H3, FooterTab } from 'native-base';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons'


export default class Amenities extends Component {

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
                        <H3 style={{fontFamily:"Lato-Bold",letterSpacing:1,textAlign:"left"}}>Amenities</H3>
                    </Body>
                </Header>
                <Content>
                <View style={{marginTop:15, paddingBottom:15, flexDirection:'row',  justifyContent:'space-around'}}>
                    <View style={{flex:1}}>
                        <Icon name="wifi" style={{fontSize:30, color:'rgb(192,0,0)',textAlign:'center'}}></Icon>
                        <Text  style={styles.amenities}>wifi</Text>
                    </View>
                    <View style={{flex:1}}>
                        <Icon name="pool" style={{fontSize:30, color:'rgb(192,0,0)',textAlign:'center'}}></Icon>
                        <Text style={styles.amenities}>Swimming Pool</Text>
                    </View>
                    <View style={{flex:1}}>
                        <Icon name="dumbbell" style={{fontSize:30, color:'rgb(192,0,0)',textAlign:'center'}}></Icon>
                        <Text style={styles.amenities} >Gym</Text>
                    </View>
                </View>
                <View style={{marginTop:15, paddingBottom:15, flexDirection:'row',  justifyContent:'space-around'}}>
                    <View style={{flex:1}}>
                        <Icon name="hospital-building" style={{fontSize:30, color:'redrgb(192,0,0)',textAlign:'center'}}></Icon>
                        <Text  style={styles.amenities}>Vastu Compliant</Text>
                    </View>
                    <View style={{flex:1}}>
                        <Icon name="filter" style={{fontSize:30, color:'rgb(192,0,0)',textAlign:'center'}}></Icon>
                        <Text style={styles.amenities}>Water Purifier</Text>
                    </View>
                    <View style={{flex:1}}>
                        <Icon name="phone-classic" style={{fontSize:30, color:'rgb(192,0,0)',textAlign:'center'}}></Icon>
                        <Text style={styles.amenities}>Intercom</Text>
                    </View>
                </View>
                <View style={{marginTop:15, paddingBottom:15, flexDirection:'row', flexWrap:'wrap', justifyContent:'space-around'}}>
                    <View style={{flex:1}}>
                        <Icon name="fan" style={{fontSize:30, color:'rgb(192,0,0)',textAlign:'center'}}></Icon>
                        <Text  style={styles.amenities}>Centrally Aircondition</Text>
                    </View>
                    <View style={{flex:1}}>
                        <Icon name="water-percent" style={{fontSize:30, color:'rgb(192,0,0)',textAlign:'center'}}></Icon>
                        <Text style={styles.amenities}>Lifts</Text>
                    </View>
                    <View style={{flex:1}}>
                        <Icon name="cup-water" style={{fontSize:30, color:'rgb(192,0,0)',textAlign:'center'}}></Icon>
                        <Text style={styles.amenities}>Water Storage</Text>
                    </View>
                </View>

                <View style={{marginTop:15, paddingBottom:15, flexDirection:'row', flexWrap:'wrap', justifyContent:'space-around'}}>
                    <View style={{flex:1}}>
                        <Icon name="worker" style={{fontSize:30, color:'rgb(192,0,0)',textAlign:'center'}}></Icon>
                        <Text  style={styles.amenities}>Maintenance Staff</Text>
                    </View>
                    <View style={{flex:1}}>
                        <Icon name="gas-cylinder" style={{fontSize:30, color:'rgb(192,0,0)',textAlign:'center'}}></Icon>
                        <Text style={styles.amenities}>Piped Gasline</Text>
                    </View>
                    <View style={{flex:1}}>
                        <Icon name="security-network" style={{fontSize:30, color:'rgb(192,0,0)',textAlign:'center'}}></Icon>
                        <Text  style={styles.amenities}>Security Personal</Text>
                    </View>
                </View>

                <View style={{marginTop:15, paddingBottom:15, flexDirection:'row', flexWrap:'wrap', justifyContent:'space-around'}}>
                    <View style={{flex:1}}>
                        <Icon name="hospital-building" style={{fontSize:30, color:'rgb(192,0,0)',textAlign:'center'}}></Icon>
                        <Text  style={styles.amenities}>Club</Text>
                    </View>
                    <View style={{flex:1}}>
                        <Icon name="delete-empty" style={{fontSize:30, color:'rgb(192,0,0)',textAlign:'center'}}></Icon>
                        <Text style={styles.amenities}>Waste Disposal</Text>
                    </View>
                    <View style={{flex:1}}>
                        <Icon name="weather-rainy" style={{fontSize:30, color:'rgb(192,0,0)',textAlign:'center'}}></Icon>
                        <Text style={styles.amenities}>Rain Water Harvasting</Text>
                    </View>
                </View>

                <View style={{marginTop:15, paddingBottom:15, flexDirection:'row', flexWrap:'wrap', justifyContent:'space-around'}}>
                    <View style={{flex:1}}>
                        <Icon name="flower" style={{fontSize:30, color:'rgb(192,0,0)',textAlign:'center'}}></Icon>
                        <Text  style={styles.amenities}>Private Garden & terrace</Text>
                    </View>
                    <View style={{flex:1}}>
                        <Icon name="bank" style={{fontSize:30, color:'rgb(192,0,0)',textAlign:'center'}}></Icon>
                        <Text style={styles.amenities}>Bank Attached Property</Text>
                    </View>
                    <View style={{flex:1}}>
                        
                    </View>
                </View>
                </Content>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    amenities:{
        color:'black',
        textAlign:'center',
        fontFamily:"Roboto-Medium",
        fontSize:15,
        letterSpacing:1
      }

})

