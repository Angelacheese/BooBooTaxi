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
import styles from "./Stylesheet";

export default class DChangePassword extends React.Component {
  static navigationOptions = {
    title: "變更密碼"
  };
  render() {
    return (
      <View style={styles.container2}>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.text1}>請輸入舊密碼：</Text>
          <TextInput
            placeholderTextColor="white"
            style={styles.textInput1}
            secureTextEntry={true}
            placeholder="請輸入舊密碼"
          />
        </View>
        <View>
          <TouchableOpacity
            style={styles.button1}
            onPress={() => {
              this.props.navigation.navigate("ChangePassword2");
            }}
          >
            <Text style={styles.text1}>下一步</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
