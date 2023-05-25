import {FlatList, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import ViewStoredData from './SplittingComponents/ViewStoredData';
import TakeInputData from './SplittingComponents/TakeInputData';

const FlatListAdvanced = () => {
  const [storeText, setStoreText] = useState([]);
  const submitHandler = textData => {
    setStoreText(dataStore => [
      ...dataStore,
      {inputText: textData, id: Math.random().toString()},
    ]);
  };
  return (
    <View style={styles.mainContainer}>
      <TakeInputData AddItems={submitHandler} />

      <View
        style={{borderColor: '#120221', borderWidth: 1, marginVertical: 5}}
      />

      <FlatList
        data={storeText}
        renderItem={storedData => {
          return <ViewStoredData storedTextView={storedData.item.inputText} />;
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
});
