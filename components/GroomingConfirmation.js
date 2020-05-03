import React, { useState, Component } from 'react';
import {View, ScrollView, Image, Picker,Alert} from 'react-native';
import { H2, Card, CardItem, Text, Body, Item, Input, Label, Button} from "native-base";
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { User } from '../services/UserService'
import styles from '../assets/styles/styles';
import {MONTHS,DAY} from '../constants/Constant'
import Moment from 'moment';

export default class GroomingConfirmation extends Component {
  

    name = ''
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
    render() {

        return (
        

<ScrollView>
<View style={{flex:1, justifyContent: 'flex-start', width:'96%' , margin: 'auto'}}>
  
      <View style={[styles.headingWrapper, styles.mb20]}>
              <Text  style={styles.headingMain}>Confirm your appointment!</Text>
      </View>

    {this.props.data.packages && this.props.data.packages.length>0  && <View style={styles.confirmblock}>
          <View style={styles.appointdateblock}>
            <Text style={styles.dateblocknumber}>{Moment(this.props.data.date).format('DD')}</Text>
            <Text style={styles.dateblocktext}>{Moment(this.props.data.date).format('MMM')}</Text>
            </View>
          <View style={styles.appointmentproduct}>
            <Text style={styles.appointmentproductname}>{this.name}</Text>
            <Text style={styles.appointmentproducttime}>{DAY[this.props.data.date.getDay()] +' '+ this.props.data.time[0].toUpperCase() + this.props.data.time.slice(1) }</Text>
          </View>
          {/*<View style={styles.appointmentprice}>*/}
              {/*/!*<Text style={styles.deleteappointmenticon}><Image  style={{width: 11, height: 12}}*!/*/}
                                      {/*/!*source={require('../assets/images/trash.png')}/></Text> *!/*/}
              {/*<Text style={styles.productprice}>INR {this.price }</Text>*/}
          {/*</View>*/}
      </View>}





    {this.props.data.pets && this.props.data.pets.length>0  && <Card transparent>
          <View style={styles.confirmblock}>
              <View style={styles.appointdateblock}>
                  <Text style={styles.dateblocknumber}>{this.props.data.pets.length}</Text>
                  <Text style={styles.dateblocktext}>Pets</Text>
              </View>
              <View style={styles.appointmentproduct}>
                  <Text style={styles.appointmentproductname}>{this.petName}</Text>
                  <Text style={styles.appointmentproducttime}>{this.petBreed} </Text>
              </View>
              {/*<View style={styles.appointmentprice}>*/}
                  {/*/!*<Text style={styles.deleteappointmenticon}><Image  style={{width: 11, height: 12}}*!/*/}
                  {/*/!*source={require('../assets/images/trash.png')}/></Text> *!/*/}
                  {/*<Text style={styles.productprice}>INR {this.price }</Text>*/}
              {/*</View>*/}
          </View>
                  {/*<CardItem style={styles.cardWrapper}>*/}
                     {/*<Body style={styles.paddingtopbottomSpacing}>*/}
                          {/*<Text  style={styles.HeadingBlock}>Doggo Details (Optional)</Text>*/}
                          {/*<View style={styles.picker}>*/}
                            {/*<Picker  style={styles.selectpicker} selectedValue={this.state.breed }*/}
                                     {/*onValueChange={val => this.setState({ breed: val })}*/}
                            {/*>*/}
                                {/*<Picker.Item label="Select doggo's breed" value={'na'} />*/}
                                {/*{BREEDS.map((v) =>{*/}
                                    {/*return <Picker.Item key={v} label={v} value={v} />*/}

                                {/*})*/}
                                {/*}*/}

                            {/*</Picker>*/}
                            {/*</View>*/}
                          {/*<View style={{width:'100%', position:'relative'}}>*/}
                            {/*<Text style={styles.years}>Years</Text>*/}
                           {/*<Item  style={styles.inputBLock} floatingLabel>*/}
                                {/*<Label style={styles.inputfiledLabel}>Enter doggo's age</Label>*/}
                                {/*<Input  returnKeyType={ 'next' } keyboardType="phone-pad"*/}
                                        {/*onSubmitEditing={() => { this.focusTheField('name'); }}*/}
                                        {/*onChangeText={val => this.setState({ age: val })}*/}
                                {/*/>*/}
                            {/*</Item>*/}
                            {/*</View>*/}

                          {/*<Item  style={styles.inputBLock} floatingLabel>*/}
                              {/*<Label style={styles.inputfiledLabel}>Name</Label>*/}
                              {/*<Input*/}
                                  {/*getRef={input => { this.inputs['name'] = input }}*/}
                                  {/*onSubmitEditing={() => { this.focusTheField('comments'); }}*/}
                                  {/*returnKeyType={ 'next' }*/}
                                  {/*onChangeText={val => this.setState({ name: val })}*/}

                              {/*/>*/}
                          {/*</Item>*/}

                            {/*<Item  style={styles.inputBLock} floatingLabel>*/}
                                {/*<Label style={styles.inputfiledLabel}>Comments</Label>*/}
                                {/*<Input*/}
                                    {/*getRef={input => { this.inputs['comments'] = input }}*/}
                                    {/*returnKeyType={ 'done' }*/}
                                    {/*onChangeText={val => this.setState({ comments: val })}*/}

                                {/*/>*/}
                            {/*</Item>*/}
                            {/**/}
                     {/*</Body>*/}
                     {/**/}


                {/*</CardItem>*/}

                    {/**/}
            </Card>}
    <View style={{width:'100%', marginTop:15}}>
        <Button style={styles.primarybtn} onPress={()=>this.confirmAppointment()}>
            <Text  style={styles.colorPrimarybtn} >Confirm Appointment</Text>
        </Button>
    </View>
</View>
    </ScrollView>
        )
    }
}
