import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
export default class DM extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <LinearGradient
          colors={['#001540', '#072970', '#330867' ,"#764ba2"]}
          style={{
            width: "100%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Image
            source={require("./pic/[BestGuide7]ryu.jpg")}
            style={styles.circle}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.navigate("DriverMember2");
            }}
          >
            <Text style={styles.text}>會員資料</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.navigate("DriverLicense1");
            }}
          >
            <Text style={styles.text}>執業資料</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate("DriverHistoryMap1")}
          >
            <Text style={styles.text}>歷程記錄</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.navigate("DriverPackage1");
            }}
          >
            <Text style={styles.text}>我的行程</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.text}>乘客評價</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.text}>會員隱私與權益說明</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "#fddb92",
              borderRadius: 30,
              width: 200,
              height: 40,
              margin: 5,
              justifyContent: "center",
              alignItems: "center",
              borderWidth: 1,
              borderColor: "#fff"
            }}
            onPress={() => {
              this.props.navigation.navigate("DriverSignIn");
            }}
          >
            <Text
              style={{
                fontSize: 15,
                color: "#3b5998"
              }}
            >
              登出
            </Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
   flex:1,
    backgroundColor: "#001540"
  },

  circle: {
    margin: 10,
    width: 200,
    height: 200,
    borderRadius: 100
  },
  button: {
    borderWidth: 0.5,
    borderColor: "#fddb92",
    borderRadius: 20,
    width: 200,
    height: 35,
    margin: 5,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    color: "white",
    margin: 5
  }
});
