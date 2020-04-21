import React, { Component } from 'react';
import * as Font from 'expo-font';
import { Card, CardItem, Text, Body, Item, Input, Label, Button,View} from "native-base";
import { Ionicons } from '@expo/vector-icons';
import styles from '../assets/styles/styles';
import { User } from '../services/UserService'


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
        User.signup({mobile:mobile,email:email,fullname:fullname,token:that.state.token}).then((res)=>{
            that.props.loginVerified(this.props.mobile,this.state.token)
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
          <Card transparent style={styles.bottomView}>
                  <CardItem style={styles.cardWrapper}>
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
