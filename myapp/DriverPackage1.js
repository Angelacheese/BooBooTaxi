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
  render() {
    return (
      <ScrollView style={{ flex: 1 }} backgroundColor="#001540">
        <View style={{flex:8, justifyContent: "center", alignItems: "center" }}>
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
        <View style={{flex:2, justifyContent: "flex-end", alignItems: "flex-end" }}>
          <ActionButton buttonColor="rgba(231,76,60,1)">
            <ActionButton.Item
              buttonColor="#9b59b6"
              title="New Task"
              onPress={() => console.log("notes tapped!")}
            >
              <Icon name="md-create" style={styles.actionButtonIcon} />
            </ActionButton.Item>
            <ActionButton.Item
              buttonColor="#3498db"
              title="Notifications"
              onPress={() => {}}
            >
              <Icon
                name="rocket"
                style={styles.actionButtonIcon}
              />
            </ActionButton.Item>
            <ActionButton.Item
              buttonColor="#1abc9c"
              title="All Tasks"
              onPress={() => {}}
            >
              <Icon name="md-done-all" style={styles.actionButtonIcon} />
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
