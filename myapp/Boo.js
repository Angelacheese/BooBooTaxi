import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Animated,
  Text,
  Image,
  Dimensions
} from "react-native";
import LottieView from "lottie-react-native";

var { width, height } = Dimensions.get("window");

export default class Splash extends Component {
  static navigationOptions = {
    header: null
  };
  state = {
    logoOpacity: new Animated.Value(0),
    titleMarginTop: new Animated.Value(height / 2)
  };

  async componentDidMount() {
    this.animation.play();
    Animated.sequence([
      Animated.timing(this.state.logoOpacity, {
        toValue: 1,
        duration: 3000
      }),
      Animated.timing(this.state.titleMarginTop, {
        toValue: 10,
        duration: 5000
      })
    ]).start(() => {
      this.props.navigation.navigate("Home");
    });
  }

  resetAnimation = () => {
    this.animation.reset();
    this.animation.play();
  };
  render() {
    return (
      <View style={styles.container}>
        <Animated.View
          source={require("./tenor.gif")}
          style={{ ...styles.logo, opacity: this.state.logoOpacity }}
        >
          <LottieView
            ref={animation => {
              this.animation = animation;
            }}
            style={{
              width: 200,
              height: 200
            }}
            source={require("./3870-taxi.json")}
          />
        </Animated.View>
        <Animated.Text
          style={{ ...styles.title, marginTop: this.state.titleMarginTop, }}
        >
          Boo Boo Taxi
        </Animated.Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fddb92"
    //#001540
  },
  logo: {
    height: 200,
    width: 200,
    borderRadius: 200 / 2
  },
  title: {
    color: "#ccc",
    marginTop: 20,
    textAlign: "center",

    fontSize: 20
  }
 
});
