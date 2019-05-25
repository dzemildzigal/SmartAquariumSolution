import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Amila from "./Amila/app.js";
import { Router, Scene } from 'react-native-router-flux'

export default class App extends React.Component {
  render() {
    return (
         <Amila/>
    );
  }
}

const stil = StyleSheet.create({
  container: {
    
    alignItems: 'center',
    marginTop: 64
  }
});
