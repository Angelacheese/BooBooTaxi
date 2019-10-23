import React, { Component } from "react";
import {
  Dimensions,
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  Button,
  View,
  Animated,
  TouchableOpacity,
  Alert
} from "react-native";

import MapContainer from "./containers/PassengerBestGuide-mapContainer";
var { width, height } = Dimensions.get("window");
export default class App extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: "最佳車導"
  });
  render() {
    return (
      <View style={{ flex: 1 }} backgroundColor="#001540">
        <View style={{ flex: 20 }}>
          <MapContainer />
        </View>
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <View
            style={{
              bottom: 100,
              backgroundColor: "white",
              alignItems: "center",
              justifyContent: "center",
              borderWidth: 0.5,
              borderColor: "#fddb92",
              margin: 5,
              height: height / 10,
              width: width / 3
            }}
          >
            <TouchableOpacity
             onPress={() => this.props.navigation.navigate("BestGuide2")}>
              <Text style={styles.buttonContainer}>下一步</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },

  //////
  buttonContainer: {
    fontSize: 20,
    alignContent: "center",
    justifyContent: "center",
    color: "#fddb92"
  },

  text: {
    color: "#ccc",
    fontSize: 15,
    margin: 10
  }
});
