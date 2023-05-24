import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Button from '../Reuseable/Button';

const AuthScreen = ({navigation}) => {
  function handleNavigate(screenName) {
    navigation.navigate(screenName);
  }
  return (
    <View style={styles.container}>
      <View style={styles.btnStyle}>
        <Button btnTextColor="#fff" btnTitle="Login" onPress={() => handleNavigate('Login')} />
      </View>
      <View style={styles.btnStyle}>
        <Button btnTextColor="#fff" btnTitle="Signup" onPress={() => handleNavigate('Signup')} />
      </View>
    </View>
  );
};

export default AuthScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnStyle: {
    flexDirection: 'row',
  },
});
