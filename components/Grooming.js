import React, { Component } from 'react';
import { KeyboardAvoidingView,Platform } from 'react-native';
import { Card, CardItem, Text, Body, Button } from "native-base";
import styles from '../assets/styles/styles';
import Login from '../components/Login';
import ContactDetails  from '../components/ContactDetails';
import LoginOtp  from '../components/LoginOtp';

export default class Grooming extends Component {
    constructor(props){
        super(props)
        this.state = {isLogin:true,contactDetails:false}
        this.mobile = ''
    }

    closeLogin(){
        this.setState({isLogin:false})
    }
    showContactDetails(){
        this.setState({isLogin:false,contactDetails:true})
    }

    requestOtp(userData){
        this.userData = userData
        this.setState({isLoginOtp:true,contactDetails:false,isLogin:false})
    }

    loginVerified(mobile,token){
        this.props.navigation.navigate('Home')
    }
    render(){
        return (
            <KeyboardAvoidingView behavior={Platform.Os == "ios" ? "padding" : "height"} style={styles.Wrappercontainer}>
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