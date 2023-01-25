/* eslint-disable prettier/prettier */
import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import Button from '../Reuseable/Button';

const StoreArrayInAsyncStorage = () => {
  const addHandler = () => {};
  return (
    <View style={styles.container}>
      <Text>StoreArrayInAsyncStorage</Text>
      <View style={styles.innerContainer}>
        <TextInput
          style={styles.inputStyle}
          placeholder="Type Your Text...."
          placeholderTextColor="gray"
        />
        <View style={styles.btnContainer}>
          <Button btnTitle="Submit" onPress={() => addHandler()} />
        </View>
      </View>
    </View>
  );
};

export default StoreArrayInAsyncStorage;

const styles = StyleSheet.create({
  container: {},
  inputStyle: {
    borderColor: '#132D57',
    borderWidth: 2,
    color: 'black',
    borderRadius: 10,
    marginVertical: 5,
  },
  innerContainer: {
    marginHorizontal: 10,
  },
  btnContainer: {
    color: 'white',
  },
});
