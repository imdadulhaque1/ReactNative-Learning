/* eslint-disable prettier/prettier */
import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Axios from 'axios';

// Import URL
import {albumPhotoUrl} from '../utils/Url';

const FetchApiData = () => {
  const [postData, setPostData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const response = await Axios.get(albumPhotoUrl);
      setPostData(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <ScrollView>
          {postData.map((dataList, index) => {
            return (
              <View style={styles.CardStyle} key={index}>
                <ImageBackground
                  source={{uri: dataList.url}}
                  resizeMode="cover"
                  style={styles.cardImageStyle}>
                  <Text style={styles.dataListStyle}>{dataList.id}</Text>
                </ImageBackground>
                <Text style={{fontSize: 16, color: 'red'}}>
                  {dataList.title}
                </Text>
              </View>
            );
          })}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default FetchApiData;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 3,
  },
  CardStyle: {
    justifyContent: 'center',
    height: 300,
    backgroundColor: '#3c4569',
    margin: 5,
    paddingVertical: 10,
  },
  cardImageStyle: {
    flex: 1,
    justifyContent: 'center',
  },
  dataListStyle: {
    color: 'gray',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    backgroundColor: 'white',
    borderWidth: 1,
    borderBottomColor: 'black',
    borderRadius: 100,
  },
});
