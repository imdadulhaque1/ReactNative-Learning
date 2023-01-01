import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Axios from 'axios';

// Import URL
import {albumPhotoUrl} from './utils/Url';
import Love from './Assets/Images/love.jpeg';

const FetchApiData = () => {
  const [postData, setPostData] = useState([]);
  //   console.log(albumPhotoUrl);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const response = await Axios.get(albumPhotoUrl);
      //   console.log(response.data);
      setPostData(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={styles.container}>
      <SafeAreaView>
        {/* <Text>FetchApiData</Text> */}
        {postData.map((dataList, index) => {
          console.log(dataList.title);
          return (
            <View style={styles.CardStyle} key={index}>
              <Text style={{fontSize: 20, color: 'red'}}>{dataList.title}</Text>
            </View>
          );
        })}
      </SafeAreaView>
    </View>
  );
};

export default FetchApiData;

const styles = StyleSheet.create({
  container: {
    padding: 3,
  },
  CardStyle: {
    backgroundColor: '#3c4569',
    margin:5,
    paddingVertical: 10,
  },
  imageStyle: {
    flex: 1,
    width: '100%',
  },
});
