/* eslint-disable prettier/prettier */
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import BackButton from './Reuseable/BackButton';
import HeaderCom from './Reuseable/HeaderCom';

const IncreDecrements = () => {
  const [counter, setCounter] = useState(0);

  const IncFunc = () => {
    setCounter(counter + 1);
  };
  const DecFunc = () => {
    setCounter(counter - 1);
  };
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View>
          <Text style={styles.counterText}>{counter}</Text>
        </View>
        <View style={styles.BtnView}>
          <TouchableOpacity>
            <Button
              onPress={() => IncFunc()}
              style={styles.btnInc}
              title="Increments"
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Button
              onPress={() => DecFunc()}
              style={styles.btnDec}
              title="Decrements"
            />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default IncreDecrements;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    height: '100%',
    width: '100%',
  },
  counterText: {
    fontSize: 30,
  },
  BtnView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 15,
  },
  btnInc: {
    justifyContent: 'space-between',
  },
});
