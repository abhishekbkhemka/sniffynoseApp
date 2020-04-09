import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';


export default function GroomingScreen() {
    return (
        <View style={styles.container}>
            <Text>
            Components:
            1. Service ( combo and individual)
            2. select service info
            3. grooming select date
            4. grooming select time
            5 Login
            6. Contact Number
            7. Login Otp
            8. Grooming Confirmation
            9. Grooming Complete payment
            10. Grooming general otp screen (start , end and payment)
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
