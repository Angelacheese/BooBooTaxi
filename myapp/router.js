import {
  createStackNavigator,
  createAppContainer,
  DrawerActions,
  createDrawerNavigator
} from "react-navigation";

import { Image, ScrollView, Text, View } from "react-native";

import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import Home from "./Home";
import { DrawerItems, DrawerNavigation } from "react-navigation";
import Boo from "./Boo";
import BestGuide1 from "./BestGuide1";
import BestGuide2 from "./BestGuide2";
import BestGuide3 from "./BestGuide3";
import BestGuide4 from "./BestGuide4";
import BestGuide5 from "./BestGuide5";
import BestGuide6 from "./BestGuide6";
import BestGuide7 from "./BestGuide7";
import Chat from "./Chat";
import CommonRoute1 from "./CommonRoute1";
import CommonRoute2 from "./CommonRoute2";
import CommonRoute3 from "./CommonRoute3";
import DatepickerTest from "./DatepickerTest";
import Favorite from "./Favorite";
import GuideIntro1 from "./GuideIntro1";
import GuidePackage1 from "./GuidePackage1";
import HistoryRoute1 from "./HistoryRoute1";
import HistoryRoute2 from "./HistoryRoute2";
import InmediateCall1 from "./InmediateCall1";
import Login1 from "./Login1";
import Login2 from "./Login2";
//import Login3 from "./Login3";
import Member from "./Member";
import Member1 from "./Member1";

import { TouchableOpacity } from "react-native-gesture-handler";

import test1 from "./test1";

import WaitingPage from "./WaitingPage";
import { Button } from "react-native-elements";

const StackNavigator2 = createStackNavigator(
  {
    Member1: Member1,
    我的收藏: Favorite,
    歷史路程: HistoryRoute1,
    常用路線: CommonRoute1
  },
  {
    defaultNavigationOptions: ({ navigation, screenProps }) => ({
      headerStyle: {
        backgroundColor: "black"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold"
      },
      headerBackTitle: "Back"
    })
  }
);

// 第二層
const StackNavigator = createStackNavigator(
  {
    Boo: Boo,
    Login1: Login1,
    Login2: Login2,
    Home: Home,

    BestGuide1: BestGuide1,
    BestGuide2: BestGuide2,
    BestGuide3: BestGuide3,
    BestGuide4: BestGuide4,
    BestGuide5: BestGuide5,
    BestGuide6: BestGuide6,
    BestGuide7: BestGuide7,
    CommonRoute1: CommonRoute1,
    CommonRoute2: CommonRoute2,
    CommonRoute3: CommonRoute3,
    DatepickerTest: DatepickerTest,
    //Login3:Login3,
    Favorite: Favorite,
    GuideIntro1: GuideIntro1,
    GuidePackage1: GuidePackage1,
    HistoryRoute1: HistoryRoute1,
    HistoryRoute2: HistoryRoute2,
    InmediateCall1: InmediateCall1,
    Member: Member,
    Member1: Member1,
    test1: test1,
    WaitingPage: WaitingPage,
    Chat: Chat
  },

  {
    defaultNavigationOptions: ({ navigation, screenProps }) => ({
      headerStyle: {
        backgroundColor: "#001540",
        shadowColor: "gray",
        shadowOffset: {
          height: 1
        },
        shadowOpacity: 0.9
      },
      headerTintColor: "white",
      headerBackTitle: "Back"
    })
  }
);
const usersname = "users name";
const DrawerContent = props => (
  <View
    style={{
      backgroundColor: "#001540",
      shadowColor: "gray",
      shadowOffset: {
        height: 3
      },
      shadowOpacity: 0.5,
      height: "100%"
      // alignItems: "center",
      // justifyContent: "center"
    }}
  >
    <View style={{ flexDirection: "row", marginLeft: 15, marginTop: 30 }}>
      <Image
        source={require("./pic/[Member]IU.jpg")}
        style={{ width: 120, height: 120, borderRadius: 60 }}
      />
      <Text style={{ color: "white", fontSize: 25 }}>{usersname}</Text>
    </View>
    <View style={{ flexDirection: "row", marginLeft: 15, marginTop: 30 }}>
      <Text style={{ color: "white", fontSize: 15 }}>|評價</Text>
      <Text style={{ color: "white", fontSize: 15 }}>|收藏</Text>
      <Text style={{ color: "white", fontSize: 15 }}>|路線</Text>
    </View>
    <DrawerItems style={{ fontSize: 20, color: "white" }} {...props} />
  </View>
);

// 第一層
const DrawerNavigator = createDrawerNavigator(
  {
    Home: { screen: StackNavigator },
    會員資訊: { screen: StackNavigator2 },
    我的收藏: { screen: StackNavigator2 },
    歷史路程: { screen: StackNavigator2 },
    常用路線: { screen: StackNavigator2 }
    //帳號設定:{}
  },
  {
    contentComponent: DrawerContent
  },
  {
    drawerType: "back"
    //order: [Member]
  }
);

export default createAppContainer(DrawerNavigator);
