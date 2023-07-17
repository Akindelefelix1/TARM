import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  BackHandler,
} from 'react-native';
import React, {useContext, useState, useEffect} from 'react';
import {COLORS, SIZES, FONTS} from '../../Theme';
import {Context} from '../../../Context';

export default function Login({navigation}) {
  const {user, signIn, signOut, fetchEventById} = useContext(Context);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSignIn = async () => {
    setLoading(true);
    setError('');

    const success = await signIn(email, password);

    setLoading(false);

    if (!success) {
      setError('Invalid email or password');
    } else {
      fetchEventById('64abf5f019302cd113af9cfd'); // Replace `eventId` with the desired event ID
      navigation.navigate('Homescreen', {eventId: '64abf5f019302cd113af9cfd'});
    }
  };

  const handleBackPress = () => {
    if (navigation.isFocused()) {
      BackHandler.exitApp(); // Close the app when back button is pressed on the Login screen
      return true; // Prevent default back button behavior
    }
    return false; // Allow default back button behavior on other screens
  };

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackPress);

    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackPress);
    };
  }, []);

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
              ...FONTS.h3,
            }}>
            Email Address
          </Text>
          <TextInput
            placeholder="Enter Your Email Address"
            placeholderTextColor="gray"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            style={{
              width: SIZES.base * 35,
              height: SIZES.base * 4.5,
              borderRadius: SIZES.radius * 1.5,
              paddingLeft: 9,
              backgroundColor: COLORS.white,
              color: COLORS.black,
              paddingVertical: SIZES.radius,
              ...FONTS.h5,
            }}
          />
        </View>

        {/* password */}
        <View style={{alignSelf: 'flex-start', marginTop: SIZES.radius * 3.5}}>
          <Text
            style={{
              color: COLORS.white,
              marginVertical: SIZES.base,
              ...FONTS.h3,
            }}>
            Password
          </Text>
          <TextInput
            secureTextEntry
            placeholder="Enter Password"
            placeholderTextColor="gray"
            value={password}
            onChangeText={setPassword}
            style={{
              width: SIZES.base * 35,
              height: SIZES.base * 4.5,
              borderRadius: SIZES.radius * 1.5,
              paddingLeft: 9,
              backgroundColor: COLORS.white,
              color: COLORS.black,
              paddingVertical: SIZES.radius,
              ...FONTS.h5,
            }}
          />
        </View>

        {/* Remember me & LOGIN */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: SIZES.base * 2,
          }}>
          <Text style={{color: COLORS.white, fontSize: SIZES.h4}}>
            Remember Me
          </Text>
          <TouchableOpacity
            onPress={handleSignIn}
            style={{
              backgroundColor: '#b11226',
              paddingHorizontal: SIZES.base * 3,
              paddingVertical: SIZES.base,
              borderRadius: SIZES.radius * 2,
            }}>
            {loading ? (
              <ActivityIndicator size="small" color={COLORS.white} />
            ) : (
              <Text
                style={{
                  color: COLORS.white,
                  fontSize: SIZES.h4,
                  fontWeight: '600',
                  ...FONTS.h3,
                }}>
                LOGIN
              </Text>
            )}
          </TouchableOpacity>
        </View>

        {/* Error message */}
        {error ? (
          <Text style={{color: 'orange', marginTop: SIZES.base}}>{error}</Text>
        ) : null}
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate('ResetScreen')}
        style={{marginTop: SIZES.base * 3}}>
        <Text
          style={{
            color: COLORS.white,
            fontSize: SIZES.h4,
            fontWeight: '600',
            textDecorationLine: 'underline',
            ...FONTS.h4,
          }}>
          Reset Account
        </Text>
      </TouchableOpacity>
    </View>
  );
}
