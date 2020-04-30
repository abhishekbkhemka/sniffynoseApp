import React, { Component } from 'react';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { Image, Platform, StyleSheet, TouchableOpacity, View , Modal} from 'react-native';
import { Card, CardItem, Text, Body, Button } from "native-base";
import styles from '../assets/styles/styles';

export default class Login extends Component {
    state = {
        loading: true,
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
           
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.7)'}}>
                    <View style={styles.bottomViewModal}>
                    <View style={styles.modalWrapper}>
                <View>
                    <Text  style={styles.loginHeading}>Login/Register to Confirm Appointment</Text>
                </View>
                    <Body style={styles.paddingtopbottomSpacing}>
                        <TouchableOpacity style={styles.FacebookStyle} onPress={this._onContinueWithFacebook}>
                            <Image
                                source={require('../assets/images/facebook.png')} style={styles.ImageIconStyle} />
                            <Text style={styles.TextStyle}> Continue with Facebook</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.GoogleStyle} onPress={this._onContinueWithGoogle}>
                            <Image
                                source={require('../assets/images/google.png')} style={styles.ImageIconStyle} />
                            <Text style={styles.TextStyle}> Continue with Google</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.PhoneStyle} activeOpacity={0.5} onPress={()=>this.props.continueWithContactNumber()}>
                            <Image
                                source={require('../assets/images/phone.png')} style={styles.ImageIconStyle} />
                            <Text style={styles.TextStylephone}>Continue with Contact Number</Text>
                        </TouchableOpacity>
                    </Body>
                </View>
                    <View style={{flex:1, alignItems:'center'}}>
                    <Button style={[styles.secondarybtn,styles.borderbtnSecondary]} onPress={() => this.props.closeMe()}>
                        <Text>Close</Text>
                    </Button>
                </View>
           </View>
           </View>
     
        )
    }
}
