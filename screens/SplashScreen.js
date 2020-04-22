import React from 'react'
import { View, Image, ImageBackground} from 'react-native';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import styles from '../assets/styles/styles';

export default class  SplashScreen extends React.Component {
 
    render() {
        return (
            <View style={styles.splashwrapper}>    
            <ImageBackground
                style={styles.Imagebg} 
              source={require('../assets/images/splash.png')}> 
                     
               <View style={styles.centerBlock}>
                   <Image
                       style={styles.logosplash}
                       source={require('../assets/images/logo.png')}
                       />
                
               </View>
               </ImageBackground>
           </View>
        );
    }
}