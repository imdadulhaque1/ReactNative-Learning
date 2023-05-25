import {Alert, FlatList, StyleSheet, TextInput, View, Text} from 'react-native';
import React, {useState} from 'react';
import Button from '../../../Reuseable/Button';

const AgainFlatList = ({navigation}) => {
  const [takingData, setTakingData] = useState('');
  const [storeTakingData, setStoreTakingData] = useState([]);
  const HandleDataSubmit = () => {
    // Alert.alert(takingData);
    setStoreTakingData(newData => [
      ...newData,
      {takingData: takingData, id: Math.random().toString()},
    ]);
  };
  console.log(storeTakingData);
  return (
    <View style={styles.container}>
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

      <View
        style={{borderColor: '#120221', borderWidth: 1, marginVertical: 10}}
      />
      <FlatList
        data={storeTakingData}
        renderItem={storedData => {
          return (
            <View>
              <Text style={{color: 'black'}}>{storedData.item.}</Text>
            </View>
          );
        }}
        keyExtractor={(item, index) => {
          return item.id;
        }}
      />
    </View>
  );
};

export default AgainFlatList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 5,
  },
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
