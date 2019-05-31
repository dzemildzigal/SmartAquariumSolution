import React, { Component } from "react";
import { Button, Platform, StyleSheet, Text, View, Alert, YellowBox } from "react-native";
import Separator from "./Separator";
import { Actions } from "react-native-router-flux";

const styles = StyleSheet.create({

  container: {
    alignItems: 'stretch',
    justifyContent: 'center',
    flexDirection: "column",
    padding: 10,
    marginTop: 10
  },
  labele: {
    fontSize: 17,
    color: "#6F6F6F"
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: "space-between"
  }
});
export default class HomeActivity extends Component {
  constructor() {
    super();
    this.state = {
      ime: "lmao",
      prezime: "poyy",
      email: "neko@nesto"
    }
  }
  render() {
    /*ime, prez, email, delete, log out*/
    return (
      <View style={styles.container}>
        <Text style={styles.labele}>Name: {this.state.ime}</Text>
        <Separator />
        <Text style={styles.labele}>Last Name: {this.state.prezime}</Text>
        <Separator />
        <Text style={styles.labele}>Email: {this.state.email}</Text>
        <Separator/>
        <View style={styles.buttons}>
          <Button title="Log out" onPress={() => {Actions.Login()}}/>
          <Button title="Delete Account" />
        </View>
      </View>
    );
  }
}
