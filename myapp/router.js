import {
  createStackNavigator,
  createAppContainer,
  DrawerActions,
  createDrawerNavigator
} from "react-navigation";
import { Image, ScrollView, Text, View } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { DrawerItems, DrawerNavigation } from "react-navigation";

//乘客端頁面
import PassengerHome from "./PassengerHome"; //乘客端首頁
import DriverHome from "./DriverHome";
import App2 from "./App2"; //測試地圖
import Boo from "./Boo"; //初始頁面
import BestGuide1 from "./BestGuide1";
import BestGuide2 from "./BestGuide2";
import BestGuide3 from "./BestGuide3";
import BestGuide4 from "./BestGuide4";
import BestGuide5 from "./BestGuide5";
import BestGuide6 from "./BestGuide6";
import BestGuide7 from "./BestGuide7";
import Calender from "./Calender";
import ChangePassword1 from "./ChangePassword1";
import ChangePassword2 from "./ChangePassword2";
import ChangePhoto from "./ChangePhoto";
import Chat from "./Chat";
import Chat2 from "./Chat2";
import Chat3 from "./Chat3";
import CommonRoute1 from "./CommonRoute1";
import CommonRoute2 from "./CommonRoute2";
import CommonRoute3 from "./CommonRoute3";

import DatepickerTest from "./DatepickerTest";
//import DriverLicense1 from "./DriverLicense1 "; //司機端登入
import DriverLicense2 from "./DriverLicense2 "; //司機端登入
import DriverLogin1 from "./DriverLogin1"; //司機端登入
import DriverLogin2 from "./DriverLogin2"; //司機端登入
import DriverLogin3 from "./DriverLogin3"; //司機端登入
import DriverLogin4 from "./DriverLogin4"; //司機端登入
import DriverMember1 from "./DriverMember1"; //司機端登入
import DriverMember2 from "./DriverMember2"; //司機端登入
import DriverPackage1 from "./DriverPackage1";
import DriverPackage2 from "./DriverPackage2";
import DriverHistoryMap1 from "./DriverHistoryMap1";
import DriverHistoryMap2 from "./DriverHistoryMap2";
import DriverSignIn from "./DriverSignIn"; //司機端登入
import Favorite from "./Favorite"; //我的收藏
import GuideIntro1 from "./GuideIntro1"; //車導簡介
import GuidePackage1 from "./GuidePackage1"; //車導行程
import HistoryRoute1 from "./HistoryRoute1"; //歷史路徑
import HistoryRoute2 from "./HistoryRoute2";
import InmediateCall1 from "./InmediateCall1";
import Login1 from "./Login1"; //登入

import LoginPassenger1 from "./LoginPassenger1"; //乘客端登入
import LoginPassenger2 from "./LoginPassenger2";
import Member from "./Member";
import Member1 from "./Member1";
import PassengerFail from "./PassengerFail";
import PassengerOrder from "./PassengerOrder";
import Rating from "./Rating";
import Success from "./Success";
import WaitingPage from "./WaitingPage";

import { TouchableOpacity } from "react-native-gesture-handler";
//import test1 from "./test1";
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
    LoginPassenger1: LoginPassenger1,
    LoginPassenger2: LoginPassenger2,
    PassengerHome: PassengerHome,
    DriverHome: DriverHome,

    App2: App2,
    BestGuide1: BestGuide1,
    BestGuide2: BestGuide2,
    BestGuide3: BestGuide3,
    BestGuide4: BestGuide4,
    BestGuide5: BestGuide5,
    BestGuide6: BestGuide6,
    BestGuide7: BestGuide7,
    Calender: Calender,
    ChangePassword1:ChangePassword1,
    ChangePassword2:ChangePassword2,
    ChangePhoto:ChangePhoto,
    Chat: Chat,
    Chat2: Chat2,
    Chat3: Chat3,
    CommonRoute1: CommonRoute1,
    CommonRoute2: CommonRoute2,
    CommonRoute3: CommonRoute3,
    DatepickerTest: DatepickerTest,
   // DriverLicense1:DriverLicense1,
    DriverLicense2:DriverLicense2,
    DriverLogin1: DriverLogin1,
    DriverLogin2: DriverLogin2,
    DriverLogin3: DriverLogin3,
    DriverLogin4: DriverLogin4,
    DriverMember1: DriverMember1,
    DriverMember2: DriverMember2,
    DriverPackage1: DriverPackage1,
    DriverPackage2: DriverPackage2,
    DriverHistoryMap1: DriverHistoryMap1,
    DriverHistoryMap2: DriverHistoryMap2,
    DriverSignIn: DriverSignIn,
    Favorite: Favorite,
    GuideIntro1: GuideIntro1,
    GuidePackage1: GuidePackage1,
    HistoryRoute1: HistoryRoute1,
    HistoryRoute2: HistoryRoute2,
    InmediateCall1: InmediateCall1,
    Member: Member,
    Member1: Member1,
    PassengerFail: PassengerFail,
    PassengerOrder: PassengerOrder,
    Rating: Rating,
    Success: Success,
    // test1: test1,
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
const usersname = "users name";
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
