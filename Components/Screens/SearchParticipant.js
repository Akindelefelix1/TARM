import React, {useContext, useEffect, useRef, useState} from 'react';
import {
  View,
  TextInput,
  Button,
  FlatList,
  Text,
  useColorScheme,
  StyleSheet,
  TouchableOpacity,
  Image,
  Modal,
  Alert,
  ScrollView,
} from 'react-native';
import {COLORS, FONTS, SIZES} from '../Theme';
import DropDown from '../Constant/DropDown';
import {Context} from '../../Context';
import axios from 'axios';
import RBSheet from 'react-native-raw-bottom-sheet';

const SearchScreen = ({navigation}) => {
  const isDarkMode = useColorScheme() === 'dark';
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [checkIn, setCheckIn] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const context = useContext(Context);

  const bottomSheetRef = useRef(null);

  const openBottomSheet = item => {
    bottomSheetRef.current.open();
  };

  const closeBottomSheet = () => {
    bottomSheetRef.current.close();
  };

  const BottomSheet = () => {
    return (
      <View style={styles.BScontainer}>
        {/* <Button title="Open Bottom Sheet" onPress={openBottomSheet} /> */}

        <RBSheet
          ref={bottomSheetRef}
          closeOnDragDown={false}
          closeOnPressMask={true}
          animationType="fade"
          height={600}
          customStyles={{
            wrapper: {
              backgroundColor: 'rgba(0, 0, 0, 0.6)',
            },
            container: {
              backgroundColor: 'white',
              borderTopLeftRadius: 15,
              borderTopRightRadius: 15,
            },
            draggableIcon: {
              backgroundColor: '#000',
            },
          }}>
          <ScrollView style={styles.bottomSheetContent}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginBottom: 15,
                  }}>
                  <Text style={styles.modalText}>Assign Participant</Text>
                  <TouchableOpacity onPress={closeBottomSheet}>
                    <Image
                      style={{width: SIZES.base * 2, height: SIZES.base * 2}}
                      source={require('../Assets/Icons/Abort.png')}
                    />
                  </TouchableOpacity>
                </View>

                <View>
                  <Text style={styles.texts}>Room</Text>
                  <DropDown details={room} />

                  <Text style={styles.texts}>Hostel</Text>
                  <DropDown details={hostel} />

                  <Text style={styles.texts}>Resourse Group</Text>
                  <DropDown details={rG} />

                  <Text style={styles.texts}>Service Point</Text>
                  <DropDown details={sP} />
                </View>

                <TouchableOpacity
                  onPress={ParticipantDetails}
                  style={{
                    backgroundColor: COLORS.primary,
                    marginTop: SIZES.base * 4,
                    alignItems: 'center',
                    borderRadius: SIZES.base,
                  }}>
                  <Text
                    style={{
                      fontSize: SIZES.h3,
                      color: COLORS.white,
                      paddingVertical: SIZES.base,
                    }}>
                    Assign
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </RBSheet>
      </View>
    );
  };

  const Details = participant =>
    Alert.alert(
      `Participant: ${participant.firstName} ${participant.lastName}`,
      `Phone: ${participant.phone} \nGender: ${participant.gender} \nMarital Status: ${participant.maritalStatus} \nOccupation: ${participant.occupation} \nAffliated Center: ${participant.churchAffiliation} \n \nAssigned Room: ${participant.assignedRoom} \nAssigned Hostel: ${participant.assignedHostel} \nAssigned Resource Group: ${participant.assignedResourceGroup} \nAssigned Service Point: ${participant.assignedServicePoint}`,
      [
        {
          text: 'OK',
          onPress: () => {
            // Perform any necessary action
          },
        },
      ],
    );

  const room = [
    {key: '2', value: 'Room 01'},
    {key: '3', value: 'Room 02'},
    {key: '4', value: 'Room 03'},
    {key: '5', value: 'Room 04'},
    {key: '6', value: 'Room 05'},
    {key: '7', value: 'Room 06'},
    {key: '8', value: 'Room 07'},
    {key: '9', value: 'Room 08'},
  ];

  const hostel = [
    {key: '2', value: 'Jesus is Lord'},
    {key: '3', value: 'The Lamb of God'},
    {key: '4', value: 'Inifity'},
    {key: '5', value: 'Anderson'},
    {key: '6', value: 'Grace Hostel'},
    {key: '7', value: 'Emmanuel Palace'},
  ];

  const rG = [
    {key: '2', value: 'RS-01'},
    {key: '3', value: 'RS-02'},
    {key: '4', value: 'RS-03'},
    {key: '5', value: 'RS-04'},
    {key: '6', value: 'RS-05'},
    {key: '7', value: 'RS-06'},
  ];

  const sP = [
    {key: '2', value: 'SP-01'},
    {key: '3', value: 'SP-02'},
    {key: '4', value: 'SP-03'},
    {key: '5', value: 'SP-04'},
    {key: '6', value: 'SP-05'},
    {key: '7', value: 'SP-06'},
  ];

  const handleSearch = async () => {
    try {
      // Make an API request to fetch data from the backend
      const response = await axios.get(
        'https://api-stg.tarminternational.org/v1/participants?limit=0',
      );
      console.log(response, 'these are the participants');

      // Update the searchResults state with the fetched data
      setSearchResults(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleCheckIn = () => {
    setIsChecked(true);
    setCheckIn(true);
  };

  // console.log(searchResults, 'searchResults');

  const renderItem = ({item}) => {
    // Filter the item based on the search text
    if (
      searchText &&
      (!item?.name ||
        !item.name.toLowerCase().includes(searchText.toLowerCase()))
    ) {
      return null;
    }

    return (
      <View>
        <TouchableOpacity
          onPress={() => Details(item)}
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginHorizontal: SIZES.base * 2,
          }}>
          {/* check box */}
          <View>
            <Image
              style={{
                width: SIZES.base * 2,
                height: SIZES.base * 2,
              }}
              source={require('../Assets/Icons/check.png')}
            />
          </View>
          {/* user info */}
          <View style={{right: SIZES.base * 2}}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: SIZES.base,
              }}>
              <Text
                style={{
                  color: COLORS.primary,
                  fontSize: SIZES.h4,
                  fontWeight: '500',
                }}>
                Name:
              </Text>
              <Text numberOfLines={1} style={styles.body}>
                {'\n'}
                {item.firstName} {item.lastName}
              </Text>
            </View>

            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={styles.title}>Email:</Text>
              <Text numberOfLines={1} style={styles.body}>
                {'\n'} {item.email}
              </Text>
            </View>

            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={styles.title}>Phone Number:</Text>
              <Text style={styles.body}> {item.phone}</Text>
            </View>

            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={styles.title}>Gender:</Text>
              <Text style={styles.body}> {item.gender}</Text>
            </View>
          </View>

          {/* check in */}
          <View>
            <TouchableOpacity
              onPress={openBottomSheet}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: SIZES.base * 2,
              }}>
              <Image
                style={{
                  width: SIZES.base,
                  height: SIZES.base,
                  right: SIZES.base,
                }}
                source={require('../Assets/Icons/mark.png')}
              />
              <Text style={{color: COLORS.primary, fontSize: SIZES.h4}}>
                CheckIn
              </Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  const EmptyListComponent = () => {
    return (
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{color: COLORS.primary, fontSize: SIZES.h3}}>
          No Participant Found
        </Text>
      </View>
    );
  };

  const ParticipantDetails = () =>
    Alert.alert(
      'Participant: Debbie Ella',
      'Phone: 080xxxxxxxxxx \nGender: Female \nMarital Status: Married \nOccupation: Developer \nAffliated Center: Ogbomoso \n \nAssigned Room: Room 001 \nAssigned Hostel: Fellowship Hostel \nAssigned Resource Group: RG 05 \nAssigned Service Point: Service Point 03',
      // [{text: 'OK', onPress: () => console.log('OK Pressed')}],
      [{text: 'Okay', onPress: () => navigation.navigate('SearchScreen')}],
    );

  useEffect(() => {
    // Fetch data from the backend when the component mounts
    handleSearch();
  }, []);

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: checkIn ? 'rgba(128, 128, 128, 1)' : COLORS.white,
        },
      ]}>
      <View
        style={{
          backgroundColor: COLORS.primary,
          width: '100%',
          height: '8%',
          justifyContent: 'center',
          // alignItems: 'center',
        }}>
        <View
          style={{
            flexDirection: 'row',
            marginLeft: SIZES.base * 2,
            alignItems: 'center',
          }}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={{}}>
            <Image
              style={{
                width: SIZES.base * 3.5,
                height: SIZES.base * 3.5,
                borderRadius: 20,
              }}
              source={require('../Assets/Icons/back.png')}
            />
          </TouchableOpacity>
          <Text
            style={{
              color: COLORS.white,
              left: SIZES.base * 5,
              ...FONTS.h3,
            }}>
            Search Participant
          </Text>
        </View>
      </View>

      <View
        style={{marginHorizontal: SIZES.base * 2, marginTop: SIZES.base * 2}}>
        <Text
          style={{
            color: isDarkMode ? COLORS.primary : COLORS.black,
            fontWeight: 'bold',
            ...FONTS.h3,
          }}>
          PARTICIPANTS
        </Text>
      </View>

      <View
        style={{marginHorizontal: SIZES.base * 2, marginTop: SIZES.base * 2}}>
        <TextInput
          placeholder="Search by names"
          placeholderTextColor={'gray'}
          value={searchText}
          onChangeText={text => setSearchText(text)}
          style={{
            width: '100%',
            borderWidth: 0.5,
            borderRadius: SIZES.radius * 1.5,
            paddingLeft: 9,
            color: COLORS.black,
          }}
        />
        <TouchableOpacity onPress={handleSearch}>
          <Image
            style={{
              width: SIZES.base * 3.5,
              height: SIZES.base * 3.5,
              alignSelf: 'flex-end',
              bottom: SIZES.base * 4.5,
              right: SIZES.base * 2,
            }}
            source={require('../Assets/Icons/search.png')}
          />
        </TouchableOpacity>
      </View>

      {/* <Button title="Search" onPress={handleSearch} /> */}

      <FlatList
        style={{marginBottom: 9}}
        data={searchResults?.data?.docs || []}
        renderItem={renderItem}
        keyExtractor={item => item._id.toString()}
        ListEmptyComponent={EmptyListComponent}
      />

      <BottomSheet />
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    color: COLORS.black,
    fontSize: SIZES.h4,
    fontWeight: '500',
  },
  body: {
    color: COLORS.primary,
    fontSize: SIZES.h4,
    width: SIZES.base * 12,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    // alignItems: 'center',
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
  modalText: {
    fontWeight: 'bold',
    fontSize: SIZES.h3,
    color: COLORS.black,
    // textAlign: 'center',
  },
  texts: {
    fontSize: SIZES.body2,
    color: COLORS.black,
    marginVertical: SIZES.base,
  },
  BScontainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomSheetContent: {
    // padding: 20,
  },
});
