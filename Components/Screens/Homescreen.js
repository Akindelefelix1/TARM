import React, {useState, useEffect, useContext} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  useColorScheme,
  Alert,
  Modal,
  StyleSheet,
  ScrollView,
  Image,
  TextInput,
  KeyboardAvoidingView,
  ActivityIndicator,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {COLORS, FONTS, SIZES} from '../Theme';
import DropDown from '../Constant/DropDown';
import {Context} from '../../Context';

const NewParticipants = ({
  firstName,
  setFirstName,
  lastName,
  setLastName,
  email,
  setEmail,
  phoneNumber,
  setPhoneNumber,
  gender,
  setGender,
  occupation,
  setOccupation,
  country,
  setCountry,
}) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.centeredView}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginBottom: 15,
                }}>
                <Text style={styles.modalText}>ADD NEW PARTICIPANTS</Text>
                <TouchableOpacity
                  onPress={() => setModalVisible(!modalVisible)}>
                  <Image
                    style={{width: SIZES.base * 2, height: SIZES.base * 2}}
                    source={require('../Assets/Icons/Abort.png')}
                  />
                </TouchableOpacity>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Text style={styles.texts}>First Name</Text>
                <Text style={styles.texts}>Last Name</Text>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <TextInput
                  placeholder="First Name"
                  placeholderTextColor="gray"
                  value={firstName}
                  onChangeText={text => setFirstName(text)}
                  style={styles.textInput}
                />
                <TextInput
                  placeholder="Last Name"
                  placeholderTextColor="gray"
                  value={lastName}
                  onChangeText={setLastName}
                  style={styles.textInput}
                />
              </View>

              <Text style={styles.texts}>Email Address</Text>
              <TextInput
                placeholder="Email Address"
                placeholderTextColor="gray"
                value={email}
                onChangeText={setEmail}
                style={styles.textInput2}
              />

              <Text style={styles.texts}>Phone Number</Text>
              <TextInput
                placeholder="Phone Number"
                placeholderTextColor="gray"
                value={phoneNumber}
                onChangeText={setPhoneNumber}
                style={styles.textInput2}
              />

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Text style={styles.texts}>Country</Text>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <TextInput
                  placeholder="Country"
                  placeholderTextColor="gray"
                  value={country}
                  onChangeText={setCountry}
                  style={styles.textInput2}
                />
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View>
                  <Text style={styles.texts}>Gender</Text>
                  <DropDown
                    details={genderR}
                    selectedValue={gender}
                    onSelect={setGender}
                  />
                </View>

                <View>
                  <Text style={styles.texts}>Marital Status</Text>
                  <DropDown details={maritalStatus} />
                </View>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View>
                  <Text style={styles.texts}>Occupation</Text>
                  <TextInput
                    placeholder="Occupation"
                    placeholderTextColor="gray"
                    value={occupation}
                    onChangeText={setOccupation}
                    style={styles.textInput2}
                  />
                </View>

                <View>
                  <Text style={styles.texts}>Affliated Center</Text>
                  <DropDown details={affiliatedCenter} />
                </View>
              </View>

              <View>
                {isLoading ? (
                  <ActivityIndicator
                    size="large"
                    color={COLORS.primary}
                    style={{marginTop: SIZES.base * 2}}
                  />
                ) : (
                  <TouchableOpacity
                    onPress={handleSubmit}
                    style={{
                      alignItems: 'center',
                      backgroundColor: COLORS.primary,
                      marginHorizontal: SIZES.h1,
                      marginTop: SIZES.h1 * 2,
                      borderRadius: SIZES.radius * 2,
                      paddingVertical: SIZES.base * 0.8,
                    }}>
                    <Text
                      style={{
                        color: COLORS.white,
                        ...FONTS.h3,
                      }}>
                      Save Participant
                    </Text>
                  </TouchableOpacity>
                )}
              </View>
            </View>
          </View>
        </Modal>
      </KeyboardAvoidingView>
    </View>
  );
};

export default function Homescreen({navigation, route}) {
  const {eventId} = route.params;

  const {signOut} = useContext(Context);
  const {navigate} = useNavigation();

  const isDarkMode = useColorScheme() === 'dark';
  const [welcomeMessage, setWelcomeMessage] = useState('');

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [gender, setGender] = useState('');
  const [maritalStatusS, setMaritalStatusS] = useState('');
  const [occupation, setOccupation] = useState('');
  const [affiliatedCenter, setAffiliatedCenter] = useState('');

  const [isLoading, setIsLoading] = useState(false);

  const [isSuccessAlertVisible, setIsSuccessAlertVisible] = useState(false);
  const [isErrorAlertVisible, setIsErrorAlertVisible] = useState(false);

  useEffect(() => {
    setWelcomeMessage('Welcome back!');
    setTimeout(() => {
      setWelcomeMessage('');
    }, 1000);
  }, []);

  const confirmLogout = () => {
    Alert.alert('Confirmation', 'Are you sure you want to log out?', [
      {text: 'Cancel', style: 'cancel'},
      {text: 'Log Out', onPress: () => signOut()},
    ]);
  };

  const CheckIn = () =>
    Alert.alert('Check-In Participants', 'Select an option', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {
        text: 'Scan Participant',
        onPress: () => navigation.navigate('Scanner'),
        style: 'cancel',
      },
      {
        text: 'Search for Participant',
        onPress: () => navigation.navigate('SearchScreen'),
      },
    ]);

  const Done = () =>
    Alert.alert('Status Report', 'Participant Created Successfully', [
      {text: 'Okay'},
    ]);

  const genderR = [
    {key: '2', value: 'Male'},
    {key: '3', value: 'Female'},
  ];

  const maritalStatus = [
    {key: '2', value: 'Single'},
    {key: '3', value: 'Engaged'},
    {key: '4', value: 'Married'},
  ];

  const Affliated = [
    {key: '2', value: 'Ilorin'},
    {key: '3', value: 'Ogbomoso'},
    {key: '4', value: 'Lagos'},
    {key: '5', value: 'Ibadan'},
    {key: '6', value: 'Iwo'},
    {key: '7', value: 'Abuja'},
    {key: '8', value: 'South Africa'},
  ];

  const handleSubmit = () => {
    const userData = {
      eventId,
      firstName,
      lastName,
      phoneNumber,
      country,
      gender: gender.key,
      email,
      occupation,
    };

    setIsLoading(true);

    fetch('https://api-stg.tarminternational.org/v1/participants', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({data: userData}),
    })
      .then(response => {
        setIsLoading(false);

        if (response.ok) {
          setIsSuccessAlertVisible(true);
          console.log('User data sent successfully');

          setFirstName('');
          setLastName('');
          setPhoneNumber('');
          setOccupation('');
          setEmail('');
          setCountry('');
        } else {
          setIsErrorAlertVisible(true);
          console.error(response);
          console.error('Failed to send user data');
        }
        return response.json();
      })
      .then(r => {
        console.log(r, 'response from backend');
      })
      .catch(error => {
        setIsLoading(false);
        setIsErrorAlertVisible(true);
        console.error('Error sending user data', error);
      });
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: COLORS.primary,
          width: '100%',
          height: '8%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            color: COLORS.white,
            fontSize: SIZES.base * 3,
            ...FONTS.h2,
          }}>
          All Participants
        </Text>
      </View>

      <View
        style={{
          marginVertical: SIZES.base * 2,
          marginHorizontal: SIZES.base * 2,
        }}>
        {welcomeMessage ? (
          <View style={{}}>
            <Text
              style={{
                color: COLORS.primary,
                fontSize: SIZES.base * 2,
                ...FONTS.h3,
              }}>
              {welcomeMessage}
            </Text>
          </View>
        ) : (
          <Text
            style={{
              color: isDarkMode ? COLORS.primary : COLORS.black,
              fontSize: SIZES.base * 4,
              ...FONTS.h2,
            }}>
            Participants
          </Text>
        )}

        <NewParticipants />
        <View>
          <TouchableOpacity
            onPress={() => setModalVisible(true)}
            style={{
              backgroundColor: COLORS.primary,
              height: SIZES.base * 5,
              justifyContent: 'center',
              alignItems: 'center',
              marginVertical: SIZES.base,
              borderRadius: SIZES.radius,
              paddingHorizontal: SIZES.base * 7,
            }}>
            <Text
              style={{color: 'white', fontSize: SIZES.base * 3, ...FONTS.h3}}>
              Add new Participants
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={CheckIn}
            style={{
              backgroundColor: COLORS.primary,
              height: SIZES.base * 5,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: SIZES.radius,
              paddingHorizontal: SIZES.base * 7,
            }}>
            <Text
              style={{color: 'white', fontSize: SIZES.base * 3, ...FONTS.h3}}>
              Check-In Participants
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity onPress={confirmLogout} style={styles.buttonContainer}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>

      {/* Success Alert */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={isSuccessAlertVisible}
        onRequestClose={() => setIsSuccessAlertVisible(false)}>
        <View style={styles.alertContainer}>
          <View style={styles.alertContent}>
            <Text style={styles.alertTitle}>Success</Text>
            <Text style={styles.alertMessage}>
              Participant created successfully.
            </Text>
            <TouchableOpacity
              style={styles.alertButton}
              onPress={() => setIsSuccessAlertVisible(false)}>
              <Text style={styles.alertButtonText}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Error Alert */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={isErrorAlertVisible}
        onRequestClose={() => setIsErrorAlertVisible(false)}>
        <View style={styles.alertContainer}>
          <View style={styles.alertContent}>
            <Text style={styles.alertTitle}>Error</Text>
            <Text style={styles.alertMessage}>
              Failed to create participant.
            </Text>
            <TouchableOpacity
              style={styles.alertButton}
              onPress={() => setIsErrorAlertVisible(false)}>
              <Text style={styles.alertButtonText}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    marginTop: 22,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textInput: {
    borderWidth: 0.5,
    borderRadius: SIZES.radius,
    width: '47%',
    height: SIZES.base * 4.5,
    fontSize: SIZES.body4,
    padding: SIZES.base,
    color: COLORS.black,
    ...FONTS.h4,
  },
  textInput2: {
    borderWidth: 0.5,
    borderRadius: SIZES.radius,
    width: '100%',
    height: SIZES.base * 4.5,
    fontSize: SIZES.body4,
    padding: SIZES.base,
    color: COLORS.black,
    ...FONTS.h4,
  },
  modalText: {
    fontWeight: 'bold',
    fontSize: SIZES.h3,
    color: COLORS.black,
    ...FONTS.h3,
  },
  texts: {
    fontSize: SIZES.body2,
    color: COLORS.black,
    marginVertical: SIZES.base,
    ...FONTS.h3,
  },
  buttonContainer: {
    backgroundColor: '#FF6347',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignSelf: 'center',
    position: 'absolute',
    bottom: 0,
    marginBottom: 35,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  alertContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  alertContent: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 20,
    width: '80%',
    alignItems: 'center',
  },
  alertTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    ...FONTS.h3,
    color: 'black',
  },
  alertMessage: {
    ...FONTS.h4,
    textAlign: 'center',
    marginBottom: 20,
    color: 'black',
  },
  alertButton: {
    backgroundColor: COLORS.primary,
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignSelf: 'center',
  },
  alertButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
