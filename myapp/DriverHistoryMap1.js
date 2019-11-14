import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity
} from "react-native";
import MapContainer from "./containers/PassengerBestGuide-mapContainer";
import { BarChart } from "react-native-chart-kit";
import { Dropdown } from "react-native-material-dropdown";
var { width, height } = Dimensions.get("window");
export default class ChartsSample extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "歷程記錄"
  });
  _Times() {
    const time = [
      {
        title: "過去一周",
        value: "過去一周"
      },
      {
        title: "過去一個月",
        value: "過去一個月"
      },
      {
        title: "過去一年",
        value: "過去一年"
      },

      { title: "取消", value: " " }
    ];
    return (
      <View margin={5}>
        <Dropdown
          label="載客時間"
          data={time}
          //  onChangeText={title => this._Ts(title)}
          textColor="#ccc"
          baseColor="white"
          selectedItemColor="powderblue"
        />
      </View>
    );
  }
  render() {
    return (
      <View style={{ backgroundColor: "#001540", flex: 1 }}>
        {this._Times()}
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
              onPress={() =>
                this.props.navigation.navigate("DriverHistoryMap2")
              }
            >
              <Text style={styles.buttonContainer}>下一步</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
