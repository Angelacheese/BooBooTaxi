import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  TouchableOpacity,
  KeyboardAvoidingView,
  Animated,
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
      sex: " ",
      date: "2019-09-19"
    };
  }
  setSex(newValue) {
    this.setState({
      sex: newValue
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
          source={require("./pic/[PassengerSignIn]cover.jpg")}
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
          <View style={styles.textInput}>
            <Text style={styles.text}>姓名：</Text>
            <TextInput
              style={styles.inputs}
              placeholder="請輸入姓名"
              returnKeyType="next"
            />
          </View>

          <View style={{ left: 15, margin: 5 }}>
            <Dropdown
              label="性別"
              data={sex}
              onChangeText={title => this.setSex(title)}
              textColor="#fff"
              baseColor="#fff"
              selectedItemColor="#3b5998"
            />
          </View>
          <View style={styles.textInput}>
            <Text style={styles.text}>生日：</Text>
            <DatePicker
              date={this.state.date}
              mode="date"
              placeholder="請選擇生日"
              format="YYYY-MM-DD"
              minDate="1900-01-01"
              maxDate="2100-12-31"
              confirmBtnText="確認"
              cancelBtnText="取消"
              customStyles={{}}
              onDateChange={date => {
                this.setState({ date: date });
              }}
            />
          </View>

          <View style={styles.textInput}>
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
          <View style={styles.textInput}>
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
          <View style={styles.textInput}>
            <Text style={{ color: "#fff", margin: 5, right: 80 }}>
              密碼確認：
            </Text>
            <TextInput
              style={styles.inputs}
              placeholder="請再次輸入密碼"
              returnKeyType="done"
              ref={input => (this.password2 = input)}
              secureTextEntry={true}
              underlineColorAndroid="transparent"
            />
          </View>
         
            <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => this.props.navigation.navigate("PassengerHome")}
        >
          <Text style={{ color: '#fff', margin: 5 }}>確認申請</Text>
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
    width: 250,
    height: 50,
    margin: 5,
    flexDirection: "row",
    alignItems: "center",
    left: 20
  },

  inputs: {
    height: 50,
    marginLeft: 16,
    borderBottomColor: "#FFFFFF",
    flex: 1
  },
  text: {
    color: "#fff",
    margin: 5,
    right: 50
  },
 
  buttonContainer: {
    height: 40,
    borderWidth: 2,
    backgroundColor: '#3b5998',
    borderColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    left: 90,
    margin:5,
    width: 100,
    borderRadius: 30,
  },
});
