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
    servicesMap = new Map()
    componentDidMount(){
        let that = this
        User.getServices().then(res =>{
            for(let i = 0 ;i <res.length;i++){
                let service = res[i]
                that.servicesMap.set(service.id,service)
            }
            that.setState({services:Array.from(this.servicesMap.values())})
        })

        User.getPackages().then(res =>{
            that.setState({packages:res})
        })
    }

    next(){
        let selected = false
        let selectedData = {services:[],packages:[]}
        for(let i=0;i<this.state.packages.length;i++){
            let pac = this.state.packages[i]
            if(pac.selected){
                selected = true
                selectedData['packages'].push(pac)
            }
        }


        for(let i=0;i<this.state.services.length;i++){
            let service = this.state.services[i]
            if(service.selected){
                selected = true
                selectedData['services'].push(service)
            }
        }
        if(selected){
            this.props.next(selectedData)
            return
        }



        Alert.alert('Please select at least one service or package')





    }
    showInfo(){
        this.setState({infoVisible: true});

    }

    itemSelected(type,item){

        if(type == 'service'){
            for(let i=0;i<this.state.services.length;i++){
                let service = this.state.services[i]
                if(service.id == item.id) {
                    service.selected = !item.selected
                }
            }
            this.setState({services:this.state.services})
        }

        if(type == 'package'){
            for(let i=0;i<this.state.packages.length;i++){
                let pack = this.state.packages[i]
                if(pack.id == item.id){
                    pack.selected = !item.selected
                    for(let j=0;j<pack.services.length;j++){
                        let ser = pack.services[j]
                        let service = this.servicesMap.get(ser.id)

                        if(service){
                            // service.selected = false
                            if(pack.selected){
                                if(service.packageIds){
                                    let index = service.packageIds.indexOf(pack.id)
                                    if(index == -1){
                                        service.packageIds.push(pack.id)
                                    }else{
                                        service.packageIds.splice(index,1)
                                    }
                                }else{
                                    service.packageIds =[pack.id]
                                }

                            }else{
                                if(service.packageIds){
                                    let index = service.packageIds.indexOf(pack.id)
                                    if(index !=-1){
                                        service.packageIds.splice(index,1)
                                    }
                                }

                            }
                        }


                    }
                }else{
                    // pack.selected = false
                }
            }
            this.setState({packages:this.state.packages,services:this.state.services})
        }
    }

  render() {
    return (
        <View  style={styles.GroomingSelectWrapper}>


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
            <Text style={styles.grommingsubheading}>Packages</Text>
              {this.state.packages.length > 0 && <SelectServiceCarousal itemSelected={this.itemSelected.bind(this,'package')} data={this.state.packages} showInfo={this.showInfo.bind(this)}></SelectServiceCarousal>}
          </View>  
              
       
          <View>
            <Text style={styles.grommingsubheading}>Individual</Text>
              {this.state.services.length > 0 && <SelectServiceCarousal itemSelected={this.itemSelected.bind(this,'service')} data={this.state.services} showInfo={this.showInfo.bind(this)} ></SelectServiceCarousal>}
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
                 animationType="slide"
                transparent={true}
                visible={this.state.infoVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                }}>
                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.7)'}}>
                    <View style={styles.bottomViewModal}>
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
