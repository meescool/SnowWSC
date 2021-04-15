/*
 * @author Marcela Estrada
 * @date 4/11/2021
 */
import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

import colors from '../assets/themes/colors';

export const Header=({title}) => (


    <View style={styles.header}>
      <Text style={styles.headerText}>{title}</Text>
    </View>

  )


const styles = StyleSheet.create({
  header: {
    elevation: 3,
    padding: 20,
    alignItems: 'center',
    backgroundColor: colors.primary,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,

  },
  headerText: {
    fontFamily: 'Ubuntu-Regular',
    fontSize: 40,

  },


});

export default Header;
