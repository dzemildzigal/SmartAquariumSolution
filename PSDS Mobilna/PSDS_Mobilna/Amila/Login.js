import React from "react";
import { StyleSheet, Text, View, Image, TextInput, Button} from 'react-native';
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
            <View style={{padding: 10 }}>
                <View>
                    <Image source={Logo} alt="help" style={{ width: 150, height: 150 }} />
                </View>
                <Separator />
                <InputTexts label="Email" placeholder="something@something.com" secure={false} stilTekst={style.text}/>
                <Separator />
                <InputTexts label="Password" placeholder="" secure={true}/>
                <Separator />
                <View style={{
                    flexDirection:"row",
                    flex:1
                }}>
                    <Text style={{
                        textDecorationLine: 'underline',
                        color: "#2d89ef",
                        flex:2
                    }}>Create Account</Text>
                    <Button title="Sign in" style={{
                        flex:2
                    }}/>
                </View>
            </View>
        );
    }
}
export default Login;