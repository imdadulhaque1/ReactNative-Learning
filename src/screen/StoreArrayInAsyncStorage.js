/* eslint-disable prettier/prettier */
import {StyleSheet, TextInput, View} from 'react-native';
import React from 'react';
import Button from '../Reuseable/Button';

const StoreArrayInAsyncStorage = () => {
  const addHandler = () => {};
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <TextInput
          style={styles.inputStyle}
          placeholder="Type Your Text...."
          placeholderTextColor="gray"
        />
        <View style={styles.btnContainer}>
          <Button btnTitle="Submit" onPress={() => addHandler()} />
        </View>
      </View>
    </View>
  );
};

export default StoreArrayInAsyncStorage;

const styles = StyleSheet.create({
  container: {},
  inputStyle: {
    borderColor: '#132D57',
    borderWidth: 2,
    color: 'black',
    borderRadius: 10,
    marginVertical: 5,
  },
  innerContainer: {
    marginHorizontal: 10,
  },
  btnContainer: {
    color: 'white',
  },
});

/* eslint-disable prettier/prettier */
// import {
//   SafeAreaView,
//   StyleSheet,
//   Text,
//   TextInput,
//   View,
//   ScrollView,
// } from 'react-native';
// import React, {useState} from 'react';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import Button from '../Reuseable/Button';

// const StoreArrayInAsyncStorage = () => {
//   const [name, setName] = useState('');

//   const handleSubmit = async () => {};
//   return (
//     <View style={styles.container}>
//       <ScrollView>
//         <SafeAreaView>
//           <View style={styles.inputContainer}>
//             <TextInput
//               style={styles.inputStyle}
//               value={name}
//               placeholderTextColor="gray"
//               placeholder="Enter your name.............."
//               onChangeText={textChange => setName(textChange)}
//             />
//           </View>
//           <View>
//             <Button btnTitle="Submit" onPress={() => handleSubmit()} />
//           </View>
//         </SafeAreaView>
//       </ScrollView>
//     </View>
//   );
// };

// export default StoreArrayInAsyncStorage;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   inputContainer: {
//     marginHorizontal: 6,
//     marginVertical: 5,
//   },
//   inputStyle: {
//     color: 'black',
//     borderColor: '#262180',
//     borderWidth: 1,
//     borderRadius: 10,
//     marginVertical: 5,
//   },
//   btnStyle: {
//     backgroundColor: '',
//   },
//   dataViewContainer: {
//     marginHorizontal: 6,
//     marginVertical: 5,
//   },
// });
