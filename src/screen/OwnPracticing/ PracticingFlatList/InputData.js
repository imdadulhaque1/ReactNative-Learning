import {StyleSheet, Text, View, TextInput} from 'react-native';
import React, {useState} from 'react';
import Button from '../../../Reuseable/Button';

const InputData = props => {
  const [takingData, setTakingData] = useState('');
  const HandleDataSubmit = () => {
    props.AddItems(takingData);
    setTakingData('');
  };
  return (
    <View style={styles.inputSectionStyle}>
      <View style={styles.inputContainerStyle}>
        <TextInput
          style={styles.inputStyle}
          placeholder="Typing Something......."
          placeholderTextColor="gray"
          value={takingData}
          onChangeText={value => setTakingData(value)}
        />
      </View>
      <Button
        btnTitle="Submit"
        btnTextColor="#fff"
        onPress={HandleDataSubmit}
      />
    </View>
  );
};

export default InputData;

const styles = StyleSheet.create({
  inputSectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  inputContainerStyle: {
    borderRadius: 10,
    borderColor: '#3209ce',
    borderWidth: 1,
    width: '70%',
    marginLeft: 8,
    justifyContent: 'center',
  },
  inputStyle: {
    color: 'black',
    fontFamily: 'Rajdhani-Regular',
    fontSize: 18,
  },
});
