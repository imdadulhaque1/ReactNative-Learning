// const DrawerIconFunc = props => {
//     return
//   };

import {StyleSheet} from 'react-native';
import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const IconComponent = props => {
  return <FontAwesome5 name={props.name} size={18} color="#132D57" />;
};
export default IconComponent;

const styles = StyleSheet.create({});
