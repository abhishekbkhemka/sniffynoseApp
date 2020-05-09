import React, { Component } from 'react'
import { Text, View , Image, TouchableOpacity,Alert} from 'react-native';
import styles from '../assets/styles/styles';
import { Col ,Grid } from 'react-native-easy-grid';
import { Body, Item, Input, Label, Button} from "native-base";
import {Header, Thumbnail} from 'native-base';
import { Rating, AirbnbRating } from 'react-native-ratings';
import logoImage from '../assets/images/logo.png';
const Star_Image = require('../assets/images/star.png')
import {User} from '../services/UserService'



export default class AppointmentRateReview extends Component {
    state={comments:''}

    constructor(props) {
        super(props);
        this.rate = props.defaultRate || 5

    }

    onRating(value){
        this.rate = value

    }
    rateSubmit(){
        User.rateGrooming(this.props.appointment.id,this.rate,this.state.comments).then((res)=>{
            this.props.onSubmit(res)
        }).catch(err=>{
            if(err.status == 403){
                alert('Not allowed')
                return
            }
            err.response.json().then(function(object){
                console.log(object)
                for(let e in object){
                    alert(object[e])
                    // that.setState({error:true,errorMessage:object[e]})
                }
            })

        })

    }
    render() {
        return (
            <View style={{flex:1}}>
                <View>
                <Header style={styles.headerrate}> 
                <View style={styles.headerWrapper}>
                <Image  style={styles.leftIconappointment}
                                        source={require('../assets/images/chevron-left.png')}/>
                     <Text style={styles.rateheadetext}>Rate and Review</Text>
                </View>
               </Header>
                    <View style={styles.ratereviewproductwrapper}>
                    <View style={styles.confirmblockAction}>
                            <View style={styles.appointdateblock}>
                                <Text style={styles.dateblocknumber}>23</Text>
                                <Text style={styles.dateblocktext}>Feb, 2020</Text>
                            </View>
                            <View style={styles.appointmentproduct}>
                                <Text style={styles.appointmentproductheading}>Haircut (Pomeranian)</Text>
                                <View style={styles.appointmentnamepricewrapper}>
                                    <Text style={styles.appointmentprodctname}>Shanay Haynes</Text>
                                    <Text style={styles.appointmentdot}></Text>
                                    <Text style={[styles.appointmentproductnameprice, styles.mr10]}>INR 899</Text>
                                    </View>
                                    <Text style={styles.appointmentproducttime}>Sunday Afternoon</Text>
                            </View>
                            </View>
                            
                    </View>
                    </View>
                    <View style={styles.ratingspacer}>
                          {/*<Rating*/}
                            {/*type='star'*/}
                            {/*ratingColor='#3498db'*/}
                            {/*selectedColor='#3498db'*/}
                            {/*ratingCount={5}*/}
                            {/*imageSize={35}*/}
                            {/*onFinishRating={this.ratingCompleted}*/}
                            {/*style={{ paddingVertical: 20 }}*/}
                            {/*/>*/}
                        <AirbnbRating
                            count={5}
                            reviews={["Bad", "OK...", "Good", "Very Good", "Amazing"]}
                            defaultRating={this.props.defaultRate || 5}
                            size={40}
                            onFinishRating={this.onRating.bind(this)}
                        />
                        </View>

                    <View style={styles.bottomViewModal}>
                       
                        <View style={styles.modalWrapper}>
                            <Body style={styles.paddingtopbottomSpacing}>
                                <Item  style={styles.inputBLock} floatingLabel>
                                        <Label style={styles.inputfiledLabel}>Any Comments/Suggestion (Optional)</Label>
                                        <Input  returnKeyType="done" value={this.state.comments}
                                                onChangeText={val => this.setState({ comments: val })}  />
                                 </Item>
                            </Body>
                          </View>

                            <Grid style={{justifyContent:"space-between", width:"100%", marginTop:30,}}>
                                <Col>
                                    <TouchableOpacity style={styles.IconBottomPosition}>
                                        <Thumbnail  source={logoImage} style={styles.logofooter}/> 
                                    </TouchableOpacity>
                                </Col>
                                <Col>
                                <Button style={styles.submitfooterbtn} onPress={()=>this.rateSubmit()}>
                                    <Text  style={styles.colorPrimarybtn}>Submit</Text>
                                  </Button>
                                </Col>
                              
                            </Grid>
                          

                      </View>
                
            </View>
        )
    }
}
