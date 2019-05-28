import React from "react";
import { StyleSheet, Text, View, Button, KeyboardAvoidingView, TouchableOpacity, ScrollView } from 'react-native';
import Separator from "./Separator";
import { Actions } from "react-native-router-flux";




const styles = StyleSheet.create({
  button: {
    flex: 5,
    
   
  
  },
  container: {
    padding: 10,
    justifyContent: 'flex-start',
    flexDirection: "column"
  },
});


class Informations extends React.Component {

    constructor() {
        super();
        this.state = {
          content: false
        }
      }
    
      componentHideAndShow = () => {
        this.setState(previousState => ({ content: !previousState.content }))
      }
    

    render() {
        return (        
           
          <View style={styles.container}>  
              <Button title={this.props.title} style={styles.button} onPress={this.componentHideAndShow} />
              {
                this.state.content ? <Text style={{marginTop: 5}}>  {this.props.text} </Text> : null
              }
           </View>      
        );
    }
}
 
export default Informations;
