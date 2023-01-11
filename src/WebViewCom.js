/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {WebView} from 'react-native-webview';
import ProgessBar from 'react-native-progress/Bar';
import {useState} from 'react';

const WebViewCom = () => {
  const [progress, setProgess] = useState(0);
  const [isLoaded, setIsloaded] = useState(false);
  return (
    <View style={{flex: 1}}>
      {!isLoaded ? <ProgessBar progress={progress} width={null} /> : null}
      <WebView
        source={{uri: 'https://stackoverflow.com/users/14065992/imdadul-haque'}}
        onError={event => {
          console.log(event);
          alert(`WebView Error: ${event.nativeEvent.description}`);
        }}
        onLoadProgress={event => setProgess(event.nativeEvent.progress)}
        onLoadEnd={() => setIsloaded(true)}
      />
    </View>
  );
};

export default WebViewCom;

const styles = StyleSheet.create({});
