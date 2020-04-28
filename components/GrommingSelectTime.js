import React, { Component } from 'react';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { Image, Platform, StyleSheet, TouchableOpacity, View ,Alert} from 'react-native';
import { Card, CardItem, Text, Body, Button } from "native-base";
import styles from '../assets/styles/styles';

export default class GrommingSelectTime extends Component {
    state = {

      }

      constructor(props){
        super(props)
      }
    
      async componentDidMount() {
        await Font.loadAsync({
          'Roboto': require('native-base/Fonts/Roboto.ttf'),
          'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
          ...Ionicons.font,
        })
      }
    selectTime(time){
        this.setState({selectedTime:time})
    }

    requestAppointment(){
        if(!this.state.selectedTime){
            Alert.alert('Please select time range')
            return
        }
        this.props.next(this.state.selectedTime)
    }
    render() {

        return (
            <Card transparent style={styles.bottomView}>
                <CardItem style={styles.cardWrapper}>
                <View style={styles.headingWrapper}>
                    <Text  style={styles.headingMain}>Select a Time!</Text>
                </View>
                    <Body style={styles.paddingtopbottomSpacing}>
                        <TouchableOpacity style={styles.buttontertiary} onPress={()=>this.selectTime('morning')}>
                           
                            <Text style={styles.TextStylephone}>Morning (9:30 AM - 12 PM)</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.buttontertiary} onPress={()=>this.selectTime('afternoon')}>
                            <Text style={styles.TextStylephone}> Afternoon (12 PM - 3 PM)</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.buttontertiary} onPress={()=>this.selectTime('evening')}>
                            <Text style={styles.TextStylephone}>Evening (3 PM - 6 PM)</Text>
                        </TouchableOpacity>


                    </Body>
                    <Button style={styles.primarybtn} onPress={()=>this.requestAppointment()}>
                            <Text  style={styles.colorPrimarybtn}>Request Appointment</Text>
                      </Button> 
                </CardItem>
                  
            </Card>

        )
    }
}
