/* eslint-disable prettier/prettier */
import {StyleSheet, View} from 'react-native';
import React from 'react';
import WebView from 'react-native-webview';

const HSS_HomeScreen = () => {
  return (
    <View style={styles.container}>
      <WebView
        style={styles.webviewStyle}
        onError={event => {
          console.log(event);
        }}
        source={{uri: 'https://hellosuperstars.com/'}}
      />
    </View>
  );
};

export default HSS_HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webviewStyle: {
    flex: 1,
  },
});
