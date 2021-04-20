/*
 * @author Marcela Estrada
 * @date 4/11/2021
 */
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList, TouchableOpacity, Icon,Image } from 'react-native';
import Header from '../components/header';
import colors from '../assets/themes/colors';
import { globalStyles } from '../assets/themes/globalStyles';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function Favorites() {
  const [place, setPlace] = useState([
    { spot: {name:'10', time:'12 min', state: 'mood-bad', colors:colors.covered}, id: '1'},
    { spot: {name:'9', time:'12 min', state: 'mood', colors:colors.cleared}, id: '2'},
    { spot: {name:'0', time:'12 min', state: 'sentiment-neutral', colors:colors.inProgress}, id: '3'},
    { spot: {name:'80', time:'12 min', state: 'sentiment-neutral', colors:colors.inProgress}, id: '4'},
    { spot: {name:'10', time:'12 min', state: 'mood', colors:colors.cleared}, id: '5'},
    { spot: {name:'9', time:'12 min', state: 'sentiment-neutral', colors:colors.inProgress}, id: '6'},
    { spot: {name:'0', time:'12 min', state: 'mood-bad', colors:colors.covered}, id: '7'},
    { spot: {name:'80', time:'12 min', state: 'mood-bad', colors:colors.covered}, id: '8'},
    ])

  const pressHandler = (id) => {
    console.log(id);
    setPlace((prevPlace) => {
        return prevPlace.filter(spot => spot.id != id)
      })
  }

  return (
    <View style={globalStyles.container}>
      <Header title='Favorites'/>


      <FlatList
	  //numColumns={2} need to comment out line below to make the columns work*/}
        keyExtractor={(item) => item.id}
        data={place}
        renderItem={({ item }) =>(
          <TouchableOpacity onPress={() => pressHandler(item.id)}>

            <View style={styles.body}>

              <View style={styles.subBody}>
                <Text style={globalStyles.subHeaderText}>Lot: {item.spot.name}</Text>
                <Text style={styles.text}>estimated time: {item.spot.time}</Text>
              </View>
              <View>
                <MaterialIcons name={item.spot.state} color={item.spot.colors} size={100}/>
              </View>
            </View>

          </TouchableOpacity>


          )}
      />
    </View>

);
}

const styles = StyleSheet.create({


  body:{
    paddingVertical: 10,
    paddingHorizontal: 20,
    flex: 1,
    flexDirection: 'row',
    marginVertical: 2,
    marginHorizontal: 20,
    backgroundColor: '#fff',
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
  

  },

  subBody:{
    flex: 1,
    flexDirection: 'column',
    justifyContent:'space-around',

  },

  subHeaderText:{
    fontFamily: 'Ubuntu-Regular',
    fontSize: 30,
  },

  text:{
    color: colors.inProgress,
  },

  buttonContainer: {
    marginTop: 20,
    backgroundColor: 'pink',
  },


  });


{/* <ScrollView>
  { place.map(item => (
      <View key={item.key} style={styles.body}>
        <View style={styles.subBody}>
          <Text style={styles.subHeaderText}>Lot: {item.spot.name}</Text>
          <Text>estimated time: {item.spot.time}</Text>
        </View>
        <View>
          <Text>Condition: {item.spot.state}</Text>

        </View>

      </View>
    ))}
  </ScrollView> */}
