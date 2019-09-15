import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Icon } from "react-native-elements";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  StatusBar
} from "react-native";
import IconBadge from 'react-native-icon-badge';
class GuideIntro1 extends React.Component {
  render() {
    data = [
      "年資:",
      "車牌號碼:",
      "車子型號:",
      "可載客人數:",
      "熟悉地:",
      "擅長語言",
      "特色:",
      "自我介紹:"
    ];

    return (
      <ScrollView style={{ flex: 1 }}>
        <LinearGradient
          colors={["#fddb92", "#ffecd2", "#fdfbfb"]}
          style={{
            width: "100%",
            height: "100%"
          }}
        >
          <View style={{ flexDirection: "row", margin: 10  }}>




          <View style={{flexDirection: 'row',alignItems: 'center',justifyContent: 'center',}}>
  <IconBadge
    MainElement={
      <Image
              source={{
                uri:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa4e2VF6cfou9oL0cc5OAzVTEbmAgFjIW2r-7lTkpOljG9k38N"
              }}
              style={styles.circle}
            />
    }
    BadgeElement={
      <Text style={{color:'#FFFFFF'}}>女</Text>
    }
    IconBadgeStyle={
      {width:30,
      height:20,
      backgroundColor: '#FF00EE',
      top:25,
      right:25
      }
    }
  
    />
</View>















          
            <View >
              <View  flexDirection= "row" justifyContent= "flex-end" width={185}>
              <TouchableOpacity><Text fontSize={30} >收藏</Text>
                <Icon name="add" color="#ccc" size={30} margin={5} /> 
                      
               </TouchableOpacity>
             
              </View>



              <Text
                style={{
                  color: "brown", 
                  fontSize: 30,
                  textShadowColor: "gray",
                  textShadowRadius: 3,
                  textAlignVertical: "bottom"
                }}
              >
                鍾嵐心
              </Text>
              <Text>⭐️⭐️⭐️⭐️⭐️</Text>
            </View>
          </View>

          <View
            style={{
              flex: 3,
              justifyContent: "center"
            }}
          >
            {data.map((item, index) => {
              return (
                <View key={index}>
                  <Text
                    style={{
                      margin: 10,
                      fontSize: 15
                    }}
                  >
                    {item}
                  </Text>
                </View>
              );
            })}
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center"
            }}
          >
            <TouchableOpacity style={buttons.button}>
              <Text>評價查看</Text>
            </TouchableOpacity>
            <TouchableOpacity style={buttons.button}>
              <Text>歷程記錄</Text>
            </TouchableOpacity>
            <TouchableOpacity style={buttons.button}
            onPress={() => this.props.navigation.navigate("GuidePackage1")}
            >
              <Text>車導帶你玩</Text>
            </TouchableOpacity>
            <TouchableOpacity style={buttons.button}>
              <Text>行事曆</Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  circle: {
    marginRight: 10,
    width: 200,
    height: 200,
    borderRadius: 100
  },
  container: {
    flex: 1,
    backgroundColor: "#1FB9FF"
  }
});

const lines = StyleSheet.create({
  line: {
    borderWidth: 0,
    borderColor: "rosybrown",
    margin: 10
  }
});

const buttons = StyleSheet.create({
  button: {
    width: 90,
    height: 50,
    margin: 3,
    padding: 5,
    borderRadius: 2,
    alignItems: "center",
    justifyContent: "center"
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold"
  }
});

export default GuideIntro1;
