import React, { Component } from 'react'
import { Text, View } from 'react-native';
import styles from '../assets/styles/styles';
import { H2, Button, Header, Right, Thumbnail, List, ListItem, Body, Item} from 'native-base';
import HomeModalOtp from './HomeModalOtp';
import {User} from '../services/UserService'
import {MONTHS,DAY} from '../constants/Constant'
import Moment from 'moment';



export default class TopQuickAction extends Component {
    state = {upcomingAppointments:[]}
    constructor(props){
        super(props)
        let that = this
        User.getUpcomingAppointments().then((res)=>{
          that.setState({upcomingAppointments:res})
        }).catch((err)=>{

        })
    }

    getPetDisplayName(appointment){
        let name = ''
        let count = 0

        if(appointment.pets && appointment.pets.length > 0){


            for(let i=0 ;i<appointment.pets.length;i++){
                let pet = appointment.pets[i]
                if(i ==0 ){
                    name = pet.full_name + ' ('+pet.breed+')'
                }else{
                    count += 1
                }

            }
        }
        if(count>0){
            name += ' + '+count+' more'
        }

        return name
    }


    getDisplayName(appointment){
        let name =''
        let count = 0
        let services = []


        if(appointment.packages && appointment.packages.length > 0){


            for(let i=0 ;i<appointment.packages.length;i++){
                let pack = appointment.packages[i]
                if(i ==0 ){
                    name = pack.name + ' '
                    break
                }else{
                    count +=1
                }

            }




        }

        if(appointment.services && appointment.services.length > 0){


            for(let i=0 ;i<appointment.services.length;i++){
                let service = appointment.services[i]

                services.push(service.name)
                count += 1

            }

            if(count>0){
                name += ' + '+ count + ' more'
            }


        }
        return name
    }

    closeOtpModal(){
        this.setState({otpModal:false})
    }

    otpVerified(action,appointment,updateAppointment){
        if(action == 'start-grooming'){
            appointment.start_date_time = updateAppointment.start_date_time
            this.setState({otpModal:false})
        }
    }

    startGrooming(appointment){
        // this.setState({otpModal:true})
        let that = this
        User.startGrooming(appointment.id).then(res=>{
            that.setState({otpModal:true})
        }).catch(err=>{
            Alert.alert(err)
        })
    }

    getAction(app){
        if(app.start_date_time){
            return 'end-grooming'
        }
        return 'start-grooming'
    }
    render() {
        let that = this

        return (
            <View>
                {that.state.upcomingAppointments.length>0  &&

                <View>
                    <Header style={styles.header}>
                        <Text style={styles.headetext}>Upcoming Appointment</Text>
                        <Text style={styles.headernotification}>{this.state.upcomingAppointments.length}</Text>
                    </Header>
                    {that.state.upcomingAppointments.map(app => (
                    <View style={styles.confirmproductwrapper} key={app.id}>
                       <View style={styles.confirmblockAction}>
                            <View style={styles.appointdateblock}>
                                <Text style={styles.dateblocknumber}>{Moment(app.date).format('D')}</Text>
                                <Text style={styles.dateblocktext}>{Moment(app.date).format('MMM')}</Text>
                             </View>
                              <View style={styles.appointmentproduct}>
                                <Text style={styles.appointmentproductname}>{this.getDisplayName(app)}</Text>
                                  {app.start_date_time &&<Text style={styles.appointmentprodctname}>{'Started'+ ' '+ new Date(app.start_date_time).toLocaleString()}</Text>}
                                  {!app.start_date_time && app.pets && app.pets.length > 0 && <Text style={styles.appointmentprodctname}>{this.getPetDisplayName(app)}</Text>}
                             </View>
                           <View style={styles.appointmentprice}>
                           <Text style={styles.deleteappointmenticon}>INR {app.price}</Text>
                           </View>
                       </View>
                        {!app.start_date_time && <Button style={styles.primarybtn}  onPress={() => {
                            that.startGrooming(app);
                        }}>
                            <Text  style={styles.colorPrimarybtn}>Start Grooming</Text>
                        </Button>}

                        {app.start_date_time && <Button style={styles.primarybtn}  onPress={() => {
                            that.startGrooming(app);
                        }}>
                            <Text  style={styles.colorPrimarybtn}>End Grooming</Text>
                        </Button>}

                        {that.state.otpModal && <HomeModalOtp action={this.getAction(app)} data={app} otpVerified={that.otpVerified.bind(that,this.getAction(app),app)} closeMe={this.closeOtpModal.bind(this)}></HomeModalOtp>}
                    </View>))}
                    </View>
                }
            </View>
        )
    }
}
