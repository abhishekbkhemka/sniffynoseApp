import * as React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { SplashScreen } from 'expo';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import useLinking from './navigation/useLinking';
import GroomingScreen from "./screens/GroomingScreen";
import HomeScreen from "./screens/HomeScreen";
import AppointmentsScreen from "./screens/AppointmentsScreen";

import BottomMenu from './components/BottomMenu';
import { dimensions } from './assets/styles/base';

const Stack = createStackNavigator();

String.prototype.title = function () {
    return this.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
};

export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);
  const [initialNavigationState, setInitialNavigationState] = React.useState();
  const containerRef = React.useRef();
  const { getInitialState } = useLinking(containerRef);

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHide();

        // Load our initial navigation state
        setInitialNavigationState(await getInitialState());

        // Load fonts
        await Font.loadAsync({
          ...Ionicons.font,
          'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hide();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return null;
  } else {
    return (
      <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="default" />}

          <NavigationContainer>
              <Stack.Navigator initialRouteName="Home" screenOptions={{
                  headerShown: false
              }}>
                
                  <Stack.Screen name="Home" component={HomeScreen} />
                  <Stack.Screen name="Grooming" component={GroomingScreen} /> 
                  <Stack.Screen name="Appointment" component={AppointmentsScreen} />
              </Stack.Navigator>
          </NavigationContainer>
          {/* <BottomMenu></BottomMenu> */}


        {/*<NavigationContainer ref={containerRef} initialState={initialNavigationState}>*/}
          {/*<Stack.Navigator>*/}
            {/*<Stack.Screen name="Root" component={BottomTabNavigator} />*/}
          {/*</Stack.Navigator>*/}
        {/*</NavigationContainer>*/}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    width:dimensions.fullWidth,
    height:dimensions.fullHeight
  },
});
