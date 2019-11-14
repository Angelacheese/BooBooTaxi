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
      oneSelection: " ",

      twoSelection: " ",

      threeSelection: " ",

      fourSelection: " ",

      fiveSelection: " ",

      sixSelection: " "
    };
  }
  setOne(newValue) {
    this.setState({
      oneSelection: newValue
    });
  }
  setTwo(newValue) {
    this.setState({
      twoSelection: newValue
    });
  }

  setThree(newValue) {
    this.setState({
      threeSelection: newValue
    });
  }

  setFour(newValue) {
    this.setState({
      fourSelection: newValue
    });
  }

  setFive(newValue) {
    this.setState({
      fiveSelection: newValue
    });
  }

  setSix(newValue) {
    this.setState({
      sixSelection: newValue
    });
  }
  render() {
    const one = [
      {
        title: "個人",
        value: "個人"
      },
      {
        title: "大都會",
        value: "大都會"
      },
      {
        title: "台灣大車隊",
        value: "台灣大車隊"
      },
      {
        title: "皇冠大車隊",
        value: "皇冠大車隊"
      },
      {
        title: "其他",
        value: "其他"
      }
    ];
    const two = [
      {
        title: "4",
        value: "4"
      },
      {
        title: "5",
        value: "5"
      },
      {
        title: "6",
        value: "6"
      },
      {
        title: "7",
        value: "7"
      },
      {
        title: "8",
        value: "8"
      }
    ];
    const three = [
      {
        title: "現金",
        value: "現金"
      },
      {
        title: "悠遊卡",
        value: "悠遊卡"
      },
      {
        title: "信用卡",
        value: "信用卡"
      }
    ];
    const four = [
      {
        title: "1",
        value: "1"
      },
      {
        title: "2",
        value: "2"
      },
      {
        title: "3",
        value: "3"
      }
    ];
    const five = [
      {
        title: "是",
        value: "是"
      },
      {
        title: "否",
        value: "否"
      }
    ];
    const six = [
      {
        title: "是",
        value: "是"
      },
      {
        title: "否",
        value: "否"
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
              width: "90%",
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
              label="承載人數"
              data={two}
              onChangeText={title => this.setTwo(title)}
              textColor="#fff"
              baseColor="#fff"
              selectedItemColor="#3b5998"
            />
          </View>
          <View style={{ left: 15 }}>
            <Dropdown
              label="隸屬車隊"
              data={one}
              onChangeText={title => this.setOne(title)}
              textColor="#fff"
              baseColor="#fff"
              selectedItemColor="#3b5998"
            />
          </View>
          <View style={{ left: 15 }}>
            <Dropdown
              label="付款方式"
              data={three}
              onChangeText={title => this.setThree(title)}
              textColor="#fff"
              baseColor="#fff"
              selectedItemColor="#3b5998"
            />
          </View>
          <View style={{ left: 15 }}>
            <Dropdown
              label="行李件數"
              data={four}
              onChangeText={title => this.setFour(title)}
              textColor="#fff"
              baseColor="#fff"
              selectedItemColor="#3b5998"
            />
          </View>
          <View style={{ left: 15 }}>
            <Dropdown
              label="是否可承載寵物"
              data={five}
              onChangeText={title => this.setFive(title)}
              textColor="#fff"
              baseColor="#fff"
              selectedItemColor="#3b5998"
            />
          </View>
          <View style={{ left: 15 }}>
            <Dropdown
              label="是否可承載輪椅"
              data={six}
              onChangeText={title => this.setSix(title)}
              textColor="#fff"
              baseColor="#fff"
              selectedItemColor="#3b5998"
            />
          </View>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => this.props.navigation.navigate("DriverLogin4")}
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
    width: 300,
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
  inputs: {
    height: 50,
    marginLeft: 16,
    borderBottomColor: "#FFFFFF",
    flex: 1
  },

  buttonContainer: {
    height: 40,
    borderWidth: 2,
    backgroundColor: "#3b5998",
    borderColor: "#fff",
    justifyContent: "center",
    alignItems: "center",

    margin: 5,
    width: 100,
    borderRadius: 30
  }
});
