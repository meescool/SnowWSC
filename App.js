import 'react-native-gesture-handler';

import React, { useState } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';



import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList, TouchableOpacity} from 'react-native';

import colors from './src/assets/themes/colors.js'

import Favorites from './src/screens/favorites';
import Reports from './src/screens/reports';
import Campus from './src/screens/campus';
import Alerts from './src/screens/alerts';
import Equipment from './src/screens/equipment';

import MyTabBar from './src/components/myTabBar';

export default function App() {

const Tab = createBottomTabNavigator();

  return (
	<NavigationContainer>
    <View style={styles.container}>
    <Tab.Navigator
    initialRouteName="Campus"
    tabBar={props => <MyTabBar {...props} />}>

      <Tab.Screen name="Equipment" component={Equipment} />
      <Tab.Screen name="Favorites" component={Favorites} />

        <Tab.Screen name="Campus" component={Campus} />
        <Tab.Screen name="Reports" component={Reports} />
      <Tab.Screen name="Alerts" component={Alerts} />









    </Tab.Navigator>
    </View>
	</NavigationContainer>


    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.secondary,
      paddingTop: 0,
      paddingHorizontal: 0,
    }
    });
