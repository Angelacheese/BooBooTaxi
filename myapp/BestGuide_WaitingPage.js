import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Animated,
  ScrollView,
  Text,
  Image,
  Dimensions
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import LottieView from "lottie-react-native";
import styles from "./Stylesheet";

export default class WaitingPage extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "等待中..."
  });
  state = {
    logoOpacity: new Animated.Value(0)
  };

  async componentDidMount() {
    this.animation.play();
    Animated.sequence([
      Animated.timing(this.state.logoOpacity, {
        toValue: 1,
        duration: 8500
      })
    ]).start(() => {
      this.props.navigation.navigate("BestGuide_PassengerOrder");
    });
  }

  resetAnimation = () => {
    this.animation.reset();
    this.animation.play();
  };

  render() {
    return (
      <View style={styles.container1}>
        <LinearGradient
          colors={["#001540", "#072970", "#330867", "#764ba2"]}
          style={styles.linearGradient}
        >
          <LottieView
            ref={animation => {
              this.animation = animation;
            }}
            style={{
              width: 200,
              height: 200
            }}
            source={require("./301-search-location.json")}
          />

          <Animated.Text
            style={{
              color: "#ccc",
              marginTop: 20,
              textAlign: "center",
              fontSize: 20,
              opacity: this.state.logoOpacity
            }}
          >
            正在尋找您的司機
          </Animated.Text>
        </LinearGradient>
      </View>
    );
  }
}
