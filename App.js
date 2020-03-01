import React, {Component} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet,ActivityIndicator, Text, View, FlatList, Image, TextInput, Button} from 'react-native';
import Pokemon from './Pokemon';
import App from './alldata';
import Inscription from'./inscription';

const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Inscription" component={Inscription} />
      <Stack.Screen name="Tous les pokémons" component={App} />
      <Stack.Screen name="Pokemon" component={Pokemon} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



