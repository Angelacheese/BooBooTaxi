import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Alert
} from "react-native";
import { Constants } from "expo";
import MapContainer from "./containers/PassengerBestGuide-mapContainer";

export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }} backgroundColor="#001540">
        <MapContainer />

     
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
    backgroundColor: "#ccc",
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
