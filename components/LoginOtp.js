import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import * as Font from 'expo-font';
import { Card, CardItem, Text, Body, Item, Input, Label, Button,View} from "native-base";
import { Ionicons } from '@expo/vector-icons';
import styles from '../assets/styles/styles';
import { User } from '../services/UserService'
import  helper from '../Helper'



export default class LoginOtp extends Component {
     state = { token:'' }
      async componentDidMount() {
        await Font.loadAsync({
          'Roboto': require('native-base/Fonts/Roboto.ttf'),
          'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
          ...Ionicons.font,
        })

      }
    constructor(props){
        super(props)
    }
    verifyOtp(){
        let that = this
        let mobile = that.props.userData.mobile
        let email = that.props.userData.email
        let fullname = that.props.userData.fullname
        User.signup({mobile:mobile,email:email,fullname:fullname,token:that.state.token}).then(async (res)=>{
            helper.setLocalUserProfile(res)
            that.props.loginVerified(mobile,this.state.token,fullname)
        }).catch((err) => {
            err.response.json().then(function(object){
                for(let e in object){
                    alert(object[e])
                    // that.setState({error:true,errorMessage:object[e]})
                }
            })


        })

    }
    render() {

        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.7)'}}>
            <View style={styles.bottomViewModal}>
            <View style={styles.modalWrapper}>
                     <Body style={styles.paddingtopbottomSpacing}>
                          <Text  style={styles.HeadingBlock}>You received an OTP. </Text>
                         
                         <Item  style={styles.inputBLock} floatingLabel>
                                <Label style={styles.inputfiledLabel}>OTP</Label>
                                <Input  returnKeyType="done"
                                        keyboardType="phone-pad"
                                        value={this.state.token}
                                        onChangeText={val => this.setState({ token: val })}/>
                            </Item>
                     </Body>
                      <Button style={styles.primarybtn} onPress={()=>this.verifyOtp()}>
                            <Text  style={styles.colorPrimarybtn}>Verify</Text>
                      </Button> 
                </View>
                    <View style={{flex:1, alignItems:'center'}}>
                    <Button style={[styles.secondarybtn,styles.borderbtnSecondary]}>
                        <Text>Close</Text>
                    </Button>
                </View>
            </View>
            </View>

          

        )
    }
}
