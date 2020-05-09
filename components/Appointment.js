import React, { Component } from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import styles from '../assets/styles/styles';
import * as Font from "expo-font";
import {Ionicons} from "@expo/vector-icons";
import  helper from '../Helper'
import AppointmentCard from "./AppointmentCard";
import AppointmentDetails from "./AppointmentDetails";
import AppointmentRateReview from "./AppointmentRateReview";

export default class Appointment extends Component {
    constructor(props){
        super(props)
        this.state = {}
    }

    async componentDidMount() {
        await Font.loadAsync({
            'Roboto': require('native-base/Fonts/Roboto.ttf'),
            'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
            ...Ionicons.font,
        })
        this.setState({myAppointments:true})
    }
    __resetAllState(){

        for(var key in this.state){
            this.state[key] = false
        }
    }

    goToHome(){
        this.props.navigation.navigate('Home')
    }
    rateAndReview(){
        if(this.appointment){
            this.__resetAllState()
            this.state['appointmentRate'] = true
            this.setState(this.state)
        }
    }

    onRateAndReviewSubmit(appointment){
        console.log(appointment)
        this.appointment = appointment
        this.__resetAllState()
        this.state['appointmentDetails'] = true
        this.setState(this.state)
    }

    showAppointmentDetails(appt){
        this.appointment = appt
        this.__resetAllState()
        this.state['appointmentDetails'] = true
        this.setState(this.state)
    }
    render(){
        return (
            <View style={localStyles.container} >
                {this.state.myAppointments &&  <AppointmentCard showAppointmentDetails={this.showAppointmentDetails.bind(this)}></AppointmentCard>}
                {this.state.appointmentDetails &&  <AppointmentDetails rateAndReview={this.rateAndReview.bind(this)} appointment={this.appointment}></AppointmentDetails>}
                {this.state.appointmentRate &&  <AppointmentRateReview onSubmit={this.onRateAndReviewSubmit.bind(this)} defaultRate={3} appointment={this.appointment}></AppointmentRateReview>}

            </View>

        )

    }
}

const localStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    }
})

