/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../../Home/Home';
import Ionicicons from 'react-native-vector-icons/Ionicons';
import Notification from './Notification';
import Album from './Album';
import Menu from './Menu';

const Tab = createBottomTabNavigator();

const ButtomNavigation = () => {
  return (
    <>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: () => {
              return <ButtomIconFunc name="home-outline" />;
            },
            headerShown: false,
            // title: 'Home',
            // headerTitleAlign: 'center',
            // headerTitleStyle: {
            //   color: '#fff',
            // },
            // headerStyle: {
            //   backgroundColor: '#0C1A2C',
            // },
          }}
        />
        <Tab.Screen
          name="Notification"
          component={Notification}
          options={{
            tabBarIcon: () => {
              return <ButtomIconFunc name="notifications-circle-outline" />;
            },
            headerShown: false,
            // title: 'Notification',
            // headerTitleAlign: 'center',
            // headerTitleStyle: {
            //   color: '#fff',
            // },
            // headerStyle: {
            //   backgroundColor: '#0C1A2C',
            // },
            // headerLeft: () => <BackButton />,
          }}
        />
        <Tab.Screen
          name="Album"
          component={Album}
          options={{
            tabBarIcon: () => {
              return <ButtomIconFunc name="albums-outline" />;
            },
            headerShown: false,
            //   title: 'Album',
            //   headerTitleAlign: 'center',
            //   headerTitleStyle: {
            //     color: '#fff',
            //   },
            //   headerStyle: {
            //     backgroundColor: '#0C1A2C',
            //   },
            //   headerLeft: () => <BackButton />,
          }}
        />
        <Tab.Screen
          name="Menu"
          component={Menu}
          options={{
            tabBarIcon: () => <ButtomIconFunc name="menu-outline" />,
            headerShown: false,
            // title: 'Menu',
            // headerTitleAlign: 'center',
            // headerTitleStyle: {
            //   color: '#fff',
            // },
            // headerStyle: {
            //   backgroundColor: '#0C1A2C',
            // },
            // headerLeft: () => <BackButton />,
          }}
        />
      </Tab.Navigator>
    </>
  );
};

export default ButtomNavigation;

const ButtomIconFunc = props => {
  return <Ionicicons name={props.name} size={24} />;
};

const styles = StyleSheet.create({});
