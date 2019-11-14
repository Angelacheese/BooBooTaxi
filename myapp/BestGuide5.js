import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  Button,
  View,
  TouchableOpacity,
  FlatList,
  Alert
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";
class BestGuide5 extends React.Component {
  static navigationOptions = {
    title: "最佳車導"
  };
  renderItem = item => {
    return (
      <View style={{ margin: 10 }} key={item}>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            justifyContent: "flex-between",
            alignItems: "center"
          }}
          onPress={() => this.props.navigation.navigate("GuideIntro1")}
        >
          <Image style={{ width: "50%", height: 50 }} />
        
        </TouchableOpacity>
      </View>
    );
  };
  render() {
    return (
      <View style={{ flex: 1 }} backgroundColor="#001540">
        <FlatList
          // ItemSeparatorComponent={() => (
          //   <View
          //     style={{
          //       width: "100%",
          //       height: 1,
          //       backgroundColor: "#ccc",
          //       opacity: 0.5
          //     }}
          //   />
          // )}
          data={data}
          renderItem={this.renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },

  buttonContainer: {
    margin: 30,
    backgroundColor: "black"
  },
  GridViewContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    width: 300,
    margin: 20,
    backgroundColor: "white",
    opacity: 0.5
  },
  GridViewTextLayout: {
    fontSize: 20,
    fontWeight: "bold",
    justifyContent: "center",
    color: "black",
    padding: 10
  }
});

export default BestGuide5;
