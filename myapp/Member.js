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
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate("Favorite")}
          >
            <Text style={styles.text}>我的收藏</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate("HistoryRoute1")}
          >
            <Text style={styles.text}>歷史路線</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate("CommonRoute1")}
          >
            <Text style={styles.text}>常用路線</Text>
          </TouchableOpacity>
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
    margin: 10,
    backgroundColor: "transparent",
    borderColor: "transparent",
    borderBottomColor: "#fddb92",
    borderWidth: 0.5,
    width: 250,
    height: 40,
    justifyContent: "center"
  },
  //////確定的
  text: {
    fontSize: 20,
   
    color: "white",
    margin: 10
  },
  circle: {
    top: 40,
    width: 200,
    height: 200,
    borderRadius: 100
  },
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
