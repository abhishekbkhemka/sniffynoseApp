import React, { Component } from 'react';
import {View, ScrollView, Image, TouchableHighlight, Alert, Modal} from 'react-native';
import {Thumbnail, Button, H2, Text, Right, Header, Left, ListItem, Body} from 'native-base';
import SelectServiceCarousal from '../components/SelectServiceCarousal';

import ServiceIcon from '../assets/images/perfume.png';
import styles from '../assets/styles/styles';
import * as Font from "expo-font";
import {Ionicons} from "@expo/vector-icons";
import { User } from '../services/UserService'
import check from "../assets/images/checkmark.png";



export default class GroomingSelectService extends Component {
    state = {services:[],packages:[],selectService:true,infoVisible:false}
    componentDidMount(){
        let that = this
        User.getServices().then(res =>{
            console.log(res)
            that.setState({services:res})
        })

        User.getPackages().then(res =>{
            that.setState({packages:res})
        })
    }

    next(){
        this.props.next()
    }
    showInfo(){
        this.setState({infoVisible: true});

    }

  render() {
    return (
        <View  style={styles.GroomingSelectWrapper}>

       <View style={styles.ScheduleBlock}>
             
                  <Image
                    style={{width: 13, height: 24}}
                    source={require('../assets/images/lefticon.png')}/>
            </View>
                  <ScrollView
        contentContainerStyle={{ 
         flexGrow: 1, 
        flexDirection: 'column', 
        justifyContent: 'flex-end'
      }}>
       
            <View>
                <Button  transparent>
                    <Thumbnail  source={ServiceIcon} style={styles.serviceicon}/>
                </Button>

                <H2 style={styles.HeadingDashboard}>
                    Which services are you looking for?
                </H2>
             </View>
            
          <View style={styles.paddinghorizontalSpacing}>
            <Text style={styles.grommingsubheading}>Combo</Text>
              {this.state.packages.length > 0 && <SelectServiceCarousal data={this.state.packages} showInfo={this.showInfo.bind(this)}></SelectServiceCarousal>}
          </View>  
              
       
          <View>
            <Text style={styles.grommingsubheading}>Individual</Text>
              {this.state.services.length > 0 && <SelectServiceCarousal data={this.state.services} showInfo={this.showInfo.bind(this)} ></SelectServiceCarousal>}
           </View>  
      {/* spacing */}
          <View style={styles.paddinghorizontalSpacing}>
          <Button style={styles.primarybtn} onPress={()=>this.next()}>
                            <Text  style={styles.colorPrimarybtn}>Next</Text>
                      </Button> 
          </View>  
     {/* spacing  ends here */}
      
        
          </ScrollView>


            <Modal
                animationType="fade"
                transparent={true}
                visible={this.state.infoVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                }}>
                <View style={styles.modalOverlay}>
                    <View>
                        <View style={styles.modalWrapper}>
                            <View style={styles.blockWrappergPlan}>
                                <H2 style={styles.basicHeading}>Basic</H2>
                                <Text style={styles.planmodaltext}>INR 499</Text>
                            </View>
                            <ListItem icon>
                                <Left style={styles.LeftplanPart}>
                                    <Button transparent>
                                        <Thumbnail source={check} style={styles.checkthmb}/>
                                    </Button>
                                </Left>
                                <Body style={styles.borderbottomZero}>
                                <Text style={styles.plantext}> Shampoo</Text>
                                </Body>

                            </ListItem>

                            <ListItem icon>
                                <Left style={styles.LeftplanPart}>
                                    <Button transparent>
                                        <Thumbnail source={check}  style={styles.checkthmb}/>
                                    </Button>
                                </Left>
                                <Body style={styles.borderbottomZero}>
                                <Text style={styles.plantext}> Conditioning</Text>
                                </Body>

                            </ListItem>

                            <ListItem icon>
                                <Left style={styles.LeftplanPart}>
                                    <Button transparent>
                                        <Thumbnail source={check}  style={styles.checkthmb}/>
                                    </Button>
                                </Left>
                                <Body style={styles.borderbottomZero}>
                                <Text style={styles.plantext}>  Towel & blow drying</Text>
                                </Body>

                            </ListItem>

                            <ListItem icon>
                                <Left style={styles.LeftplanPart}>
                                    <Button transparent>
                                        <Thumbnail source={check} style={styles.checkthmb}/>
                                    </Button>
                                </Left>
                                <Body style={styles.borderbottomZero}>
                                <Text style={styles.plantext}>  Deshedding</Text>
                                </Body>

                            </ListItem>

                            <ListItem icon>
                                <Left style={styles.LeftplanPart}>
                                    <Button transparent>
                                        <Thumbnail source={check}  style={styles.checkthmb}/>
                                    </Button>
                                </Left>
                                <Body style={styles.borderbottomZero}>
                                <Text style={styles.plantext}>  Nail trimming </Text>
                                </Body>

                            </ListItem>

                            <ListItem  icon>
                                <Left style={styles.LeftplanPart}>
                                    <Button transparent>
                                        <Thumbnail source={check} style={styles.checkthmb}/>
                                    </Button>
                                </Left>
                                <Body style={styles.borderbottomZero}>
                                <Text style={styles.plantext}> Teeth cleaning </Text>
                                </Body>

                            </ListItem>

                            <ListItem icon>
                                <Left style={styles.LeftplanPart}>
                                    <Button transparent>
                                        <Thumbnail source={check}  style={styles.checkthmb}/>
                                    </Button>
                                </Left>
                                <Body style={styles.borderbottomZero}>
                                <Text style={styles.plantext}> Perfume spray</Text>
                                </Body>

                            </ListItem>
                            <ListItem style={styles.planspacing}>

                                <Body style={styles.borderbottomZero}>
                                <Text style={styles.plantext}>*Treat for your doggo</Text>
                                </Body>

                            </ListItem>

                        </View>
                        <View style={{flex:1, alignItems:'center'}}>
                            <Button style={[styles.secondarybtn,styles.borderbtnSecondary]}
                                    onPress={() => { this.setState({infoVisible:false}) }}>
                                <Text>Close</Text>
                            </Button>
                        </View>

                    </View>
                </View>
            </Modal>
          </View>
         

    );
  }
}
