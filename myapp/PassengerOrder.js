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
export default class PassengerOrder extends React.Component {
  static navigationOptions = ({ navigation }) => ({

    title: "訂單"
  });
  constructor(props) {
    super(props);
    this.state = {
      訂單日期: "2019/10/18",
      passenger: "IU李知恩",

      上車地點: "長庚大學",
      旅遊地點: "台中",
      搭乘人數: "3",
      預約日期: "2019/10/31 10:00",
      預約天數: "4",

      driver: "劉以豪",
      星級: 5,
      熟悉地: "台中",
      年齡: "31~40",
      年資: 10,
      車牌號碼: "RYU-0812",
      車子型號: "TOYOTA-WISH",
      語言: "中文、英文",
      特色: "戶外達人",
      備註: " "
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
        <View
          style={{
            flexDirection: "row",
            alignItem: "center",
            justifyContent: "center",
         
          }}
        >
          <LottieView
            ref={animation => {
              this.animation = animation;
            }}
            style={{
              width: 70,
              height: 70,
              left: 5
            }}
            source={require("./5496-new-mail.json")}
          />
          <Text style={styles.titleText}>最佳車導訂單資訊</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Image
            source={require("./pic/[BestGuide7]ryu.jpg")}
            style={styles.circle}
          />
          <Text style={styles.Titletext}> {this.state.driver}</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <View
            style={{
              margin: 10
            }}
          >
            <Text style={styles.text}>訂單日期: {this.state.訂單日期}</Text>
            <Text style={styles.text}>passenger: {this.state.passenger}</Text>
            <Text style={styles.text}>上車地點: {this.state.上車地點}</Text>
            <Text style={styles.text}>旅遊地點: {this.state.旅遊地點}</Text>
            <Text style={styles.text}>搭乘人數: {this.state.搭乘人數}</Text>
            <Text style={styles.text}>預約日期: {this.state.預約日期}</Text>
            <Text style={styles.text}>預約天數: {this.state.預約天數}</Text>
          </View>
          <View
            style={{
             
              margin: 10
            }}
          >
            <Text style={styles.text}>司機資訊</Text>
            <Text style={styles.text}>driver: {this.state.driver}</Text>
            <Text style={styles.text}>星級: {this.state.星級}⭐⭐⭐⭐⭐</Text>
            <Text style={styles.text}>熟悉地: {this.state.熟悉地}</Text>
            <Text style={styles.text}>年齡: {this.state.年齡}</Text>
            <Text style={styles.text}>年資: {this.state.年資}</Text>
            <Text style={styles.text}>車牌號牌: {this.state.車牌號碼}</Text>
            <Text style={styles.text}>車牌型號: {this.state.車子型號}</Text>
            <Text style={styles.text}>語言: {this.state.語言}</Text>
            <Text style={styles.text}>特色: {this.state.特色}</Text>
            <Text style={styles.text}>備註: {this.state.備註}</Text>
          </View>
        </View>
        <View style={{ alignItems: "center" }}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Chat")}
          >
            <Text style={styles.buttonNext}>與司機聯絡</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("PassengerHome")}
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
