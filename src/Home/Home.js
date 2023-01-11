/* eslint-disable prettier/prettier */
import {StyleSheet, View} from 'react-native';
import React from 'react';
import Button from '../Reuseable/Button';

const Home = ({navigation}) => {
  function handleNavigate(screenName) {
    navigation.navigate(screenName);
  }
  return (
    <View style={styles.container}>
      <View style={styles.btnStyle}>
        <Button
          btnTitle="Increment"
          onPress={() => handleNavigate('IncreDecrements')}
        />
      </View>
      <View style={styles.btnStyle}>
        <Button
          btnTitle="InputField"
          onPress={() => handleNavigate('InputField')}
        />
      </View>
      <View style={styles.btnStyle}>
        <Button
          btnTitle="Array To List"
          onPress={() => handleNavigate('ArrayToList')}
        />
      </View>
      <View style={styles.btnStyle}>
        <Button
          btnTitle="Simple FlatLists"
          onPress={() => handleNavigate('FlatLists')}
        />
        <Button
          btnTitle="Advanced FlatLists"
          onPress={() => handleNavigate('ExampleFlatList')}
        />
      </View>
      <View style={styles.btnStyle}>
        <Button
          btnTitle="FetchAPI"
          onPress={() => handleNavigate('FetchApiData')}
        />
        <Button
          btnTitle="Advanced FetchAPI"
          onPress={() => handleNavigate('DataFetchAnother')}
        />
      </View>
      <View style={styles.btnStyle}>
        <Button
          btnTitle="Data Pass to Another"
          onPress={() => handleNavigate('One')}
        />
      </View>
      <View style={styles.btnStyle}>
        <Button
          btnTitle="WebView"
          onPress={() => handleNavigate('WebViewCom')}
        />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  btnStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
