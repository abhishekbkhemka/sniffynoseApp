import React, { Component } from 'react';
import { KeyboardAvoidingView,Platform } from 'react-native';
import { Card, CardItem, Text, Body, Button } from "native-base";
import styles from '../assets/styles/styles';
import Login from '../components/Login';
import ContactDetails  from '../components/ContactDetails';
import GroomingSelectService from '../components/GroomingSelectService';
import GroomingSelectDate from '../components/GroomingSelectDate'
import GrommingSelectTime from '../components/GrommingSelectTime'
import LoginOtp  from '../components/LoginOtp';
import GroomingConfirmation  from '../components/GroomingConfirmation';
import GroomingScheduled  from '../components/GroomingScheduled';
import * as Font from "expo-font";
import {Ionicons} from "@expo/vector-icons";

export default class Grooming extends Component {
    groomingData = {}
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
    __resetAllState(){

        for(var key in this.state){
            this.state[key] = false
        }
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

    loginVerified(mobile,token,fullName){
        // this.props.navigation.navigate('Home')
        this.__resetAllState()
        this.state['isGroomingConfirmation']  = true
        this.groomingData['user'] = {full_name:fullName,mobile_number:mobile}
        this.setState(this.state)

    }



    selectDate(selectedServiceOrPackage){

        this.__resetAllState()
        this.state['isSelectDate']  = true
        if(selectedServiceOrPackage.package){
            this.groomingData['package'] = selectedServiceOrPackage.package
        }
        if(selectedServiceOrPackage.services && selectedServiceOrPackage.services.length>0 ){
            this.groomingData['services'] = selectedServiceOrPackage.services
        }
        this.setState(this.state)
    }

    selectTime(selectedDate){
        console.log(selectedDate)
        if(!selectedDate){
            Alert.alert('Please select approximate date of grooming')
            return
        }
        this.__resetAllState()
        this.state['isSelectTime']  = true
        this.groomingData['date'] = selectedDate
        this.setState(this.state)
    }

    requestAppointment(time){
        this.__resetAllState()
        this.state['isLogin']  = true
        this.groomingData['time'] = time
        this.setState(this.state)
    }

    appointmentRequestConfirmed(){
        this.__resetAllState()
        this.state['isGroomingConfirmed']  = true
        // this.groomingData['time'] = time
        this.setState(this.state)
    }
    goToHome(){
        this.props.navigation.navigate('Home')
    }
    render(){
        return (
            <KeyboardAvoidingView behavior={Platform.Os == "ios" ? "padding" : "height"} style={styles.Wrappercontainer}>
                {this.state.isSelectService &&
                    <GroomingSelectService next={this.selectDate.bind(this)} />
                }

                {this.state.isSelectDate &&
                    <GroomingSelectDate next={this.selectTime.bind(this)}  />
                }
                {this.state.isSelectTime &&
                <GrommingSelectTime next={this.requestAppointment.bind(this)}  />
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

                {this.state.isGroomingConfirmation &&
                    <GroomingConfirmation data={this.groomingData} onSuccess={this.appointmentRequestConfirmed.bind(this)} />
                }

                {this.state.isGroomingConfirmed &&
                <GroomingScheduled goToHome={this.goToHome.bind(this)} />
                }


            </KeyboardAvoidingView>

        )

    }
}