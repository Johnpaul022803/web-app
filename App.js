import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './app/screens/LoginScreen';
import HomeScreen from './app/screens/HomeScreen';
import MultiScreen from './app/screens/MultiScreen';
import DiviScreen from './app/screens/DiviScreen';
import AddiScreen from './app/screens/AddiScreen';
import SubScreen from './app/screens/SubScreen';
import AboutScreen from './app/screens/AboutScreen';
import AboutUsScreen from './app/screens/AboutUsScreen';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="LOGIN" component={LoginScreen} />
        <Stack.Screen name="HOME" component={HomeScreen} />
        <Stack.Screen name="ABOUTUS" component={AboutUsScreen} />
        <Stack.Screen name="ABOUT" component={AboutScreen} />
        <Stack.Screen name="MULTI" component={MultiScreen} />
        <Stack.Screen name="DIVI" component={DiviScreen} />
        <Stack.Screen name="ADDI" component={AddiScreen} />
        <Stack.Screen name="SUB" component={SubScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
