/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const HelloSuperStars = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textContainer}>HelloSuperStars</Text>
    </View>
  );
};

export default HelloSuperStars;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    color: '#15246b',
  },
});
