/* eslint-disable prettier/prettier */
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Button from '../Reuseable/Button';

const AsyncStorageComp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [uniName, setUniName] = useState('');
  const [password, setPassword] = useState('');
  const [storedData, setStoredData] = useState([]);

  const handleSubmit = async () => {
    // Alert.alert(`Name:${name}\nEmail:${email}\nUniName:${uniName}`);
    try {
      await AsyncStorage.setItem('userList', name);
      setName('');
      // alert('Data Added!');
      await getItemList();
    } catch (error) {
      console.log(error);
    }
  };
  const getItemList = async () => {
    try {
      const userData = await AsyncStorage.getItem('userList');
      setStoredData(userData);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={styles.container}>
      <ScrollView>
        <SafeAreaView>
          <View style={styles.inputContainer}>
            {/* <Text>AsyncStorageComp</Text> */}
            <TextInput
              style={styles.inputStyle}
              value={name}
              placeholderTextColor="gray"
              placeholder="Enter your name.............."
              onChangeText={textChange => setName(textChange)}
            />
            <TextInput
              style={styles.inputStyle}
              value={email}
              placeholderTextColor="gray"
              placeholder="Enter your email............."
              onChangeText={textChange => setEmail(textChange)}
            />
            <TextInput
              style={styles.inputStyle}
              value={uniName}
              placeholderTextColor="gray"
              placeholder="Enter your university name...."
              onChangeText={textChange => setUniName(textChange)}
            />
            <TextInput
              style={styles.inputStyle}
              value={password}
              placeholderTextColor="gray"
              placeholder="Enter your password..........."
              onChangeText={textChange => setPassword(textChange)}
            />
          </View>
          <View>
            <Button
              btnTitle="Submit"
              btnTextColor="#fff"
              onPress={() => handleSubmit()}
            />
          </View>
          <View style={styles.dataViewContainer}>
            <Text style={{color: 'black'}}>User Name: {storedData}</Text>
            <Text style={{color: 'black'}}>User Email: {email}</Text>
            <Text style={{color: 'black'}}>University Name: {uniName}</Text>
          </View>
        </SafeAreaView>
      </ScrollView>
    </View>
  );
};

export default AsyncStorageComp;

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
  btnStyle: {
    backgroundColor: '',
  },
  dataViewContainer: {
    marginHorizontal: 6,
    marginVertical: 5,
  },
});
