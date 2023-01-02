/* eslint-disable prettier/prettier */
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Axios from 'axios';
import {userOnePostUrl} from './utils/Url';

const DataFetchAnother = () => {
  const [userPost, setUserPost] = useState([]);
  useEffect(() => {
    dataFetchFunc();
  }, []);
  const dataFetchFunc = async () => {
    try {
      const response = await Axios.get(userOnePostUrl);
      //   console.log(response.data);
      setUserPost(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={styles.container}>
      <ScrollView>
        {userPost.map((postList, index) => {
          return (
            <View key={index} style={styles.cardContainerStyle}>
              <View style={styles.userIdStyle}>
                <View style={styles.innerIdStyle}>
                  <Text style={styles.idTextStyle}>ID:</Text>
                  <Text style={styles.idStyle}>{postList.id}</Text>
                </View>
                <View style={styles.innerIdStyle}>
                  <Text style={styles.idTextStyle}>User ID:</Text>
                  <Text style={styles.idStyle}>{postList.userId}</Text>
                </View>
              </View>
              <Text style={styles.TitleStyle}>{postList.title}</Text>
              <Text style={styles.descriptionStyle}>{postList.body}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default DataFetchAnother;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardContainerStyle: {
    flex: 1,
    backgroundColor: 'gray',
    margin: 5,
    paddingVertical: 10,
    borderColor: 'black',
    borderRadius: 10,
  },
  userIdStyle: {
    flex: 1,
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  innerIdStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  idTextStyle: {
    color: 'white',
    fontSize: 17,
    backgroundColor: 'black',
    borderRadius: 10,
    padding: 10,
  },
  idStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingLeft: 5,
  },
  TitleStyle: {
    color: 'white',
    fontSize: 20,
    padding: 5,
  },
  descriptionStyle: {
    color: 'black',
  },
});

// Instructions to fetch the data using URL
// 1. fetch Data using async, await and Axios
// 2. Load via useEffect
// 3. Send the responsed data to useState
// 4. Finally Show the data via UI
