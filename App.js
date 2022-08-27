import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Image } from 'react-native';
import Sobre from './screens/sobre.js';
import Home from './screens/home.js';
import Calculadora from './screens/calculadora.js';
import Contato from './screens/contato.js';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{
        headerTransparent: true,
        headerTintColor: 'white',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerRight: () => (
          <Image style={{width: 90, height: 50}} source={require("./assets/logo.png")}></Image>
        ),
      }}>
        <Stack.Screen name="Home" component={Home} options={{ title: 'Tela inicial' }} />
        <Stack.Screen name="Sobre" component={Sobre} options={{ title: 'Sobre' }} />
        <Stack.Screen name="Calculadora" component={Calculadora} options={{ title: 'Calculadora' }} />
        <Stack.Screen name="Contato" component={Contato} options={{ title: 'Contato' }} />
      </Stack.Navigator>
    </NavigationContainer >
  );
}

export default App;