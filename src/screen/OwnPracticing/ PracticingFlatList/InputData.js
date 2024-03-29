import {StyleSheet, View, TextInput, Modal, Image} from 'react-native';
import React, {useState} from 'react';
import Button from '../../../Reuseable/Button';

const InputData = props => {
  const [takingData, setTakingData] = useState('');
  const HandleDataSubmit = () => {
    props.AddItems(takingData);
    setTakingData('');
  };
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputSectionStyle}>
        <View style={styles.imgContainerStyle}>
          <Image
            source={require('../../../Assets/Images/imdadulhaque.jpg')}
            style={styles.imgStyle}
          />
        </View>
        <View style={styles.inputContainerStyle}>
          <TextInput
            style={styles.inputStyle}
            placeholder="Typing Something......."
            placeholderTextColor="gray"
            value={takingData}
            onChangeText={value => setTakingData(value)}
          />
        </View>
        <View style={styles.btnContainer}>
          <Button
            btnTitle="Submit Item"
            btnTextColor="#fff"
            onPress={HandleDataSubmit}
          />
          <Button
            btnTitle="Cancel"
            btnTextColor="#980a0a"
            onPress={props.notVisibleModal}
          />
        </View>
      </View>
    </Modal>
  );
};

export default InputData;

const styles = StyleSheet.create({
  inputSectionStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ada5db',
  },
  inputContainerStyle: {
    borderRadius: 10,
    borderColor: '#3209ce',
    borderWidth: 1,
    width: '95%',
    justifyContent: 'center',
  },
  inputStyle: {
    color: 'black',
    fontFamily: 'Rajdhani-Regular',
    fontSize: 18,
  },
  btnContainer: {
    flexDirection: 'row',
    marginHorizontal: 5,
    marginVertical: 10,
  },
  imgContainerStyle: {
    marginBottom: 20,
    height: 180,
    width: 180,
    borderRadius: 100,
    borderColor: '#1f0c4a',
    borderWidth: 3,
  },
  imgStyle: {
    height: 174,
    width: 174,
    borderRadius: 100,
  },
});
