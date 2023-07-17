import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Text, View} from 'react-native';
import SplashScreen from '../Screens/AuthScreens/SplashScreen';
import Login from '../Screens/AuthScreens/Login';
import Homescreen from '../Screens/Homescreen';
import ResetScreen from './../Screens/AuthScreens/ResetScreen';
import SearchScreen from '../Screens/SearchParticipant';
import Scanner from '../Constant/Scanner';

const Stack = createStackNavigator();

export default function AuthStack() {
  return (
    // <NavigationContainer>
    <Stack.Navigator
      initialRouteName="SplashScreen"
      screenOptions={{
        headerMode: 'screen',
        headerShown: false,
        headerTintColor: 'white',
        headerStyle: {backgroundColor: 'tomato'},
      }}>
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="Login" component={Login} options={{}} />
      <Stack.Screen
        name="Homescreen"
        component={Homescreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ResetScreen"
        component={ResetScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Scanner"
        component={Scanner}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
    // </NavigationContainer>
  );
}
