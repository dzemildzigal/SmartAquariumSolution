import React from "react";
import { StyleSheet, Text, View, Button, KeyboardAvoidingView, ScrollView,TouchableOpacity,TextInput } from 'react-native';
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
        backgroundColor: "white",
        flex: 1
    },
    viewsLijevo:{
        textAlign: "left",
        backgroundColor: "#efeff2",
        padding: 10,
        alignSelf: "stretch"
    }

});

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          email: "",
          password: ""        
        };       
      }
  
   
    handleSignIn = evt => {
        evt.preventDefault();
        if(this.state.email == "jemoaqua@psds.com" && this.state.password =="amilaselmajemo")
           Actions.MainPage(); 
        else Actions.Register();

    }


    render() {
        console.log(this.state)
        //sign in dugme trenutno samo hladno ulazi na main page, tj ono cudo s tabovima
        return (
          
            <KeyboardAvoidingView
                style={styles.container}
                keyboardVerticalOffset="30" 
                behavior="padding"
                enabled
            >  
            <ScrollView>
               
                <Logo />              
                <Separator />

                <View style={styles.viewsLijevo}>
                    <Text style={styles.text}>Email</Text>
                    <TextInput
                        style={{ height: 40 }}
                        placeholder="something@something.com"
                        secureTextEntry ={false}
                        onChangeText={(text) => this.setState({ email: text })}
                    />
                </View>

                <Separator />

                <View style={styles.viewsLijevo}>
                    <Text style={styles.text}>Password</Text>
                    <TextInput
                        style={{ height: 40 }}
                        placeholder=" "
                        secureTextEntry ={true}
                        onChangeText={(text) => this.setState({ password: text })}
                    />
                </View>
                <Separator/>
                <View style={{
                    flexDirection: "row"
                }}>
                    <TouchableOpacity style={{flex: 2 }} onPress={() => {Actions.Register()}}>
                        <Text style={{ textDecorationLine: 'underline', color: "#2d89ef"}}>Create Account</Text>
                    </TouchableOpacity>
                    <Button title="Sign in" style={{flex: 2 }} onPress={this.handleSignIn}/>
                </View>
                </ScrollView>
            </KeyboardAvoidingView > 
            
      );

    }
}
export default Login;