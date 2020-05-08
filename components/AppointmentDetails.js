import React, { Component } from 'react'
import { Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import {Button, Card, H2} from "native-base";
import styles from '../assets/styles/styles';
import Moment from 'moment'

export default class AppointmentDetails extends Component {
    constructor(props){
        super(props)
    }
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
                                            <Text style={styles.paymentsubtitle}>{this.props.appointment.groomer.full_name}</Text>
                                        </View>
                                        
                                </View>

                                <View style={styles.paymentproductblock}>
                                        <View style={styles.paymentproductviewA}>
                                            <Text style={styles.paymenttitle}>Date</Text>
                                            <Text style={styles.paymentsubtitle}>{Moment(this.props.appointment.date).format('ll')} {this.props.appointment.start_date_time?(' ('+this.props.appointment.time_range.title()+')'):''}</Text>
                                        </View>
                                        <View style={styles.paymentproductviewAP}>
                                            {this.props.appointment.start_date_time && <Text style={styles.paymenttitle}>Started</Text>}
                                            {this.props.appointment.start_date_time && <Text style={styles.paymentsubtitle}>{Moment(this.props.appointment.start_date_time).format('LT')}</Text>}

                                            {!this.props.appointment.start_date_time && <Text style={styles.paymenttitle}>Time</Text>}
                                            {!this.props.appointment.start_date_time && <Text style={styles.paymentsubtitle}>{this.props.appointment.time_range.title()}</Text>}
                                        </View>
                                </View>
                            </Card>

                            <Card style={styles.cardpaymentwrapper}>
                                <View>
                                    <H2 style={styles.cardpaymentheading}>Service Details </H2>
                                    <Text style={styles.groomingnotification}>{this.props.appointment.price}</Text>
                                </View>
                                {this.props.appointment.packages.map(pack =>(<View key={Moment().millisecond()} style={styles.paymentproductblock}>
                                    <View  style={styles.paymentproductview}>
                                        <Text style={styles.paymenttitle}>Grooming Type</Text>
                                        <Text style={styles.paymentsubtitle}>{pack.name}</Text>
                                    </View>
                                    <View style={styles.paymentproductviewc}>
                                        <Text style={styles.paymenttitle}>Cost</Text>
                                        <Text style={styles.paymentsubtitle}>{pack.price} INR</Text>
                                    </View>
                                  </View>))}

                                {this.props.appointment.services.map(service =>(<View key={Moment().millisecond()} style={styles.paymentproductblock}>
                                    <View  style={styles.paymentproductview}>
                                        <Text style={styles.paymenttitle}>Grooming Type</Text>
                                        <Text style={styles.paymentsubtitle}>{service.name}</Text>
                                    </View>
                                    <View style={styles.paymentproductviewc}>
                                        <Text style={styles.paymenttitle}>Cost</Text>
                                        <Text style={styles.paymentsubtitle}>{service.price} INR</Text>
                                    </View>
                                </View>))}


                            </Card>

                            {this.props.appointment.pets.length>0 &&
                            <Card style={styles.cardpaymentwrapper}>
                                <View>
                                    <H2 style={styles.cardpaymentheading}>doggo Details</H2>
                                </View>
                               
                                {this.props.appointment.pets.map(pet =>(<View key={Moment().millisecond()} style={styles.paymentproductblock}>
                                        <View  style={styles.paymentproductview}>
                                            <Text style={styles.paymenttitle}>Name & Breed</Text>
                                            <Text style={styles.paymentsubtitle}>{pet.name+' '+pet.breed}</Text>
                                        </View>
                                        <View style={styles.paymentproductviewc}>
                                            <Text style={styles.paymenttitle}>Age</Text>
                                            <Text style={styles.paymentsubtitle}>{pet.age}</Text>
                                        </View>
                                </View>))}
                            </Card>}

                            {this.props.appointment.notes.length>0 &&
                            <Card style={styles.cardpaymentwrapper}>
                                <View>
                                    <H2 style={styles.cardpaymentheading}>Notes</H2>
                                </View>

                                <View style={styles.paymentproductblock}>
                                    <Text style={styles.paymentsubtitle}>{this.props.appointment.notes}</Text>
                                </View>
                            </Card>}
                      </View>
                    {!this.props.appointment.groomer_rating && <Button style={styles.submitfooterbtn} onPress={()=>this.props.rateAndReview()} >
                        <Text  style={styles.colorPrimarybtn}>Rate and Review</Text>
                    </Button>}
                  </View>
            </ScrollView>
        )
    }
}
