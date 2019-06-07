import React from "react";
import { Button, View, Text, StyleSheet, Dimensions, ScrollView, KeyboardAvoidingView, TextInput, Slider } from 'react-native';
import Separator from './Separator';
import NumericInput from 'react-native-numeric-input'
import Logo from './Logo';
import axios from 'axios';
import { Actions } from "react-native-router-flux";


const styles = StyleSheet.create({

    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: "column",
        padding: 10,
        marginTop: 10
    },
    button: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'stretch'
    },
    sliders: {
        width: 250,
        flexDirection: "column",
    },
    singleSlider: {
        marginTop: 10
    },
    middle: {
        alignItems: "center"
    },
    labele: {
        fontSize: 17,
        color: "#6F6F6F"
    },
    labelSmall: {
        fontSize: 12,
        color: "#A1A1A1",
        fontStyle: "italic"
    }
});


class SetValues extends React.Component {
    constructor() {
        super();
        this.state = {
            waterLevel: 50,
            foodIntake: 0,
            temp: 25,
            phValue: null
        }
    }
    handleSliderChange() {

       

    }

    handleSubmit = event => {
        event.preventDefault();
        axios.post('http://192.168.16.8:8000', { //dodati sa servera
            T: this.state.temp, //ispraviti po pythonu da bude T='...'
            N: this.state.waterLevel, //ispraviti po pythonu da bude N='...'
            F: this.state.foodIntake
          },
          {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        })
          .then(function (response) {
           // console.log(response);
          })
          .catch(function (error) {
           // console.log(error);
          });
          Actions.MainPage();
    }

    render() {
        console.log(this.state);
        return (
            <ScrollView >
                    <View style={styles.container}>
                        <Logo />
                        <Separator />
                        <View style={styles.sliders}>
                            <View>
                                <Text style={styles.labele}>Water Level</Text>
                                <Text style={styles.labelSmall}>Water level is measured in percentages according to the aquarium height.</Text>
                                <Slider maximumValue={75} minimumValue={50} step={5} value={this.state.waterLevel} style={styles.singleSlider}
                                    onValueChange={(value) => this.setState({ waterLevel: value })} />
                                <Separator/>
                                <Text style={styles.labele}>Percentage: {this.state.waterLevel}% </Text>
                            </View>
                            <Separator />
                            <View>
                                <Text style={styles.labele}>Food</Text>
                                <Text style={styles.labelSmall}>This section determines how many times the fish will be fed in one day. The aquarium will dose up the quantity of food accoringly.</Text>
                                <Slider maximumValue={1} minimumValue={0} step={1} value={this.state.foodIntake} style={styles.singleSlider}
                                    onValueChange={(value) => this.setState({ foodIntake: value })} />
                                    <Separator/>
                                <Text style={styles.labele}>Feeding times: {this.state.foodIntake}</Text>
                            </View>
                            <Separator />
                            <View>
                                <Text style={styles.labele}>Aquarium temperature</Text>
                                <Text style={styles.labelSmall}>By setting the temperature in Celsius the aquarium is able to maintain it so the fish are comfortable.</Text>
                                <Slider maximumValue={30} minimumValue={20} step={1} value={this.state.temp} style={styles.singleSlider} 
                                onValueChange={(value)=>this.setState({temp:value})} />
                                <Separator/>
                                <Text style={styles.labele}>Temperature: {this.state.temp}°C</Text>
                            </View>
                        </View>
                        <Separator/>
                        <View style={styles.button}>
                            <Button title="Set values" onPress={this.handleSubmit}></Button>
                        </View>
                    </View>
            </ScrollView>
                );
            }
        }
        
export default SetValues;