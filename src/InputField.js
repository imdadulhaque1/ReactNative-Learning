/* eslint-disable prettier/prettier */
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useState} from 'react';

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
      <View>
        <Text>Name: {userName}</Text>
        <Text>Email: {userEmail}</Text>
        <Text>Password: {userPassword}</Text>
        <Text>Confirm Pass: {userConfirmPass}</Text>
      </View>
      <View>
        <TouchableOpacity
          style={styles.btnSubmit}
          onClick={handleSubmit(userName, userEmail)}>
          <Text style={{fontSize: 20, color: 'white'}}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default InputField;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  inputView: {
    width: '90%',
  },
  inputStyle: {
    borderWidth: 2,
    borderRadius: 10,
    margin: 3,
    padding: 5,
  },
  btnSubmit: {
    backgroundColor: '#111952',
    paddingHorizontal: 25,
    paddingVertical: 10,
    marginVertical: 10,
    borderRadius: 10,
  },
});
