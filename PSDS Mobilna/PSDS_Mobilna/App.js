import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Amila from "./Amila/app.js";

export default class App extends React.Component {
  render() {
    return (
      <KeyboardAwareScrollView 
        scrollEnabled={false}
        resetScrollToCoords={{ x: 0, y: 0 }}
        contentContainerStyle={styles.container}>
        <Amila />
      </KeyboardAwareScrollView >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
    flexDirection: "column"
  },
});
