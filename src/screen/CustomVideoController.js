import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Video from 'react-native-video';
import IconComponent from '../Reuseable/IconComponent';
import Slider from '@react-native-community/slider';

const CustomVideoController = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [time, setTime] = useState({
    currentTime: '00:00:00',
    endingTime: '00:00:00',
  });
  const timeFormat = inSeconds => {
    const digit = n => (n < 10 ? `0${n}` : `${n}`);
    const sec = digit(Math.floor(inSeconds % 60));
    const min = digit(Math.floor((inSeconds / 60) % 60));
    const hr = digit(Math.floor((inSeconds / 3600) % 60));
    return `${hr}:${min}:${sec}`;
  };
  return (
    <View style={styles.container}>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Text style={styles.videoTitleStyle}>Custom Video Controller</Text>
      </View>
      <Video
        style={styles.backgroundVideo}
        source={require('../Assets/videos/Beauty_Nature.mp4')}
        paused={!isPlaying}
        onLoad={data => {
          setTime({...time, endingTime: data.duration});
        }}
        onProgress={data => {
          setTime({...time, currentTime: data.currentTime});
        }}
      />
      <View style={styles.vControllerContainer}>
        <View style={styles.innerVControllerContainer}>
          <TouchableOpacity>
            <IconComponent name="backward" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setIsPlaying(!isPlaying)}>
            <IconComponent name={isPlaying ? 'pause' : 'play'} />
          </TouchableOpacity>
          <TouchableOpacity>
            <IconComponent name="forward" />
          </TouchableOpacity>
        </View>
        <View style={styles.timeControllerStyle}>
          <View>
            <Text style={styles.timerStyle}>
              {timeFormat(time.currentTime)}
            </Text>
          </View>
          <Slider
            style={styles.sliderStyle}
            minimumValue={0}
            maximumValue={1}
            minimumTrackTintColor="red"
            maximumTrackTintColor="green"
          />
          <View>
            <Text style={styles.timerStyle}>{timeFormat(time.endingTime)}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CustomVideoController;
const {height, width} = Dimensions.get('screen');

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
  },
  innerVControllerContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  timeControllerStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginHorizontal: 13,
  },
  timerStyle: {
    color: 'black',
    fontSize: 16,
  },
  sliderStyle: {
    width: '67%',
  },
});
