import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class DummyComponent extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Coming soon Component</Text>
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
