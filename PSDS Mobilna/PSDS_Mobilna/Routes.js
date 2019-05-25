import React from 'react';
import { Router, Scene } from 'react-native-router-flux'

import Login from './Amila/Login.js'

const Routes = () => (
   <Router>
      <Scene key = "root"  >
         <Scene key = "Login" component = {Login} title = "Login" initial = {true} hideNavBar={true}/>
      </Scene>
   </Router>
)
export default Routes