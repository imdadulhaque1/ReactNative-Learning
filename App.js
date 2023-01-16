/* eslint-disable prettier/prettier */
import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import IncreDecrements from './src/screen/IncreDecrements';
import InputField from './src/screen/InputField';
import ArrayToList from './src/screen/ArrayToList';
import FlatLists from './src/screen/FlatLists';
import ExampleFlatList from './src/screen/ExampleFlatList';
import FetchApiData from './src/screen/FetchApiData';
import DataFetchAnother from './src/screen/DataFetchAnother';
import Home from './src/Home/Home';
import BackButton from './src/Reuseable/BackButton';
import One from './src/DataPassingOne_Another/One';
import Another from './src/DataPassingOne_Another/Another';
import ButtomNavigation from './src/Navigation/ButtomNavigation/ButtonNavigation';
import NavigationDrawer from './src/Navigation/NavigationDawer/NavigationDrawer';
import WebViewCom from './src/screen/WebViewCom';
import HSS_Web from './src/HelloSuperStars/HSS_Web';
import HelloSuperStars from './src/HelloSuperStars/HelloSuperStars';
import AsyncStorageComp from './src/screen/AsyncStorageComp';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="NavigationDrawer"
          component={NavigationDrawer}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="ButtomNavigation"
          component={ButtomNavigation}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
            // title: 'Hello React-Native',
            // headerTitleAlign: 'center',
            // headerTitleStyle: {
            //   color: '#fff',
            // },
            // headerStyle: {
            //   backgroundColor: '#0C1A2C',
            // },
          }}
        />
        <Stack.Screen
          name="IncreDecrements"
          component={IncreDecrements}
          options={{
            title: 'Increments & Decrements',
            headerTitleAlign: 'center',
            headerTitleStyle: {
              color: '#fff',
              fontFamily: 'Rajdhani-Bold',
            },
            headerStyle: {
              backgroundColor: '#0C1A2C',
            },
            headerLeft: () => <BackButton />,
          }}
        />
        <Stack.Screen
          name="InputField"
          component={InputField}
          options={{
            title: 'Working with InputField',
            headerTitleAlign: 'center',
            headerTitleStyle: {
              color: '#fff',
              fontFamily: 'Rajdhani-Bold',
            },
            headerStyle: {
              backgroundColor: '#0C1A2C',
            },
            headerLeft: () => <BackButton />,
          }}
        />
        <Stack.Screen
          name="ArrayToList"
          component={ArrayToList}
          options={{
            title: 'Working with Array',
            headerTitleAlign: 'center',
            headerTitleStyle: {
              color: '#fff',
              fontFamily: 'Rajdhani-Bold',
            },
            headerStyle: {
              backgroundColor: '#0C1A2C',
            },
            headerLeft: () => <BackButton />,
          }}
        />
        <Stack.Screen
          name="FlatLists"
          component={FlatLists}
          options={{
            title: 'FlatList & Remove Item',
            headerTitleAlign: 'center',
            headerTitleStyle: {
              color: '#fff',
              fontFamily: 'Rajdhani-Bold',
            },
            headerStyle: {
              backgroundColor: '#0C1A2C',
            },
            headerLeft: () => <BackButton />,
          }}
        />
        <Stack.Screen
          name="ExampleFlatList"
          component={ExampleFlatList}
          options={{
            title: 'Advancedly Working with FlatList',
            headerTitleAlign: 'center',
            headerTitleStyle: {
              color: '#fff',
              fontFamily: 'Rajdhani-Bold',
            },
            headerStyle: {
              backgroundColor: '#0C1A2C',
            },
            headerLeft: () => <BackButton />,
          }}
        />
        <Stack.Screen
          name="FetchApiData"
          component={FetchApiData}
          options={{
            title: 'Working with FetchAPI',
            headerTitleAlign: 'center',
            headerTitleStyle: {
              color: '#fff',
              fontFamily: 'Rajdhani-Bold',
            },
            headerStyle: {
              backgroundColor: '#0C1A2C',
            },
            headerLeft: () => <BackButton />,
          }}
        />
        <Stack.Screen
          name="DataFetchAnother"
          component={DataFetchAnother}
          options={{
            title: 'Advancedly Working with FetchAPI',
            headerTitleAlign: 'center',
            headerTitleStyle: {
              color: '#fff',
              fontFamily: 'Rajdhani-Bold',
            },
            headerStyle: {
              backgroundColor: '#0C1A2C',
            },
            headerLeft: () => <BackButton />,
          }}
        />
        <Stack.Screen
          name="One"
          component={One}
          options={{
            title: 'Data Send to Another',
            headerTitleAlign: 'center',
            headerTitleStyle: {
              color: '#fff',
              fontFamily: 'Rajdhani-Bold',
            },
            headerStyle: {
              backgroundColor: '#0C1A2C',
            },
            headerLeft: () => <BackButton />,
          }}
        />
        <Stack.Screen
          name="Another"
          component={Another}
          options={{
            title: 'Received from One',
            headerTitleAlign: 'center',
            headerTitleStyle: {
              color: '#fff',
              fontFamily: 'Rajdhani-Bold',
            },
            headerStyle: {
              backgroundColor: '#0C1A2C',
            },
            headerLeft: () => <BackButton />,
          }}
        />
        <Stack.Screen
          name="WebViewCom"
          component={WebViewCom}
          options={{
            title: 'WebView',
            headerTitleAlign: 'center',
            headerTitleStyle: {
              color: '#fff',
              fontFamily: 'Rajdhani-Bold',
            },
            headerStyle: {
              backgroundColor: '#0C1A2C',
            },
            headerLeft: () => <BackButton />,
          }}
        />
        <Stack.Screen
          name="HSS_Web"
          component={HSS_Web}
          options={{
            title: 'Hello Super Stars Web',
            headerTitleAlign: 'center',
            headerTitleStyle: {
              color: '#fff',
              fontFamily: 'Rajdhani-Bold',
            },
            headerStyle: {
              backgroundColor: '#0C1A2C',
            },
            headerLeft: () => <BackButton />,
          }}
        />
        <Stack.Screen
          name="HelloSuperStars"
          component={HelloSuperStars}
          options={{
            title: 'Hello Super Stars',
            headerTitleAlign: 'center',
            headerTitleStyle: {
              color: '#fff',
              fontFamily: 'Rajdhani-Bold',
            },
            headerStyle: {
              backgroundColor: '#0C1A2C',
            },
            headerLeft: () => <BackButton />,
          }}
        />
        <Stack.Screen
          name="AsyncStorageComp"
          component={AsyncStorageComp}
          options={{
            title: 'Async Storage',
            headerTitleAlign: 'center',
            headerTitleStyle: {
              color: '#fff',
              fontFamily: 'Rajdhani-Bold',
            },
            headerStyle: {
              backgroundColor: '#0C1A2C',
            },
            headerLeft: () => <BackButton />,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
