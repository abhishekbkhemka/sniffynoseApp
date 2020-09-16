import React, { Component } from 'react'
import { Text, View, Image,TouchableHighlight } from 'react-native';
import styles from '../assets/styles/styles';
import { User } from '../services/UserService'
import Moment from 'moment'


export default class AppointmentTab extends Component {
    state = {upcomingAppointments:[],requestedAppointments:[],pastAppointments:[]}

    constructor(props){
        super(props)


    }

    getAppointmentDisplayName(appt){
        let services = []
        let count = 0
        let name = null
        let petName = ''
        let petBreed= ''
        if( appt.packages && appt.packages.length >0 ){
            for(let i=0 ;i<appt.packages.length;i++){
                let pack = appt.packages[i]
                if( i == 0 ){

                    name = pack.name

                }else{
                    count = count +1
                }

            }
        }
        if(appt.services && appt.services.length > 0) {


            for (let i = 0; i < appt.services.length; i++) {
                let service = appt.services[i]
                    services.push(service.name)
                    this.price += service.price
            }
        }
        count += services.length
        if(name){
           name =  name +(count>0? (' + '+ count+' more'):'')

        }else{
            name =  services[0] + (count > 0 ? (' + '+ count+' more'):'')

        }

        if( appt.pets && appt.pets.length >0 ){
            for(let i=0 ;i<appt.pets.length;i++){
                if( i == 0 ){
                    let pet = appt.pets[i]
                    petName = pet.full_name
                    petBreed = pet.breed
                }

            }
            let petCount = appt.pets.length - 1
            petName = petName + (petCount>0?(' + '+petCount+' more'):'')
            petBreed = petBreed + (petCount>0?(' + '+petCount+' more'):'')
        }
        appt.petBreed = petBreed
        appt.petName = petName

        return name





    }

    componentDidMount(){
        this.getUpcomingAppointments()
        this.getPastAppointments()
        this.getRequestedAppointments()
    }
    getUpcomingAppointments(){
        let that =this;
        User.getUpcomingAppointments().then(res =>{
            that.setState({upcomingAppointments:res})
        }).catch(err =>{
            console.log(err)
        })
    }

    getPastAppointments(){
        let that =this;
        User.getPastAppointments().then(res =>{
            that.setState({pastAppointments:res})
        }).catch(err =>{
            console.log(err)
        })
    }

    getRequestedAppointments(){
        let that =this;
        User.getRequestedAppointments().then(res =>{
            that.setState({requestedAppointments:res})
        }).catch(err =>{
            console.log(err)
        })
    }
    render() {
        return (
            <View>
                {(this.props.tab == 'all' || this.props.tab == 'upcoming') && this.state.upcomingAppointments.length > 0 &&
                <View >
                    <View style={[styles.headingWrapper, styles.mb10]}>
                         <Text  style={styles.headingMainappointment}>Upcoming</Text>
                    </View>

                    {this.state.upcomingAppointments.map(appt => (
                        <TouchableHighlight key={appt.id} onPress={()=>this.props.showAppointmentDetails(appt)}>
                            <View  style={styles.confirmblock} >
                                <View style={styles.appointdateblock}>
                                    <Text style={styles.dateblocknumber}>{Moment(appt.date).format('DD')}</Text>
                                    <Text style={styles.dateblocktext}>{Moment(appt.date).format('MMM,YYYY')}</Text>
                                </View>
                                <View style={styles.appointmentproduct}>
                                    <Text style={styles.appointmentproductheading}>{this.getAppointmentDisplayName(appt)}  {appt.petBreed ?('('+appt.petBreed+')'):''}</Text>
                                    <View style={styles.appointmentnamepricewrapper}>
                                        <Text style={styles.appointmentprodctname}>{appt.groomer.full_name}</Text>
                                        <Text style={styles.appointmentdot}></Text>
                                        <Text style={[styles.appointmentproductnameprice, styles.mr10]}>INR {appt.price}</Text>
                                    </View>
                                    <Text style={styles.appointmentproducttime}>{Moment(appt.date).format('dddd')+ ' '+appt.time_range.title()} </Text>
                                </View>
                                <View style={styles.appointmentprice}>
                                    <Text style={styles.deleteappointmenticon}>
                                        <Image  style={{width: 3.4, height: 12}} source={require('../assets/images/menuAppointment.png')}/></Text>
                                </View>
                            </View>
                        </TouchableHighlight>
                    ))}

                </View>}


                {(this.props.tab == 'all' || this.props.tab == 'requested') && this.state.requestedAppointments.length > 0 &&
                <View>
                    <View style={[styles.headingWrapper, styles.mb10]}>
                        <Text  style={styles.headingMainappointment}>Requested</Text>
                    </View>

                    {this.state.requestedAppointments.map(appt => (
                        <TouchableHighlight key={appt.id} onPress={()=>this.props.showAppointmentDetails(appt)}>
                        <View  style={styles.confirmblock}>
                            <View style={styles.appointdateblock}>
                                <Text style={styles.dateblocknumber}>{Moment(appt.date).format('DD')}</Text>
                                <Text style={styles.dateblocktext}>{Moment(appt.date).format('MMM,YYYY')}</Text>
                            </View>
                            <View style={styles.appointmentproduct}>
                                <Text style={styles.appointmentproductheading}>{this.getAppointmentDisplayName(appt)}  {appt.petBreed ?('('+appt.petBreed+')'):''}</Text>
                                <View style={styles.appointmentnamepricewrapper}>
                                    <Text style={styles.appointmentprodctname}>{appt.groomer.full_name}</Text>
                                    <Text style={styles.appointmentdot}></Text>
                                    <Text style={[styles.appointmentproductnameprice, styles.mr10]}>INR {appt.price}</Text>
                                </View>
                                <Text style={styles.appointmentproducttime}>{Moment(appt.date).format('dddd')+ ' '+appt.time_range.title()} </Text>
                            </View>
                            <View style={styles.appointmentprice}>
                                <Text style={styles.deleteappointmenticon}>
                                    <Image  style={{width: 3.4, height: 12}} source={require('../assets/images/menuAppointment.png')}/></Text>
                            </View>
                        </View>
                        </TouchableHighlight>
                    ))}

                </View>}

                {(this.props.tab == 'all' || this.props.tab == 'past') && this.state.pastAppointments.length > 0 &&
                <View>
                    <View style={[styles.headingWrapper, styles.mb10]}>
                        <Text  style={styles.headingMainappointment}>Past Appointments</Text>
                    </View>

                    {this.state.pastAppointments.map(appt => (
                        <TouchableHighlight key={appt.id} onPress={()=>this.props.showAppointmentDetails(appt)}>
                        <View style={styles.confirmblock}>
                            <View style={styles.appointdateblock}>
                                <Text style={styles.dateblocknumber}>{Moment(appt.date).format('DD')}</Text>
                                <Text style={styles.dateblocktext}>{Moment(appt.date).format('MMM,YYYY')}</Text>
                            </View>
                            <View style={styles.appointmentproduct}>
                                <Text style={styles.appointmentproductheading}>{this.getAppointmentDisplayName(appt)}  {appt.petBreed ?('('+appt.petBreed+')'):''}</Text>
                                <View style={styles.appointmentnamepricewrapper}>
                                    <Text style={styles.appointmentprodctname}>{appt.groomer.full_name}</Text>
                                    <Text style={styles.appointmentdot}></Text>
                                    <Text style={[styles.appointmentproductnameprice, styles.mr10]}>INR {appt.price}</Text>
                                </View>
                                <Text style={styles.appointmentproducttime}>{Moment(appt.date).format('dddd')+ ' '+appt.time_range.title()} </Text>
                            </View>
                            <View style={styles.appointmentprice}>
                                <Text style={styles.deleteappointmenticon}>
                                    <Image  style={{width: 3.4, height: 12}} source={require('../assets/images/menuAppointment.png')}/></Text>
                            </View>
                        </View>
                        </TouchableHighlight>
                    ))}

                </View>}






            </View>
        )
    }
}
