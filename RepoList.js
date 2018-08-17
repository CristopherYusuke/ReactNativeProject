import React , { Component } from 'react';
import {
  Platform,
  StyleSheet,
  View,
  Text
} from 'react-native';

export default class RepoList extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> Open up App.js to start working on your app!</Text>
        <Text> quer dizer que eu tenho que ficar apertando a toda hora ?  </Text>
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
