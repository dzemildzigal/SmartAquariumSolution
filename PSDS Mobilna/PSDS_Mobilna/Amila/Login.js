import React from "react";
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import Logo from "../assets/jemoLogo.png"
import InputTexts from "./InputTexts";
import Separator from "./Separator";
const style=StyleSheet.create({
    text:{
        fontSize:15
    }
});

class Login extends React.Component {

    render() {
        return (
            <View style={{ backgroundColor: "red", padding: 10 }}>
                <View>
                    <Image source={Logo} alt="help" style={{ width: 150, height: 150 }} />
                </View>
                <Separator />
                <InputTexts label="Email" placeholder="something@something.com" secure={false} stilTekst={style.text}/>
                <Separator />
                <InputTexts label="Password" placeholder="" secure={true}/>
            </View>
        );
    }
}
export default Login;