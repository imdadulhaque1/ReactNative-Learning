import {
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import IconComponent from '../Reuseable/IconComponent';

const CustomizedTextInput = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.componentTitle}>Customized TextInput</Text>
      <View style={styles.inputContainer}>
        <View style={styles.inputInnerStyle}>
          <IconComponent name="user-alt" />
          <TextInput
            style={styles.inputStyle}
            placeholder="Enter Your Name........"
            placeholderTextColor="gray"
          />
        </View>
        <View style={styles.inputInnerStyle}>
          <IconComponent name="envelope" />
          <TextInput
            style={styles.inputStyle}
            placeholder="Enter Your Email........"
            placeholderTextColor="gray"
          />
        </View>
        <View style={styles.inputInnerStyle}>
          <IconComponent name="lock" />
          <TextInput
            style={styles.inputStyle}
            placeholder="Enter Your Password........"
            placeholderTextColor="gray"
            secureTextEntry={isPasswordVisible ? false : true}
          />
          <TouchableOpacity
            onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
            <IconComponent name={isPasswordVisible ? 'eye-slash' : 'eye'} />
          </TouchableOpacity>
          {/* <TouchableOpacity>
            <IconComponent name="eye-slash" />
          </TouchableOpacity> */}
        </View>
      </View>
    </View>
  );
};

export default CustomizedTextInput;
const {height, width} = Dimensions.get('screen');

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
  },
  componentTitle: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
    marginTop: 5,
    borderBottomWidth: 1,
    borderColor: '#0C1D33',
  },
  inputContainer: {
    flex: 1,
    width: width - 20,
  },
  inputInnerStyle: {
    marginVertical: 5,
    paddingHorizontal: 5,
    flexDirection: 'row',
    borderColor: '#0C1D33',
    borderWidth: 1,
    borderRadius: 10,
    alignItems: 'center',
  },
  inputStyle: {
    flex: 1,
    color: 'black',
    fontSize: 17,
  },
});
