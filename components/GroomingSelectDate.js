import React, { Component } from 'react';
import { Text, View , ScrollView} from 'react-native';
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
    
      render() {
        return (
            
          <View  style={styles.containerCalendar}>
                <Text  style={styles.HeadingBlock}>Select a Date! </Text>
            <Calendar
              style={styles.calendar}
              testID={testIDs.calendars.LAST}
              current={'2012-05-16'}
              minDate={'2012-05-10'}
              maxDate={'2012-05-29'}
              firstDay={1}
              markedDates={{
                '2012-05-23': {selected: true,  disableTouchEvent: false},
                     }}
                     theme={{
                        dayTextColor: '#333',
                        todayTextColor: 'white',
                        selectedDayTextColor: 'white',
                        monthTextColor: '#333',
                        indicatorColor: '#222ba8',
                        selectedDayBackgroundColor: '#222ba8',
                        arrowColor: '#222ba8',
                        'stylesheet.calendar.header': {
                          week: {
                            marginTop: 5,
                            flexDirection: 'row',
                            justifyContent: 'space-between'
                          }
                        }
                      }}
             
            />

           
            <Button style={styles.primarybtn}>
                                <Text  style={styles.colorPrimarybtn}>Nexts</Text>
                        </Button> 
                </View>
            
             
     
        );
      }
    }
    
    