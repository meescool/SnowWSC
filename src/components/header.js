/*
 * @author Marcela Estrada
 * @date 4/11/2021
 */
import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

import colors from '../assets/themes/colors';

export default function Header() {

  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>Favorites</Text>
    </View>

  )
}

const styles = StyleSheet.create({
  header: {
    elevation: 3,
    padding: 20,
    alignItems: 'center',
    backgroundColor: colors.primary,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  headerText: {
    fontFamily: 'Arial',
    fontSize: 30,
  },


});
