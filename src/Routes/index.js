import { createStackNavigator } from '@react-navigation/stack';
import Home from '../Pages/home';
import React from 'react';
import Data from '../Pages/data';
import Main from '../Pages/main';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Data" component={Data} />
      <Stack.Screen name="Main" component={Main} />
    </Stack.Navigator>
  );
}