import React from "react";
import { AppRegistry, Image, TouchableOpacity } from "react-native";
import {  View } from "native-base";
import styles from "../assets/styles/styles";
export default class SideBar extends React.Component {
       constructor(props) {
              super(props);
       }
    
  render() {
    return (
     <View style={styles.LeftPanel}>
       <TouchableOpacity>
              <Image  source={require('../assets/images/Menu/menuIcon1.png')} style={styles.ImageMenuIcons}/>
       </TouchableOpacity>
       <TouchableOpacity>
              <Image  source={require('../assets/images/Menu/menuIcon2.png')} style={styles.ImageMenuIcons}/>
       </TouchableOpacity>
       <TouchableOpacity>
              <Image  source={require('../assets/images/Menu/menuIcon3.png')} style={styles.ImageMenuIcons}/>
       </TouchableOpacity>
       <TouchableOpacity>
              <Image  source={require('../assets/images/Menu/menuIcon4.png')} style={styles.ImageMenuIcons}/>
       </TouchableOpacity>
       <TouchableOpacity>
              <Image  source={require('../assets/images/Menu/menuIcon5.png')} style={styles.ImageMenuIcons}/>
       </TouchableOpacity>
       <TouchableOpacity>
              <Image  source={require('../assets/images/Menu/menuIcon6.png')} style={styles.ImageMenuIcons}/>
       </TouchableOpacity>
       <TouchableOpacity>
              <Image  source={require('../assets/images/menu.png')} style={styles.ImageMenulastIcons}/>
       </TouchableOpacity>
       </View>
     
    );
  }
}