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
// import { LinearGradient } from "expo-linear-gradient";
import DatePicker from "react-native-datepicker";
class DM2 extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: "會員資料"
  });
  constructor(props) {
    super(props);
    this.state = {
      display: true,
      phone: "0912345678",
      area: "桃園市、台中市",
      year: "6-10年",
      language: "中文、英文、台語",
      feature: " ",
      carnum:"GYL-0618",
      cartype:"TOYOTA-WISH"
    };
  }
  _Write() {
    return (
      <KeyboardAvoidingView behavior="padding" >
      
      <View flexDirection="row">
          <Text style={styles.text}>手機：</Text>
          <TextInput
            style={styles.textInput}
            placeholder="請輸入..."
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
            placeholder="請輸入..."
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
            placeholder="請輸入..."
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
        <Text style={styles.text}>手機：{this.state.phine}</Text>
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
          {/* <Image
            // source={require("./pic/[Member]IU.jpg")}
            style={styles.circle}
          /> */}
        </ImageBackground>
        <View>
            <TouchableOpacity style={styles.button} onPress={() => {this.props.navigation.navigate('ChangePhoto')}}>
            <Text style={styles.text}>
                更改照片
            </Text>
            </TouchableOpacity>
        </View>
        <View>
            <TouchableOpacity style={styles.button} onPress={() => {this.props.navigation.navigate('ChangePassword1')}}>
            <Text style={styles.text}>
                更改密碼
            </Text>
            </TouchableOpacity>
        </View>

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

export default DM2;