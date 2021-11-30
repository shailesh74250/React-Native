/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';


import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Button,
  useColorScheme,
  View,
} from 'react-native';


import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';

import Icon from 'react-native-vector-icons/Ionicons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ExploreScreen from './screens/ExploreScreen';
import ProfileScreen from './screens/ProfileScreen';
import MainTabScreen from './screens/MainTabScreen';

const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createMaterialBottomTabNavigator();



const App = () => {
  return(
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={MainTabScreen} />
        <Drawer.Screen name="Details" component={DetailsScreen} />
      </Drawer.Navigator> 
    </NavigationContainer>

  )
}
        
export default App;
