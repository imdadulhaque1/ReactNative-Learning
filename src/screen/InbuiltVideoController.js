import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Video from 'react-native-video';

const InbuiltVideoController = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.videoTitleStyle}>Inbuilt Video Controller</Text>
      <Video
        style={styles.backgroundVideo}
        source={require('../Assets/videos/Beauty_Nature.mp4')}
      />
    </View>
  );
};

export default InbuiltVideoController;

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
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
});
