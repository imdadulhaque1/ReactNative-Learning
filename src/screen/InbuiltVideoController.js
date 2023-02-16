import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import VideoPlayer from 'react-native-video-controls';
import {useNavigation} from '@react-navigation/native';

const InbuiltVideoController = () => {
  const navigate = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.videoTitleStyle}>Inbuilt Video Controller</Text>
      <>
        <VideoPlayer
          style={styles.backgroundVideo}
          source={require('../Assets/videos/Beauty_Nature.mp4')}
          navigator={navigate}
        />
        {/* <Video
        style={styles.backgroundVideo}
        source={require('../Assets/videos/Beauty_Nature.mp4')}
      /> */}
      </>
    </View>
  );
};

export default InbuiltVideoController;

const {height, width} = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  videoTitleStyle: {
    color: '#0C1A2C',
    fontSize: 20,
    marginVertical: 5,
  },
  // videoContainer: {
  //   flex: 1,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // },
  backgroundVideo: {
    position: 'absolute',
    top: 100,
    bottom: 0,
    left: 0,
    right: 0,
    height: '40%',
    width: width,
  },
});
