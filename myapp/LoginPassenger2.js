import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Modal,
  TouchableHighlight,
  Alert,
  KeyboardAvoidingView
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export default class DriverSignUp extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: "註冊"
  });
  constructor(props) {
    super(props);

    this.state = {
      sexSelection: " ",
      sexDisplayed: false
    };
  }
  setSex(newValue) {
    this.setState({
      sexSelection: newValue
    });

    this.togglePicker2();
  }
  togglePicker2() {
    this.setState({
      sexDisplayed: !this.state.sexDisplayed
    });
  }
  render() {
    const sex = [
      {
        title: "男",
        value: "男"
      },
      {
        title: "女",
        value: "女"
      }
    ];

    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Text style={{ color: "black", textAlign: "left", fontSize: 15 }}>
            姓名：
          </Text>
          <TextInput
            style={styles.inputs}
            placeholder="請輸入姓名"
            underlineColorAndroid="transparent"
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={{ color: "black", textAlign: "left", fontSize: 15 }}>
            性別： {this.state.sexSelection}
          </Text>
          <Button onPress={() => this.togglePicker2()} title={"請選擇性別"} />

          <Modal
            visible={this.state.sexDisplayed}
            animationType={"slide"}
            transparent={true}
          >
            <View style={[styles.view]}>
              <Text>請選擇性別</Text>
              {sex.map((value, index) => {
                return (
                  <TouchableHighlight
                    key={index}
                    onPress={() => this.setSex(value.value)}
                    style={{ paddingTop: 4, paddingBottom: 4 }}
                  >
                    <Text>{value.title}</Text>
                  </TouchableHighlight>
                );
              })}

              <TouchableHighlight
                onPress={() => this.togglePicker2()}
                style={{ paddingTop: 4, paddingBottom: 4 }}
              >
                <Text style={{ color: "#999" }}>取消</Text>
              </TouchableHighlight>
            </View>
          </Modal>
        </View>
        <View style={styles.inputContainer}>
          <Text style={{ color: "black", textAlign: "left", fontSize: 15 }}>
            生日：
          </Text>
          <TextInput
            style={styles.inputs}
            placeholder="YYYY/MM/DD"
            underlineColorAndroid="transparent"
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={{ color: "black", textAlign: "left", fontSize: 15 }}>
            帳號：
          </Text>
          <TextInput
            style={styles.inputs}
            placeholder="請設定帳號"
            underlineColorAndroid="transparent"
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={{ color: "black", textAlign: "left", fontSize: 15 }}>
            密碼：
          </Text>
          <TextInput
            style={styles.inputs}
            placeholder="請設定密碼"
            secureTextEntry={true}
            underlineColorAndroid="transparent"
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={{ color: "black", textAlign: "left", fontSize: 15 }}>
            密碼確認：
          </Text>
          <TextInput
            style={styles.inputs}
            placeholder="請再次輸入密碼"
            secureTextEntry={true}
            underlineColorAndroid="transparent"
          />
        </View>
        <Button
          title="下一步"
          //  onPress={()=>this.props.navigation.navigate("DriverSignUp2")}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightyellow",
    alignItems: "center",
    justifyContent: "center"
  },

  view: {
    margin: 20,
    padding: 20,
    backgroundColor: "#efefef",
    bottom: 20,
    left: 20,
    right: 20,
    alignItems: "center",
    position: "absolute",
    fontSize: 20
  },
  inputContainer: {
    backgroundColor: "#FFFFFF",
    borderRadius: 30,
    borderStyle: "solid",
    borderColor: "black",
    borderWidth: 1,
    borderBottomWidth: 1,
    width: 350,
    height: 50,
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center"
  },
  inputs: {
    height: 50,
    marginLeft: 16,
    borderBottomColor: "#FFFFFF",
    flex: 1
  }
});
