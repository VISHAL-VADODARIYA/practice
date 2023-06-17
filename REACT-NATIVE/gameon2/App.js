/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {SafeAreaView, TouchableOpacity, Text, View, Image} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import GamingImg from './assets/svgimg.png';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

const App=()=>{
  return (
    
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen component={Main} name='Main' />
        <Stack.Screen component={Home} name='Home' />
      </Stack.Navigator>
    </NavigationContainer>   

  )
}
  
const Main = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
      }}>
      <View style={{marginTop: 20}}>
        <Text style={{fontSize: 30, fontWeight: 'bold', color: '#20315f'}}>
          GAME-ON
        </Text>
      </View>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        
        <GamingImg />
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: '#AD40AF',
          padding: 20,
          width: '90%',
          borderRadius: 5,
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginBottom: 50,
        }}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: 'bold',
            color: '#fff',
            fontFamily: 'Entypo',
          }}>
          Let's Begin
        </Text>
        <MaterialIcons
          name="arrow-forward-ios"
          size={22}
          color="#fff"></MaterialIcons>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const Home = ()=>{
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Text>Home Screen</Text>
    </View>
  )
}
export default App;
