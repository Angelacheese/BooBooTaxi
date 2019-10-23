import React, { Component } from "react";
import { Icon } from "react-native-elements";
import {
  Animated,
  Easing,
  StyleSheet,
  Text,
  Image,
  View,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  Platform
} from "react-native";
import SortableList from "react-native-sortable-list";

const window = Dimensions.get("window");

export default class Basic extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "歷程記錄"
  });

  state = {};

  render() {
    return (
      <View style={{ backgroundColor: "#001540", flex: 1 }}>
       
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "white"
  },

  contentContainer: {
    width: 300
  },
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

  row: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    height: 50,
    flex: 1,
    margin: 5
  },
  circle: {
    top: 40,
    width: 200,
    height: 200,
    borderRadius: 100
  },
  text: {
    fontSize: 20,
    color: "#222222"
  }
});
