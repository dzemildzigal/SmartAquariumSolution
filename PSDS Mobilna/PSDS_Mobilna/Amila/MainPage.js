import React from "react";
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Logs from './Logs'
import ScrollableTabView, { ScrollableTabBar, } from 'react-native-scrollable-tab-view';
import AccountSettings from './AccountSettings';

const Log = () => {
   
}
const Messages = {};
const Settings = {};



class Main extends React.Component {

    render() {
        return (
            <ScrollableTabView
                style={{ marginTop: 20, }}
                initialPage={0}
                renderTabBar={() => <ScrollableTabBar />}
                tabBarActiveTextColor="#2d89ef"
                tabBarUnderlineStyle={{backgroundColor:"#2d89ef"}}
            >
                <Logs tabLabel='Logs' name='logs'></Logs>
                <Text tabLabel='Messages'>Ovdje idu sve push notifikacije</Text>
              
                
               
            </ScrollableTabView>
        );
    }
}

export default Main;