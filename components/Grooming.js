import React, { Component } from 'react';
import { KeyboardAvoidingView,Platform } from 'react-native';
import { Card, CardItem, Text, Body, Button } from "native-base";
import styles from '../assets/styles/styles';
import Login from '../components/Login';
import ContactDetails  from '../components/ContactDetails';
import GroomingSelectService from '../components/GroomingSelectService';
import GroomingSelectDate from '../components/GroomingSelectDate'
import LoginOtp  from '../components/LoginOtp';
import * as Font from "expo-font";
import {Ionicons} from "@expo/vector-icons";

export default class Grooming extends Component {
    constructor(props){
        super(props)
        this.state = {isLogin:false,contactDetails:false,isSelectService:false}
        this.mobile = ''
    }

    async componentDidMount() {
        await Font.loadAsync({
            'Roboto': require('native-base/Fonts/Roboto.ttf'),
            'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
            ...Ionicons.font,
        })
        this.setState({isSelectService:true})
    }

    closeLogin(){
        this.setState({isLogin:false})
    }
    showContactDetails(){
        this.setState({isLogin:false,contactDetails:true})
    }

    requestOtp(userData){
        this.userData = userData
        this.setState({isLoginOtp:true,contactDetails:false,isLogin:false,isSelectService:false})
    }

    loginVerified(mobile,token){
        this.props.navigation.navigate('Home')
    }

    selectDate(){
        var state = {}
        for(var key in this.state){
            state[key] = false
        }

        state['isSelectDate']  = true
        this.setState(state)
    }
    render(){
        return (
            <KeyboardAvoidingView behavior={Platform.Os == "ios" ? "padding" : "height"} style={styles.Wrappercontainer}>
                {this.state.isSelectService &&
                    <GroomingSelectService next={this.selectDate.bind(this)} />
                }

                {this.state.isSelectDate &&
                    <GroomingSelectDate />
                }
                {this.state.isLogin &&
                    <Login closeMe={this.closeLogin.bind(this)} continueWithContactNumber={this.showContactDetails.bind(this)}/>
                }
                {this.state.contactDetails &&
                    <ContactDetails requestOtp={this.requestOtp.bind(this)}></ContactDetails>
                }
                {this.state.isLoginOtp &&
                    <LoginOtp userData={this.userData} loginVerified={this.loginVerified.bind(this)}></LoginOtp>
                }


            </KeyboardAvoidingView>

        )

    }
}