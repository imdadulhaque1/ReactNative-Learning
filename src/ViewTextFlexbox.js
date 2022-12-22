import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  ScrollView,
} from 'react-native';
import React from 'react';

const ViewTextFlexbox = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hide={true} />
      <ScrollView>
        <View style={styles.outerView}>
          <View style={styles.InnerViewOne}>
            <Text style={styles.text1}>Text One</Text>
            <Text style={styles.text2}>Text Two</Text>
            <Text style={styles.text3}>Text Three</Text>
          </View>
          <View style={styles.InnerViewTwo}>
            <Text style={styles.text1}>Text One</Text>
            <Text style={styles.text2}>Text Two</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ViewTextFlexbox;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0A2339',
    height: '100%',
    maxWidth: '100%',
  },
  outerView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  InnerViewOne: {
    backgroundColor: 'gray',
  },
  InnerViewTwo: {
    backgroundColor: 'orange',
  },
  text1: {
    color: 'white',
  },
  text2: {
    color: 'white',
  },
  text3: {
    color: 'white',
  },
});
