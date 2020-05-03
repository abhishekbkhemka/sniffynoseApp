import React, { Component } from 'react'
import { Text, View , ScrollView, Image, TouchableOpacity} from 'react-native';
import { Container, Header, Content, Tab, Tabs } from 'native-base';
import styles from '../assets/styles/styles';
import AppointmentTab from './AppointmentTab';

export default class AppointmentCard extends Component {
    render() {
        return (
           
<ScrollView>
<View style={{justifyContent: 'flex-start', width:'100%' , margin: 'auto'}}>
    <View style={[styles.headingWrapper, styles.m20]}>
         <TouchableOpacity>
             <Image  style={styles.leftIconpayment}
                    source={require('../assets/images/lefticon.png')}/>
              <Text style={[styles.headingMain, styles.lefticonspacing]}>My Appointments</Text>
          </TouchableOpacity>
      </View>
               <View>
                <Tabs>
                    <Tab heading="All">
                    <AppointmentTab></AppointmentTab>
                    </Tab>
                    <Tab heading="Upcoming">
                    <AppointmentTab></AppointmentTab>
                    </Tab>
                    <Tab heading="Select Date">
                    <AppointmentTab></AppointmentTab>
                    </Tab>
               </Tabs>
        </View>
      </View>
      </ScrollView>
        )
    }
}
