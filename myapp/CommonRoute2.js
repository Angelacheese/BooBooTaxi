import React, { Component } from "react";
import MapContainer from "./containers/map-container";
import {
  Alert,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View
} from "react-native";

export default class App extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: "常用路線"
  });
  render() {
    return (
      <View style={{ flex: 1 }} backgroundColor="#001540">
        <View style={{ flex: 1, flexDirection: "row" }}>
          <Text style={styles.text}>Estimated Time: 1hrs</Text>
          <Text style={styles.text}>Estimated Distance: 100km</Text>
        </View>
        {/* 
              <View style={{ flexDirection: "row", backgroundColor: "white" }}>
                <Text style={styles.text}>目的地經度：124.33</Text>
                <Text style={styles.text}>目的地緯度：24.3</Text>
              </View>
               */}
        <View style={{ flex: 9 }}>
          <MapContainer />
        </View>
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <TouchableWithoutFeedback
            style={{ backgroundColor: "powderblue" }}
            onPress={() => {
              Alert.alert("提示", "是否確定叫車", [
                {
                  text: "取消",
                  onPress: () => console.log("Cancel Pressed"),
                  style: "cancel"
                },
                {
                  text: "確定",
                  onPress: () => this.props.navigation.navigate("WaitingPage")
                }
              ]);
            }}
          >
            <View>
              <Text style={styles.buttonContainer}> 預約叫車 </Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  //////
  buttonContainer: {
    fontSize: 20,
    color: "#fddb92"
  },

  text: {
    color: "#ccc",
    fontSize: 15,
    margin: 10
  }
});
