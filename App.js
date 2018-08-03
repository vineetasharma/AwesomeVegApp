import React from 'react';
let loader = require('./src/images/loader.gif');
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity, Alert } from 'react-native';

const data = [
  { title: 'View All Available Veg' },
  { title: 'Find veg for Today' },
  { title: 'View All Available Veg' },
  { title: 'Find veg for Today' }
];

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        <Image source={loader} resizeMode="cover" style={{ height: "80%", width: "90%" }}></Image>
        <FlatList
          data={data}
          keyExtractor={(item, index) => (index+item.title)}
          renderItem={({item}) => (
            <View style={{margin: 10}}>
            <TouchableOpacity onPress={()=>{
              console.log('You clieclked---------',item);
              Alert.alert(item.title)
            }}
            >
              <Text>{item.title}</Text>
            </TouchableOpacity>
          </View>
          )}
        />
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
