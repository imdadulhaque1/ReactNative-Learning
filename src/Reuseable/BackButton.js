/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import Entypo from 'react-native-vector-icons/Entypo';

const BackButton = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.backBtnContainer}>
      <TouchableOpacity
        style={styles.backBtnStyle}
        onPress={() => navigation.goBack()}>
        <Text style={styles.backBtnIcon}>
          <Entypo name="back" color="#d5d8e0" size={25} />
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default BackButton;

const styles = StyleSheet.create({
  backBtnContainer: {
    padding: 4,
  },
  backBtnStyle: {
    // backgroundColor: '#2f4580',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backBtnIcon: {},
});
