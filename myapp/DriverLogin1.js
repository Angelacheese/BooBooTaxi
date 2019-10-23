import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Modal,
  TouchableHighlight,
  KeyboardAvoidingView
} from "react-native";
import DatePicker from "react-native-datepicker";

export default class DriverSignUp extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: "註冊"
  });
  constructor(props) {
    super(props);

    this.state = {
      sexSelection: " ",
      sexDisplayed: false,
      date: "2019-09-19"
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
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.inputContainer}>
          <Text style={styles.text}>姓名：</Text>
          <TextInput
            style={styles.inputs}
            placeholder="請輸入姓名"
            returnKeyType="next"
            underlineColorAndroid="transparent"
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.text}>性別： {this.state.sexSelection}</Text>
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
          <Text style={styles.text}>生日：</Text>
          <DatePicker
          //  style={{ width: 200 }}
            date={this.state.date}
            mode="date"
            placeholder="select date"
            format="YYYY-MM-DD"
            minDate="2000-01-01"
            maxDate="2100-12-31"
            confirmBtnText="確認"
            cancelBtnText="取消"
            customStyles={{
              dateIcon: {
                position: "absolute",
                left: 0,
                top: 4,
                marginLeft: 0
              },
              dateInput: {
                marginLeft: 36
              }
            }}
            onDateChange={date => {
              this.setState({ date: date });
            }}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.text}>帳號：</Text>
          <TextInput
            style={styles.inputs}
            placeholder="請設定帳號"
            returnKeyType="next"
            onSubmitEditing={() => this.password.focus()}
            ref={input => (this.account = input)}
            underlineColorAndroid="transparent"
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.text}>密碼：</Text>
          <TextInput
            style={styles.inputs}
            placeholder="請設定密碼"
            returnKeyType="next"
            onSubmitEditing={() => this.password2.focus()}
            ref={input => (this.password = input)}
            secureTextEntry={true}
            underlineColorAndroid="transparent"
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.text}>密碼確認：</Text>
          <TextInput
            style={styles.inputs}
            placeholder="請再次輸入密碼"
            returnKeyType="done"
            ref={input => (this.password2 = input)}
            secureTextEntry={true}
            underlineColorAndroid="transparent"
          />
        </View>
        <Button
          title="下一步"
          onPress={() => this.props.navigation.navigate("DriverLogin2")}
        ></Button>
      </KeyboardAvoidingView>
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
  },
  text: {
    color: "black",
    textAlign: "left",
    fontSize: 15,
    margin: 10
  }
});
