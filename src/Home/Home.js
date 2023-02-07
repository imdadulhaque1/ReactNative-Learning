/* eslint-disable prettier/prettier */
import {StyleSheet, View, ScrollView} from 'react-native';
import React from 'react';
import Button from '../Reuseable/Button';

const Home = ({navigation}) => {
  function handleNavigate(screenName) {
    navigation.navigate(screenName);
  }
  return (
    <View style={styles.container}>
      <ScrollView>
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
        <View style={styles.btnStyle}>
          <Button
            btnTitle="HelloSuperStar Web"
            onPress={() => handleNavigate('HSS_Web')}
          />
          <Button
            btnTitle="Hello Super Stars"
            onPress={() => handleNavigate('HelloSuperStars')}
          />
        </View>
        <View style={styles.btnStyle}>
          <Button
            btnTitle="Async Storage"
            onPress={() => handleNavigate('AsyncStorageComp')}
          />
          <Button
            btnTitle="Array AsyncStorage"
            onPress={() => handleNavigate('StoreArrayInAsyncStorage')}
          />
        </View>
        <View style={styles.btnStyle}>
          <Button
            btnTitle="Responsive Portrait Landscape"
            onPress={() => handleNavigate('PortraitLandscape')}
          />
        </View>
        <View style={styles.btnStyle}>
          <Button
            btnTitle="Customized TextIput"
            onPress={() => handleNavigate('CustomizedTextInput')}
          />
        </View>
      </ScrollView>
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
