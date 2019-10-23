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

export default class LoginView extends Component {
  static navigationOptions = {
    header: null
  };
  async componentDidMount() {
    this.animation.play();
  }

  resetAnimation = () => {
    this.animation.reset();
    this.animation.play();
  };
  render() {
    return (
      <View style={styles.container}>
        <LottieView
          ref={animation => {
            this.animation = animation;
          }}
          style={{
            width: 100,
            height: 100
          }}
          source={require("./3870-taxi.json")}
        />

        <View style={styles.inputContainer}>
          <Image
            style={[styles.icon, styles.inputIcon]}
            source={{
              uri: "https://png.icons8.com/envelope/androidL/40/3498db"
            }}
          />
          <TextInput
            style={styles.inputs}
            placeholder="Email"
            keyboardType="email-address"
            underlineColorAndroid="transparent"
          />
        </View>

        <View style={styles.inputContainer}>
          <Image
            style={[styles.icon, styles.inputIcon]}
            source={{
              uri: "https://png.icons8.com/password/androidL/40/3498db"
            }}
          />
          <TextInput
            style={styles.inputs}
            placeholder="密碼"
            secureTextEntry={true}
            underlineColorAndroid="transparent"
          />
        </View>

        <TouchableOpacity style={styles.restoreButtonContainer}>
          <Text>忘記密碼?</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.buttonContainer, styles.loginButton]}
          onPress={() => this.props.navigation.navigate("DriverHome")}
        >
          <Text style={styles.loginText}>登入</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.buttonContainer, styles.signinButton]}
         onPress={() => this.props.navigation.navigate("DriverLogin1")}>
          <Text style={styles.loginText}>註冊</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.buttonContainer, styles.fabookButton]}>
          <View style={styles.socialButtonContent}>
            <Image
              style={styles.icon}
              source={{
                uri: "https://png.icons8.com/facebook/androidL/40/FFFFFF"
              }}
            />
            <Text style={styles.loginText}>用Facebook帳號註冊</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.buttonContainer, styles.googleButton]}>
          <View style={styles.socialButtonContent}>
            <Image
              style={styles.icon}
              source={{
                uri: "https://png.icons8.com/google/androidL/40/FFFFFF"
              }}
            />
            <Text style={styles.loginText}>用Google帳號註冊</Text>
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
    backgroundColor: "#fddb92"
  },
  logo: {
    height: 200,
    width: 200
  },
  inputContainer: {
    backgroundColor: "#FFFFFF",
    borderRadius: 30,
    borderStyle: "solid",
    borderColor: "black",
    borderWidth: 1,
    borderBottomWidth: 1,
    width: 250,
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
  icon: {
    width: 30,
    height: 30
  },
  inputIcon: {
    marginLeft: 15,
    justifyContent: "center"
  },
  buttonContainer: {
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    width: 250,
    borderRadius: 30
  },
  loginButton: {
    backgroundColor: "#3498db"
  },
  signinButton: {
    backgroundColor: "orange"
  },
  fabookButton: {
    backgroundColor: "#3b5998"
  },
  googleButton: {
    backgroundColor: "#ff0000"
  },
  loginText: {
    color: "white"
  },
  restoreButtonContainer: {
    width: 250,
    marginBottom: 15,
    alignItems: "flex-end"
  },
  socialButtonContent: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  }
});
