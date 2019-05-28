import React from "react";
import { Button, View, Text, StyleSheet, Dimensions, ScrollView,KeyboardAvoidingView } from 'react-native';
import Separator from './Separator';
import NumericInput from 'react-native-numeric-input'
import Logo from './Logo';


const styles = StyleSheet.create({
    
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: "column",
        padding: 10,
        marginTop: 20
    },

    button: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
        alignItems: 'stretch'
    }
    });


class SetValues extends React.Component {

    render() {
        return (
            <KeyboardAvoidingView
            style={styles.container}
            behavior="padding"
            keyboardVerticalOffset="30"
        >
                <Logo/>
                <Separator/>
                <View style={styles.container}>
                <Text>Water:</Text>
                <NumericInput type='up-down' onChange={value => console.log(value)} />
                <Text>Food:</Text>
                <NumericInput type='up-down' onChange={value => console.log(value)} />
                <Text>Tepmerature:</Text>
                <NumericInput type='up-down' onChange={value => console.log(value)} />
                <Text>Php:</Text>
                <NumericInput type='up-down' onChange={value => console.log(value)} />
            </View>
            <View style={styles.button}>
                <Button  title="Set values" onPress={()=>console.log('hi')}></Button>
            </View>
               
            </KeyboardAvoidingView>
        );
    }
}

export default SetValues;