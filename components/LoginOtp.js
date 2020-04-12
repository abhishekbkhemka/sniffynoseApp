import React, { Component } from 'react';
import * as Font from 'expo-font';
import { Card, CardItem, Text, Body, Item, Input, Label, Button,View} from "native-base";
import { Ionicons } from '@expo/vector-icons';
import styles from '../assets/styles/styles';

export default class LoginOtp extends Component {
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
                  <CardItem style={styles.cardWrapper}>
                     <Body style={styles.paddingtopbottomSpacing}>
                          <Text  style={styles.HeadingBlock}>You received an OTP. </Text>
                         
                         <Item  style={styles.inputBLock} floatingLabel>
                                <Label style={styles.inputfiledLabel}>OTP</Label>
                                <Input  />
                            </Item>
                     </Body>
                      <Button style={styles.primarybtn}>
                            <Text  style={styles.colorPrimarybtn}>Login</Text>
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
