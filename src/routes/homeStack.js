import { createStackNavigator } from '@react-navigation/stack';

import { NavigationContainer } from '@react-navigation/native';

import Favorites from '../screens/favorites';
import Reports from '../screens/reports';

const screens = {
  Reports:{
    screen: Reports,
  },
  Favorites:{
    screen: Favorites
  }

}

const HomeStack = createStackNavigator(screens);

export default NavigationContainer(HomeStack);
