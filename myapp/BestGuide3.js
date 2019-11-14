import React, { Component } from "react";
import { StyleSheet, Text, Button, View, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import LottieView from "lottie-react-native";
import { Icon, Divider } from "react-native-elements";
import styles from "./Stylesheet";

export default class BestGuide3 extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "最佳車導"
  });

  render() {
    return (
      <View style={styles.container1}>
        <TouchableOpacity
          style={styles.button1}
          onPress={() => this.props.navigation.navigate("BestGuide4")}
        >
          <Icon name="label" color="#fddb92" />
          <Text style={styles.text1}>依條件選車導</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button1}
          onPress={() => this.props.navigation.navigate("BestGuide5")}
        >
          <Icon name="crop" color="#fddb92" />
          <Text style={styles.text1}>依行程選車導</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
