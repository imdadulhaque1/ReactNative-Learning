/* eslint-disable prettier/prettier */
import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import ViewTextFlexbox from './src/ViewTextFlexbox';
import IncreDecrements from './src/IncreDecrements';
import InputField from './src/InputField';
import ArrayToList from './src/ArrayToList';
import FlatLists from './src/FlatLists';
import ExampleFlatList from './src/ExampleFlatList';
import FetchApiData from './src/FetchApiData';
import DataFetchAnother from './src/DataFetchAnother';
import DuplicateUserRemove from './src/DuplicateUserRemove';
import Home from './src/Home/Home';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Hello React-Native',
            headerTitleAlign: 'center',
            headerTitleStyle: {
              color: '#fff',
            },
            headerStyle: {
              backgroundColor: '#0C1A2C',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
