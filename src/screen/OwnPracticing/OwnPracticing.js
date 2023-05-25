import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import Button from '../../Reuseable/Button';

const OwnPracticing = ({navigation}) => {
  function handleNavigate(screenName) {
    navigation.navigate(screenName);
  }
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.btnStyle}>
          <Button
            btnTextColor="#fff"
            btnTitle="Again FlatList"
            onPress={() => handleNavigate('AgainFlatList')}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default OwnPracticing;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 5,
  },
  btnStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
