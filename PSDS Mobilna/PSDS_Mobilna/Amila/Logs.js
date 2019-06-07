import React from "react";
import { Button, View, Text, StyleSheet, Dimensions, ScrollView } from 'react-native';
import Informations from './Informations';
import Separator from './Separator';
import AccountSettings from './AccountSettings';
import { Actions } from "react-native-router-flux";
import axios from 'axios';

const styles = StyleSheet.create({

    account: {
        position: 'absolute'
    },
    glavni: {
        alignItems:"stretch",
        flexDirection:"column"
        
    }
});



class Logs extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          data: '',
        }
      }

    componentDidMount() {
        axios.get('http://192.168.16.8:8000') //dodati sa servera
        .then(response => {
          this.setState({data: response.data});
        })
        .catch(error => {
          console.log("greska naka lol");
        });
      }

    render() {
        console.log(this.state.data);
        var foodText;
        let waterText = "Current water level in the tank is " + this.state.data.Nivo;
        if(this.state.data.F)  foodText = "The fish have been fed ";
        else foodText = "The fish haven't been fed ";
        let tempText = "Current temperature in the tank is " + this.state.data.Temperatura + " °C";

        return (

            <View style={styles.glavni} >
                <Separator/>
                <View >
                    <Informations key={0} title="Water Level" text= {waterText}> </Informations>
                    <Separator />
                    <Informations key={1} title="Food Intake" text={foodText}></Informations>
                    <Separator />
                    <Informations key={2} title="Temprature" text={tempText}></Informations>
                    <Separator />
                    <Informations key={3} title="Ph Level" text="Comming soon!!!"></Informations>
                    <View style={{ flexDirection: 'row-reverse', padding: 10 }}>
                        <Button title="Set values" style={{ flex: 2 }} onPress={() => { Actions.SetValues() }} />
                    </View>
                    </View>

            </View>

        );
    }
}

export default Logs;