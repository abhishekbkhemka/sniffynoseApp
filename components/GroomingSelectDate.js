import React, { Component } from 'react';
import { Text, View , ScrollView,Alert} from 'react-native';
import { Card, CardItem, Body, Button} from "native-base";
import { Ionicons } from '@expo/vector-icons';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import {LocaleConfig} from 'react-native-calendars';
import styles from '../assets/styles/styles';
const testIDs = require('../components/testIDs');
LocaleConfig.locales['fr'] = {
    monthNames: ['January','February','March','April','May','June','July','August','September','Octomber','November','December'],
    monthNamesShort: ['Jan.','Feb.','March','April','May','June','July.','August','Sept.','Oct.','Nov.','Déc.'],
    dayNames: ['Dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi'],
    dayNamesShort: ['Sun.','Mon.','Tue.','Wed.','Thu.','Fri.','Sun.'],
    today: 'Aujourd\'hui'
  };
  LocaleConfig.defaultLocale = 'fr';
export default class GroomingSelectDate extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
          selected: undefined
        };
      }
    
      onDayPress = (day) => {
        this.setState({selected: day.dateString});
      }
      next(){
        if(!this.state.selected){
            Alert.alert('Please select a date')
            return
        }
          this.props.next(new Date(this.state.selected))
      }
    
      render() {
        return (
            
          <View  style={styles.containerCalendar}>
                <Text  style={styles.HeadingBlock}>Select a Date! </Text>
            <Calendar
              style={styles.calendar}
              testID={testIDs.calendars.LAST}
              // current={'2012-05-16'}
              minDate={new Date()}
              // maxDate={'2012-05-29'}
              onDayPress={this.onDayPress}
              markedDates={{
                  [this.state.selected]: {
                      selected: true,
                  }
              }}
              
              theme={{selectedDayBackgroundColor: '#222ba8',
              todayTextColor: '#222ba8', arrowColor: '#222ba8'}}
            />

           
            <Button style={styles.primarybtn} onPress={()=>this.next()}>
                                <Text  style={styles.colorPrimarybtn}>Next</Text>
                        </Button> 
                </View>
            
             
     
        );
      }
    }
    
    