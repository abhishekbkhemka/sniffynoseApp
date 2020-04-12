import React, { Component } from 'react';
import {View, ScrollView, Image} from 'react-native';
import { H2, Button, Header, Left, Text} from 'native-base';
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
            <View style={{flex:1, justifyContent: 'flex-start', width:'100%' }}>
            <View style={styles.serviceMiddleWrapper}>
                <View style={styles.ScheduleBlock}>
                       <Header transparent><Left><Button  transparent>
                            <Image
                                style={{width: 18, height: 18}}
                                source={require('../assets/images/lefticon.png')}/>
                                <Text style={styles.headerskip}></Text>
                                </Button></Left>
                            </Header>
                        </View>
                   </View>
               </View>
        )
    }
}
