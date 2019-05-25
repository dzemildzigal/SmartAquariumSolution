import React from "react";
import { StyleSheet, Text, View, Button, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import Logo from "./Logo.js";
import InputTexts from "./InputTexts";
import Separator from "./Separator";
import { Actions } from "react-native-router-flux";

const styles = StyleSheet.create({
    text: {
        fontSize: 15
    },

    container: {
        alignItems: 'stretch',
        justifyContent: 'center',
        flexDirection: "column",
        padding: 10,
        marginTop: 10,
        backgroundColor: "white"
    }

});

class Login extends React.Component {

    render() {
        //sign in dugme trenutno samo hladno ulazi na main page, tj ono cudo s tabovima
        return (
            <KeyboardAvoidingView
                style={styles.container}
                behavior="padding"
                keyboardVerticalOffset="30"
            >
                <Logo />
                <Separator />
                <InputTexts label="Email" placeholder="something@something.com" secure={false} stilTekst={styles.text} />
                <Separator />
                <InputTexts label="Password" placeholder="" secure={true} />
                <Separator />
                <View style={{
                    flexDirection: "row"
                }}>
                    <TouchableOpacity style={{flex: 2 }} onPress={() => {Actions.Register()}}>
                        <Text style={{ textDecorationLine: 'underline', color: "#2d89ef"}}>Create Account</Text>
                    </TouchableOpacity>
                    <Button title="Sign in" style={{flex: 2 }} onPress={()=>{Actions.Main()}}/>
                </View>
            </KeyboardAvoidingView >
        );
    }
}
export default Login;