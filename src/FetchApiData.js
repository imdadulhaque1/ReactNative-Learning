import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const FetchApiData = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Text>FetchApiData</Text>
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
});
