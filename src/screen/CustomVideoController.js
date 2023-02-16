import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Video from 'react-native-video';
import IconComponent from '../Reuseable/IconComponent';

const CustomVideoController = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <View style={styles.container}>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Text style={styles.videoTitleStyle}>Custom Video Controller</Text>
      </View>
      <Video
        style={styles.backgroundVideo}
        source={require('../Assets/videos/Beauty_Nature.mp4')}
        paused={!isPlaying}
      />
      <View style={styles.vControllerContainer}>
        <View style={styles.innerVControllerContainer}>
          <TouchableOpacity onPress={() => setIsPlaying(!isPlaying)}>
            <IconComponent name={isPlaying ? 'pause' : 'play'} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CustomVideoController;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  videoTitleStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    color: '#0C1A2C',
    fontSize: 25,
    marginVertical: 5,
    paddingBottom: 20,
  },
  backgroundVideo: {
    // position: 'absolute',
    // top: 100,
    // bottom: 0,
    left: 1,
    right: 0,
    height: '31%',
    width: '99%',
    // borderWidth: 2,
    borderRadius: 10,
  },
  vControllerContainer: {
    flex: 1,
    backgroundColor: 'red',
  },
  innerVControllerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
