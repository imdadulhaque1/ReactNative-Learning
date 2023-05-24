import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Button from '../Reuseable/Button';

const FlatListAdvanced = () => {
  const [text, setText] = useState('');
  const [storeText, setStoreText] = useState([]);
  const submitHandler = () => {
    setStoreText(dataStore => [
      ...dataStore,
      {inputText: text, id: Math.random().toString()},
    ]);
  };
  return (
    <View style={styles.mainContainer}>
      <View style={styles.inputContainerStyle}>
        <View style={styles.inputInnerViewStyle}>
          <TextInput
            style={styles.inputStyle}
            placeholder="Type Something...."
            placeholderTextColor="#918973"
            onChangeText={value => setText(value)}
          />
        </View>
        <Button btnTitle="Submit" btnTextColor="#fff" onPress={submitHandler} />
      </View>

      <View
        style={{borderColor: '#120221', borderWidth: 1, marginVertical: 5}}
      />

      <FlatList
        data={storeText}
        renderItem={storedData => {
          return (
            <View style={styles.storeTextContainerStyle}>
              <Text style={styles.inputStyle}>{storedData.item.inputText}</Text>
            </View>
          );
        }}
        //! Create new key with perfect way
        keyExtractor={(item, index) => {
          return item.id;
        }}
        alwaysBounceVertical={false}
      />
    </View>
  );
};

export default FlatListAdvanced;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  inputContainerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 5,
    marginHorizontal: 2,
  },
  inputInnerViewStyle: {
    justifyContent: 'center',
    width: '70%',
    borderRadius: 10,
    borderColor: '#5a456e',
    borderWidth: 1,
  },
  inputStyle: {
    color: '#000',
    fontSize: 17,
    fontFamily: 'Rajdhani-Regular',
  },
  storeTextContainerStyle: {
    backgroundColor: '#918973',
    marginVertical: 2,
    marginHorizontal: 5,
    paddingVertical: 10,
    borderRadius: 7,
    paddingHorizontal: 5,
  },
});
