import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ViewData = props => {
  return (
    <View style={{flex: 1}}>
      <View style={styles.showedDataStyles}>
        <Pressable
          android_ripple={{color: '#c5c5c5'}}
          //! below is for iOS customed
          style={({pressed}) => pressed && styles.pressedItem}
          onPress={props.onDeleteStoredItem.bind(this, props.id)}>
          <Text style={styles.inputStyle}>{props.storedDataView}</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default ViewData;

const styles = StyleSheet.create({
  inputStyle: {
    color: '#fff',
    fontFamily: 'Rajdhani-Regular',
    fontSize: 18,
    paddingVertical: 20,
  },
  showedDataStyles: {
    width: '97%',
    backgroundColor: '#1a0447',
    borderRadius: 5,
    marginVertical: 5,
    marginHorizontal: 5,
    paddingHorizontal: 5,
  },
  pressedItem: {
    opacity: 0.5,
  },
});
