import React, { Component } from "react";
import {
  Text,
  Button,
  View,
  StyleSheet,
  Image,
  TouchableOpacity
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import LottieView from "lottie-react-native";
class Bestguide7 extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: "聊天室"
  });
  constructor(props) {
    super(props);
    this.state = {
      passenger: "IU李知恩",
      driver: "劉以豪"
    };
  }
  async componentDidMount() {
    this.animation.play();
  }

  resetAnimation = () => {
    this.animation.reset();
    this.animation.play();
  };

  render() {
    return (
      <View flex={1} backgroundColor="#001540">
        <View style={{ flexDirection: "row" }}>
          <Image
            source={require("./pic/[Member]IU.jpg")}
            style={styles.circle}
          />
          <LottieView
            ref={animation => {
              this.animation = animation;
            }}
            style={{
              top: 10,
              width: 60,
              height: 60
            }}
            source={require("./4276-vpn-connection-animation.json")}
          />

          <Image
            source={require("./pic/[BestGuide7]ryu.jpg")}
            style={{ ...styles.circle, left: 110 }}
          />
        </View>

        <View style={{ alignItems: "center" }}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Chat")}
          >
            <Text style={styles.buttonNext}>與司機聯絡</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Home")}
          >
            <Text style={styles.buttonNext}>回首頁</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  circle: {
    margin: 10,
    width: 100,
    height: 100,
    borderRadius: 50
  },
  titleText: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#fddb92",
    margin: 10
  },
  text: {
    color: "white",
    margin: 10
  },
  buttonNext: {
    fontSize: 20,
    color: "#fddb92",
    margin: 10
  }
});
export default Bestguide7;
