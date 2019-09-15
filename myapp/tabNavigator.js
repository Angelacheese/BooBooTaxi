

import { createBottomTabNavigator, createAppContainer } from "react-navigation";

import Home from "./Home";

//import Member from "./Member";

const TabNavigator = createBottomTabNavigator(
  {
    Home: Home,
    //SettingsScreen: SettingsScreen,
   // Member: Member
  },
  {
    tabBarOptions: {
      activeTintColor: "#4BC1D2",
      inactiveTintColor: "#823453",
      showIcon: true,
      showLabel: true,
      upperCaseLabel: false,
      pressColor: "#823453",
      pressOpacity: 0.8,
      style: {
        backgroundColor: "black",
        borderTopWidth: 0.5,
        borderTopColor: "gray"
      }
    }
  },
  
);

export default createAppContainer(TabNavigator);
