import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Button from '../Reuseable/Button';

const One = ({navigation}) => {
  const [name, setName] = useState('Imdadul Haque');
  const [email, setEmail] = useState('imdadulhaque1440@gmail.com');
  const [phone, setPhone] = useState('+880 1773 964101');
  const [description, setDescription] = useState('MySelf Imadadul Hauqe');
  const [password, setPassword] = useState('imdad123456');

  const handleSubmit = () => {
    navigation.navigate('Another', {
      name,
      email,
      phone,
      description,
      password,
    });
  };
  return (
    <View style={styles.container}>
      <View>
        <TextInput
          style={styles.inputStyle}
          placeholder="Enter your name"
          value={name}
          onChangeText={nameText => setName(nameText)}
        />
        <TextInput
          style={styles.inputStyle}
          placeholder="Enter your email"
          value={email}
          onChangeText={emailText => setEmail(emailText)}
        />
        <TextInput
          style={styles.inputStyle}
          placeholder="Enter your phone number"
          value={phone}
          onChangeText={phoneText => setPhone(phoneText)}
        />
        <TextInput
          multiline
          numberOfLines={4}
          style={styles.inputStyle}
          placeholder="Write about yourself"
          value={description}
          onChangeText={descriptionText => setDescription(descriptionText)}
        />
        <TextInput
          style={styles.inputStyle}
          placeholder="Enter the password"
          value={password}
          onChangeText={passText => setPassword(passText)}
        />
      </View>
      <View style={{flex: 1, marginHorizontal: 5}}>
        <Button
          btnTitle="Submit"
          btnTextColor="#fff"
          onPress={() => handleSubmit()}
        />
      </View>
    </View>
  );
};

export default One;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputStyle: {
    borderColor: '#0C1A2C',
    borderRadius: 10,
    borderWidth: 1,
    marginVertical: 5,
    marginHorizontal: 12,
    fontSize: 17,
  },
});
