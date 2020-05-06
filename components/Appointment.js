import React, { Component } from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import styles from '../assets/styles/styles';
import * as Font from "expo-font";
import {Ionicons} from "@expo/vector-icons";
import  helper from '../Helper'
import AppointmentCard from "./AppointmentCard";
import AppointmentDetails from "./AppointmentDetails";

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

    showAppointmentDetails(appt){
        this.appointment = appt
        this.__resetAllState()
        this.state['appointmentDetails'] = true
        this.setState(this.state)
    }
    render(){
        return (
            <View >
                {this.state.myAppointments &&  <AppointmentCard showAppointmentDetails={this.showAppointmentDetails.bind(this)}></AppointmentCard>}
                {this.state.appointmentDetails &&  <AppointmentDetails appointment={this.appointment}></AppointmentDetails>}

            </View>

        )

    }
}
