import React, {Component} from 'react';
import check from '../assets/images/checkmark.png';
import {Modal, TouchableHighlight, View, Alert, Image} from 'react-native';
import { Button, Text,ListItem,Icon, Left, Body, Thumbnail, H2 } from 'native-base'
import styles from '../assets/styles/styles';
import info from '../assets/images/check.png';

export default  class SelectServiceInfo extends Component {
  constructor(props) {
    super(props)
                    }
  state = {
    modalVisible: true,
  };

  _handleButtonPress = () => {
    this.setInfoModalVisible(true);
  };

  setInfoModalVisible(visible) {
    this.setState({modalVisible: visible});
    if(this.props.closeMe){
      this.props.closeMe()
    }
  }


  render() {
    return (
      <View>
        <Modal
          animationType="fade"
          transparent={true}
          visible={this.state.modalVisible}
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
                onPress={() => { this.setInfoModalVisible(!this.state.modalVisible); }}>
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