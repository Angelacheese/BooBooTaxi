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
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <View style={styles.buttonContainer}>
            <TouchableWithoutFeedback
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
              <Text
                style={{
                  fontSize: 20,
                  color: "#fff"
                }}
              >
                預約叫車
              </Text>
            </TouchableWithoutFeedback>
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
    bottom: 100,
    height: 50,
    borderWidth: 2,
    backgroundColor: "#3b5998",
    borderColor: "#fff",
    justifyContent: "center",
    alignItems: "center",

    margin: 5,
    width: 200,
    borderRadius: 30
  },

  text: {
    color: "#ccc",
    fontSize: 15,
    margin: 10
  }
});
