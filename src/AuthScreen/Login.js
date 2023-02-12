import {
  Dimensions,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import BackgaroundImage from '../Assets/Images/imdadulhaqueRemovebg.png';
const Login = () => {
  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <View style={styles.topBgImageContainer}>
        <Image
          source={BackgaroundImage}
          style={styles.imageBgStyle}
          resizeMode="contain"
        />
      </View>
      <View style={styles.bottomBgImageContainer}></View>
    </View>
  );
};

const {height, width} = Dimensions.get('screen');

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#050907',
  },
  topBgImageContainer: {
    flex: 1.5,
    alignItems: 'flex-end',

    marginBottom: -20,
    // backgroundColor: 'red',
  },
  imageBgStyle: {
    height: '100%',
    width: '100%',
    marginRight: -40,
  },
  bottomBgImageContainer: {
    flex: 1,
    // backgroundColor: 'green',
  },
});
