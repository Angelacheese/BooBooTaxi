import React from "react";
import { Icon } from "react-native-elements";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  TouchableWithoutFeedback,
  Alert
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import ActionButton from "react-native-action-button";

export default class CommonRoute1 extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: "常用路線"
  });
  render() {
    return (
      <ScrollView style={{ flex: 1 }} backgroundColor="#001540">
        <View
          style={{ flex: 9, justifyContent: "center", alignItems: "center" }}
        >
          <View style={styles.border}>
            <View flexDirection="row">
              <Icon name="beenhere" color="#ccc" size={50} margin={10} />
              <Text style={styles.titleText}>路線名稱:</Text>
            </View>

            <View flexDirection="row" style={{ justifyContent: "flex-end" }}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => this.props.navigation.navigate("CommonRoute2")}
              >
                <Text style={styles.text}>查看更多</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
                <TouchableWithoutFeedback
                  style={{ backgroundColor: "powderblue" }}
                  onPress={() => {
                    Alert.alert("提示", "是否確定叫車", [
                      {
                        text: "取消",
                        onPress: () => console.log("Cancel Pressed"),
                        style: "cancel"
                      },
                      {
                        text: "確定",
                        onPress: () =>
                          this.props.navigation.navigate("WaitingPage")
                      }
                    ]);
                  }}
                >
                  <View>
                    <Text style={styles.text}> 用此路線叫車 </Text>
                  </View>
                </TouchableWithoutFeedback>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={{ flex: 1 ,top:120,justifyContent:'flex-end'}}>
          <ActionButton buttonColor="#fddb92">
            <ActionButton.Item
              buttonColor="#3498db"
              title="刪除路線"
              onPress={() => {}}
            >
              <Icon name="delete" />
            </ActionButton.Item>
            <ActionButton.Item
              buttonColor="#3498db"
              title="新增路線"
              onPress={() => this.props.navigation.navigate("CommonRoute2")}
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
