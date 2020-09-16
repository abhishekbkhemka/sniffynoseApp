import React, { useState, Component } from 'react';
import {View, Switch, ScrollView, Image, Picker,Alert} from 'react-native';
import { H2, Card, CardItem, Text, Body, Item, Input, Label, Button} from "native-base";
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { User } from '../services/UserService'
import styles from '../assets/styles/styles';
import {MONTHS,DAY} from '../constants/Constant'
import Moment from 'moment';

export default class GroomingConfirmation extends Component {
  

    name = null
    petName = ''
    petBreed = ''
    price = 0
    servicePrice = 0
    packagePrice = 0
    inputs = []
    state = {breed:'select'}




      constructor(props){
        super(props)
          let services = []
          let count = 0
          if( props.data.packages && props.data.packages.length >0 ){
              for(let i=0 ;i<props.data.packages.length;i++){
                  let pack = props.data.packages[i]
                  if( i == 0 ){

                      this.name = pack.name

                  }else{
                      count = count +1
                  }
                  this.price += pack.price

              }
          }
          if(props.data.services && props.data.services.length > 0) {


              for (let i = 0; i < props.data.services.length; i++) {
                  let service = props.data.services[i]
                  if (!(service.packageIds && service.packageIds.length > 0)) {
                      services.push(service.name)
                      this.price += service.price

                  }
              }
          }
          count += services.length
          if(this.name){
              this.name =  this.name +(count>0? (' + '+ count+' more'):'')

          }else{
              this.name =  services[0] + (count > 0 ? (' + '+ count+' more'):'')

          }

          if( props.data.pets && props.data.pets.length >0 ){
              for(let i=0 ;i<props.data.pets.length;i++){
                  if( i == 0 ){
                      let pet = props.data.pets[i]
                      this.petName = pet.full_name
                      this.petBreed = pet.breed
                  }

              }
              let petCount = props.data.pets.length - 1
              this.petName = this.petName + (petCount>0?(' + '+petCount+' more'):'')
              this.petBreed = this.petBreed + (petCount>0?(' + '+petCount+' more'):'')
          }






      }
     async componentDidMount() {
        await Font.loadAsync({
          'Roboto': require('native-base/Fonts/Roboto.ttf'),
          'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
          ...Ionicons.font,
        })
        this.setState({ loading: false })
      }

    focusTheField = (id) => {
        this.inputs[id]._root.focus();
    }

    confirmAppointment(){
        let confirmationData = {}
        let that = this
        confirmationData['user'] = this.props.data.user
        if(this.props.data.services && this.props.data.services.length>0){
            let services =[]
            for(let i=0;i<this.props.data.services.length;i++){
                let service = this.props.data.services[i]
                services.push({name:service.name,price:service.price,notes:service.notes})

            }
            confirmationData['services'] = services
        }

        if(this.props.data.packages && this.props.data.packages.length>0){
            let packages =[]
            for(let i=0;i<this.props.data.packages.length;i++){
                let pack = this.props.data.packages[i]
                packages.push({name:pack.name,price:pack.price,notes:pack.notes})

            }
            confirmationData['packages'] = packages
        }
        let comments = ''
        if(this.props.data.pets && this.props.data.pets.length>0){
            let pets =[]

            for(let i=0;i<this.props.data.pets.length;i++){
                let pet = this.props.data.pets[i]
                pets.push(pet)
                comments += ' '+pet.notes

            }
            confirmationData['pets'] = pets
        }
        confirmationData['date'] = Moment(this.props.data.date).format('YYYY-MM-DD')
        confirmationData['time_range'] = this.props.data.time
        confirmationData['price'] = this.price

        confirmationData['notes'] = comments


        User.requestAppointment(confirmationData).then((res)=>{
            that.props.onSuccess()

        }).catch((err)=>{
            Alert.alert(err)
        })

    }
    state = {switchValue:false}
    toggleSwitch = (value) => {
       this.setState({switchValue: value})
     }
    render() {

        return (
        


<View style={{flex:1, justifyContent: 'flex-start', width:'96%' , margin: 'auto'}}>
         <View style={[styles.headingWrapper, styles.mt20]}>
                <Text  style={styles.headingMaingrooming}>Confirm your appointment!</Text>
                <Text  style={[styles.confirmnumber, styles.countappointment]}>2</Text>
         </View>
         <ScrollView contentContainerStyle={styles.scrollviewwrapper}>
          <View style={styles.bottomwrapper}>    
             {this.props.data.packages && this.props.data.packages.length>0  && <View style={styles.confirmblock}>
          <View style={styles.appointdateblock}>
            <Text style={styles.dateblocknumber}>{Moment(this.props.data.date).format('DD')}</Text>
            <Text style={styles.dateblocktext}>{Moment(this.props.data.date).format('MMM')}</Text>
          </View>
            <View style={styles.appointmentproduct}>
                <Text style={styles.appointmentproductname}>{this.name}</Text>
                <Text style={styles.appointmentproducttime}>{DAY[this.props.data.date.getDay()] +' '+ this.props.data.time[0].toUpperCase() + this.props.data.time.slice(1) }</Text>
            </View>
        
      </View>}

    {this.props.data.pets && this.props.data.pets.length>0  && 
          <View style={styles.confirmblock}>
              <View style={styles.appointdateblock}>
                  <Text style={styles.dateblocknumber}>{this.props.data.pets.length}</Text>
                  <Text style={styles.dateblocktext}>Pets</Text>
              </View>
              <View style={styles.appointmentproduct}>
                  <Text style={styles.appointmentproductname}>{this.petName}</Text>
                  <Text style={styles.appointmentproducttime}>{this.petBreed} </Text>
              </View>
         
          </View>}

          <View style={styles.mainwrapper}>
                        <Card transparent>
                            <CardItem style={styles.cardWrapperdetail}>
                                <Body style={styles.paddingbottomSpacing}>
                                <View style={{width:'100%', position:'relative'}}>
                                <Text  style={styles.HeadingBlock}>Contact Details</Text>
                                        <Switch
                                            style={styles.switchview}
                                            tintColor="#b5b5b5"
                                            onTintColor="#979cde"
                                            thumbTintColor="#222ba8"
                                            onValueChange = {this.toggleSwitch}
                                            value = {this.state.switchValue}/>
                                
                                </View>

                                
                              
                                    <Item  style={[styles.inputBLock]} floatingLabel>
                                        <Label style={styles.inputfiledLabel}>Enter House / Flat No *</Label>
                                        <Input/>
                                    </Item>
                                        <Item  style={styles.inputBLock} floatingLabel>
                                            <Label style={styles.inputfiledLabel}>Building/Flat Name *</Label>
                                            <Input/>
                                       </Item>
                               

                                <Item  style={styles.inputBLock} floatingLabel>
                                    <Label style={styles.inputfiledLabel}>Area</Label>
                                    <Input/>
                                </Item>

                                <Item  style={styles.inputBLock} floatingLabel>
                                    <Label style={styles.inputfiledLabel}>Postal Code *</Label>
                                    <Input/>
                                </Item>
                               
                                    
                                          <Item  style={styles.inputBLock} floatingLabel>
                                            <Label style={styles.inputfiledLabel}>{this.state.switchValue?'Your Place':'Grooming Center'}</Label>
                                            <Input/>
                                          </Item>

                                          <View style={[styles.viewwrapper, styles.mt20]}>
                                            <Item   style={[styles.inputBLock, styles.w50]}>
                                                <Label style={styles.selectedinputfiledLabel}>Pune</Label>
                                            </Item>
                                            <Item  style={[styles.inputBLock, styles.w50]}>
                                                <Label style={styles.selectedinputfiledLabel}>Maharashtra</Label>
                                            </Item>
                                        </View>
                                
                              </Body>



                            </CardItem>
                            <View style={{width:'100%', marginTop:15}}>
                                <Button style={styles.primarybtn} onPress={()=>this.confirmAppointment()}>
                                    <Text  style={styles.colorPrimarybtn} >Confirm Appointment</Text>
                                </Button>
                            </View>

                        </Card>
                       </View>
           
   
    </View>
    </ScrollView>
</View>
  
        )
    }
}
