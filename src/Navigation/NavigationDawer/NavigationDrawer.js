/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Ionicicons from 'react-native-vector-icons/Ionicons';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../../Home/Home';
import Notification from '../ButtomNavigation/Notification';
import Album from '../ButtomNavigation/Album';
import Menu from '../ButtomNavigation/Menu';

const Drawer = createDrawerNavigator();
const NavigationDrawer = () => {
  return (
    <>
      <Drawer.Navigator>
        <Drawer.Screen
          name="Home"
          component={Home}
          options={{
            drawerIcon: () => {
              return <DrawerIconFunc name="home-outline" />;
            },
          }}
        />
        <Drawer.Screen
          name="Notification"
          component={Notification}
          options={{
            drawerIcon: () => {
              return <DrawerIconFunc name="notifications-circle-outline" />;
            },
          }}
        />
        <Drawer.Screen
          name="Album"
          component={Album}
          options={{
            drawerIcon: () => {
              return <DrawerIconFunc name="albums-outline" />;
            },
          }}
        />
        <Drawer.Screen
          name="Menu"
          component={Menu}
          options={{
            drawerIcon: () => {
              return <DrawerIconFunc name="menu-outline" />;
            },
          }}
        />
      </Drawer.Navigator>
    </>
  );
};

const DrawerIconFunc = props => {
  return <Ionicicons name={props.name} size={24} />;
};

export default NavigationDrawer;

const styles = StyleSheet.create({});
