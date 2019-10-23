import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions
} from "react-native";

import MapContainer from "./containers/DriverHome-mapContainer";
import { Icon, Divider } from "react-native-elements";
var { width, height } = Dimensions.get("window");
export default class App extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: "B o o B o o",
    headerLeft: (
      <TouchableOpacity
        onPress={() => navigation.toggleDrawer()}
        style={{
          margin: 10
        }}
      >
        <Icon name="menu" color="#fddb92" />
      </TouchableOpacity>
    ),
    headerRight: (
      <TouchableOpacity
        style={{
          margin: 10
        }}
      >
        <Icon name="home" color="#fddb92" />
      </TouchableOpacity>
    )
  });
  render() {
    return (
      <View style={{ flex: 1 }} backgroundColor="#001540">
        <View style={{ flex: 8 }}>
          <MapContainer />
        </View>
        {/* <Divider style={{ backgroundColor: "#ccc", margin: 10 }} /> */}
        <View
          style={{
            flex: 2,
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
            margin: 10
          }}
        >
          <TouchableOpacity
            style={styles.personalBorder}
              onPress={() => this.props.navigation.navigate("DriverPackage1")}
          >
            <Icon name="face" color="#ccc" size={50} margin={15} />
            <Text style={{ color: "#ccc" }}>通知</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.personalBorder}
             onPress={() => this.props.navigation.navigate("DriverHistoryMap1")}
          >
            <Icon name="favorite" color="#ccc" size={50} margin={15} />
            <Text style={{ color: "#ccc" }}>乘客在哪裡</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.personalBorder}
             onPress={() => this.props.navigation.navigate("DriverMember1")}
          >
            <Icon name="person" color="#ccc" size={50} margin={15} />
            <Text style={{ color: "#ccc" }}>司機資訊</Text>
          </TouchableOpacity>
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
  personalBorder: {
    width: 120,
    height: 120,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    margin: 3,
    borderStyle: "dotted",
    borderColor: "white",
    borderWidth: 1
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
