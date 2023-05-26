import {
  Alert,
  FlatList,
  StyleSheet,
  TextInput,
  View,
  Text,
  StatusBar,
} from 'react-native';
import React, {useState} from 'react';
import Button from '../../../Reuseable/Button';
import InputData from './InputData';
import ViewData from './ViewData';

const AgainFlatList = ({navigation}) => {
  const [storeTakingData, setStoreTakingData] = useState([]);
  const HandleDataSubmit = takingData => {
    // Alert.alert(takingData);
    setStoreTakingData(newData => [
      ...newData,
      {takingData: takingData, id: Math.random().toString()},
    ]);
  };
  const DeleteHandlerFunc = id => {
    setStoreTakingData(currentTakingData => {
      return currentTakingData.filter(currentItem => currentItem.id !== id);
    });
  };
  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <InputData AddItems={HandleDataSubmit} />

      <View
        style={{borderColor: '#120221', borderWidth: 1, marginVertical: 10}}
      />
      <FlatList
        data={storeTakingData}
        renderItem={storedData => {
          return (
            <ViewData
              storedDataView={storedData.item.takingData}
              id={storedData.item.id}
              onDeleteStoredItem={DeleteHandlerFunc}
            />
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
    marginHorizontal: 5,
    justifyContent: 'center',
  },
});
