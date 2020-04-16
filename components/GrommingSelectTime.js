import React, { Component } from 'react';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { Image, Platform, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Card, CardItem, Text, Body, Button } from "native-base";
import styles from '../assets/styles/styles';

export default class GrommingSelectTime extends Component {
    state = {
        loading: true
      }
    
      async componentDidMount() {
        await Font.loadAsync({
          'Roboto': require('native-base/Fonts/Roboto.ttf'),
          'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
          ...Ionicons.font,
        })
        this.setState({ loading: false })
      }
    render() {
        if (this.state.loading) {
         return (
           <View></View>
         );
       }
        return (
            <Card transparent style={styles.bottomView}>
                <CardItem style={styles.cardWrapper}>
                <View style={styles.headingWrapper}>
                    <Text  style={styles.headingMain}>Select a Time!</Text>
                </View>
                    <Body style={styles.paddingtopbottomSpacing}>
                        <TouchableOpacity style={styles.buttontertiary}>
                           
                            <Text style={styles.TextStylephone}>Morning (9 AM - 12 PM)</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.buttontertiary}>
                            <Text style={styles.TextStylephone}> Afternoon (12 PM - 4 PM)</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.buttontertiary}>
                            <Text style={styles.TextStylephone}>Evening (4 PM - 7 PM)</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.buttontertiary}>
                            <Text style={styles.TextStylephone}>Late Evening (7 PM - 9  PM)</Text>
                        </TouchableOpacity>
                    </Body>
                    <Button style={styles.primarybtn}>
                            <Text  style={styles.colorPrimarybtn}>Request Appointment</Text>
                      </Button> 
                </CardItem>
                  
            </Card>

        )
    }
}
