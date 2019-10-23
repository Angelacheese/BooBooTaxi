import React, { Component, PropTypes } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  },
  bottmContainer: {
    height: 60,
    flexDirection: "row"
  },
  background: {
    height: "100%",
    width: "100%",
    position: "absolute"
  },
  button: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonText: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold"
  },
  title: {
    fontSize: 30,
    color: "#fff",
    fontWeight: "bold"
  }
});

export default class LogIn extends Component {
  static propTypes = {};
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.background}
          source={{
            uri:
              "https://www.visitberlin.de/system/files/image/Taxis_iStock.com_Foto%20Maxiphoto_DL_PPT_0.jpg"
          }}
        />
        <View style={styles.container}>
          <Text style={[styles.title, { fontSize: 40, top: 120 }]}>
            Boo Boo Taxi
          </Text>
        </View>

        <View style={styles.bottmContainer}>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: "#53423D" }]}
            onPress={() => this.props.navigation.navigate("LoginPassenger1")}
          >
            <Text style={styles.buttonText}>乘客端</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: "#A58987" }]}
            onPress={() => this.props.navigation.navigate("DriverSignIn")}
          >
            <Text style={styles.buttonText}>司機端</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
