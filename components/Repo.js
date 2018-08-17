import React, { Component } from 'react';
import { View , Text , Image, StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  repo: {
    padding: 20,
    backgroundColor: '#fff',
    marginBottom: 20,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems:'center',
  },
  repoImage: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  repoInfo: {
    marginLeft: 10,
  },
  repoTitle: {
    fontWeight: 'bold',
    color:"#333",
  },
  repoAuthor:{
    fontSize: 12,
    color: '#999',
  },
});

export default class Repo extends Component {
  render() {
    return (
      <View style={styles.repo}>
        <Image
          style={styles.repoImage}
          source ={{uri: 'asdf' }}
        />
        <View style={styles.repoInfo} >
          <Text style={styles.repoTile}>
            testestestestes
          </Text>
          <Text style={styles.repoAuthor}>
            testestestestes author
          </Text>
        </View>
      </View>
    );
  }
}