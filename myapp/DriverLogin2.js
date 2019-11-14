import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  KeyboardAvoidingView,
  TouchableOpacity,
  Image
} from "react-native";
import DatePicker from "react-native-datepicker";
import { Dropdown } from "react-native-material-dropdown";
import { Icon, Divider } from "react-native-elements";
export default class DriverSignUp extends React.Component {
  static navigationOptions = {
    header: null
  };
  constructor(props) {
    super(props);

    this.state = {
      ageSelection: " ",
      yearSelection: " "
    };
  }
  setAge(newValue) {
    this.setState({
      ageSelection: newValue
    });
  }

  setYear(newValue) {
    this.setState({
      yearSelection: newValue
    });
  }

  render() {
    const year = [
      {
        title: "0-5年",
        value: "0-5年"
      },
      {
        title: "5-10年",
        value: "5-10年"
      },
      {
        title: "10-15年",
        value: "10-15年"
      },
      {
        title: "15年以上",
        value: "15年以上"
      },
      {
        title: "取消",
        value: " "
      }
    ];

    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#001540"
        }}
      >
        <Image
          style={{
            height: "100%",
            width: "100%",
            position: "absolute"
          }}
          blurRadius={3}
          source={require("./pic/[DriverSignIn]cover.jpg")}
        />
        <KeyboardAvoidingView behavior="padding">
          <View
            style={{
              width: 250,
              height: 100,
              margin: 5,
              flexDirection: "row",
              alignItems: "center",
              left: 20
            }}
          >
            <Icon name="person-pin" color="#fff" size={50} />
            <Text
              style={{
                fontSize: 30,
                color: "#fff",
                fontWeight: "bold"
              }}
            >
              {" "}
              個人資料
            </Text>
          </View>

          <View style={{ left: 15 }}>
            <Dropdown
              label="年資"
              data={year}
              onChangeText={title => this.setYear(title)}
              textColor="#fff"
              baseColor="#fff"
              selectedItemColor="#3b5998"
            />
          </View>

          <View style={{ left: 15 }}>
            <Dropdown
              label="熟悉地區"
              data={year}
              onChangeText={title => this.setYear(title)}
              textColor="#fff"
              baseColor="#fff"
              selectedItemColor="#3b5998"
            />
          </View>
          <View style={{ left: 15 }}>
            <Dropdown
              label="擅長語言"
              data={year}
              onChangeText={title => this.setYear(title)}
              textColor="#fff"
              baseColor="#fff"
              selectedItemColor="#3b5998"
            />
          </View>
          <View style={{ left: 15 }}>
            <Dropdown
              label="特色"
              data={year}
              onChangeText={title => this.setYear(title)}
              textColor="#fff"
              baseColor="#fff"
              selectedItemColor="#3b5998"
            />
          </View>
          <View style={styles.textInput}>
            <Text style={{ color: "#fff", margin: 5, right: 80 }}>
              車牌號碼：
            </Text>
            <TextInput
              style={styles.inputs}
              placeholder="請輸入車牌號碼"
              returnKeyType="next"
            />
          </View>
          <View style={styles.textInput}>
            <Text style={{ color: "#fff", margin: 5, right: 80 }}>
              車子型號：
            </Text>
            <TextInput
              style={styles.inputs}
              placeholder="請輸入車子型號"
              returnKeyType="next"
            />
          </View>

          <View style={styles.textInput}>
            <Text style={styles.text}>車齡：</Text>
            <TextInput
              style={styles.inputs}
              placeholder="車齡"
              returnKeyType="next"
            />
          </View>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => this.props.navigation.navigate("DriverLogin3")}
          >
            <Text style={{ color: "#fff", margin: 5 }}>下一步</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textInput: {
    borderStyle: "solid",
    borderColor: "transparent",
    borderBottomColor: "#fff",
    borderWidth: 0.5,
    margin: 5,
    width: 250,
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    left: 20
  },
  text: {
    color: "#fff",
    margin: 5,
    right: 50
  },

  buttonContainer: {
    height: 40,
    borderWidth: 2,
    backgroundColor: "#3b5998",
    borderColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    left: 85,
    width: 100,
    borderRadius: 30,
    margin: 5
  }
});
