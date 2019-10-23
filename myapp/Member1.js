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
import { LinearGradient } from "expo-linear-gradient";
import DatePicker from "react-native-datepicker";
class Member1 extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: "會員資料"
  });
  constructor(props) {
    super(props);
    this.state = {
      display: true,
      account: "B0544251",
      password: " ",
      name: "IU李知恩",
      sex: " ",
      date: "2019-09-19",
      phone: " "
    };
  }
  _Write() {
    return (
      <View>
        <Text style={styles.text}>會員帳號：{this.state.account}</Text>
        <View flexDirection="row">
          <Text style={styles.text}>會員密碼：</Text>
          <TextInput
            style={styles.textInput}
            secureTextEntry={true}
            placeholder="請輸入..."
            onChangeText={password =>
              this.setState({
                password: password
              })
            }
          />
        </View>
        <View flexDirection="row">
          <Text style={styles.text}>姓名：</Text>
          <TextInput
            style={styles.textInput}
            placeholder="請輸入..."
            onChangeText={name =>
              this.setState({
                name: name
              })
            }
          />
        </View>
        <View flexDirection="row">
          <Text style={styles.text}>性別：</Text>
          <TextInput
            style={styles.textInput}
            placeholder="請輸入..."
            onChangeText={sex =>
              this.setState({
                sex: sex
              })
            }
          />
        </View>
        <View flexDirection="row">
          <Text style={styles.text}>手機：</Text>
          <TextInput
            style={styles.textInput}
            placeholder="請輸入..."
            onChangeText={phone =>
              this.setState({
                phone: phone
              })
            }
          />
        </View>
        <View flexDirection="row">
          <Text style={styles.text}>生日：</Text>
          <DatePicker
        style={{ width: 200 }}
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
      </View>
    );
  }

  _Correct() {
    return (
      <View>
        <Text style={styles.text}>會員帳號：{this.state.account}</Text>
        <Text style={styles.text}>會員密碼：{this.state.password}</Text>
        <Text style={styles.text}>姓名：{this.state.name}</Text>
        <Text style={styles.text}>性別：{this.state.sex}</Text>
        <Text style={styles.text}>手機：{this.state.phone}</Text>
        <Text style={styles.text}>生日：{this.state.date}</Text>
      </View>
    );
  }
  _onPress() {
    this.setState({ display: !this.state.display });
  }
  render() {
    return (
      <View style={{ flex: 1 }} backgroundColor="#001540">
        <ImageBackground
          style={{
            width: "100%",
            height: 200,
            justifyContent: "flex-end",
            alignItems: "center",
            borderBottomRightRadius: 200,
            borderBottomLeftRadius: 200,
            backgroundColor: "#9face6"
          }}
        >
          <Image
            source={require("./pic/[Member]IU.jpg")}
            style={styles.circle}
          />
        </ImageBackground>

        <View
          style={{ flexDirection: "row", margin: 10, alignItems: "baseline" }}
        >
          <View>
            <Text style={styles.titleText}>{this.state.name}</Text>
          </View>
        </View>

        {this.state.display == true ? this._Correct() : this._Write()}

        <View
          style={{
            flexDirection: "row",
            alignItems: "center"
          }}
        >
          <TouchableOpacity
            style={styles.button}
            onPress={() => this._onPress()}
          >
            <Text style={styles.text}>修改資料</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  circle: {
    top: 40,
    width: 200,
    height: 200,
    borderRadius: 100
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
  textInput: {
    height: 30,
    width: 100,
    borderColor: "#ccc",
    borderStyle: "dashed",
    borderWidth: 0.5,
    color: "#ccc"
  }
});

export default Member1;
