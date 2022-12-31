/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';

const FlatLists = () => {
  const [datas, setDatas] = useState([
    {id: 1, name: 'Imdadul Haque'},
    {id: 2, name: 'Israt Jahan Maisha'},
    {id: 3, name: 'Enamul Haque'},
    {id: 4, name: 'Shampa Khatun'},
    {id: 5, name: 'Maisha'},
    {id: 6, name: 'Imdadul Haque Imdad'},
    {id: 7, name: 'Maisha'},
    {id: 8, name: 'Imdadul Haque'},
    {id: 9, name: 'Maisha'},
    {id: 10, name: 'Imdadul Haque Imdad'},
    {id: 11, name: 'Maisha'},
    {id: 12, name: 'Imdadul Haque'},
  ]);
  return (
    <View style={styles.container}>
      <FlatList
        data={datas}
        renderItem={({item}) => {
          return (
            <TouchableOpacity style={styles.DataView}>
              <Text style={styles.itemIdView}>{item.id}</Text>
              <Text style={styles.itemNameView}>{item.name}</Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default FlatLists;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  DataView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#655cab',
    margin: 5,
    paddingVertical: 20,
    borderColor: '#1b106b',
    borderRadius: 10,
  },
  itemIdView: {
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold',
  },
  itemNameView: {
    fontSize: 19,
  },
});
