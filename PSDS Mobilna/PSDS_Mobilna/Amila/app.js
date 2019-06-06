import React from "react";
import Login from "./Login.js";
import Register from "./Register.js"
import Main from "./MainPage.js";
import SetValues from './SetValues';
import { Router, Scene } from 'react-native-router-flux'

class App extends React.Component{

    render(){
        return(
            <Router cardStyle={{backgroundColor:"white"}}>
            <Scene key = "root"  >
               <Scene key = "Login" component = {Login} title = "Login" hideNavBar={true} initial={true} />
               <Scene key="Register" component={Register} title = "Register" hideNavBar={true} ></Scene>
               <Scene key="MainPage" component={Main} title="Main page" hideNavBar={true}  ></Scene>
               <Scene key="SetValues" component={SetValues} title="SetValues" hideNavBar={true}  ></Scene>

            </Scene>
         </Router>
        );
    }
}

export default App;