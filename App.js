import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/homeScreen';
import FirstDate from './screens/firstDate';
import Friends from './screens/friends';
import LongLove from './screens/longLove';
import WorkFriends from './screens/workFriends';
import globFunc from './screens/globFunc';

import { NavigationContainer } from '@react-navigation/native';
import mobileAds from 'react-native-google-mobile-ads'; 
import React from 'react';
import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';

const adUnitIdTop = __DEV__ ? TestIds.ADAPTIVE_BANNER : 'ca-app-pub-5135696431929942/6893005932';
const adUnitIdBottom = __DEV__ ? TestIds.ADAPTIVE_BANNER : 'ca-app-pub-5135696431929942/6893005932';

mobileAds()
  .initialize()
  .then(adapterStatuses => {
    // Initialization complete!
  });

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <BannerAd
        unitId={adUnitIdTop}
        size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
      />
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="FirstDate" component={FirstDate} options={{ headerShown: false }} />
        <Stack.Screen name="LongLove" component={LongLove} options={{ headerShown: false }} />
        <Stack.Screen name="Friends" component={Friends} options={{ headerShown: false }} />
        <Stack.Screen name="workFriends" component={WorkFriends} options={{ headerShown: false }} />
        <Stack.Screen name="globFunc" component={globFunc} options={{ headerShown: false }} />
      </Stack.Navigator>
      <BannerAd
        unitId={adUnitIdBottom}
        size={BannerAdSize.BANNER}
      />
    </NavigationContainer>
  );
}
