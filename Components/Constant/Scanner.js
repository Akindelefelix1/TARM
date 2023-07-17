import React, {useRef, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {RNCamera} from 'react-native-camera';

const Scanner = () => {
  const camera = useRef(null);
  const [scanning, setScanning] = useState(false);

  const onBarCodeRead = e => {
    if (!scanning) {
      setScanning(true);
      alert(e.data);
      // Perform necessary actions with the scanned data
      // For example, you can navigate to a different screen
      // or call an API with the scanned data.
    }
  };

  return (
    <View style={styles.container}>
      <RNCamera
        ref={camera}
        style={styles.preview}
        onBarCodeRead={onBarCodeRead}
        captureAudio={false}>
        <Text style={styles.captureText}>Scan QR Code</Text>
      </RNCamera>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
    // margin: 10,
    // width: '90%',
    // height: '50%',
  },
  preview: {
    // flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%',
    height: '70%',
  },
  captureText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default Scanner;
