import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Appointment from "../components/Appointment";


export default function AppointmentsScreen() {
    return (
        <View style={styles.container}>

            <Appointment></Appointment>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    }
})
