/* eslint-disable prettier/prettier */
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Button from '../Reuseable/Button';

const StoreArrayInAsyncStorage = () => {
  const [userText, setUserText] = useState('');
  const [storedDataList, setStoredDataList] = useState([]);
  useEffect(() => {
    if (!storedDataList === 'null') {
      async function tempFunction() {
        await getStoredDataList();
      }
      tempFunction();
    } else {
      async function tempFunction() {
        await getStoredDataList();
      }
    }
  }, []);
  const dataHandler = async () => {
    try {
      storedDataList.push(userText);
      const storedDataOutput = JSON.stringify(storedDataList);
      await AsyncStorage.setItem('dataItemList', storedDataOutput);

      setUserText('');
    } catch (error) {
      console.log(error);
    }
  };
  const getStoredDataList = async () => {
    try {
      const storedData = await AsyncStorage.getItem('dataItemList');
      const setOutput = JSON.parse(storedData);
      setStoredDataList(setOutput);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={styles.container}>
      <ScrollView>
        <SafeAreaView>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.inputStyle}
              value={userText}
              placeholderTextColor="gray"
              placeholder="Enter your Text.............."
              onChangeText={textChange => setUserText(textChange)}
            />
          </View>
          <View>
            <Button
              btnTextColor="#fff"
              btnTitle="Submit"
              onPress={() => dataHandler()}
            />
          </View>
          <View style={styles.dataListContainer}>
            <Text style={styles.dataTitleStyle}>STORED DATA LIST</Text>
            {storedDataList.map((item, index) => {
              return (
                <Text style={styles.singleStoredItem} key={index}>
                  {item}
                </Text>
              );
            })}
          </View>
        </SafeAreaView>
      </ScrollView>
    </View>
  );
};

export default StoreArrayInAsyncStorage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    marginHorizontal: 6,
    marginVertical: 5,
  },
  inputStyle: {
    color: 'black',
    borderColor: '#262180',
    borderWidth: 1,
    borderRadius: 10,
    marginVertical: 5,
  },
  dataListContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  dataTitleStyle: {
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
    borderWidth: 1,
    borderColor: 'gray',
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 5,
  },
  itemStyles: {
    color: 'black',
  },
  singleStoredItem: {
    color: 'black',
    fontSize: 16,
  },
});
