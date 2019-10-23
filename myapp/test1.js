import React, { Component } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo";
export default class _TouchableOpacity extends Component {
  render() {
    return <TouchableOpacity style={styles.button}/>;
  }
}

const styles = StyleSheet.create({
  button: {
    borderWidth: 0.5,
    borderColor: "#fddb92",
    borderRadius: 20,
    width: 110,
    height: 35,
    margin: 5,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    color: "white",
    margin: 10
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fddb92",
    margin: 10
  },
  border: {
    justifyContent: "space-between",
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 5,
    margin: 5,
    width: 325,
    height: 150
  }
});
