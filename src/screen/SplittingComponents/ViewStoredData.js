import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ViewStoredData = props => {
  return (
    <View style={styles.storeTextContainerStyle}>
      <Text style={styles.inputStyle}>{props.storedTextView}</Text>
    </View>
  );
};

export default ViewStoredData;

const styles = StyleSheet.create({
  inputStyle: {
    color: '#000',
    fontSize: 17,
    fontFamily: 'Rajdhani-Regular',
  },
  storeTextContainerStyle: {
    backgroundColor: '#918973',
    marginVertical: 2,
    marginHorizontal: 5,
    paddingVertical: 10,
    borderRadius: 7,
    paddingHorizontal: 5,
  },
});
