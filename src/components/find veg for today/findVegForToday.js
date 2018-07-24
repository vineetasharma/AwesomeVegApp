import React from 'react';
let loader= require('./../../images/loader.gif');
import { StyleSheet, Text, View, Image } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Find Veg</Text>
        <Image source={loader} resizeMode="cover" style={{height:"80%",width:"90%"}}></Image>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
