import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Divider } from "react-native-elements";
class Member extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: "會員專區"
  });
  state = {
    line: 10
  };
  _lineAnimation() {
    this.setState({
      line: 100
    });
  }
  render() {
    return (
      <View>
        <LinearGradient
          colors={["#001540", "#051c4a", "#072970", "#ccc"]}
          style={{
            width: "100%",
            height: "100%"
          }}
        >
          <View
            style={{
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Image
              margin={10}
              source={require("./pic/[Member]IU.jpg")}
              style={styles.circle}
            />
            <Text>user name</Text>
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate("Member1")}
          >
            <Text style={styles.text}>會員資料</Text>
          </TouchableOpacity>
          <Divider style={{ backgroundColor: "#ccc", margin: 10 }} />
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate("Favorite")}
          >
            <Text style={styles.text}>我的收藏</Text>
          </TouchableOpacity>
          <Divider style={{ backgroundColor: "#ccc", margin: 10 }} />
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate("Rating")}
          >
            <Text style={styles.text}>我的評價</Text>
          </TouchableOpacity>
          <Divider style={{ backgroundColor: "#ccc", margin: 10 }} />
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate("HistoryRoute1")}
          >
            <Text style={styles.text}>歷史路線</Text>
          </TouchableOpacity>
          <Divider style={{ backgroundColor: "#ccc", margin: 10 }} />
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate("CommonRoute1")}
          >
            <Text style={styles.text}>常用路線</Text>
          </TouchableOpacity>
          <Divider style={{ backgroundColor: "#ccc", margin: 10 }} />
          <TouchableOpacity style={styles.button}>
            <Text style={styles.text}>會員隱私與權益說明</Text>
          </TouchableOpacity>

          <View
            style={{
              marginTop: 30,
              flexDirection: "row",
              width: "100%",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <TouchableOpacity
              style={[buttons.button, { backgroundColor: "brown" }]}
            >
              <Text>想不到?</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[buttons.button, { backgroundColor: "brown" }]}
            >
              <Text>登出</Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "transparent",

    width: 200,
    height: 30,
    justifyContent: "center"
  },

  text: {
    fontSize: 15,

    color: "white"
  },
  circle: {
    margin: 10,
    width: 200,
    height: 200,
    borderRadius: 100
  }
});

const buttons = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonText: {
    fontSize: 15,
    fontStyle: "italic",
    color: "#ccc"
  }
});

export default Member;
