import {
  View,
  Text,
  Image,
  TextInput,
  Alert,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {COLORS, SIZES, FONTS} from '../../Theme';

export default function ResetScreen({navigation}) {
  const ResetAccount = () =>
    Alert.alert(
      'Account Reset Successful',
      'An email has been sent to your registered email address. \nOpen your email to reset your account. \n \n...TARM CAMS',
      [
        {
          text: 'Go Back',
          onPress: () => navigation.navigate('Login'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
    );

  return (
    <View
      style={{
        backgroundColor: COLORS.primary,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {/* Logo and header */}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          bottom: SIZES.base * 5,
        }}>
        <Image
          style={{width: SIZES.base * 5, height: SIZES.base * 5}}
          source={require('../../Assets/Icons/TARMlogo.png')}
        />
        <Text
          style={{
            color: COLORS.white,
            fontSize: SIZES.h1,
            marginHorizontal: SIZES.base,
            fontWeight: '600',
            ...FONTS.h1,
          }}>
          TARM CAMS
        </Text>
      </View>

      <View style={{margin: SIZES.body1}}>
        {/* email */}
        <View style={{alignSelf: 'flex-start'}}>
          <Text
            style={{
              color: COLORS.white,
              fontSize: SIZES.h3,
              marginVertical: SIZES.base,
            }}>
            Email Address
          </Text>
          <TextInput
            placeholder="Enter Your Email Address"
            placeholderTextColor={'gray'}
            //   onChangeText={text => setSearchText(text)}
            style={{
              width: SIZES.base * 35,
              height: SIZES.base * 4.5,
              // borderWidth: 0.5,
              borderRadius: SIZES.radius * 1.5,
              paddingLeft: 9,
              backgroundColor: COLORS.white,
              paddingVertical: SIZES.radius
            }}
          />
        </View>

        {/* Reset */}
        <View
          style={{
            alignItems: 'flex-end',
            marginTop: SIZES.base * 2,
          }}>
          <TouchableOpacity
            onPress={ResetAccount}
            style={{
              backgroundColor: '#b11226',
              paddingHorizontal: SIZES.base * 3,
              paddingVertical: SIZES.base,
              borderRadius: SIZES.radius * 2,
            }}>
            <Text
              style={{
                color: COLORS.white,
                fontSize: SIZES.h4,
                fontWeight: '600',
              }}>
              RESET
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate('Login')}
        style={{marginTop: SIZES.base * 5}}>
        <Text
          style={{
            color: COLORS.white,
            fontSize: SIZES.h4,
            fontWeight: '600',
            textDecorationLine: 'underline',
            ...FONTS.h3,
          }}>
          Back To Login
        </Text>
      </TouchableOpacity>
    </View>
  );
}
