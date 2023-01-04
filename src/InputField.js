/* eslint-disable prettier/prettier */
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  SafeAreaView,
} from 'react-native';
import React, {useState} from 'react';
import BackButton from './Reuseable/BackButton';

const InputField = () => {
  const [userName, setUserName] = useState('Imdadul Haque');
  const [userEmail, setUserEmail] = useState('imdadulhaque1440@gmail.com');
  const [userPassword, setUserPassword] = useState('12345');
  const [userConfirmPass, setUserConfirmPass] = useState('12345');

  const handleSubmit = () => {
    // Alert.alert(userName, userEmail);
  };
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputStyle}
            value={userName}
            onChangeText={value => {
              setUserName(value);
            }}
          />
          <TextInput
            style={styles.inputStyle}
            value={userEmail}
            onChangeText={value => {
              setUserEmail(value);
            }}
          />
          <TextInput
            style={styles.inputStyle}
            value={userPassword}
            onChangeText={value => {
              setUserPassword(value);
            }}
          />
          <TextInput
            style={styles.inputStyle}
            value={userConfirmPass}
            onChangeText={value => {
              setUserConfirmPass(value);
            }}
          />
        </View>
        <View styles={styles.inputShowStyle}>
          <Text>Name: {userName}</Text>
          <Text>Email: {userEmail}</Text>
          <Text>Password: {userPassword}</Text>
          <Text>Confirm Pass: {userConfirmPass}</Text>
        </View>
        <View>
          <TouchableOpacity
            style={styles.btnSubmit}
            onClick={handleSubmit(userName, userEmail)}>
            <Text style={{fontSize: 20, color: 'white', textAlign: 'center'}}>
              Submit
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default InputField;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputView: {
    // flex: 1,
    width: '100%',
  },
  inputStyle: {
    borderWidth: 2,
    borderRadius: 10,
    marginVertical: 5,
    padding: 10,
  },
  inputShowStyle: {
    // marginVertical: 5,
    // paddingVertical: 10,
  },
  btnSubmit: {
    backgroundColor: '#111952',
    paddingHorizontal: 25,
    paddingVertical: 10,
    marginVertical: 10,
    borderRadius: 10,
  },
});
