/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const Button = ({onPress, btnTitle}) => {
  return (
    <View style={styles.btnContainer}>
      <TouchableOpacity onPress={onPress} style={styles.btnRes}>
        <Text style={styles.btnText}>{btnTitle}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  btnContainer: {
    flex: 1,
    marginHorizontal: 5,
    marginVertical: 5,
  },
  btnRes: {
    flexL: 1,
    backgroundColor: '#5054a6',
    padding: 12,
    borderColor: 'black',
    borderRadius: 7,
    borderWidth: 1,
  },
  btnText: {
    fontSize: 17,
    color: 'white',
    textAlign: 'center',
    fontFamily: 'Rajdhani-Regular',
  },
});

export default Button;
