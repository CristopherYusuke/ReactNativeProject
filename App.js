import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Platform, TouchableOpacity } from 'react-native';

import Repo from './components/Repo';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
  },
  header: {
    height: 70,
    paddingTop: 20,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 20,
  },
  headerButton: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  headerText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  repoList: {
    padding: 20,
  },
});

export default class App extends Component {
  state = {
    repos: [
      {
        id: 1,
        thumbnail: 'https://avatars1.githubusercontent.com/u/4607332?s=40&v=4',
        title: 'meu titulo',
        author: 'meu autor',
      },
      {
        id: 2,
        thumbnail: 'https://avatars1.githubusercontent.com/u/4607332?s=40&v=4',
        title: 'meu titulo 2 ',
        author: 'meu autor 2',
      },
    ],
  }; 

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText} > Github thumbnails </Text>
          <TouchableOpacity onPress={ ()=> {} } >
            <Text style={styles.headerButton}>+</Text>
          </TouchableOpacity>
        </View>
        <ScrollView contentContainerStyle={ styles.repoList}  >
            {
              this.state.repos.map(repo => <Repo key={repo.id} data={repo} /> )
            }
        </ScrollView>
      </View>
    );
  }
}