/*
 * @author Marcela Estrada
 * @date 4/11/2021
 */
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList, TouchableOpacity, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Header from '../components/header';
import colors from '../assets/themes/colors';
import { globalStyles } from '../assets/themes/globalStyles';

import ReportButton from '../components/reportButton';

export default function Favorites({navigation}) {
  const [place, setPlace] = useState([
    { spot: {name:'10', time:'12 min', state: 'bad'}, id: '1'},
    { spot: {name:'9', time:'12 min', state: 'bad'}, id: '2'},
    { spot: {name:'0', time:'12 min', state: 'bad'}, id: '3'},
    { spot: {name:'80', time:'12 min', state: 'bad'}, id: '4'},
    { spot: {name:'10', time:'12 min', state: 'bad'}, id: '5'},
    { spot: {name:'9', time:'12 min', state: 'bad'}, id: '6'},
    { spot: {name:'0', time:'12 min', state: 'bad'}, id: '7'},
    { spot: {name:'80', time:'12 min', state: 'bad'}, id: '8'},
    ])

  const pressHandler = (id) => {
    console.log(id);
    setPlace((prevPlace) => {
        return prevPlace.filter(spot => spot.id != id)
      })
  }

  return (
    <View style={globalStyles.container}>
      <Header title="Reports" />
        <View style={styles.body}>
        <View style={styles.section}>
          <View style={styles.subSection}>
            <Text style={globalStyles.subHeaderText}>Help</Text>
            <Text>Look at the following guide for more info on the app</Text>
          </View>
          <View>
             <ReportButton title='>'/>
          </View>

        </View>
        <View style={styles.section}>
          <View style={styles.subSection}>
            <Text style={globalStyles.subHeaderText}>Issues</Text>
            <Text>Is the app reporting something incorrect? Please report it to us here</Text>
          </View>
          <View>
             <ReportButton title='>'/>
          </View>
        </View>
        <View style={styles.section}>
          <View style={styles.subSection}>
            <Text style={globalStyles.subHeaderText}>Feedback</Text>
            <Text>Share any feedback</Text>
          </View>
          <View style={styles.button}>
          {/*The button below allows me to navigate to the favorites screen*/}
             <ReportButton title='>' onPress={() => navigation.navigate('Favorites')}/>
          </View>
        </View>
        </View>


    </View>

);
}

const styles = StyleSheet.create({
  body:{
    justifyContent: 'space-evenly',
    alignItems: 'center',
    margin: 20,
  },
  section:{
    alignItems: 'stretch',
    paddingVertical: 40,
    margin: 20,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  subSection:{
    width:'80%',
    paddingRight: 70,
    justifyContent: 'center',
  },
  button:{

  }
  });
