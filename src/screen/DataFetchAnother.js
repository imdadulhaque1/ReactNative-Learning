/* eslint-disable prettier/prettier */
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Axios from 'axios';
import {userOnePostUrl, userPostsUrl} from '../utils/Url';

const DataFetchAnother = () => {
  const [userPost, setUserPost] = useState([]);
  useEffect(() => {
    dataFetchFunc();
  }, []);
  const dataFetchFunc = async () => {
    try {
      const response = await Axios.get(userPostsUrl);
      // console.log(response.data);
      setUserPost(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={{maxHeight: 110}}>
          <FlatList
            data={userPost}
            numColumns={4}
            renderItem={({item}) => {
              return (
                <View style={styles.userMainBtnStyle}>
                  <TouchableOpacity style={styles.userBtnStyle}>
                    <Text style={styles.userBtnTxtStyle}>
                      User {item.userId}
                    </Text>
                  </TouchableOpacity>
                </View>
              );
            }}
          />
        </View>

        <ScrollView>
          {userPost.map((postList, index) => {
            return (
              <View key={index} style={styles.cardContainerStyle}>
                <View style={styles.userIdStyle}>
                  <View style={styles.innerIdStyle}>
                    <Text style={styles.idTextStyle}>Post No:</Text>
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
      </SafeAreaView>
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
  userMainBtnStyle: {
    marginVertical: 5,
    marginHorizontal: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  userBtnStyle: {
    backgroundColor: '#3b4975',
    borderRadius: 5,
  },
  userBtnTxtStyle: {
    fontSize: 20,
    paddingHorizontal: 5,
    marginVertical: 5,
    textAlign: 'center',
    color: 'white',
  },
});

// Instructions to fetch the data using URL
// 1. fetch Data using async, await and Axios
// 2. Load via useEffect
// 3. Send the responsed data to useState
// 4. Finally Show the data via UI
