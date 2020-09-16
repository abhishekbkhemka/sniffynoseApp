import React, { Component } from 'react'
import { Image, Platform, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Card, CardItem, Text, Body, Button , H2} from "native-base";
import styles from '../assets/styles/styles';

export default class GroomingScheduled extends Component {

    render() {
        return (
                   <View style={styles.bottomView}>
                        <View>
                          <Image style={styles.GdoneImage}
                            source={require('../assets/images/sceduledIcon.png')}/>
                            <H2 style={styles.headingscheduleText}>Awesome! Your appointment has been requested!</H2>
                            <Text style={styles.paradetailtext}>Someone from Sniffy Nose will get in touch with you soon.</Text> 
                         </View>
                         <View style={{flex:1, alignItems:'center'}}>
                            <TouchableOpacity style={[styles.transparentbtnwborder]} onPress={()=>this.props.goToHome()}>
                                <Text style={[styles.colorPrimarybtn, styles.gobacktext]}>Go back to home</Text>
                            </TouchableOpacity>
                         </View>
                  </View> 
        )
    }
}
