import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
// import Homescreen from '../Screens/Homescreen';
import {NavigationContainer} from '@react-navigation/native';
import HomeStack from './HomeStack';
import AuthStack from './AuthStack';

const Stack = createStackNavigator();

export default function MainStack() {
  return (
    // <NavigationContainer>
      <Stack.Navigator
        initialRouteName="AuthStack"
        screenOptions={{
          headerMode: 'screen',
          headerShown: false,
          headerTintColor: 'white',
          headerStyle: {backgroundColor: 'tomato'},
        }}>
        <Stack.Screen name="AuthStack" component={AuthStack} />
        <Stack.Screen name="Home" component={HomeStack} />
      </Stack.Navigator>
    // {/* </NavigationContainer> */}
  );
}
