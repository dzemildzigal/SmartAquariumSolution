import React from "react";
import { StyleSheet, Text, View, Image, TextInput, Button, KeyboardAvoidingView } from 'react-native';
import Logo from "../assets/jemoLogo.png"
import InputTexts from "./InputTexts";
import Separator from "./Separator";

const styles = StyleSheet.create({
    text: {
        fontSize: 15
    },

    container: {
        alignItems: 'stretch',
        justifyContent: 'center',
        flexDirection: "column",
        padding: 10
    }

});

class Login extends React.Component {

    render() {
        return (
            <KeyboardAvoidingView
                style={styles.container}
                behavior="position"
            >
                    <View>
                        <Image source={Logo} alt="help" style={{ width: 150, height: 150 }} />
                    </View>
                    <Separator />
                    <InputTexts label="Email" placeholder="something@something.com" secure={false} stilTekst={styles.text} />
                    <Separator />
                    <InputTexts label="Password" placeholder="" secure={true} />
                    <Separator />
                    <View style={{
                        flexDirection: "row"
                    }}>
                        <Text style={{
                            textDecorationLine: 'underline',
                            color: "#2d89ef",
                            flex: 2
                        }}
                            onPress={() => {
                                <Text>Blabla</Text>
                            }}>Create Account</Text>
                        <Button title="Sign in" style={{
                            flex: 2
                        }} />
                    </View>
            </KeyboardAvoidingView >
        );
    }
}
export default Login;