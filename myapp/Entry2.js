import React, { Component, PropTypes } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions
} from "react-native";
import { Icon, Divider } from "react-native-elements";
const window = Dimensions.get("window");
import styles from "./Stylesheet";

export default class LogIn extends Component {
  static propTypes = {};
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.image1}
          blurRadius={10}
          source={require("./pic/[Entry2]cover.jpg")}
        />
        <Text
          style={{
            fontSize: 50,
            color: "#fff",
            fontWeight: "bold"
          }}
        >
          Boo Boo Taxi
        </Text>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row"
          }}
        >
          <TouchableOpacity
            style={styles.button3}
            onPress={() => this.props.navigation.navigate("AuthLoading")}
          >
            <Icon name="person" color="#fff" size={80} />
            <Text style={styles.text3}>乘客端入口</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button3}
            onPress={() => this.props.navigation.navigate("DriverSignIn")}
          >
            <Icon name="drive-eta" color="#fff" size={80} />
            <Text style={styles.text3}>司機端入口</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
