import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';


export default function AppointmentsScree() {
    return (
        <View style={styles.container}>
            <Text>
            Components:
            1. Appointment Card
            2. Appointment Details
            3. Appointment rate and review
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    }
})
