import React, {Component} from 'react';
import {Text,TouchableHighlight, StyleSheet, View} from 'react-native';
import { H3, Button} from 'native-base';
import Pie from 'react-native-pie';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons'
import { withNavigation } from 'react-navigation';


export class PieCharts extends Component {
  static navigationOptions = {
    header: null,
  }

    render () {
        return(
          <View>
            <View style={{flexDirection:'row'}}>
              <View style={{flex:1, justifyContent: 'center',alignItems:'center'}}>
                <Pie
                radius={60}
                innerRadius={40}
                series={[20, 80]}
                colors={['#9d64e3', '#20b261']} />
                <View style={styles.gauge}>
                  <Text style={styles.gaugeText}>Rs.1,989/month</Text>
                </View>
              </View>
              <View style={{flex:1.5,justifyContent:'flex-end',paddingBottom:20}}>
                <Text style={styles.text}>Rs.50,000 (15%) down pmt</Text>
                <Text style={styles.text}>20-Year Fixed at 4.24%</Text>
              </View>
            </View>
            <View style={{flexDirection:'row',marginTop:40}}>
              <View style={{flexDirection:'row',flex:1,alignItems:'center'}}>
                <Icon name="circle" style={{color:'#20b261',paddingRight:15}}></Icon>
                <Text style={styles.text}>Principal Amount</Text>
              </View>
              <H3 style={styles.number}> Rs.50,00,000</H3>
            </View>
            <View style={{flexDirection:'row',marginTop:20}}>
              <View style={{flexDirection:'row', flex:1,alignItems:'center'}}>
                <Icon name="circle" style={{color:'#9d64e3',paddingRight:15}}></Icon>
                <Text style={styles.text}>Rate of Interest</Text>
              </View>
              <H3 style={styles.number}>10%</H3>
            </View>
            <View style={{marginTop:20}}>
              <TouchableHighlight style={{alignItems:'center'}}>
                <Button transparent style={{alignItems:'center', justifyContent:'center'}} onPress={()=> {this.props.navigation.navigate('LoanCalculation')}}>
                  <Icon name='calculator' style={{color:'black',fontSize:35,alignItems:'center'}}></Icon>
                  <Text style={{color:'black',letterSpacing:1,fontFamily:"Lato-Bold", fontSize:17}}>EDIT</Text>
                </Button>
              </TouchableHighlight>
            </View>
          </View>
        )
  }
}

const styles =  StyleSheet.create({
  gauge: {
    position: 'absolute',
    width: 120,
    height: 120,
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap:'wrap'
  },
  gaugeText: {
    backgroundColor: 'transparent',
    color: '#000',
    fontSize: 17,
    textAlign:'center',
    fontFamily:"Roboto-Medium"
  },
  text:{
    fontSize:16,
    fontFamily:"Roboto-Medium",
    letterSpacing:1
  },
  number:{
    flex: 1,
    textAlign:'right',
    fontFamily:"Lato-Bold"
  }
});

export default withNavigation(PieCharts);