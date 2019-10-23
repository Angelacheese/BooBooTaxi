import React, { Component } from "react";
import { StyleSheet, View, Animated, Dimensions } from "react-native";

var { width, height } = Dimensions.get("window");

export default class Success extends Component {
  state = {
    logoOpacity: new Animated.Value(0)
  };

  async componentDidMount() {
    Animated.sequence([
      Animated.timing(this.state.logoOpacity, {
        toValue: 1,
        duration: 3000
      })
    ]).start(() => {
      this.props.navigation.navigate("DriverHome");
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Animated.Image
          source={require("./success.gif")}
          style={{ ...styles.logo, opacity: this.state.logoOpacity }}
        ></Animated.Image>
        <Animated.Text
          style={{ ...styles.title, opacity: this.state.logoOpacity }}
        >
          註冊成功
          {"\r\n"}歡迎使用BooBooTaxi
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
    backgroundColor: "#001540"
  },
  logo: {
    height: 200,
    width: 200,
    borderRadius: 200 / 2
  },

  title: {
    color: "white",
    marginTop: 20,
    textAlign: "center",
    width: 400,
    fontSize: 20
  }
});
