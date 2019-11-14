import React from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  Animated,
  ScrollView
} from "react-native";
import { Icon } from "react-native-elements";
import styles from "./Stylesheet";
const SCREEN_WIDTH = Dimensions.get("window").width;
const xOffset = new Animated.Value(0);
//const num = new Array(6).keys

const transitionAnimation = index => {
  return {
    transform: [
      { perspective: 800 },
      {
        scale: xOffset.interpolate({
          inputRange: [
            (index - 1) * SCREEN_WIDTH,
            index * SCREEN_WIDTH,
            (index + 1) * SCREEN_WIDTH
          ],
          outputRange: [0.25, 1, 0.25]
        })
      },
      {
        rotateX: xOffset.interpolate({
          inputRange: [
            (index - 1) * SCREEN_WIDTH,
            index * SCREEN_WIDTH,
            (index + 1) * SCREEN_WIDTH
          ],
          outputRange: ["45deg", "0deg", "45deg"]
        })
      },
      {
        rotateY: xOffset.interpolate({
          inputRange: [
            (index - 1) * SCREEN_WIDTH,
            index * SCREEN_WIDTH,
            (index + 1) * SCREEN_WIDTH
          ],
          outputRange: ["-45deg", "0deg", "45deg"]
        })
      }
    ]
  };
};

export default class PassengerOrder extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: "最佳車導訂單資訊",
    headerRight: <Icon name="mail" color="#ccc" margin={10} />
  });

  state = {
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

  render() {
    const num = [0, 1, 2, 3, 4, 5];
    return (
      <ScrollView style={styles.container1}>
        <View style={{ flexDirection: "row" }}>
          <Image
            source={require("./pic/[BestGuide7]ryu.jpg")}
            style={styles.circle}
          />
          <Text style={styles.text1}>
            司機資訊 {this.state.driver}⭐⭐⭐⭐⭐
          </Text>
        </View>
        <View
          style={{
            margin: 10
          }}
        >
          <Text style={styles.text1}>熟悉地: {this.state.熟悉地}</Text>
          <Text style={styles.text1}>年齡: {this.state.年齡}</Text>
          <Text style={styles.text1}>年資: {this.state.年資}</Text>
          <Text style={styles.text1}>車牌號碼: {this.state.車牌號碼}</Text>
          <Text style={styles.text1}>車牌型號: {this.state.車牌型號}</Text>
          <Text style={styles.text1}>語言: {this.state.語言}</Text>
          <Text style={styles.text1}>特色: {this.state.特色}</Text>
          <Text style={styles.text1}>備註: {this.state.備註}</Text>
        </View>
        <Animated.ScrollView
          scrollEventThrottle={16}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: xOffset } } }],
            { useNativeDriver: true }
          )}
          horizontal
          pagingEnabled
          style={{ flexDirection: "row" }}
        >
          {num.map((value, index) => {
            return (
              <View style={styles.slide} key={index}>
                <Screen text={value} index={value} />
              </View>
            );
          })}
        </Animated.ScrollView>

        <View style={{ alignItems: "center" }}>
          <TouchableOpacity
            style={styles.button1}
            onPress={() => this.props.navigation.navigate("Main")}
          >
            <Text style={styles.text1}>與司機聯絡</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button1}
            onPress={() => this.props.navigation.navigate("PassengerHome")}
          >
            <Text style={styles.text1}>回首頁</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

const Screen = props => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ width: SCREEN_WIDTH, padding: 20 }}>
        <Animated.View
          style={
            ({
              height: 300,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 10,
              backgroundColor: "white"
            },
            [transitionAnimation(props.index)])
          }
        >
          <View
            style={{
              margin: 10
            }}
          >
            <Text style={{ fontSize: 20 }}>訂單日期: </Text>
            <Text style={{ fontSize: 20 }}>passenger: </Text>
            <Text style={{ fontSize: 20 }}>上車地點: </Text>
            <Text style={{ fontSize: 20 }}>旅遊地點: </Text>
            <Text style={{ fontSize: 20 }}>搭乘人數: </Text>
            <Text style={{ fontSize: 20 }}>預約日期: </Text>
            <Text style={{ fontSize: 20 }}>預約天數: </Text>
          </View>
        </Animated.View>
      </View>
    </View>
  );
};
