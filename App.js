/*
 * @author Marcela Estrada
 * @date 4/11/2021
 */
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList, TouchableOpacity} from 'react-native';
import Favorites from './src/screens/favorites';

export default function App() {

  return (
    <View style={styles.container}>


	<Favorites />


    </View>


    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      paddingTop: 0,
      paddingHorizontal: 0,
    }
    });
