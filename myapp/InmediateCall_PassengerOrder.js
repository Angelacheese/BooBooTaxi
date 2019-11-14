import React, { Component } from "react";
import {
  Text,
  Button,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
  Animated,
  ScrollView
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import LottieView from "lottie-react-native";
import { Icon } from "react-native-elements";
const SCREEN_WIDTH = Dimensions.get("window").width;
const xOffset = new Animated.Value(0);
//const num = new Array(6).keys

export default class PassengerOrder extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: "即時叫車訂單資訊",
    headerRight: <Icon name="mail" color="#ccc" margin={10} />
  });

  state = {
    訂單日期: "2019/10/18",
    passenger: "IU李知恩",
    上車地點: "長庚大學",
    搭乘人數: "3",
    預約日期: "2019/10/31 10:00",
    driver: "劉以豪",
    星級: 5,
    車牌號碼: "RYU-0812",
    車子型號: "TOYOTA-WISH",
    時間:"5"
  };

  render() {
    return (
      <ScrollView style={{ flex: 1 }} backgroundColor="#001540">
        <View style={{ flexDirection: "row" }}>
          <Image
            source={require("./pic/[BestGuide7]ryu.jpg")}
            style={styles.circle}
          />
          <Text style={styles.text}>
            司機資訊 {this.state.driver}⭐⭐⭐⭐⭐
          </Text>
        </View>
        <View
          style={{
            margin: 10,
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Text style={styles.text}>車牌號碼: {this.state.車牌號碼}</Text>
          <Text style={styles.text}>車子型號: {this.state.車子型號}</Text>
          <Text style={styles.text}>{this.state.時間}分鐘後到達</Text>
        </View>

        <View style={{ alignItems: "center" }}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Main")}
          >
            <Text style={styles.buttonNext}>與司機聯絡</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("PassengerHome")}
          >
            <Text style={styles.buttonNext}>回首頁</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
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
  },
  scrollView: {
    flexDirection: "row"
  },
  scrollPage: {
    width: SCREEN_WIDTH,
    padding: 20
  },
  screen: {
    height: 300,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "white"
  },
  text2: {
    fontSize: 20
  }
});
