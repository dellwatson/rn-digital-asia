/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useEffect, useState } from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import DetailScreen from './src/screens/DetailScreen';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import PushNotificationIOS from '@react-native-community/push-notification-ios';
import PushNotification from "react-native-push-notification";
import { View } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import IconProfile from './src/components/IconProfile'
import { Provider as ReduxProvider } from 'react-redux';
import store from './src/store'

// Must be outside of any component LifeCycle (such as `componentDidMount`).
PushNotification.configure({
  // (optional) Called when Token is generated (iOS and Android)
  onRegister: function (token) {
    console.log("TOKEN:", token);
  },

  // (required) Called when a remote is received or opened, or local notification is opened
  onNotification: function (notification) {
    console.log("NOTIFICATION called:", notification);

    // process the notification

    // (required) Called when a remote is received or opened, or local notification is opened
    notification.finish(PushNotificationIOS.FetchResult.NoData);
  },

  // (optional) Called when Registered Action is pressed and invokeApp is false, if true onNotification will be called (Android)
  // onAction: function (notification) {
  //   console.log("ACTION:", notification.action);
  //   console.log("NOTIFICATION action:", notification);
  // },

  // (optional) Called when the user fails to register for remote notifications. Typically occurs when APNS is having issues, or the device is a simulator. (iOS)
  onRegistrationError: function (err) {
    console.error(err.message, err);
  },

  permissions: {
    alert: true,
    badge: true,
    sound: true,
  },
  popInitialNotification: true,
  requestPermissions: true,
});


// todo: restructure the component to folder 
function CustomHeader() {
  return (
    <SafeAreaView style={{ backgroundColor: 'white' }}>
      <View
        style={{
          width: '100%',
          backgroundColor: 'transparent',
          paddingHorizontal: '5%',
          paddingTop: '5%',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
        <IconProfile
          imgUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcyWUxDCRCf3MkdbBP8YjbCshKCgcZ7ICskQ&usqp=CAU'
          name='Henry Scott'
          title='Member broker century 21 bsd city'
        />
      </View>
    </SafeAreaView>
  );
}


const Tab = createMaterialTopTabNavigator();
function MyTabs() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#BEAF87',
        // inactiveTintColor: '#24426',
        indicatorStyle: { backgroundColor: '#BEAF87' },
        labelStyle: { textTransform: 'capitalize', fontWeight: '800' },
      }}
    >
      <Tab.Screen name="Listing" component={HomeScreen} />
      <Tab.Screen name="Favourite" component={HomeScreen} />
      <Tab.Screen name="Arsip" component={HomeScreen} />
    </Tab.Navigator>
  );
}


export default () => {
  const Stack = createStackNavigator();

  const navigationRef = React.useRef()

  const [permissions, setPermissions] = useState({});

  useEffect(() => {
    // Platform.OS === 'ios' && PushNotificationIOS.addEventListener('notification', onRemoteNotification);
    PushNotification.checkPermissions(res => console.log(res, 'permissions'))
  });

  // const onRemoteNotification = (notification) => {
  //   const isClicked = notification.getData().userInteraction === 1;

  //   if (isClicked) {
  //     console.log('clicked remote')
  //     // Navigate user to another screen
  //   } else {
  //     // Do something else with push notification
  //     console.log('do something with this')

  //   }
  // };

  return (
    <SafeAreaProvider>
      <ReduxProvider store={store}>
        <NavigationContainer ref={navigationRef}>
          <Stack.Navigator
            mode='modal'
            screenOptions={{
              gestureEnabled: true,
              cardOverlayEnabled: true,
            }}
          >
            <Stack.Screen
              options={{
                title: 'My home',
                header: props => <CustomHeader {...props} />
              }}
              name="Home" component={MyTabs} />
            <Stack.Screen
              options={{
                // headerShown: false,
                gestureEnabled: true,
                cardOverlayEnabled: true,
                cardStyle: { backgroundColor: 'white' },
                ...TransitionPresets.ModalPresentationIOS,
              }}
              name="Detail" component={DetailScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </ReduxProvider>
    </SafeAreaProvider>
  );
}





