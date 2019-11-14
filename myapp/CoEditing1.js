import React, { Component } from "react";
import { SwipeListView } from "react-native-swipe-list-view";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  Alert
} from "react-native";
import Swipeable from "react-native-swipeable";
import Icon from "react-native-vector-icons/FontAwesome";

const data1 = new Array(5).fill(0);

export default class MySwipeableExample extends Component {
  static navigationOptions = {
    headerTitle: "共同編輯"
  };
  state = {
    dataList: {
      0: { id: "景點一", name: "景點一" },
      1: { id: "景點二", name: "景點二" },
      2: { id: "景點三", name: "景點三" },
      3: { id: "景點四", name: "景點四" }
    },
    currentlyOpenSwipeable: null //记录当前滑动的组件
  };
  renderItem = (data, rowMap) => (
    <View style={styles.rowFront}>
      <Text>I am {data.item}in a SwipeListView</Text>
    </View>
  );

  render() {
    return (
      <View style={{ flex: 1 }} backgroundColor="#001540">
        <SwipeListView
          data={data1}
          renderItem={this.renderItem}
          contentContainerStyle={{ padding: 10 }}
          renderHiddenItem={(data, rowMap) => (
            <View style={styles.rowBack}>
              <Text style={{ margin: 5 }}>Delete</Text>
            </View>
          )}
          //  leftOpenValue={75}
          rightOpenValue={-70}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  listItem: {
    width: 400,
    padding: 10,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    borderWidth: 0.5,
    borderColor: "#fddb92",
    borderRadius: 20,
    width: 110,
    height: 35,
    margin: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    color: "white",
    margin: 10,
    fontSize: 15
  },
  rowBack: {
    alignItems: "center",
    backgroundColor: "#DDD",
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingLeft: 15
  },
  rowFront: {
    alignItems: "center",
    backgroundColor: "#CCC",
    borderBottomColor: "black",
    borderBottomWidth: 1,
    justifyContent: "center",
    height: 50
  }
});
