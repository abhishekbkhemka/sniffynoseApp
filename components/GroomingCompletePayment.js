import React, { Component } from 'react'
import { Image, Platform, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Card, CardItem, Text, Body, Button , H2, H4} from "native-base";
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import styles from '../assets/styles/styles';
const paymentmode =[
    { label:"Cash", value:0},
    { label:"Card", value:1},
    { label:"Paytm", value:2}
]


export default class GroomingCompletePayment extends Component {
    render() {
        
        return (
            <View style={styles.groomingpayment}>
               <View style={styles.headerbackpayment}>
               <TouchableOpacity>
               <Image
                    style={styles.leftIconpayment}
                    source={require('../assets/images/lefticon.png')}/>
                    <Text style={styles.colorPrimarybtn, styles.gobacktext}>Complete Payment</Text>
                </TouchableOpacity>
               </View>
              <View>
               <Card style={styles.cardpaymentwrapper}>
                   <View>
                       <H2 style={styles.cardpaymentheading}>Payment Details</H2>
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

                   <View style={styles.paymenttotal}>
                        <Text style={[styles.paymenttitle, styles.paymentproductview]}>Total</Text>
                        <Text style={[styles.paymentsubtitle, styles.paymentproductviewc]}>800 INR</Text>
                   </View>

               </Card>
            </View>
            <View>
            <Text style={styles.paymentmode}>Payment Mode</Text>
            </View>
            <View>
            <RadioForm
            radio_props={paymentmode}
            initial={1} // you can set as per requirement, initial i set here 0 for male
            // initial={-1} // you can set as per requirement, initial i set here 0 for male
            onPress={()=>this.value}
            buttonSize={6} // size of radiobutton
            buttonOuterSize={15}
            buttonColor={'#a3a3a3'}
            selectedButtonColor={'#222ba8'}
            selectedLabelColor={'#222ba8'}
            labelStyle={{fontSize:16}}
            />
            </View>
            </View>  
        )
    }
}
