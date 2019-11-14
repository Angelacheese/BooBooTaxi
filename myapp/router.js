import {
  // createStackNavigator,
  createAppContainer,
  createSwitchNavigator,
  DrawerActions,
  createDrawerNavigator
} from "react-navigation";
import { Image, ScrollView, Text, View } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { DrawerItems, DrawerNavigation } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

//乘客端頁面
import PassengerHome from "./PassengerHome";
import DriverHome from "./DriverHome";
import App2 from "./App2";
import Entry1 from "./Entry1"; //初始頁面
import BestGuide1 from "./BestGuide1";
import BestGuide2 from "./BestGuide2";
import BestGuide3 from "./BestGuide3";
import BestGuide4 from "./BestGuide4";
import BestGuide5 from "./BestGuide5";
import BestGuide6 from "./BestGuide6";
import BestGuide_WaitingPage from "./BestGuide_WaitingPage";
import Calender from "./Calender";
import ChangePassword1 from "./ChangePassword1";
import ChangePassword2 from "./ChangePassword2";
import CoEditing1 from "./CoEditing1";

import LoginScreen from "./LoginScreen";
import AuthLoadingScreen from "./AuthLoadingScreen";
import HomeScreen from "./HomeScreen";
import ChatScreen from "./ChatScreen";
import ProfileScreen from "./ProfileScreen";

import CommonRoute1 from "./CommonRoute1";
import CommonRoute2 from "./CommonRoute2";
import CommonRoute3 from "./CommonRoute3";


import DatepickerTest from "./DatepickerTest";

import DriverLicense1 from "./DriverLicense1";
import DriverLogin1 from "./DriverLogin1";
import DriverLogin2 from "./DriverLogin2";
import DriverLogin3 from "./DriverLogin3";
import DriverLogin4 from "./DriverLogin4";
import DriverMember1 from "./DriverMember1";
import DriverMember2 from "./DriverMember2";
import DriverOrder from "./DriverOrder";
import DriverPackage1 from "./DriverPackage1";
import DriverPackage2 from "./DriverPackage2";
import DriverHistoryMap1 from "./DriverHistoryMap1";
import DriverHistoryMap2 from "./DriverHistoryMap2";
import DriverSignIn from "./DriverSignIn";
import Favorite from "./Favorite"; //我的收藏
import GuideIntro1 from "./GuideIntro1";
import GuidePackage1 from "./GuidePackage1";
import HistoryRoute1 from "./HistoryRoute1";
import HistoryRoute2 from "./HistoryRoute2";
import InmediateCall1 from "./InmediateCall1";
import InmediateCall_PassengerOrder from "./InmediateCall_PassengerOrder";
import Entry2 from "./Entry2"; //登入

import PassengerSignIn from "./PassengerSignIn"; //乘客端登入
import PassengerLogin1 from "./PassengerLogin1";

import PassengerMember1 from "./PassengerMember1";
import PassengerMember2 from "./PassengerMember2";
import PassengerFail from "./PassengerFail";
import BestGuide_PassengerOrder from "./BestGuide_PassengerOrder";
import Rating from "./Rating";
import Success from "./Success";
import WaitingPage from "./WaitingPage";

// const StackNavigator2 = createStackNavigator(
//   {
//     我的收藏: Favorite,
//     歷史路程: HistoryRoute1,
//     常用路線: CommonRoute1
//   },
//   {
//     defaultNavigationOptions: ({ navigation, screenProps }) => ({
//       headerStyle: {
//         backgroundColor: "black"
//       },
//       headerTintColor: "#fff",
//       headerTitleStyle: {
//         fontWeight: "bold"
//       },
//       headerBackTitle: "Back"
//     })
//   }
// );

// 第二層
const Main = createStackNavigator(
  {
    //進入頁面
    Entry1: Entry1,
    Entry2: Entry2,
    PassengerSignIn: PassengerSignIn,
    PassengerLogin1: PassengerLogin1,
    DriverSignIn: DriverSignIn,
    DriverLogin1: DriverLogin1,
    DriverLogin2: DriverLogin2,
    DriverLogin3: DriverLogin3,
    DriverLogin4: DriverLogin4,
    PassengerHome: PassengerHome,
    DriverHome: DriverHome,

    //component頁面
    App2: App2,
    DatepickerTest: DatepickerTest,

    //聊天室
    //LoginScreen: LoginScreen,
    //AuthLoadingScreen: AuthLoadingScreen,
    //HomeScreen: HomeScreen,
    //ChatScreen: ChatScreen,
    //styles: styles,
    //User: User,
    //ProfileScreen: ProfileScreen,

    //主頁面
    BestGuide1: BestGuide1,
    BestGuide2: BestGuide2,
    BestGuide3: BestGuide3,
    BestGuide4: BestGuide4,
    BestGuide5: BestGuide5,
    BestGuide6: BestGuide6,
    BestGuide_WaitingPage: BestGuide_WaitingPage,

  
    Calender: Calender,
    ChangePassword1: ChangePassword1,
    ChangePassword2: ChangePassword2,
    CoEditing1: CoEditing1,
    CommonRoute1: CommonRoute1,
    CommonRoute2: CommonRoute2,
    CommonRoute3: CommonRoute3,

    DriverHistoryMap1: DriverHistoryMap1,
    DriverHistoryMap2: DriverHistoryMap2,
    DriverLicense1: DriverLicense1,
    DriverMember1: DriverMember1,
    DriverMember2: DriverMember2,
    DriverPackage1: DriverPackage1,
    DriverPackage2: DriverPackage2,
    DriverOrder: DriverOrder,

    Favorite: Favorite,
    GuideIntro1: GuideIntro1,
    GuidePackage1: GuidePackage1,
    HistoryRoute1: HistoryRoute1,
    HistoryRoute2: HistoryRoute2,
    InmediateCall1: InmediateCall1,
    InmediateCall_PassengerOrder: InmediateCall_PassengerOrder,
    PassengerMember1: PassengerMember1,
    PassengerMember2: PassengerMember2,
    PassengerFail: PassengerFail,
    BestGuide_PassengerOrder: BestGuide_PassengerOrder,
    Rating: Rating,
    Success: Success,
    WaitingPage: WaitingPage
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

const AppStack = createStackNavigator({
  Home: HomeScreen,
  Chat: ChatScreen,
  Profile: ProfileScreen
});
const AuthStack = createStackNavigator({ Login: LoginScreen });

export default createAppContainer(
  createSwitchNavigator(
    {
      Main: Main,
      AuthLoading: AuthLoadingScreen,
      App: AppStack,
      Auth: AuthStack
    },
    {
      initialRouteName: "Main"
    }
  )
);

//const usersname = "users name";
const DrawerContent = props => (
  <View
    style={{
      backgroundColor: "#001540",

      height: "100%"
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

//第一層;
// const DrawerNavigator = createDrawerNavigator(
//   {
//     Home: { screen: StackNavigator },
//     會員資訊: { screen: StackNavigator2 },
//     我的收藏: { screen: StackNavigator2 },
//     歷史路程: { screen: StackNavigator2 },
//     常用路線: { screen: StackNavigator2 }
//   },
//   {
//     contentComponent: DrawerContent
//   },
//   {
//     drawerType: "back"
//     //order: [Member]
//   }
// );

//export default createAppContainer(DrawerNavigator);
