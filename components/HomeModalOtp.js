import React, { Component } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from "react-native";
import { H2, Button, Card, CardItem, Body, Item, Input, Label} from 'native-base';
import styles from '../assets/styles/styles';

export default class  HomeModalOtp extends Component {
  state = {
    modalVisible: false
  };

  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  }

  render() {
    const { modalVisible } = this.state;
    return (
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
          }}
        >
          <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.7)'}}>
              <View style={styles.bottomViewModal}>
            <View style={styles.modalView}>
                            <CardItem>
                            <Body style={{paddingBottom:10}}>
                                <Text style={styles.HeadingText}>Enter the OTP shared by your groomer.</Text>

                                    <Item  style={styles.inputBLock} floatingLabel>
                                        <Label style={styles.inputfiledLabel}>OTP</Label>
                                        <Input  />
                                    </Item>
                               
                            </Body>
                            </CardItem>
                            <View style={styles.buttonprimaryWrapper}>
                            <Button style={[styles.primarybtn, styles.buttonprimarybtn]}>
                                    <Text  style={styles.colorPrimarybtn}>Start Grooming</Text>
                                </Button>
                            </View>
            </View>
            <View style={{flex:1, alignItems:'center'}}>
               <Button style={[styles.secondarybtn,styles.borderbtnSecondary]} onPress={() => {
                  this.setModalVisible(!modalVisible);
                }}>
                <Text style={styles.colorSecondarybtn}>Close</Text>
              </Button>
            </View>
            </View>
          </View>
        </Modal>

        
        <Button style={styles.primarybtn}  onPress={() => {
            this.setModalVisible(true);
          }}>
                            <Text  style={styles.colorPrimarybtn}>Start Grooming</Text>
                      </Button>
      </View>
    );
  }
}
