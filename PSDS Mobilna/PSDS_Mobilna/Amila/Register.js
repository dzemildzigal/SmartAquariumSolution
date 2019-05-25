import React from "react";
import Logo from "./Logo";
import { StyleSheet, Text, View, Image, TextInput, Button, KeyboardAvoidingView, ScrollView } from 'react-native';
import InputTexts from "./InputTexts";
import Separator from "./Separator";
import {Actions} from "react-native-router-flux";

const styles = StyleSheet.create({
    container: {
        alignItems: 'stretch',
        justifyContent: 'center',
        flexDirection: "column",
        padding: 10,
        marginTop: 10,
        backgroundColor: "white"
    }
});

class Register extends React.Component {

    render() {
        return (
            <ScrollView>
                <KeyboardAvoidingView
                    style={styles.container}
                    behavior="padding"
                    keyboardVerticalOffset="30"
                >

                    <Logo />
                    <Separator />
                    <InputTexts label="Name" placeholder="Your first name" />
                    <Separator />
                    <InputTexts label="Last Name" placeholder="Your last name" />
                    <Separator />
                    <InputTexts label="Email" placeholder="something@something.com" />
                    <Separator />
                    <InputTexts label="Password" placeholder="Choose a password" secure={true} />
                    <Separator />
                    <View style={{ flex: 1, alignItems: "flex-end" }}>
                        <Button title="Register" style={{ flex: 2 }} />
                    </View>


                </KeyboardAvoidingView>
            </ScrollView>
        );
    }
}

export default Register;