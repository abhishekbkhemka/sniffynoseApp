import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import AppointmentCard from '../components/AppointmentCard';
import AppointmentDetails from '../components/AppointmentDetails';
import AppointmentRateReview from '../components/AppointmentRateReview';


export default function AppointmentsScreen() {
    return (
        <View style={styles.container}>

            {/* <AppointmentCard></AppointmentCard> */}
            {/* <AppointmentDetails></AppointmentDetails> */}
            <AppointmentRateReview></AppointmentRateReview>
          
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    }
})
