import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  Image
} from "react-native";
import LottieView from "lottie-react-native";
import { Icon, Divider } from "react-native-elements";
export default class LoginView extends Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{
            height: "100%",
            width: "100%",
            position: "absolute"
          }}
          blurRadius={5}
          source={require("./pic/[PassengerSignIn]cover.jpg")}
        />
        <View
          style={{
            flexDirection: "row",
            margin: 10,
            alignItems: "center",
            justifyContent: "flex-end"
          }}
        >
          <Icon
            name="person"
            color="#fff"
            size={100}
            borderRadius={50}
            borderColor="white"
            borderWidth={3}
          />
          <Text
            style={{
              fontSize: 30,
              color: "#fff",
              fontWeight: "bold"
            }}
          >
            {" "}
            Passenger
          </Text>
        </View>
        <View style={styles.inputContainer}>
          <Image
            style={styles.icon}
            source={require("./pic/[SignIn]e-mail.png")}
          />
          <TextInput
            style={styles.inputs}
            placeholder="E-mail"
            keyboardType="email-address"
            returnKeyType="next"
          />
        </View>

        <View style={styles.inputContainer}>
          <Image
            style={styles.icon}
            source={require("./pic/[SignIn]password.png")}
          />
          <TextInput
            style={styles.inputs}
            placeholder="password"
            secureTextEntry={true}
          />
        </View>
        <View style={{ width: "90%", margin: 10, alignItems: "flex-end" }}>
          <TouchableOpacity>
            <Text style={{ color: "#ccc" }}>忘記密碼?</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={[styles.buttonContainer, styles.loginButton]}
          onPress={() => this.props.navigation.navigate("PassengerHome")}
        >
          <Text style={styles.text}>登入</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.buttonContainer, styles.signinButton]}
         onPress={() => this.props.navigation.navigate("PassengerLogin1")}
        >
          <Text style={styles.text}>手機註冊</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.buttonContainer, styles.fabookButton]}>
          <View style={styles.socialButtonContent}>
            <Image
              style={{ width: 30, height: 30 }}
              source={{
                uri: "https://png.icons8.com/facebook/androidL/40/FFFFFF"
              }}
            />
            <Text style={styles.text}> 用Facebook帳號註冊</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.buttonContainer, styles.googleButton]}>
          <View style={styles.socialButtonContent}>
            <Image
              style={{ width: 30, height: 30 }}
              source={{
                uri: "https://png.icons8.com/google/androidL/40/FFFFFF"
              }}
            />
            <Text style={styles.text}> 用Google帳號註冊</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#001540"
  },
  inputContainer: {
    borderStyle: "solid",
    borderColor: "transparent",
    borderBottomColor: "#fff",
    borderWidth: 1,
    width: 300,
    height: 50,
    margin: 5,
    flexDirection: "row",
    alignItems: "center"
  },
  inputs: {
    color: "#fff",
    height: 50,
    marginLeft: 16,
    flex: 1
  },

  buttonContainer: {
    height: 40,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
    width: 300,
    borderRadius: 30
  },
  loginButton: {
    borderWidth: 2,
    backgroundColor: "#3b5998",
    borderColor: "#fff"
  },
  signinButton: {
    borderWidth: 0.5,
    borderColor: "#fddb92"
  },
  fabookButton: {
    borderWidth: 0.5,
    borderColor: "#fddb92"
  },
  googleButton: {
    borderWidth: 0.5,
    borderColor: "#fddb92"
  },
  text: {
    color: "white"
  },

  socialButtonContent: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  }
});
