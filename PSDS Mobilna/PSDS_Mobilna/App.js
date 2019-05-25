import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Amila from "./Amila/app.js";

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
