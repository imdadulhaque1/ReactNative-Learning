/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import Entypo from 'react-native-vector-icons/Entypo';

const HeaderCom = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.headerContainer}>
      <View style={styles.backBtnContainer}>
        <TouchableOpacity
          style={styles.backBtnStyle}
          onPress={() => navigation.goBack()}>
          <Text style={styles.backBtnIcon}>
            <Entypo name="back" color="#d5d8e0" size={25} />
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.HeaderTitle}>
        <Text style={styles.HeaderTitleStyle}>
          Component title Written Here
        </Text>
      </View>
    </View>
  );
};

export default HeaderCom;

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#0C1A2C',
    padding: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  backBtnContainer: {},
  HeaderTitle: {},
  HeaderTitleStyle: {
    fontSize: 19,
    color: 'white',
  },
});
