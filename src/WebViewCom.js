/* eslint-disable prettier/prettier */
import {useState, useRef} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {WebView} from 'react-native-webview';
import ProgessBar from 'react-native-progress/Bar';

import AntDesign from 'react-native-vector-icons/AntDesign';

const WebViewCom = () => {
  const webviewRef = useRef();

  const [progress, setProgess] = useState(0);
  const [isLoaded, setIsloaded] = useState(false);

  const [goBack, setGoBack] = useState(false);
  const [goForward, setGoForward] = useState(false);
  const [title, setTitle] = useState('');

  const goBackBtn = () => {
    webviewRef.current.goBack();
  };
  const goForwardBtn = () => {
    webviewRef.current.goForward();
  };
  return (
    <View style={{flex: 1}}>
      <View style={styles.container}>
        <View style={styles.innerContainerOne}>
          <Text style={styles.titleText}>{title}</Text>
        </View>
        <View style={styles.innerContainerTwo}>
          <TouchableOpacity style={styles.bfBtn} onPress={() => goBackBtn()}>
            <Text style={styles.innerBtn}>
              <AntDesign name="doubleleft" color="black" size={18} />
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.bfBtn} onPress={() => goForwardBtn()}>
            <Text style={styles.innerBtn}>
              <AntDesign name="doubleright" color="black" size={18} />
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      {!isLoaded ? <ProgessBar progress={progress} width={null} /> : null}
      <WebView
        ref={webviewRef}
        source={{uri: 'https://google.com'}}
        onError={event => {
          console.log(event);
          alert(`WebView Error: ${event.nativeEvent.description}`);
        }}
        onLoadProgress={event => setProgess(event.nativeEvent.progress)}
        onLoadEnd={() => setIsloaded(true)}
        onNavigationStateChange={state => {
          console.log(state);
          setGoBack(state.canGoBack);
          setGoForward(state.canGoForward);
          setTitle(state.title);
        }}
      />
    </View>
  );
};

export default WebViewCom;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  innerContainerOne: {
    flex: 1,
    paddingLeft: 5,
    backgroundColor: '#dcdee0',
    paddingVertical: 5,
  },
  titleText: {
    fontSize: 16,
    color: 'black',
  },
  innerContainerTwo: {
    backgroundColor: '#bcc4d1',
    paddingVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  bfBtn: {
    marginRight: 7,
    marginHorizontal: 5,
    borderColor: '#4c48b5',
    borderWidth: 2,
    borderRadius: 5,
    backgroundColor: '#dad9de',
  },
  innerBtn: {
    paddingHorizontal: 6,
  },
});
