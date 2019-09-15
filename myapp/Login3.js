import React from "react";
import {
  Dropdown,
  StyleSheet,
  Text,
  TextInput,
  Button,
  View,
  TouchableOpacity
} from "react-native";

class Login2 extends React.Component {
    state= {
        name: '',
        password:''
      }
  render() {



    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <View style={{ flexDirection: "row" }}>
       
          
        </View>
     
      </View>
    );
  }
  render(){

  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },

  buttonContainer: {
    margin: 30,
    backgroundColor: "black"
  }
});
const buttons = StyleSheet.create({
  button: {
    marginBottom: 10,
    backgroundColor: "transparent",
    borderColor: "white",
    borderWidth: 1,
    width: 100,
    height: 50,
    alignItems: "center",
    justifyContent: "center"
  },
  buttontext: {
    color: "white",
    fontSize: 15
  }
});

export default Login2;
