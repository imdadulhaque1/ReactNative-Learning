import {FlatList, StyleSheet, View, StatusBar, Dimensions} from 'react-native';
import React, {useState} from 'react';
import InputData from './InputData';
import ViewData from './ViewData';
import Button from '../../../Reuseable/Button';

const AgainFlatList = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [storeTakingData, setStoreTakingData] = useState([]);
  const HandleDataSubmit = takingData => {
    setStoreTakingData(newData => [
      ...newData,
      {takingData: takingData, id: Math.random().toString()},
    ]);
    setModalVisible(false);
  };
  const DeleteHandlerFunc = id => {
    setStoreTakingData(currentTakingData => {
      return currentTakingData.filter(currentItem => currentItem.id !== id);
    });
  };
  const modalHandlerBtn = () => {
    setModalVisible(true);
  };
  const endModalBtn = () => {
    setModalVisible(false);
  };
  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <View style={styles.addBtnStyle}>
        <Button
          btnTitle={'Add  New Item'}
          btnTextColor="#fff"
          onPress={modalHandlerBtn}
        />
      </View>
      <InputData
        visible={modalVisible}
        notVisibleModal={endModalBtn}
        AddItems={HandleDataSubmit}
      />

      <View style={styles.viewContainerStyle}>
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
    </View>
  );
};

export default AgainFlatList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingVertical: 5,
    // marginHorizontal: 5,
    justifyContent: 'center',
    backgroundColor: '#ada5db',
  },
  addBtnStyle: {
    width: '100%',
    top: 0,
    position: 'absolute',
  },
  viewContainerStyle: {
    width: '100%',
    marginTop: 60,
  },
});
