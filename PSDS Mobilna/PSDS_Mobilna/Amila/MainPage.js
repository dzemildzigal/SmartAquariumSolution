import React from "react";
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Logs from './Logs'
import Logo from "./Logo"
import ScrollableTabView, { ScrollableTabBar, } from 'react-native-scrollable-tab-view';
import AccountSettings from "./AccountSettings";

const styles = StyleSheet.create({
    container: {

    }
});

class Main extends React.Component {
    constructor() {
        super();
        this.state = {
          
        }
    }
    render() {
        return (
                <ScrollableTabView
                    initialPage={0}
                    renderTabBar={() => <ScrollableTabBar />}
                    tabBarActiveTextColor="#2d89ef"
                    tabBarUnderlineStyle={{ backgroundColor: "#2d89ef" }}
                    style={{marginTop:20}}
                >
                    <Logs tabLabel='Logs' name='logs'></Logs>
                    <Text tabLabel='Messages'>Ovdje idu sve push notifikacije</Text>
                    <AccountSettings tabLabel="Account"></AccountSettings>
                </ScrollableTabView>
            
        );
    }
}

export default Main;