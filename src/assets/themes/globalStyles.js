/*
 * @author Marcela Estrada
 * @date 4/11/2021
 */
import { StyleSheet } from 'react-native';
import colors from './colors';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingTop: 0,
    paddingHorizontal: 0,
  },
  body:{
    paddingTop: 40,
    paddingHorizontal: 10,
    borderBottomWidth: 2,
    borderColor: colors.primary,
    flex: 1,
    flexDirection: 'row',
    margin: 20,

  },

  subBody:{
    flex: 1,
    flexDirection: 'column',

  },

  subHeaderText:{
    fontFamily: 'Ubuntu-Regular',
    fontSize: 30,
  },

  text:{
    color: colors.greyText,
  },

  button:{
    backgroundColor: colors.inProgress,
  },

});
