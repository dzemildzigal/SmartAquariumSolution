import React from "react";
import { Button, View, Text, StyleSheet, Dimensions, ScrollView } from 'react-native';
import Informations from './Informations';
import Separator from './Separator';
import AccountSettings from './AccountSettings';
import { Actions } from "react-native-router-flux";

const styles = StyleSheet.create({
    
    account: {
        position: 'absolute'
    },
    scroll: {
        position: 'relative',
        overflow: 'visible',
        marginTop: 60
    }
    });


class Logs extends React.Component {

    render() {
        return (
            
            <View>          
                <AccountSettings style={styles.account}> </AccountSettings>     
                <ScrollView style={styles.scroll} >
                    <Informations key={0} title="Water Level" text="this is water level"></Informations>
                    <Separator />
                    <Informations key={1} title="Food Level" text="this is food level"></Informations>
                    <Separator />
                    <Informations key={2} title="Temprature Level" text="this is temp level"></Informations>
                    <Separator />
                    <Informations key={3} title="Php Level" text="this is php level"></Informations>
                    <View style={{flexDirection:'row-reverse', padding:10}}>
                    <Button title="Set values" style={{flex: 2 }} onPress={()=>{Actions.SetValues()}}/>
                    </View>
                </ScrollView>
            </View>
               
        );
    }
}

export default Logs;