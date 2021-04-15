import React from "react";
import { View, Button, StyleSheet, TouchableOpacity, Text } from "react-native";

import colors from '../assets/themes/colors';


TouchableOpacity.defaultProps = { activeOpacity: 0.8 };

export const ReportButton = ({ onPress, title }) => (
  <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  appButtonContainer: {
    elevation: 8,
    backgroundColor: colors.inProgress,
    borderRadius: 10,
    width: 50,
    height: 100,
    borderRadius: 20,
    justifyContent: 'center',
  },
  appButtonText: {
    fontSize: 25,
    fontFamily: 'Ubuntu-Regular',
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  }
});

export default ReportButton;
