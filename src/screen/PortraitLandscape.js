import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';

const PortraitLandscape = () => {
  const [isRotate, setIsRotate] = useState(false);
  useEffect(() => {
    Dimensions.addEventListener('change', () => {
      const orientation = isPortrait();
      //   console.log(orientation);
      setIsRotate(orientation);
    });
  }, []);
  const isPortrait = () => {
    const {height, width} = Dimensions.get('screen');

    return height > width ? false : true;
  };
  //   console.log(isRotate);
  return (
    <View
      style={{
        flex: 1,
        flexDirection: isRotate ? 'row' : 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View style={styles.firstStyle}>
        <Text style={styles.textStyle}>First View</Text>
      </View>
      <View style={styles.secondStyle}>
        <Text style={styles.textStyle}>Second View</Text>
      </View>
      <View style={styles.thirdStyle}>
        <Text style={styles.textStyle}>Third View</Text>
      </View>
    </View>
  );
};

export default PortraitLandscape;

const styles = StyleSheet.create({
  //   mainContainer: {
  //     flex: 1,

  //     justifyContent: 'center',
  //     alignItems: 'center',
  //     flexDirection: isRotate ? 'row' : 'column',
  //   },
  firstStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'orange',
    height: '100%',
    width: '100%',
  },
  secondStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
    height: '100%',
    width: '100%',
  },
  thirdStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    height: '100%',
    width: '100%',
  },
  textStyle: {
    color: 'black',
    fontSize: 20,
  },
});
