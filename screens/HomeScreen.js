import * as React from 'react';
import { Image, Platform, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Thumbnail, Button, H2, Text} from 'native-base';
import styles from '../assets/styles/styles';
import homeIcon from '../assets/images/home.png';
import doggromming from '../assets/images/doggromming.png';
import groomingImage from '../assets/images/petproducts.png';
import { ScrollView } from 'react-native-gesture-handler';
import * as WebBrowser from 'expo-web-browser';

import { MonoText } from '../components/StyledText';

export default function HomeScreen({ navigation, route }) {
  return (

    <ScrollView 
    contentContainerStyle={{ 
    flexGrow: 1, 
    flexDirection: 'column', 
    justifyContent: 'flex-end'
  }}>

      
     <View>
      <View style={styles.footerWrapperGrid}>
               
          <Button  transparent>
              <Thumbnail  source={homeIcon} style={styles.HomeIcon}/>
          </Button>

        <H2 style={styles.HeadingDashboard}>
            What do you need for your doggo today?
        </H2>
    

        <Grid style={styles.gridRowDashboard}>
            <Row>
                <Col style={styles.gridColDashboard}>
                <TouchableOpacity>
                    <Thumbnail square size={225} source={doggromming} style={styles.imageGridDashboard}/>
                    <Text style={styles.textGrid}>Dog Grooming</Text>
                </TouchableOpacity>
                </Col>
                <Col style={styles.gridColDashboard}>
                <TouchableOpacity>
                  <View style={styles.groomingbg}>
                  <Thumbnail square size={125} source={groomingImage}  style={styles.groomingthumbnail}/> 
                  </View>
                  <Text  style={styles.textGrid}>Pet Products</Text>
                  </TouchableOpacity>
                </Col>
            </Row>
         </Grid>
               
           </View>
         
         
    </View>
  
  </ScrollView>
    // <View style={styles.container}>
    //   <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
    //     <View style={styles.welcomeContainer} >
    //         <Button title="Grroming" onPress={() => navigation.navigate('Grooming')}></Button>
    //       <Image
    //         source={
    //           __DEV__
    //             ? require('../assets/images/robot-dev.png')
    //             : require('../assets/images/robot-prod.png')
    //         }
    //         style={styles.welcomeImage}
    //       />
    //     </View>

    //     <View style={styles.getStartedContainer}>
    //       <DevelopmentModeNotice />

    //       <Text style={styles.getStartedText}>Open up the code for this screen:</Text>

    //       <View style={[styles.codeHighlightContainer, styles.homeScreenFilename]}>
    //         <MonoText>screens/HomeScreen.js</MonoText>
    //       </View>

    //       <Text style={styles.getStartedText}>
    //         Change any of the text, save the file, and your app will automatically reload.
    //       </Text>
    //     </View>

    //     <View style={styles.helpContainer}>
    //       <TouchableOpacity onPress={handleHelpPress} style={styles.helpLink}>
    //         <Text style={styles.helpLinkText}>Help, it didn’t automatically reload!</Text>
    //       </TouchableOpacity>
    //     </View>
    //   </ScrollView>

    //   <View style={styles.tabBarInfoContainer}>
    //     <Text style={styles.tabBarInfoText}>This is a tab bar. You can edit it in:</Text>

    //     <View style={[styles.codeHighlightContainer, styles.navigationFilename]}>
    //       <MonoText style={styles.codeHighlightText}>navigation/BottomTabNavigator.js</MonoText>
    //     </View>
    //   </View>
    // </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};

function DevelopmentModeNotice() {
  if (__DEV__) {
    const learnMoreButton = (
      <Text onPress={handleLearnMorePress} style={styleshome.helpLinkText}>
        Learn more
      </Text>
    );

    return (
      <Text style={styleshome.developmentModeText}>
        Development mode is enabled: your app will be slower but you can use useful development
        tools. {learnMoreButton}
      </Text>
    );
  } else {
    return (
      <Text style={styleshome.developmentModeText}>
        You are not in development mode: your app will run at full speed.
      </Text>
    );
  }
}

function handleLearnMorePress() {
  WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/workflow/development-mode/');
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/get-started/create-a-new-app/#making-your-first-change'
  );
}

const styleshome = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
