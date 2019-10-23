import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Image,
  StatusBar,
  ImageBackground
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import DatepickerTest from "./DatepickerTest";
class Member1 extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: "會員資料"
  });
  constructor(props) {
    super(props);
    this.state = {
      driver: "劉以豪",
      年資: 10,
      車子型號: "TOYOTA-WISH",
      可載客人數: 4,
      星級: 5,
      熟悉地: "台中",
      年齡: "31~40",
      車牌號碼: "RYU-0812",
      語言: "中文、英文",
      特色: "戶外達人",
      自我介紹: " "
    };
  }

  render() {
    return (
      <ScrollView style={{ flex: 1 }} backgroundColor="#001540">
        <ImageBackground
          style={{
            width: "100%",
            height: 200,
            justifyContent: "flex-end",
            alignItems: "center",
            borderBottomRightRadius: 200,
            borderBottomLeftRadius: 200,
            backgroundColor: "#9face6"
          }}
        >
          <Image
            source={require("./pic/[BestGuide7]ryu.jpg")}
            style={styles.circle}
          />
        </ImageBackground>

        <View
          style={{ flexDirection: "row", margin: 10, alignItems: "baseline" }}
        >
          <View>
            <Text style={styles.titleText}>{this.state.driver}</Text>
            <Text style={styles.titleText}>⭐⭐⭐⭐⭐</Text>
          </View>
        </View>

        <Text style={styles.text}>年資：{this.state.年資}</Text>
        <Text style={styles.text}>車牌號碼：{this.state.車牌號碼}</Text>
        <Text style={styles.text}>車子型號：{this.state.車子型號}</Text>
        <Text style={styles.text}>可載客人數：{this.state.可載客人數}</Text>
        <Text style={styles.text}>熟悉地：{this.state.熟悉地}</Text>
        <Text style={styles.text}>擅長語言：{this.state.語言}</Text>
        <Text style={styles.text}>特色：{this.state.特色}</Text>
        <Text style={styles.text}>自我介紹：{this.state.自我介紹}</Text>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center"
          }}
        >
          <TouchableOpacity style={styles.button}>
            <Text style={styles.text}>評價查看</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.text}>歷程記錄</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}
          onPress={() => this.props.navigation.navigate("GuidePackage1")}>
            <Text style={styles.text}>車導帶你玩</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center"
          }}
        >
          <TouchableOpacity style={styles.button}>
            <Text style={styles.text}>車導行事曆</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  circle: {
    top: 40,
    width: 200,
    height: 200,
    borderRadius: 100
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fddb92",
    margin: 10
  },
  text: {
    color: "white",
    margin: 10
  },
  button: {
    borderWidth: 0.5,
    borderColor: "#fddb92",
    borderRadius: 20,
    width: 110,
    height: 35,
    margin: 5,
    justifyContent: "center",
    alignItems: "center"
  },
  textInput: {
    height: 30,
    width: 100,
    borderColor: "#ccc",
    borderStyle: "dashed",
    borderWidth: 0.5,
    color: "#ccc"
  }
});

export default Member1;
