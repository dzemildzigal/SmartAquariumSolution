import React from "react";
import { View, Text, StyleSheet, Dimensions } from 'react-native';

import ScrollableTabView, { ScrollableTabBar, } from 'react-native-scrollable-tab-view';

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
                <Text tabLabel='Log'>Bruda ovdje pravi log ;)</Text>
                <Text tabLabel='Messages'>Ovdje idu sve push notifikacije</Text>
                <Text tabLabel='Account Settings'>Ovdje bi se trebao uvaliti drop down meni za settings</Text>
            </ScrollableTabView>
        );
    }
}

export default Main;