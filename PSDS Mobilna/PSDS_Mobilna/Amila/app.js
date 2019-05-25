import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import Login from "./Login.js";
import { Router, Scene } from 'react-native-router-flux'

class App extends React.Component{

    render(){
        return(
            <Router>
            <Scene key = "root"  >
               <Scene key = "Login" component = {Login} title = "Login" initial = {true} hideNavBar={true} sceneStyle={{backgroundColor:"red"}}/>
            </Scene>
         </Router>
        );
    }
}

export default App;