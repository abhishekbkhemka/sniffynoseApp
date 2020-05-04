import React, { Component } from 'react'
import { Text, View, Image } from 'react-native';
import styles from '../assets/styles/styles';

export default class AppointmentTab extends Component {
    render() {
        return (
            <View>
                    <View style={[styles.headingWrapper, styles.mb10]}>
                         <Text  style={styles.headingMainappointment}>Upcoming</Text>
                    </View>

                    <View style={styles.confirmblock}>
                        <View style={styles.appointdateblock}>
                            <Text style={styles.dateblocknumber}>20</Text>
                            <Text style={styles.dateblocktext}>Feb, 2020</Text>
                        </View>
                        <View style={styles.appointmentproduct}>
                            <Text style={styles.appointmentproductheading}>Haircut (Pomeranian)</Text>
                            <View style={styles.appointmentnamepricewrapper}>
                            <Text style={styles.appointmentprodctname}>Shanay Haynes</Text>
                            <Text style={styles.appointmentdot}></Text>
                            <Text style={[styles.appointmentproductnameprice, styles.mr10]}>INR 899</Text>
                            </View>
                            <Text style={styles.appointmentproducttime}>Sunday Afternoon</Text>
                        </View>
                        <View style={styles.appointmentprice}>
                            <Text style={styles.deleteappointmenticon}>
                                <Image  style={{width: 3.4, height: 12}} source={require('../assets/images/menuAppointment.png')}/></Text>
                        </View>
                    </View>

                    <View style={styles.confirmblock}>
                        <View style={styles.appointdateblock}>
                            <Text style={styles.dateblocknumber}>18</Text>
                            <Text style={styles.dateblocktext}>Feb, 2020</Text>
                        </View>
                        <View style={styles.appointmentproduct}>
                            <Text style={styles.appointmentproductheading}>Basic Combo (German Sheph...)</Text>
                            <Text style={styles.appointmentproductnameprice}>Edwin Dawe</Text>
                            <Text style={styles.appointmentproducttime}>Sunday Afternoon</Text>
                        </View>
                        <View style={styles.appointmentprice}>
                            <Text style={styles.deleteappointmenticon}>
                                <Image  style={{width: 3.4, height: 12}} source={require('../assets/images/menuAppointment.png')}/></Text>
                        </View>
                    </View>

                    <View style={[styles.headingWrapper, styles.mb10]}>
                         <Text  style={styles.headingMainappointment}>Past appointments</Text>
                    </View>

                    <View style={styles.confirmblock}>
                        <View style={styles.appointdateblock}>
                            <Text style={styles.dateblocknumber}>12</Text>
                            <Text style={styles.dateblocktext}>Feb, 2020</Text>
                        </View>
                        <View style={styles.appointmentproduct}>
                            <Text style={styles.appointmentproductheading}>Haircut (Pomeranian)</Text>
                            <Text style={styles.appointmentproductnameprice}>Edwin Dawe</Text>
                            <Text style={styles.appointmentproducttime}>Sunday Afternoon</Text>
                        </View>
                        <View style={styles.appointmentprice}>
                            <Text style={styles.deleteappointmenticon}>
                                <Image  style={{width: 3.4, height: 12}} source={require('../assets/images/menuAppointment.png')}/></Text>
                        </View>
                    </View>

                    <View style={styles.confirmblock}>
                        <View style={styles.appointdateblock}>
                            <Text style={styles.dateblocknumber}>20</Text>
                            <Text style={styles.dateblocktext}>Feb, 2020</Text>
                        </View>
                        <View style={styles.appointmentproduct}>
                            <Text style={styles.appointmentproductheading}>Haircut (Pomeranian)</Text>
                            <Text style={styles.appointmentproductnameprice}>Edwin Dawe</Text>
                            <Text style={styles.appointmentproducttime}>Sunday Afternoon</Text>
                        </View>
                        <View style={styles.appointmentprice}>
                            <Text style={styles.deleteappointmenticon}>
                                <Image  style={{width: 3.4, height: 12}} source={require('../assets/images/menuAppointment.png')}/></Text>
                        </View>
                    </View>

            </View>
        )
    }
}
