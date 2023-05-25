import {StyleSheet, Text, View, TextInput} from 'react-native';
import React, {useState} from 'react';
import Button from '../../Reuseable/Button';

const TakeInputData = props => {
  const [textData, setTextData] = useState('');
  const submitHandler = () => {
    props.AddItems(textData);
    setTextData('');
  };
  return (
    <View style={styles.inputContainerStyle}>
      <View style={styles.inputInnerViewStyle}>
        <TextInput
          style={styles.inputStyle}
          placeholder="Type Something...."
          placeholderTextColor="#918973"
          onChangeText={value => setTextData(value)}
          value={textData}
        />
      </View>
      <Button btnTitle="Submit" btnTextColor="#fff" onPress={submitHandler} />
    </View>
  );
};

export default TakeInputData;

const styles = StyleSheet.create({
  inputContainerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 5,
    marginHorizontal: 2,
  },
  inputInnerViewStyle: {
    justifyContent: 'center',
    width: '70%',
    borderRadius: 10,
    borderColor: '#5a456e',
    borderWidth: 1,
  },
  inputStyle: {
    color: '#000',
    fontSize: 17,
    fontFamily: 'Rajdhani-Regular',
  },
});
