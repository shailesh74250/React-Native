// React Native Axios – To Make HTTP API call in React Native
// https://aboutreact.com/react-native-axios/

import 'react-native-gesture-handler';
import React from 'react';

import {StyleSheet, View, TouchableOpacity, Text,FlatList,TextInput, SafeAreaView} from 'react-native';
import { Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';

import axios from 'axios';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import TodoList from './screens/todoList'; 
import TodoDetails from './screens/todoDetails';

const COLORS = {primary: '#1f145c', white: '#fff'};
const Stack = createNativeStackNavigator();

const App = () => {
  
  

  return (
     
    <NavigationContainer independent={true}>
    <Stack.Navigator initialRouteName='TodoList'>
      <Stack.Screen
        name="TodoList"
        component={TodoList}
        options={{ title: 'Welcome' }}
      />
      <Stack.Screen name="TodoDetail" component={TodoDetails} />
    </Stack.Navigator>
  </NavigationContainer>

      
  );
};


export default App;