import {View, Text, Image} from 'react-native';
import React, { useEffect } from 'react';
import {COLORS, SIZES} from '../../Theme';

export default function SplashScreen({navigation}) {
  useEffect(() => {
    // Auto-navigation after a 2-second delay
    const timer = setTimeout(() => {
      navigation.navigate('Login');
    }, 2000);

    // Clean up the timer on component unmount
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View
      style={{
        backgroundColor: COLORS.primary,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Image
        style={{width: SIZES.base * 13, height: SIZES.base * 13}}
        source={require('../../Assets/Icons/TARMlogo.png')}
      />
    </View>
  );
}
