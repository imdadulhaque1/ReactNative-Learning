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
            btnTextColor="#fff"
            btnTitle="Increment"
            onPress={() => handleNavigate('IncreDecrements')}
          />
        </View>
        <View style={styles.btnStyle}>
          <Button
            btnTextColor="#fff"
            btnTitle="InputField"
            onPress={() => handleNavigate('InputField')}
          />
        </View>
        <View style={styles.btnStyle}>
          <Button
            btnTextColor="#fff"
            btnTitle="Array To List"
            onPress={() => handleNavigate('ArrayToList')}
          />
        </View>
        <View style={styles.btnStyle}>
          <Button
            btnTextColor="#fff"
            btnTitle="FlatList"
            onPress={() => handleNavigate('FlatLists')}
          />
          <Button
            btnTextColor="#fff"
            btnTitle="S. FlatList"
            onPress={() => handleNavigate('ExampleFlatList')}
          />
          <Button
            btnTextColor="#fff"
            btnTitle="A. FlatList"
            onPress={() => handleNavigate('FlatListAdvanced')}
          />
        </View>
        <View style={styles.btnStyle}>
          <Button
            btnTextColor="#fff"
            btnTitle="FetchAPI"
            onPress={() => handleNavigate('FetchApiData')}
          />
          <Button
            btnTextColor="#fff"
            btnTitle="Advanced FetchAPI"
            onPress={() => handleNavigate('DataFetchAnother')}
          />
        </View>
        <View style={styles.btnStyle}>
          <Button
            btnTextColor="#fff"
            btnTitle="Data Pass to Another"
            onPress={() => handleNavigate('One')}
          />
        </View>
        <View style={styles.btnStyle}>
          <Button
            btnTextColor="#fff"
            btnTitle="WebView"
            onPress={() => handleNavigate('WebViewCom')}
          />
        </View>
        <View style={styles.btnStyle}>
          <Button
            btnTextColor="#fff"
            btnTitle="HelloSuperStar Web"
            onPress={() => handleNavigate('HSS_Web')}
          />
          <Button
            btnTextColor="#fff"
            btnTitle="Hello Super Stars"
            onPress={() => handleNavigate('HelloSuperStars')}
          />
        </View>
        <View style={styles.btnStyle}>
          <Button
            btnTextColor="#fff"
            btnTitle="Async Storage"
            onPress={() => handleNavigate('AsyncStorageComp')}
          />
          <Button
            btnTextColor="#fff"
            btnTitle="Array AsyncStorage"
            onPress={() => handleNavigate('StoreArrayInAsyncStorage')}
          />
        </View>
        <View style={styles.btnStyle}>
          <Button
            btnTextColor="#fff"
            btnTitle="Responsive Portrait Landscape"
            onPress={() => handleNavigate('PortraitLandscape')}
          />
        </View>
        <View style={styles.btnStyle}>
          <Button
            btnTextColor="#fff"
            btnTitle="Customized TextIput"
            onPress={() => handleNavigate('CustomizedTextInput')}
          />
        </View>
        <View style={styles.btnStyle}>
          <Button
            btnTextColor="#fff"
            btnTitle="Auth Screen"
            onPress={() => handleNavigate('AuthScreen')}
          />
        </View>
        <View style={styles.btnStyle}>
          <Button
            btnTextColor="#fff"
            btnTitle="InB. Video Controller"
            onPress={() => handleNavigate('InbuiltVideoController')}
          />
          <Button
            btnTextColor="#fff"
            btnTitle="C. Video Controller"
            onPress={() => handleNavigate('CustomVideoController')}
          />
        </View>
        <View style={styles.btnStyle}>
          <Button
            btnTextColor="#fff"
            btnTitle="Advancedly Own Practicing"
            onPress={() => handleNavigate('OwnPracticing')}
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
    paddingVertical: 5,
  },
  btnStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
