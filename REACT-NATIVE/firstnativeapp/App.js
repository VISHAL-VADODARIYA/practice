import React from 'react';
import {Button, StyleSheet, Switch, Text, TextInput, View} from 'react-native';

function App() {
  return (
    <View style={styles.main}>
      <View style={styles.firstHalf}>
        <TextInput placeholder='entertext' style={{borderColor:'yellow',borderWidth:10}}></TextInput>
        <Text style={styles.text}>Hello first half</Text>
      </View>
      <View style={styles.secondHalf}>
        <Text style={styles.text}>Hello second half</Text>
        <Button title='hello' />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'green',
  },
  text: {
    color: 'white',
    fontSize: 30,
  },
  firstHalf: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: '#3f173f',
  },
  secondHalf: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: '#830303',
  },
});

export default App;
