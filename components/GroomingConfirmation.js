import React, { useState, Component } from 'react';
import {View, ScrollView, Image, Picker} from 'react-native';
import { H2, Card, CardItem, Text, Body, Item, Input, Label, Button} from "native-base";
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import styles from '../assets/styles/styles';

export default class GroomingConfirmation extends Component {
  
    state = {
        loading: true
      }
     async componentDidMount() {
        await Font.loadAsync({
          'Roboto': require('native-base/Fonts/Roboto.ttf'),
          'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
          ...Ionicons.font,
        })
        this.setState({ loading: false })
      }
    render() {
        if (this.state.loading) {
         return (
           <View></View>
         );
       }
        return (
        

<ScrollView>
<View style={{flex:1, justifyContent: 'flex-start', width:'96%' , margin: 'auto'}}>
  
      <View style={styles.headingWrapper, styles.mb20}>
              <Text  style={styles.headingMain}>Confirm your appointment!</Text>
      </View>
        <View style={styles.confirmblock}>
          <View style={styles.appointdateblock}>
            <Text style={styles.dateblocknumber}>23</Text>
            <Text style={styles.dateblocktext}>Feb</Text>
            </View>
          <View style={styles.appointmentproduct}>
            <Text style={styles.appointmentproductname}>Shampoo</Text>
            <Text style={styles.appointmentproducttime}>Friday Evening</Text>
          </View>
          <View style={styles.appointmentprice}>
              <Text style={styles.deleteappointmenticon}><Image  style={{width: 11, height: 12}}
                                      source={require('../assets/images/trash.png')}/></Text> 
              <Text style={styles.productprice}>INR 400</Text>
          </View>
      </View>

      <View style={styles.confirmblock}>
          <View style={styles.appointdateblock}>
            <Text style={styles.dateblocknumber}>23</Text>
            <Text style={styles.dateblocktext}>Feb</Text>
            </View>
          <View style={styles.appointmentproduct}>
            <Text style={styles.appointmentproductname}>Conditioning</Text>
            <Text style={styles.appointmentproducttime}>Friday Evening</Text>
          </View>
          <View style={styles.appointmentprice}>
              <Text style={styles.deleteappointmenticon}><Image  style={{width: 11, height: 12}}
                                      source={require('../assets/images/trash.png')}/></Text> 
              <Text style={styles.productprice}>INR 400</Text>
          </View>
      </View>

      <View style={styles.mainwrapper}>
      <Card transparent>
                  <CardItem style={styles.cardWrapper}>
                     <Body style={styles.paddingtopbottomSpacing}>
                          <Text  style={styles.HeadingBlock}>Doggo Details (Optional)</Text>
                          <View style={styles.picker}>
                            <Picker  style={styles.selectpicker}>
                                <Picker.Item label="Select doggo's breed" />
                              <Picker.Item label="Java" value="java" />
                              <Picker.Item label="JavaScript" value="js" />
                            </Picker>
                            </View>
                          <View style={{width:'100%', position:'relative'}}>
                            <Text style={styles.years}>Years</Text>
                           <Item  style={styles.inputBLock} floatingLabel>
                                <Label style={styles.inputfiledLabel}>Enter doggo's age</Label>
                                <Input  />
                            </Item>
                            </View>

                            <Item  style={styles.inputBLock} floatingLabel>
                                <Label style={styles.inputfiledLabel}>Comments</Label>
                                <Input  />
                            </Item>
                            
                     </Body>
                      <Button style={styles.primarybtn}>
                            <Text  style={styles.colorPrimarybtn}>Confirm Appointment</Text>
                      </Button> 
                </CardItem>
                    
            </Card>
      </View>
</View>
    </ScrollView>
        )
    }
}
