import React from "react";
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';


const styles = StyleSheet.create({
    viewsLijevo:{
        textAlign: "left",
        backgroundColor: "#efeff2",
        padding: 10,
        alignSelf: "stretch"
    }

});
class InputTexts extends React.Component {

    render() {
        return (
            <View style={styles.viewsLijevo}>
                <Text style={this.props.stilTekst}>{this.props.label}</Text>
                <TextInput
                    style={{ height: 40 }}
                    placeholder={this.props.placeholder}
                    secureTextEntry={this.props.secure}
                />
            </View>
        );
    }
}

export default InputTexts;