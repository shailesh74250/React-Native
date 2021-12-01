import 'react-native-gesture-handler';
import React from 'react' ; 
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TodoList from './todoList';
import TodoDetails from './todoDetails';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={TodoList}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen name="Profile" component={TodoDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack ; 
