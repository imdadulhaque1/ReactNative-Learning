import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Another = ({route, navigation}) => {
  //   console.log(route.params);
  const {name, email, phone, description, password} = route.params;

  return (
    <View style={{flex: 1, justifyContent: 'center', marginHorizontal: 10}}>
      <Text>Name: {name}</Text>
      <Text>Email: {email}</Text>
      <Text>Phone: {phone}</Text>
      <Text>Description: {description}</Text>
      <Text>Password: {password}</Text>
    </View>
  );
};

export default Another;

const styles = StyleSheet.create({});
