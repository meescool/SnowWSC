import React from "react";
import { View, Button, StyleSheet, TouchableOpacity, Text } from "react-native";

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import colors from '../assets/themes/colors';


TouchableOpacity.defaultProps = { activeOpacity: 0.8 };

export const ReportButton = ({ onPress, title }) => (
  <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
    <MaterialIcons name={title} color={'#fff'} size={40} />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  appButtonContainer: {
    elevation: 2,
    backgroundColor: '#000',
    width: 70,
    height: 70,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ReportButton;
