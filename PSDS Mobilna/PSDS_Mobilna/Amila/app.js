import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import Login from "./Login.js";
import Register from "./Register.js"
import { Router, Scene } from 'react-native-router-flux'

class App extends React.Component{

    render(){
        return(
            <Router cardStyle={{backgroundColor:"white"}}>
            <Scene key = "root"  >
               <Scene key = "Login" component = {Login} title = "Login" hideNavBar={true}/>
               <Scene key="Register" component={Register} title = "Register" hideNavBar={true} initial = {true} ></Scene>
            </Scene>
         </Router>
        );
    }
}

export default App;