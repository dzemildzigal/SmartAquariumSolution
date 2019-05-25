import React from "react";
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
    bijeliSeparatori: {
        color: "#fff"
    }
});
class Separator extends React.Component {

    render() {
        return (
            <View >
                <Text style={styles.bijeliSeparatori}>sdvnkd</Text>
            </View>
        );
    }
}

export default Separator;