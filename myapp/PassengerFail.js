import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Animated,
  ScrollView,
  Text,
  Image,
  Button,
  Dimensions
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
var { width, height } = Dimensions.get("window");
import LottieView from "lottie-react-native";

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
      this.props.navigation.navigate("PassengerOrder");
    });
  }

  resetAnimation = () => {
    this.animation.reset();
    this.animation.play();
  };

  render() {
    return (
      <View style={styles.container}>
        <LinearGradient
          colors={["#001540", "#051c4a", "#072970", "#ccc"]}
          style={{
            width: width,
            height: height,

            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Animated.Text
            style={{ ...styles.title, opacity: this.state.logoOpacity }}
          >
            預約失敗
          </Animated.Text>

          <LottieView
            ref={animation => {
              this.animation = animation;
            }}
            style={{
              width: 200,
              height: 200
            }}
            source={require("./7481-banana-boy.json")}
          />

          <Button
            title="重新預約"
          />

          <Button
            title="回主頁"
          />
        </LinearGradient>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  logo: {
    height: 60,
    width: 200
  },

  title: {
    color: "#ccc",
    marginTop: 20,
    textAlign: "center",

    fontSize: 20
  }
});