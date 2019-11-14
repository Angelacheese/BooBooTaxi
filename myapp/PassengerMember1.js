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
export default class PassengerMember2 extends React.Component {
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
      <View style={styles.container}>
        <LinearGradient
           colors={['#001540', '#072970', '#330867' ,"#764ba2"]}
          style={{
            width: "100%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Image
            source={require("./pic/[Member]IU.jpg")}
            style={styles.circle}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate("PassengerMember2")}
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
            onPress={() => this.props.navigation.navigate("Rating")}
          >
            <Text style={styles.text}>我的評價</Text>
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
          <TouchableOpacity
            style={{
              backgroundColor: "#fddb92",
              borderRadius: 30,
              width: 200,
              height: 40,
              margin: 5,
              justifyContent: "center",
              alignItems: "center",
              borderWidth: 1,
              borderColor: "#fff"
            }}
            onPress={() => {
              this.props.navigation.navigate("PassengerSignIn");
            }}
          >
            <Text
              style={{
                fontSize: 15,
                color: "#3b5998"
              }}
            >
              登出
            </Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#001540"
  },
  button: {
    borderWidth: 0.5,
    borderColor: "#fddb92",
    borderRadius: 20,
    width: 200,
    height: 35,
    margin: 5,
    justifyContent: "center",
    alignItems: "center"
  },

  text: {
    margin: 5,

    color: "white"
  },
  circle: {
    margin: 10,
    width: 200,
    height: 200,
    borderRadius: 100
  }
});
