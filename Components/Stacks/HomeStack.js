import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Text, View} from 'react-native';
import Homescreen from '../Screens/Homescreen';
import SearchScreen from '../Screens/SearchParticipant';
import Scanner from '../Constant/Scanner';

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    // <NavigationContainer>
    <Stack.Navigator
      initialRouteName="Homescreen"
      screenOptions={{
        headerMode: 'screen',
        headerShown: false,
        headerTintColor: 'white',
        headerStyle: {backgroundColor: 'tomato'},
      }}>
      <Stack.Screen
        name="Homescreen"
        component={Homescreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{
          headerTintColor: 'white',
          headerStyle: {backgroundColor: 'tomato'},
        }}
      />
      <Stack.Screen
        name="Scanner"
        component={Scanner}
        options={{
          headerTintColor: 'white',
          headerStyle: {backgroundColor: 'tomato'},
        }}
      />
    </Stack.Navigator>
    // </NavigationContainer>
  );
}
