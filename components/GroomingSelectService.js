import React, { Component } from 'react';
import { View, ScrollView , Image, TouchableHighlight} from 'react-native';
import { Thumbnail, Button, H2,  Text, Right, Header, Left} from 'native-base';
import SelectServiceCarousal from '../components/SelectServiceCarousal';
import ServiceIcon from '../assets/images/perfume.png';
import styles from '../assets/styles/styles';


export default class GroomingSelectService extends Component {

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
                    Which services are you looking for??
                </H2>
             </View>
            
          <View style={styles.paddinghorizontalSpacing}>
            <Text style={styles.grommingsubheading}>Combo</Text>
            <SelectServiceCarousal></SelectServiceCarousal>
          </View>  
              
       
          <View>
            <Text style={styles.grommingsubheading}>Individual</Text>
            <SelectServiceCarousal></SelectServiceCarousal>
           </View>  
      {/* spacing */}
          <View style={styles.paddinghorizontalSpacing}>
          <Button style={styles.primarybtn}>
                            <Text  style={styles.colorPrimarybtn}>Next</Text>
                      </Button> 
          </View>  
     {/* spacing  ends here */}
      
        
          </ScrollView>
       
          </View>    
         

    );
  }
}
