import 'react-native-gesture-handler';

import React, { useState } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList, TouchableOpacity} from 'react-native';
import Favorites from './src/screens/favorites';
import Reports from './src/screens/reports';

export default function App() {

const Tab = createBottomTabNavigator();

  return (
	<NavigationContainer>
    <View style={styles.container}>
    <Tab.Navigator>

      <Tab.Screen name="Reports" component={Reports} />

      <Tab.Screen name="Favorites" component={Favorites} />

    </Tab.Navigator>
    </View>
	</NavigationContainer>


    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ffffff',
      paddingTop: 0,
      paddingHorizontal: 0,
    }
    });
