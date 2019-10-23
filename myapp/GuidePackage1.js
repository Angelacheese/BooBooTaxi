import React, { Component } from "react";
import { Icon } from "react-native-elements";
import {
  Animated,
  Easing,
  StyleSheet,
  Text,
  Image,
  View,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  Platform
} from "react-native";
import SortableList from "react-native-sortable-list";
import Timeline from "react-native-timeline-listview";
const window = Dimensions.get("window");

export default class Basic extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "歷程記錄"
  });
  constructor() {
    super();
    this.data = [
      { time: "09:00", title: "東海大學" },
      { time: "10:45", title: "東海乳品小棧" },
      { time: "12:00", title: "磐頂教堂" },
      { time: "14:00", title: "坪頂番薯姨" },
      { time: "16:30", title: "鰲峰山公園" },
      { time: "16:30", title: "大甲鎮瀾宮" },
      { time: "16:30", title: "鐵砧山風景特定區" },
      { time: "16:30", title: "花崗松林餐廳" }
    ];
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "#001540" }}>
        <View style={{ flexDirection: "row", margin: 10 }}>
          <Image
            source={require("./pic/[BestGuide7]ryu.jpg")}
            style={styles.circle}
          />
          <View>
            <Text
              style={{
                color: "brown",
                fontSize: 30,
                textShadowColor: "gray",
                textShadowRadius: 3,
                textAlignVertical: "bottom"
              }}
            >
              鍾嵐心
            </Text>
            <Text>⭐️⭐️⭐️⭐️⭐️</Text>

            <Text>主打:</Text>
            <Text>費用:720元/人</Text>
          </View>
        </View>
        <Timeline
          data={this.data}
          circleSize={20}
          circleColor="rgb(45,156,219)"
          lineColor="rgb(45,156,219)"
          innerCircle={"dot"}
          timeStyle={{
            textAlign: "center",
            //  backgroundColor: '#ff9797',
            color: "white"
          }}
          titleStyle={{ color: "white", margin: 10 }}
          options={{
            style: { margin: 50 }
          }}
        />
        <View>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.text}>我要預約</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "white"
  },

  contentContainer: {
    width: 300
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

  row: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    height: 50,
    flex: 1,
    margin: 5
  },
  circle: {
    width: 150,
    height: 150,
    borderRadius: 75
  },
  text: {
    fontSize: 20,
    color: "#fff"
  }
});
