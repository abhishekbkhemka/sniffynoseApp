import React, { Component } from 'react'
import { Text, View } from 'react-native';
import styles from '../assets/styles/styles';
import { H2, Button, Header, Right, Thumbnail, List, ListItem, Body, Item} from 'native-base';
import HomeModalOtp from './HomeModalOtp';


export default class TopQuickAction extends Component {
    render() {
        return (
            <View>
                <Header style={styles.header}>            
                      <Text style={styles.headetext}>Upcoming Appointment</Text>
                      <Text style={styles.headernotification}>3</Text>
              </Header>
            <View style={styles.confirmproductwrapper}>
               <View style={styles.confirmblockAction}>
                    <View style={styles.appointdateblock}>
                        <Text style={styles.dateblocknumber}>23</Text>
                        <Text style={styles.dateblocktext}>Feb</Text>
                     </View>
                      <View style={styles.appointmentproduct}>
                        <Text style={styles.appointmentproductname}>Shampoo + Conditioning</Text>
                        <Text style={styles.appointmentprodctname}>German Shephard (9 yr)</Text>
                     </View>
                     </View>
                     {/* <Button style={styles.primarybtn}>
                            <Text  style={styles.colorPrimarybtn}>Start Grooming</Text>
                      </Button>  */}
                      <HomeModalOtp></HomeModalOtp>
                      </View>
            </View>
        )
    }
}
