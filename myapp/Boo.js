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
        toValue: 0.5,
        duration: 500
      }),
      Animated.timing(this.state.titleMarginTop, {
        toValue: 10,
        duration: 1000
      }),
      Animated.timing(this.state.logoOpacity, {
        toValue: 1,
        duration: 2000
      }),
    ]).start(() => {
   
      this.props.navigation.navigate("Login1");
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
              width: 300,
              height: 300
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
    height: 300,
    width: 300,
    borderRadius: 300 / 2,
  },
  title: {
    color: "gray",
    marginTop: 20,
    textAlign: "center",

    fontSize: 30
  }
 
});
