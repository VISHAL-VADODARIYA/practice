/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  
  TouchableOpacity,
  
  View,
} from 'react-native';



import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const App = () =>{
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
      }}>
      <View>
        <Text style={{fontSize: 30, fontWeigth: 'bold', color: '#20315f'}}>
          GAME-ON
        </Text>
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: '#AD40AF',
          padding: 20,
          width: '90%',
          borderRadius: 5,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text style={{fontSize: 18, fontWeigth: 'bold', color: '#fff'}}>
          Let's Begin
          <MaterialIcons
            name="arrow-forward-ios"
            size={22}
            color="#000"></MaterialIcons>
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default App;
