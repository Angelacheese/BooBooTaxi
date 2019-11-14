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
import LottieView from "lottie-react-native";
import * as ImagePicker from "expo-image-picker";
import Constants from "expo-constants";
import * as Permissions from "expo-permissions";

class PassengerMember2 extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: "會員資料"
  });
  constructor(props) {
    super(props);
    this.state = {
      image: "./pic/[BestGuide7]ryu.jpg",
      display: true,
      account: "B0544251",
      password: " ",
      name: "IU李知恩",
      sex: "女",
      date: "2019-09-19",
      phone: "0971837293"
    };
  }
  componentDidMount() {
    this.animation1.play();
    this.getPermissionAsync();
  }

  resetAnimation = () => {
    this.animation1.reset();
    this.animation1.play();
  };

  getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== "granted") {
        alert("Sorry, we need camera roll permissions to make this work!");
      }
    }
  };

  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3]
    });

    console.log(result);

    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }
  };
  _Write() {
    return (
      <View>
        <Text style={styles.text}>會員帳號：{this.state.account}</Text>

        <View flexDirection="row">
          <Text style={styles.text}>姓名：</Text>
          <TextInput
            style={styles.textInput}
            placeholder="請輸入姓名"
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
            placeholder="請輸入性別"
            onChangeText={sex =>
              this.setState({
                sex: sex
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
        <View flexDirection="row">
          <Text style={styles.text}>手機：</Text>
          <TextInput
            style={styles.textInput}
            placeholder="請輸入手機號碼"
            onChangeText={phone =>
              this.setState({
                phone: phone
              })
            }
          />
        </View>
      </View>
    );
  }

  _Correct() {
    return (
      <View>
        <Text style={styles.text}>會員帳號：{this.state.account}</Text>
        <Text style={styles.text}>姓名：{this.state.name}</Text>
        <Text style={styles.text}>性別：{this.state.sex}</Text>
        <Text style={styles.text}>生日：{this.state.date}</Text>
        <Text style={styles.text}>手機：{this.state.phone}</Text>
      </View>
    );
  }
  _onPress() {
    this.setState({ display: !this.state.display });
  }
  render() {
    return (
      <View style={{ flex: 1 }} backgroundColor="#001540">
        <LottieView
          ref={animation1 => {
            this.animation1 = animation1;
          }}
          source={require("./1711-waves.json")}
        />

        <View
          style={{ flexDirection: "row", margin: 5, alignItems: "flex-end" }}
        >
          {this.state.image && (
            <Image source={{ uri: this.state.image }} style={styles.circle} />
          )}
          <Text style={styles.titleText}>{this.state.name}</Text>
        </View>

        {this.state.display == true ? this._Correct() : this._Write()}

        {this.state.display == true ? (
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              margin: 5
            }}
          >
            <TouchableOpacity
              style={styles.button}
              onPress={() => this._onPress()}
            >
              <Text style={styles.text}>修改資料</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.text}>更改密碼</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                this._pickImage();
              }}
            >
              <Text style={styles.text}>更改照片</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <TouchableOpacity
            style={styles.button}
            onPress={() => this._onPress()}
          >
            <Text style={styles.text}>確認</Text>
          </TouchableOpacity>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  circle: {
    margin: 5,
    width: 150,
    height: 150,
    borderRadius: 75
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
    width: 200,
    borderColor: "#ccc",
    borderStyle: "dashed",
    borderWidth: 0.5,
    color: "#ccc"
  }
});

export default PassengerMember2;
