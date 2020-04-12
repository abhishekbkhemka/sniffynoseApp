import React, { Component } from 'react';
import * as Font from 'expo-font';
import { Card, CardItem, Text, Body, Item, Input, Label, Button,View} from "native-base";
import { Ionicons } from '@expo/vector-icons';
import styles from '../assets/styles/styles';

export default class ContactDetails extends Component {
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

            <Card transparent style={styles.bottomView}>
                <View style={styles.errorbtn}>
                         <Text style={styles.ErrorBlockText}>There was an error| </Text>    
                         </View> 
                <CardItem style={styles.cardWrapper}>
               
                    <Body style={styles.paddingtopbottomSpacing}>
                          <Text  style={styles.HeadingBlock}>Your details goes here! </Text>
                         
                         <Item  style={styles.inputBLock} floatingLabel>
                                <Label style={styles.inputfiledLabel}>Full Name</Label>
                                <Input  />
                            </Item>
                            <Item  style={styles.inputBLock} floatingLabel>
                                <Label style={styles.inputfiledLabel}>Email Address (Optional)</Label>
                                <Input  />
                            </Item>
                            <Item  style={styles.inputBLock} floatingLabel>
                                <Label style={styles.inputfiledLabel}>Contact Number</Label>
                                <Input  />
                            </Item>
                           
                    </Body>
                        <Button style={styles.primarybtn}>
                                <Text  style={styles.colorPrimarybtn}>Proceed</Text>
                        </Button> 
                </CardItem>
                    <View style={{flex:1, alignItems:'center'}}>
                    <Button style={[styles.secondarybtn,styles.borderbtnSecondary]}>
                        <Text>Close</Text>
                    </Button>
                </View>
            </Card>

          

        )
    }
}
