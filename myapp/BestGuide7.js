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
    title: "訂單"
  });
  constructor(props) {
    super(props);
    this.state = {
      passenger: "IU李知恩",
      driver: "劉以豪",
      星級: 5,
      熟悉地: "台中",
      年齡: "31~40",
      年資: 10,
      車牌號碼: "RYU-0812",
      車子型號: "TOYOTA-WISH",
      語言: "中文、英文",
      特色: "戶外達人"
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
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: "95%"
          }}
        >
          <Text style={styles.text}>乘客 {this.state.passenger}</Text>
          <Text style={styles.text}>司機 {this.state.driver}</Text>
        </View>
        <View
          style={{
            alignItems: "center",
            margin: 10
          }}
        >
          <Text style={styles.titleText}>司機資訊</Text>
          <Text style={styles.text}>姓名: {this.state.driver}</Text>
          <Text style={styles.text}>星級:⭐⭐⭐⭐⭐</Text>
          <Text style={styles.text}>熟悉地: {this.state.熟悉地}</Text>
          <Text style={styles.text}>年齡: {this.state.年齡}</Text>
          <Text style={styles.text}>年資: {this.state.年資}</Text>
          <Text style={styles.text}>車牌號牌: {this.state.車牌號碼}</Text>
          <Text style={styles.text}>車牌型號: {this.state.車子型號}</Text>
          <Text style={styles.text}>擅長語言: {this.state.語言}</Text>
          <Text style={styles.text}>特色: {this.state.特色}</Text>
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
