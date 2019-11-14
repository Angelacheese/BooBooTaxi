import React from "react";
import { StyleSheet, Dimensions } from "react-native";
const window = Dimensions.get("window");

const styles = StyleSheet.create({
  //框架置中#F5FCFF
  container1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#001540"
  },
  //框架靠左
  container2: {
    flex: 1,
    backgroundColor: "#001540"
  },
  //框架漸層
  linearGradient: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  //一般黃色按鈕樣式
  button1: {
    borderWidth: 0.5,
    borderColor: "#fddb92",
    borderRadius: 20,
    width: 110,
    height: 35,
    margin: 5,
    justifyContent: "center",
    alignItems: "center"
  },
  //FB顏色按鈕樣式
  button2: {
    bottom: 100,
    height: 50,
    borderWidth: 2,
    backgroundColor: "#3b5998",
    borderColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
    width: 200,
    borderRadius: 30
  },
  //Entry按鈕
  button3: {
    borderColor: "#fff",
    borderWidth: 0.5,
    borderRadius: 10,
    width: window.width / 3,
    height: window.height / 5,
    margin: 5,
    justifyContent: "center",
    alignItems: "center"
  },
  //一般白色文字or搭配一般黃色按鈕
  text1: {
    color: "white",
    margin: 5
  },
  //title黃色文字
  text2: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fddb92",
    margin: 5
  },
  //title白色文字
  text3: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
    margin: 5
  },
  //搭配FB顏色按鈕的文字
  text4: {
    color: "#fff",
    fontWeight: "bold",
    margin: 5,
    fontSize: 20
  },
  //change資料的輸入框
  textInput1: {
    height: 40,
    width: 100,
    borderColor: "#ccc",
    borderStyle: "dashed",
    borderWidth: 0.5,
    color: "#ccc"
  },
  //常用、歷史的白框list
  border1: {
    justifyContent: "space-between",
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 5,
    margin: 5,
    width: 325,
    height: 150
  },
  //圓形頭貼
  circle: {
    margin: 5,
    width: 100,
    height: 100,
    borderRadius: 50
  },
  //登入背景模糊
  image1: {
    height: "100%",
    width: "100%",
    position: "absolute"
  },
  //大logo
  logo1: {
    height: 60,
    width: 200
  }
});

export default styles;
