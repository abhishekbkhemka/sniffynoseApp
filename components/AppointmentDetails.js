import React, { Component } from 'react'
import { Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Card,  H2} from "native-base";
import styles from '../assets/styles/styles';

export default class AppointmentDetails extends Component {
    render() {
        return (
            <ScrollView>
                <View style={{justifyContent: 'flex-start', width:'100%' , margin: 'auto'}}>
                        <View style={[styles.headingWrapper, styles.m20]}>
                            <TouchableOpacity>
                                <Image  style={styles.leftIconpayment}
                                        source={require('../assets/images/lefticon.png')}/>
                                <Text style={[styles.headingMain, styles.lefticonspacing]}>Appointment Details</Text>
                                </TouchableOpacity>
                        </View>

                        <View style={styles.detailwrapper}>
                            <Card style={styles.cardpaymentwrapper}>
                                <View>
                                    <H2 style={styles.cardpaymentheading}>Groomer Details</H2>
                                </View>
                                <View style={styles.paymentproductblock}>
                                        <View style={styles.paymentproductview}>
                                            <Text style={styles.paymenttitle}>Name</Text>
                                            <Text style={styles.paymentsubtitle}>Shanay Haynes</Text>
                                        </View>
                                        
                                </View>

                                <View style={styles.paymentproductblock}>
                                        <View style={styles.paymentproductviewA}>
                                            <Text style={styles.paymenttitle}>Date</Text>
                                            <Text style={styles.paymentsubtitle}>Oct 20, 2019</Text>
                                        </View>
                                        <View style={styles.paymentproductviewAP}>
                                            <Text style={styles.paymenttitle}>Time</Text>
                                            <Text style={styles.paymentsubtitle}>1:00 PM - 2:00 PM</Text>
                                        </View>
                                </View>
                            </Card>

                            <Card style={styles.cardpaymentwrapper}>
                                <View>
                                    <H2 style={styles.cardpaymentheading}>Groomer Details </H2>
                                    <Text style={styles.groomingnotification}>3</Text>
                                </View>
                                <View style={styles.paymentproductblock}>
                                    <View style={styles.paymentproductview}>
                                        <Text style={styles.paymenttitle}>Grooming Type</Text>
                                        <Text style={styles.paymentsubtitle}>Shampoo</Text>
                                    </View>
                                    <View style={styles.paymentproductviewc}>
                                        <Text style={styles.paymenttitle}>Cost</Text>
                                        <Text style={styles.paymentsubtitle}>400 INR</Text>
                                    </View>
                                  </View>

                                 <View style={styles.paymentproductblock}>
                                    <View style={styles.paymentproductview}>
                                        <Text style={styles.paymenttitle}>Grooming Type</Text>
                                        <Text style={styles.paymentsubtitle}>Conditioning</Text>
                                    </View>
                                    <View style={styles.paymentproductviewc}>
                                        <Text style={styles.paymenttitle}>Cost</Text>
                                        <Text style={styles.paymentsubtitle}>400 INR</Text>
                                    </View>
                                  </View>
                            </Card>

                            <Card style={styles.cardpaymentwrapper}>
                                <View>
                                    <H2 style={styles.cardpaymentheading}>doggo Details</H2>
                                </View>
                               
                                <View style={styles.paymentproductblock}>
                                        <View style={styles.paymentproductview}>
                                            <Text style={styles.paymenttitle}>Breed</Text>
                                            <Text style={styles.paymentsubtitle}>German Shepherd</Text>
                                        </View>
                                        <View style={styles.paymentproductviewc}>
                                            <Text style={styles.paymenttitle}>Age</Text>
                                            <Text style={styles.paymentsubtitle}>5 Years</Text>
                                        </View>
                                </View>
                            </Card>
                            <Card style={styles.cardpaymentwrapper}>
                                <View>
                                    <H2 style={styles.cardpaymentheading}>Notes</H2>
                                </View>
                               
                                <View style={styles.paymentproductblock}>
                                            <Text style={styles.paymentsubtitle}>Lorem ipsum dolor sit amet, consectetur 
                                                adipiscing elit, sed do eiusmod tempor 
                                                incididunt ut labore et dolore magna 
                                                aliqua. Ut enim ad minim veniam.</Text>
                                </View>
                            </Card>
                      </View>
                  </View>
            </ScrollView>
        )
    }
}
