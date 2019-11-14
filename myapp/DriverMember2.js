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
  ImageBackground,
  KeyboardAvoidingView
} from "react-native";
import LottieView from "lottie-react-native";
import DatePicker from "react-native-datepicker";
import * as ImagePicker from "expo-image-picker";
import Constants from "expo-constants";
import * as Permissions from "expo-permissions";
//import ButtonTest from "./ButtonTest";
class DM2 extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: "司機資料"
  });
  constructor(props) {
    super(props);
    this.state = {
      image: "./pic/[BestGuide7]ryu.jpg",
      display: true,
      account: "B0544151",
      password: " ",
      name: "RYU劉以豪",
      sex: "男",
      date: "2019-09-19",
      phone: "0912345678",
      area: "桃園市、台中市",
      year: "6-10年",
      language: "中文、英文、台語",
      feature: "顏質高、彈吉他、唱歌",
      carnum: "GYL-0618",
      cartype: "TOYOTA-WISH"
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
      <KeyboardAvoidingView behavior="padding">
        <Text style={styles.text}>司機帳號：{this.state.account}</Text>

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
            placeholderTextColor="white"
            onChangeText={phone =>
              this.setState({
                phone: phone
              })
            }
          />
        </View>

        <View flexDirection="row">
          <Text style={styles.text}>熟悉地區：</Text>
          <TextInput
            style={styles.textInput}
            placeholder="請輸入熟悉地區"
            placeholderTextColor="white"
            onChangeText={area =>
              this.setState({
                area: area
              })
            }
          />
        </View>
        <View flexDirection="row">
          <Text style={styles.text}>年資：</Text>
          <TextInput
            style={styles.textInput}
            placeholder="請輸入年資"
            placeholderTextColor="white"
            onChangeText={year =>
              this.setState({
                year: year
              })
            }
          />
        </View>
        <View flexDirection="row">
          <Text style={styles.text}>擅長語言：</Text>
          <TextInput
            style={styles.textInput}
            placeholder="請輸入..."
            placeholderTextColor="white"
            onChangeText={language =>
              this.setState({
                language: language
              })
            }
          />
        </View>
        <View flexDirection="row">
          <Text style={styles.text}>特色：</Text>
          <TextInput
            style={styles.textInput}
            placeholder="請輸入..."
            placeholderTextColor="white"
            onChangeText={feature =>
              this.setState({
                feature: feature
              })
            }
          />
        </View>

        <View flexDirection="row">
          <Text style={styles.text}>車牌號碼：</Text>
          <TextInput
            style={styles.textInput}
            placeholder="請輸入..."
            placeholderTextColor="white"
            onChangeText={carnum =>
              this.setState({
                carnum: carnum
              })
            }
          />
        </View>
        <View flexDirection="row">
          <Text style={styles.text}>車子型號：</Text>
          <TextInput
            style={styles.textInput}
            placeholder="請輸入..."
            placeholderTextColor="white"
            onChangeText={cartype =>
              this.setState({
                cartype: cartype
              })
            }
          />
        </View>
      </KeyboardAvoidingView>
    );
  }

  _Correct() {
    return (
      <View>
        <Text style={styles.text}>司機帳號：{this.state.account}</Text>
        <Text style={styles.text}>姓名：{this.state.name}</Text>
        <Text style={styles.text}>性別：{this.state.sex}</Text>
        <Text style={styles.text}>生日：{this.state.date}</Text>
        <Text style={styles.text}>手機：{this.state.phone}</Text>
        <Text style={styles.text}>熟悉地區：{this.state.area}</Text>
        <Text style={styles.text}>年資：{this.state.year}</Text>
        <Text style={styles.text}>擅長語言：{this.state.language}</Text>
        <Text style={styles.text}>特色：{this.state.feature}</Text>
        <Text style={styles.text}>車牌號碼：{this.state.carnum}</Text>
        <Text style={styles.text}>車子型號：{this.state.cartype}</Text>
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
            <TouchableOpacity onPress={() => this._onPress()}>
              <Text style={styles.text}>修改資料</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate("ChangePassword1");
              }}
            >
              <Text style={styles.text}>更改密碼</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this._pickImage();
              }}
            >
              <Text style={styles.text}>更改照片</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <TouchableOpacity onPress={() => this._onPress()}>
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

export default DM2;
