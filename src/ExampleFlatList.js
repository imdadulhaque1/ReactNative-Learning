import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
} from 'react-native';
import React, {useState} from 'react';

const ExampleFlatList = () => {
  const [userData, setUserData] = useState([
    {id: 1, name: 'Imdadul Haque'},
    {id: 2, name: 'Enamul Haque'},
    {id: 3, name: 'Israt Jahan Maisha'},
    {id: 4, name: 'Shampa Khatun'},
    {id: 5, name: 'Israt Jahan'},
    {id: 6, name: 'Mr. Imdadul Haque'},
    {id: 7, name: 'Mr. Enamul Haque'},
    {id: 8, name: 'Maisha Khatun'},
    {id: 9, name: 'Imdadul Haque'},
    {id: 10, name: 'Israt Jahan Maisha'},
    {id: 11, name: 'Mr. Imdadul Haque'},
    {id: 12, name: 'Mr. Enamul Haque'},
    {id: 13, name: 'Maisha Khatun'},
    {id: 14, name: 'Imdadul Haque'},
    {name: 'End of the Story!'},
  ]);
  const handleClicked = clickedData => {
    // console.log(`You Clicked on ${clickedData}!`);
    setUserData(prevData => {
      return prevData.filter(tempData => {
        // console.log(tempData);
        if (tempData.id !== clickedData) {
          return tempData;
        }
      });
    });
  };
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <FlatList
          data={userData}
          numColumns={2}
          renderItem={({item}) => {
            //   console.log(item.name);
            return (
              <TouchableOpacity
                style={styles.cardStyle}
                onPress={() => handleClicked(item.id)}>
                <Text style={styles.idStyle}>{item.id}</Text>
                <Text style={styles.nameStyle}>{item.name}</Text>
              </TouchableOpacity>
            );
          }}
        />
      </SafeAreaView>
    </View>
  );
};

export default ExampleFlatList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
  },
  cardStyle: {
    flex: 1,
    backgroundColor: '#5c548f',
    margin: 5,
    borderRadius: 10,
    paddingVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  idStyle: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
  },
  nameStyle: {
    fontSize: 20,
  },
});
