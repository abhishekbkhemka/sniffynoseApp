import React, { Component } from 'react'
import { Text, View , Image, TouchableOpacity} from 'react-native';
import styles from '../assets/styles/styles';
import { Col ,Grid } from 'react-native-easy-grid';
import { Body, Item, Input, Label, Button} from "native-base";
import {Header, Thumbnail} from 'native-base';
import { Rating, AirbnbRating } from 'react-native-ratings';
import logoImage from '../assets/images/logo.png';
const Star_Image = require('../assets/images/star.png')



export default class AppointmentRateReview extends Component {
    render() {
        return (
            <View style={{flex:1}}>
                <View>
                <Header style={styles.headerrate}> 
                <View style={styles.headerWrapper}>
                <Image  style={styles.leftIconappointment}
                                        source={require('../assets/images/chevron-left.png')}/>
                     <Text style={styles.rateheadetext}>Rate and Review</Text>
                </View>
               </Header>
                    <View style={styles.ratereviewproductwrapper}>
                    <View style={styles.confirmblockAction}>
                            <View style={styles.appointdateblock}>
                                <Text style={styles.dateblocknumber}>23</Text>
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
                            </View>
                            
                    </View>
                    </View>
                    <View style={styles.ratingspacer}>
                          <Rating
                            type='star'
                            ratingColor='#3498db'
                            selectedColor='#3498db'
                            ratingCount={5}
                            imageSize={35}
                            onFinishRating={this.ratingCompleted}
                            style={{ paddingVertical: 20 }}
                            />
                        </View>

                    <View style={styles.bottomViewModal}>
                       
                        <View style={styles.modalWrapper}>
                            <Body style={styles.paddingtopbottomSpacing}>
                                <Item  style={styles.inputBLock} floatingLabel>
                                        <Label style={styles.inputfiledLabel}>Enter your review (Optional)</Label>
                                        <Input  returnKeyType="done"  />
                                 </Item>
                            </Body>
                          </View>

                            <Grid style={{justifyContent:"space-between", width:"100%", marginTop:30,}}>
                                <Col>
                                    <TouchableOpacity style={styles.IconBottomPosition}>
                                        <Thumbnail  source={logoImage} style={styles.logofooter}/> 
                                    </TouchableOpacity>
                                </Col>
                                <Col>
                                <Button style={styles.submitfooterbtn}>
                                    <Text  style={styles.colorPrimarybtn}>Submit</Text>
                                  </Button>
                                </Col>
                              
                            </Grid>
                          

                      </View>
                
            </View>
        )
    }
}
