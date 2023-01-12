/* eslint-disable prettier/prettier */
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import React, {useState} from 'react';
import BackButton from './Reuseable/BackButton';

const ArrayToList = () => {
  const [data, setData] = useState([
    {id: 1, name: 'Imdadul Haque'},
    {id: 2, name: 'Israt Jahan Maisha'},
    {id: 3, name: 'Enamul Haque'},
    {id: 4, name: 'Shampa Khatun'},
    {id: 5, name: 'Maisha'},
    {id: 6, name: 'Imdadul Haque Imdad'},
    {id: 7, name: 'Maisha'},
    {id: 8, name: 'Imdadul Haque'},
  ]);
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <ScrollView>
          {data.map((dataList, index) => {
            return (
              <View style={styles.ListViewStyle} key={dataList.id}>
                <TouchableOpacity style={styles.ListStyle}>
                  <Text style={styles.idStyle}>{dataList.id}</Text>
                  <Text style={styles.nameStyle}>{dataList.name}</Text>
                </TouchableOpacity>
              </View>
            );
          })}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default ArrayToList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  ListViewStyle: {
    width: '100%',
  },
  ListStyle: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    fontSize: 20,
    backgroundColor: '#4e5485',
    margin: 5,
    paddingVertical: 30,
  },
  idStyle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
  },
  nameStyle: {
    fontSize: 17,
    color: 'white',
  },
});
