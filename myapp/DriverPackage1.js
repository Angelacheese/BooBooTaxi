import React from "react";
import { Icon } from "react-native-elements";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  Image,
  Dimensions,
  TouchableWithoutFeedback,
  Alert
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import ActionButton from "react-native-action-button";

const window = Dimensions.get("window");

export default class CommonRoute1 extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: "我的行程"
  });
  constructor(props) {
    super(props);
    this.state = {
      行程名稱: "耕億車導帶你玩"
    };
  }

  _Delete() {
    return (
      <TouchableOpacity
        style={styles.border}
        onPress={() => this.props.navigation.navigate("DriverPackage2")}
      >
        <View flexDirection="row">
          <Text style={styles.titleText}>行程名稱:{this.state.行程名稱}</Text>
          <Icon name="delete" />
          <Image />
        </View>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <ScrollView style={{ flex: 1 }} backgroundColor="#001540">
        <View
          style={{ flex: 9, justifyContent: "center", alignItems: "center" }}
        >
          <TouchableOpacity
            style={styles.border}
            onPress={() => this.props.navigation.navigate("DriverPackage2")}
          >
            <View flexDirection="row">
              <Text style={styles.titleText}>行程名稱:</Text>
              <Image />
            </View>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1, top: 120, justifyContent: "flex-end" }}>
          <ActionButton buttonColor="#fddb92">
            <ActionButton.Item
              buttonColor="#3498db"
              title="刪除行程"
              onPress={() => this._Delete()}
            >
              <Icon name="delete" />
            </ActionButton.Item> 
            <ActionButton.Item
              buttonColor="#3498db"
              title="新增行程"
              onPress={() => this._Delete()}
            >
              <Icon name="update" />
            </ActionButton.Item>
          </ActionButton>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
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
  text: {
    color: "white",
    margin: 10
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fddb92",
    margin: 10
  },
  border: {
    justifyContent: "space-between",
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 5,
    margin: 5,
    width: 325,
    height: 150
  }
});
