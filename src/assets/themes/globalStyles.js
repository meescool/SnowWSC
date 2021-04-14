/*
 * @author Marcela Estrada
 * @date 4/11/2021
 */
import { StyleSheet } from 'react-native';
import colors from './colors';

export const globalStyles = StyleSheet.create({
  body:{
    paddingTop: 40,
    paddingHorizontal: 10,
    borderBottomWidth: 2,
    borderColor: colors.covered,
    flex: 1,
    flexDirection: 'row',
    margin: 20,

  },

  subBody:{
    flex: 1,
    flexDirection: 'column',

  },

  subHeaderText:{
    fontSize: 24,
  },

});
