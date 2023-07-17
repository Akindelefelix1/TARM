// import {
//   View,
//   Text,
//   StyleSheet,
//   Modal,
//   TouchableOpacity,
//   Image,
//   TextInput,
// } from 'react-native';
// import React, {useState} from 'react';
// import {COLORS, SIZES} from '../Theme';

// export default function ModalSet() {
//   const [modalVisible, setModalVisible] = useState(false);
//   const [done, setDone] = useState(false);

//   const Done = () => {
//     return (
//       <View style={styles.centeredView}>
//         <Modal
//           animationType="slide"
//           transparent={true}
//           visible={done}
//           onRequestClose={() => {
//             setDone(!done);
//           }}>
//           <View style={styles.centeredView}>
//             <View style={styles.modalView}>
//               <TouchableOpacity>
//                 <Image
//                   style={{
//                     width: SIZES.base * 1.5,
//                     height: SIZES.base * 1.5,
//                     alignSelf: 'flex-end',
//                   }}
//                   source={require('../Assets/Icons/Abort.png')}
//                 />
//               </TouchableOpacity>
//               <Image
//                 style={{
//                   width: SIZES.base * 1.5,
//                   height: SIZES.base * 1.5,
//                   alignSelf: 'flex-end',
//                 }}
//                 source={require('../Assets/Icons/Abort.png')}
//               />

//               <Text style={styles.texts}>Done</Text>
//             </View>
//           </View>
//         </Modal>
//       </View>
//     );
//   };
//   return (
//     <View>
//       <View style={styles.centeredView}>
//         <Modal
//           animationType="slide"
//           transparent={true}
//           visible={modalVisible}
//           onRequestClose={() => {
//             setModalVisible(!modalVisible);
//           }}>
//           <View style={styles.centeredView}>
//             <View style={styles.modalView}>
//               <View
//                 style={{
//                   flexDirection: 'row',
//                   justifyContent: 'space-between',
//                   marginBottom: 15,
//                 }}>
//                 <Text style={styles.modalText}>ADD NEW PARTICIPANTS</Text>
//                 <TouchableOpacity
//                   onPress={() => setModalVisible(!modalVisible)}>
//                   <Image
//                     style={{width: SIZES.base * 1.5, height: SIZES.base * 1.5}}
//                     source={require('../Assets/Icons/Abort.png')}
//                   />
//                 </TouchableOpacity>
//               </View>

//               {/* name */}
//               <Text style={styles.texts}>Name</Text>
//               <TextInput
//                 placeholder="Ibironke Johnson"
//                 placeholderTextColor={'gray'}
//                 style={{
//                   borderWidth: 0.5,
//                   borderRadius: SIZES.radius,
//                   width: '100%',
//                   height: SIZES.base * 4.5,
//                   fontSize: SIZES.body4,
//                   padding: SIZES.base,
//                 }}
//               />

//               {/* email */}
//               <Text style={styles.texts}>Email Address</Text>
//               <TextInput
//                 placeholder="Ibironkejohnson@gmail.com"
//                 placeholderTextColor={'gray'}
//                 style={{
//                   borderWidth: 0.5,
//                   borderRadius: SIZES.radius,
//                   width: '100%',
//                   height: SIZES.base * 4.5,
//                   fontSize: SIZES.body4,
//                   padding: SIZES.base,
//                 }}
//               />

//               {/* phone number */}
//               <Text style={styles.texts}>Phone Number</Text>
//               <TextInput
//                 placeholder="080***********"
//                 placeholderTextColor={'gray'}
//                 style={{
//                   borderWidth: 0.5,
//                   borderRadius: SIZES.radius,
//                   width: '100%',
//                   height: SIZES.base * 4.5,
//                   fontSize: SIZES.body4,
//                   padding: SIZES.base,
//                 }}
//               />

//               <View
//                 style={{flexDirection: 'row', justifyContent: 'space-between'}}>
//                 <View>
//                   {/* gender */}
//                   <Text style={styles.texts}>Gender</Text>
//                   <TextInput
//                     placeholder="Male"
//                     placeholderTextColor={'gray'}
//                     style={{
//                       borderWidth: 0.5,
//                       borderRadius: SIZES.radius,
//                       width: '100%',
//                       height: SIZES.base * 4.5,
//                       fontSize: SIZES.body4,
//                       padding: SIZES.base,
//                     }}
//                   />
//                 </View>

//                 <View>
//                   {/* Marital */}
//                   <Text style={styles.texts}>Marital Status</Text>
//                   <TextInput
//                     placeholder="Married"
//                     placeholderTextColor={'gray'}
//                     style={{
//                       borderWidth: 0.5,
//                       borderRadius: SIZES.radius,
//                       width: '100%',
//                       height: SIZES.base * 4.5,
//                       fontSize: SIZES.body4,
//                       padding: SIZES.base,
//                     }}
//                   />
//                 </View>
//               </View>

//               <View
//                 style={{flexDirection: 'row', justifyContent: 'space-between'}}>
//                 <View>
//                   {/* Occupation */}
//                   <Text style={styles.texts}>Occupation</Text>
//                   <TextInput
//                     placeholder="Male"
//                     placeholderTextColor={'gray'}
//                     style={{
//                       borderWidth: 0.5,
//                       borderRadius: SIZES.radius,
//                       width: '100%',
//                       height: SIZES.base * 4.5,
//                       fontSize: SIZES.body4,
//                       padding: SIZES.base,
//                     }}
//                   />
//                 </View>

//                 <View>
//                   {/* Affliated Center */}
//                   <Text style={styles.texts}>Affliated Center</Text>
//                   <TextInput
//                     placeholder="Married"
//                     placeholderTextColor={'gray'}
//                     style={{
//                       borderWidth: 0.5,
//                       borderRadius: SIZES.radius,
//                       width: '100%',
//                       height: SIZES.base * 4.5,
//                       fontSize: SIZES.body4,
//                       padding: SIZES.base,
//                     }}
//                   />
//                 </View>
//               </View>

//               {/* Save Participant */}
//               <View>
//                 <Done />
//                 <TouchableOpacity
//                   onPress={() => setDone(true)}
//                   style={{
//                     alignItems: 'center',
//                     backgroundColor: COLORS.primary,
//                     marginHorizontal: SIZES.h1,
//                     marginTop: SIZES.h1 * 2,
//                     borderRadius: SIZES.radius * 2,
//                     paddingVertical: SIZES.base * 0.8,
//                   }}>
//                   <Text
//                     style={{
//                       color: COLORS.white,
//                       fontSize: SIZES.body2,
//                     }}>
//                     Save Participant
//                   </Text>
//                 </TouchableOpacity>
//               </View>
//             </View>
//           </View>
//         </Modal>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   centeredView: {
//     flex: 1,
//     justifyContent: 'center',
//     // alignItems: 'center',
//     marginTop: 22,
//   },
//   modalView: {
//     margin: 20,
//     backgroundColor: 'white',
//     borderRadius: 20,
//     padding: 20,
//     // alignItems: 'center',
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 4,
//     elevation: 5,
//   },
//   textStyle: {
//     color: 'white',
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
//   modalText: {
//     fontWeight: 'bold',
//     fontSize: SIZES.h3,
//     color: COLORS.black,
//     // textAlign: 'center',
//   },
//   texts: {
//     fontSize: SIZES.body2,
//     color: COLORS.black,
//     marginVertical: SIZES.base,
//   },
// });
