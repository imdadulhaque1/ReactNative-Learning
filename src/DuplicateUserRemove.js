/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View, Button} from 'react-native';
import React, {useState, useEffect} from 'react';

const test = () => {
  const [testState, setTestState] = useState([
    {
      name: 'Imdad',
      id: 1,
    },
    {
      name: 'Shohan',
      id: 2,
    },
    {
      name: 'Porimoni',
      id: 3,
    },
    {
      name: 'Shohan',
      id: 4,
    },
    {
      name: 'Porimoni',
      id: 5,
    },
  ]);
  useEffect(() => {
    handleRemove();
  }, []);

  function handleRemove() {
    let unique = testState.filter(
      (item, index) => testState.findIndex(i => i.name === item.name) === index,
    );
    setTestState(unique);
  }

  return (
    <View>
      {/* <Button title="remove duplicate" onPress={handleRemove} /> */}

      {testState.map((item, index) => {
        return (
          <View key={index.id}>
            <Text>{item.name}</Text>
          </View>
        );
      })}
    </View>
  );
};

export default test;

const styles = StyleSheet.create({});
