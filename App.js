import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './src/Components/WelcomeScreen';
import HomeScreen from './src/Components/HomeScreen';
import EntryPage from './src/Components/EntryPage';

export default function App() {

  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Welcome'>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="DAILY GOALS" component={HomeScreen} />
        <Stack.Screen name="TASKS" component={EntryPage} />
      </Stack.Navigator>
    </NavigationContainer>  
  )
}