import * as React from 'react';
import { ScrollView,Image, Platform, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Card, CardItem, Text, Body } from "native-base";
import styles from '../assets/styles/styles';
import Login from '../components/Login';
import ContactDetails from '../components/ContactDetails';
import LoginOtp from '../components/LoginOtp';


export default function GroomingScreen() {
    
    return (
       
                <View style={styles.Wrappercontainer}>
                    {/* <Login/> */}
                    {/* <ContactDetails/> */}
                    <LoginOtp></LoginOtp>
                </View>
       
            );
}

