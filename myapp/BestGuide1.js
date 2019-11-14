import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import styles from "./Stylesheet";
import MapContainer from "./containers/PassengerBestGuide-mapContainer";

export default class App extends React.Component {
  static navigationOptions = {
    title: "最佳車導"
  };
  render() {
    return (
      <View style={styles.container1}>
        <View style={{ flex: 20 }}>
          <MapContainer />
        </View>
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <View
            style={{
              bottom: 100,
              alignItems: "center",
              justifyContent: "center",
              margin: 5
            }}
          >
            <TouchableOpacity
              style={styles.button2}
              onPress={() => this.props.navigation.navigate("BestGuide2")}
            >
              <Text style={styles.text4}>下一步</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
