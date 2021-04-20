import React from "react";
import { View, Button, StyleSheet, TouchableOpacity, Text, Image, Icon } from "react-native";

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import colors from '../assets/themes/colors';


function MyTabBar({ state, descriptors, navigation }) {
  return (
    <View style={{ flexDirection: 'row', elevation: 3, backgroundColor: '#fff', borderTopRightRadius: 20, borderTopLeftRadius: 20, paddingHorizontal: 10, paddingVertical: 10}}>

      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];

        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;


        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.id,
          });



          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.id,
          });
        };

        const tabBarIcon =
          route.name === 'Favorites'
            ? 'favorite'
            : route.name === 'Reports'
            ? 'warning'
            : route.name === 'Campus'
            ? 'public'
            :route.name === 'Alerts'
            ? 'notifications'
            : 'home-repair-service';



        return (
          <TouchableOpacity
            key={route.key}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1 }}

          >
          <View style={{
            flexDirection: 'column',
            color: isFocused ? '#000' : colors.primary ,
            borderWidth: 4,
            borderColor:isFocused ? colors.inProgress : '#fff',
            textAlign: 'center',
            justifyContent:'center',
            alignItems: 'center',

            marginHorizontal: 2,

            borderRadius: 30,
            padding: 10,

          }}>
            <View>
              <MaterialIcons name={tabBarIcon} color={colors.primary}size={30} />
            </View>

            <Text style={{
              fontSize: 8,
              }}>



              {label}

            </Text>

            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

export default MyTabBar;
