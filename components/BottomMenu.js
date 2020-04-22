import React, { Component } from 'react';
import { View, TouchableOpacity} from 'react-native';
import styles from '../assets/styles/styles';
import { Col ,Grid } from 'react-native-easy-grid';
import { Thumbnail} from 'native-base';
import logoImage from '../assets/images/logo.png';
import notifyImage from '../assets/images/notification.png';
import menuImage from '../assets/images/menu.png';
import searchIcon from '../assets/images/search.png';


export default class BottomMenu extends Component {

    constructor(props) {
        super(props)
       
    }

   
  render() {
    return (
        <View style={styles.footer}>
          
            <Grid style={{flex:1, justifyContent:"space-between", width:"100%", marginBottom:10,}}>
                <Col>
                <TouchableOpacity style={styles.IconBottomPosition}>
                    <Thumbnail  source={logoImage} style={styles.logofooter}/> 
                    </TouchableOpacity>
                </Col>

                <Col style={styles.rightMenuBarBlock}>

                       
                         <TouchableOpacity style={[styles.IconBottomPosition, styles.sidenotifyspacing]}>
                          <Thumbnail  source={searchIcon} style={styles.searchImage}/> 
                        </TouchableOpacity>

                        <TouchableOpacity   style={styles.MenuIconOpen}>
                          <Thumbnail source={menuImage} style={styles.menuImage}/> 
                        </TouchableOpacity>
                       
                </Col>

            </Grid>
         </View>
    )
  };
}