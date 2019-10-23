import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Alert,
  Dimensions
} from "react-native";
import { Constants } from "expo";
import MapContainer from "./containers/PassengerInmediateCall-mapContainer";
var { width, height } = Dimensions.get("window");
export default class App extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: "即時叫車"
  });
  render() {
    return (
      <View style={{ flex: 1 }} backgroundColor="#001540">
        <View style={{ flex: 20 }}>
          <MapContainer />
        </View>
        <View style={{flex:1, alignItems: "center", justifyContent: "center" }}>
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
            <TouchableWithoutFeedback
              onPress={() => {
                Alert.alert("提示", "是否確定叫車", [
                  {
                    text: "Cancle",
                    onPress: () => console.log("Cancel Pressed")
                  },
                  {
                    text: "確定",
                    onPress: () => this.props.navigation.navigate("WaitingPage")
                  }
                ]);
              }}
            >
              <Text style={styles.buttonContainer}>預約叫車</Text>
            </TouchableWithoutFeedback>
          </View>
          {/* <View>
          <Text></Text>
          </View> */}
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
