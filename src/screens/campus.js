/*
 * @author Marcela Estrada
 * @date 4/11/2021
 */
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, SearchBar,FlatList, TouchableOpacity, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Header from '../components/header';
import colors from '../assets/themes/colors';
import { globalStyles } from '../assets/themes/globalStyles';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


import ReportButton from '../components/reportButton';

export default function Campus() {

  return (



      <View style={globalStyles.container}>
        <View style={styles.body}>
          <View>
          </View>


          <View style={styles.legend}>
            <View style={styles.section}>
              <Text style={styles.text,{color:colors.covered}}>---</Text>
              <Text>covered</Text>
            </View>
            <View  style={styles.section}>
              <Text  style={styles.text,{color:colors.inProgress}}>---</Text>
              <Text>in progress</Text>
            </View>
            <View  style={styles.section}>
              <Text  style={styles.text,{color:colors.cleared}}>---</Text>
              <Text>cleared</Text>
            </View>
          </View>
        </View>

      </View>



);
}

const styles = StyleSheet.create({
  body:{
    margin: 20,
    flex:1,
    justifyContent: 'space-between',
  },
  legend:{
    flexDirection: 'row',
    backgroundColor: '#fff',
    justifyContent: 'space-around',
    padding: 2,
    borderRadius: 30,

  },
  section:{
    flexDirection: 'column',
    alignItems: 'center',
  },

  text:{
    fontSize: 40,
  }
  });
