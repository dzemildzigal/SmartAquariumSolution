import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Amila from "./Amila/app.js";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Amila />
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
