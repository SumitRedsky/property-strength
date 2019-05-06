import React, { Component } from 'react';
import { View, SafeAreaView, TouchableOpacity, Text, Image, StatusBar } from 'react-native';
import {
    createStackNavigator,
    createAppContainer,
    createSwitchNavigator,
    createDrawerNavigator,
    DrawerItems
} from 'react-navigation';
import AsyncStorage from '@react-native-community/async-storage';

import Splash from './splash/Splash';
import Login from './login/Login';
import Home from './home/Home';
import OtpScreen from './signup/Otpscreen';
import Signup from './signup/Signup';
import Profile from './signup/Profile'
import NavigationService from '../services/NavigationService';
import MoreDetail from './MoreDetail';
import Booking from './Booking';
import Cheque from './Cheque';
import OnlinePayment from './OnlinePayment'
import ContactAgent from './ContactAgent';
import Filter from './Filter'
import ProjectView from './projects/ProjectView';
import Amenities from './Amenities';
import ProjectMoreDetails from './ProjectMoreDetails';
import AgreeTerms from './signup/AgreeTerms';
import ProjectsListing from './projects/ProjectsListing';
import LoanCalculation from './LoanCalculation';
import OtpScreenLogin from './login/OtpscreenLogin';
import Legal from './Legal';
import ForgotMobile from './forgotPassword/ForgotMobile';
import ForgotOtp from './forgotPassword/ForgotOtp';
import ForgotPassword from './forgotPassword/ForgotPassword';
import { Container, Content, Header, Body, Footer, H3 } from 'native-base';

export default class Navigation extends Component {

    constructor(props) {
        super(props);
        this.state = {
            timePassed: false
        };
    }

    componentDidMount() {
        setTimeout(() => {
            this.setTimePassed();
        }, 3000);
    }

    setTimePassed() {
        this.setState({ timePassed: true });
    }


    render() {
        if (!this.state.timePassed) {
            return <Splash />;
        } else {
            return (
                <AppContainer ref={navigatorRef => {
                    NavigationService.setTopLevelNavigator(navigatorRef);
                }} />
            )
        }
    };
}

const customDrawerComponent = (props) => (
    <Container>
        <Header style={{ height: 100, backgroundColor: "rgb(192,0,0)", paddingLeft: 16 }}>
            <StatusBar backgroundColor="rgb(192,0,0)" />
            <Body style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image source={require('../../assets/images/user.png')} />
                <H3 style={{ marginLeft: 16, color: 'white' }}>Name</H3>
            </Body>
        </Header>
        <Content>
            <DrawerItems {...props} />
        </Content>
        <Footer style={{ backgroundColor: "white" }}>
            <TouchableOpacity style={{ width: '100%', textAlign: 'left', flexDirection: 'row' }} onPress={() => {
                AsyncStorage.multiRemove(['mobile', 'otp', 'user_type', 'firstname', 'lastname', 'email', 'company_name', 'password', 'login_status', 'token']);
                props.navigation.navigate('Login');
            }}>
                <Image source={require('../../assets/images/logout.png')} style={{ margin: 16, }} />
                <Text style={{ fontSize: 18, color: 'black', margin: 16, marginLeft: 0 }}>Logout</Text>
            </TouchableOpacity>
        </Footer>
    </Container>
)

const AppStack = createDrawerNavigator(
    {
        Home: createStackNavigator({
            Home: Home,
            MoreDetail: MoreDetail,
            Booking: Booking,
            Cheque: Cheque,
            OnlinePayment: OnlinePayment,
            ContactAgent: ContactAgent,
            Filter: Filter,
            ProjectsListing: ProjectsListing,
            ProjectView: ProjectView,
            Amenities: Amenities,
            ProjectMoreDetails: ProjectMoreDetails,
            LoanCalculation: LoanCalculation
        }, {
                initialRouteName: 'Home',
            }),
        // Home: {
        //     screen: Home,
        //     navigationOptions: {
        //         drawerLabel: 'Home',
        //         drawerIcon: ({ tintColor }) => (
        //             <Image source={require('../../assets/images/home.png')} />
        //         ),
        //     }
        // },
        Legal: {
            screen: Legal,
            navigationOptions: {
                drawerLabel: 'Legal',
                drawerIcon: ({ tintColor }) => (
                    <Image source={require('../../assets/images/legal.png')} />
                ),
            },
        },
    }, {
        contentComponent: customDrawerComponent,
        contentOptions: {
            activeTintColor: '#d52331',
            labelStyle: {
                fontSize: 18,
                fontWeight: 'normal',
                marginLeft: 0
            },
            inactiveTintColor: '#000',
        }
    }
);

const LoginStack = createStackNavigator({
    Login: Login,
    Otpscreenlogin: OtpScreenLogin
});

const SignupStack = createStackNavigator({
    Signup: Signup,
    Otpscreen: OtpScreen,
    Profile: Profile,
    Agreeterms: AgreeTerms
});

const ForgotStack = createStackNavigator({
    ForgotMobile: ForgotMobile,
    ForgotOtp: ForgotOtp,
    ForgotPassword: ForgotPassword
})

const TopLevelNavigator = createSwitchNavigator(
    {
        App: AppStack,
        ForgotPassword: ForgotStack,
        Login: LoginStack,
        Signup: SignupStack
    }, {
        initialRouteName: 'Signup',
    }
);

const AppContainer = createAppContainer(TopLevelNavigator);