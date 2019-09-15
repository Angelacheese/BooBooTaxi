import React from "react";
import { Icon } from "react-native-elements";
import { LinearGradient } from "expo-linear-gradient";
//import {Navigation} from 'react-navigation';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  FlatList,
  Component,
  Animated,
  TouchableWithoutFeedback
} from "react-native";
import DraggableFlatList from "react-native-draggable-flatlist";

export default class CommonRoute1 extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: "車導推薦行程",
    headerRight: (
      <View flexDirection="row" justifyContent="flex-end" width={250}>
      <TouchableOpacity>
        <Icon name="favorite" color="pink" size={35} margin={5} />
      </TouchableOpacity>
    </View>
    )
  });

 
  state = {
    data: [...Array(10)].map((d, index) => ({
      key: `item-${index}`,
      label: index,
      backgroundColor: "transparent",
      // borderColor:'black',
      // borderWidth:2
    
    }))
  };

  renderItem = ({ item,  move, moveEnd, isActive }) => {
    const point = [
      "東海大學",
      "東海乳品小棧",
      "磐頂教堂",
      "坪頂番薯姨",
      "鰲峰山公園",
      "大甲鎮瀾宮",
      "鐵砧山風景特定區",
      "花巷松林餐廳",
      "日南火車站",
      "清水國小"
    ];
    return (
      <TouchableOpacity
        style={{
          height: 50,
          backgroundColor: isActive ? "gray" : item.backgroundColor,
          alignItems: "center",
          justifyContent: "center"
        }}
        onLongPress={move}
        onPressOut={moveEnd}
      >
        
              <Text
                style={{
                  color: "powderblue",
                  fontSize: 20
                }}
              >
                {point[item.label]}
              </Text>
          
      </TouchableOpacity>
    );
  };
  render() {
   
    return (
      <ScrollView style={{ flex: 1 }}>
        <LinearGradient
          colors={["#fddb92", "#ffecd2", "#fdfbfb"]}
          style={{
            width: "100%",
            height: "100%"
          }}
        >
          <View style={{ flexDirection: "row", margin: 10 }}>
            <Image
              source={{
                uri:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa4e2VF6cfou9oL0cc5OAzVTEbmAgFjIW2r-7lTkpOljG9k38N"
              }}
              style={styles.circle}
            />
            <View>
             
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

              <Text>主打:</Text>
              <Text>費用:720元/人</Text>
            </View>
          </View>

          <View justifyContent="center" alignItems="center">
         
            <DraggableFlatList
              width={250}
              data={this.state.data}
              renderItem={this.renderItem}
              keyExtractor={(item) => `draggable-item-${item.key}`}
              scrollPercent={1}
              onMoveEnd={({ data }) => this.setState({ data })}
            />
            <Text>------------------</Text>
            <TouchableOpacity borderColor='black'>
              <Text>
                我要預約
              </Text>
            </TouchableOpacity>
            <Text>------------------</Text>
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
    backgroundColor: "#ecf0f1"
  },
  tennisBall: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "greenyellow",
    borderRadius: 100,
    width: 100,
    height: 100
  },
  button: {
    paddingTop: 24,
    paddingBottom: 24
  },
  buttonText: {
    fontSize: 24,
    color: "#333"
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
