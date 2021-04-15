/*
 * @author Marcela Estrada
 * @date 4/11/2021
 */
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList, TouchableOpacity, Image } from 'react-native';
import Header from '../components/header';
import colors from '../assets/themes/colors';
import { globalStyles } from '../assets/themes/globalStyles';

export default function Favorites() {
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
      <Header />


      <FlatList
	  //numColumns={2} need to comment out line below to make the columns work*/}
        keyExtractor={(item) => item.id}
        data={place}
        renderItem={({ item }) =>(
          <TouchableOpacity onPress={() => pressHandler(item.id)}>

            <View style={globalStyles.body}>

              <View style={globalStyles.subBody}>
                <Text style={globalStyles.subHeaderText}>Lot: {item.spot.name}</Text>
                <Text style={globalStyles.text}>estimated time: {item.spot.time}</Text>
              </View>
              <View>
                <Image source={require('../assets/img/bad.png')}/>
                <Text>{item.spot.state}</Text>
              </View>
            </View>

          </TouchableOpacity>


          )}
      />
    </View>

);
}

const styles = StyleSheet.create({


  boldText: {
    fontWeight: 'bold',
  },

  buttonContainer: {
    marginTop: 20,
    backgroundColor: 'pink',
  },

  input: {
    backgroundColor: '#fff',
    borderWidth: 5,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200,
    borderRadius: 29,
  }
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
