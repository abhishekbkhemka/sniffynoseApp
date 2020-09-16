import React, { Component } from 'react';
import * as Font from 'expo-font';
import { ScrollView} from 'react-native';
import { Card, CardItem, Text, Body, Item, Input, Label, Button,View} from "native-base";
import { Ionicons } from '@expo/vector-icons';
import styles from '../assets/styles/styles';
import  helper from '../Helper'
import { User } from '../services/UserService'

export default class ContactDetails extends Component {
    state = {
        loading: true
      }
    inputs = {};

    constructor(props){
        super(props)
     }
     async componentDidMount() {
        await Font.loadAsync({
          'Roboto': require('native-base/Fonts/Roboto.ttf'),
          'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
          ...Ionicons.font,
        })
        this.setState({ error: false })
      }

    proceed(){
        if(!helper.isNameValid(this.state.fullname)){
            this.setState({error:true,errorMessage:'Please enter a valid name!'})
            return;
        }
        if(!helper.isPhoneNumberValid(this.state.phone)){
            this.setState({error:true,errorMessage:'Please enter a valid phone number!'})
            return;
        }

        if(this.state.email && this.state.email.length > 0 && !helper.isEmailValid(this.state.email)){
            this.setState({error:true,errorMessage:'Please enter a valid email!'})
            return;
        }
        this.setState({error:false,errorMessage:''})
        let that = this
        User.signup({mobile:that.state.phone,email:that.state.email,fullname:that.state.fullname}).then((res)=>{
            that.props.requestOtp({mobile:that.state.phone,email:that.state.email,fullname:that.state.fullname})
        }).catch((err) => {
            console.log(err)
            err.response.json().then(function(object){
                for(let e in object){
                    that.setState({error:true,errorMessage:object[e]})
                }
            })


        })
    }
    focusTheField = (id) => {
        this.inputs[id]._root.focus();
    }
    render() {

        return (
            <View style={{flex: 1}}> 
            <ScrollView keyboardDismissMode='interactive'
                contentContainerStyle={{ 
                flexGrow: 1, 
                flexDirection: 'column', 
                justifyContent: 'flex-end'
                }}>
                      <View style={styles.bottomViewModal}>
          
              {this.state.error && <View style={styles.errorbtn}>
                   <Text style={styles.ErrorBlockText}>{this.state.errorMessage}</Text>
            </View> }
          <View style={styles.modalWrapper}>
               <Body style={styles.paddingtopbottomSpacing}>
                    <Text  style={styles.HeadingBlock}>Your details goes here! </Text>
                       
              <Item  style={styles.inputBLock} floatingLabel>
                 <Label style={styles.inputfiledLabel}>Full Name</Label>
                 <Input blurOnSubmit={ false }
                                     returnKeyType={ 'next' }
                                     onSubmitEditing={() => { this.focusTheField('email'); }}
                                     value={this.state.fullname}
                                     onChangeText={val => this.setState({ fullname: val })}  />
                          </Item>
                          <Item  style={[styles.inputBLock,styles.colorRemoveborderedtext]} floatingLabel>
                              <Label style={styles.inputfiledLabel}>Email Address (Optional)</Label>
                              <Input
                                  getRef={input => { this.inputs['email'] = input }}
                                  returnKeyType="next"
                                  keyboardType="email-address"
                                     value={this.state.email}
                                  onSubmitEditing={() => { this.focusTheField('phone'); }}
                                     onChangeText={val => this.setState({ email: val })}  />
                          </Item>
                          <Item  style={styles.inputBLock} floatingLabel>
                              <Label style={styles.inputfiledLabel}>Contact Number</Label>
                              <Input returnKeyType="done"
                                     keyboardType="phone-pad"
                                     getRef={input => { this.inputs['phone'] = input }}
                                     value={this.state.phone}
                                     onChangeText={val => this.setState({ phone: val })}  />
                          </Item>
                         
                  </Body>
                      <Button style={styles.primarybtn} onPress={()=>this.proceed()}>
                              <Text  style={styles.colorPrimarybtn}>Proceed</Text>
                      </Button> 
              </View>
                  <View style={{flex:1, alignItems:'center'}}>
                  <Button style={[styles.secondarybtn,styles.borderbtnSecondary]}>
                      <Text>Close</Text>
                  </Button>
              </View>
          </View>
              </ScrollView>
              </View>
           
        
          

        )
    }
}
