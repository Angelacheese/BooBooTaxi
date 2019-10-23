import React, { Component } from "react";
import { TouchableWithoutFeedback, Alert } from "react-native";

export default class TouchableWithoutFeedbackTest extends Component {
  render() {
    return (
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
                   onPress: () => this.props.navigation.navigate("WaitingPage")
            }
          ]);
        }}
      />
    );
  }
}
