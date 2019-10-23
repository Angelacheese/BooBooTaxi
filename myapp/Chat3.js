"use strict";

import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  ScrollView,
  TouchableOpacity,
  Image,
  Animated,
  Button,
  TextInput,
  TouchableHighlight,
  Dimensions
} from "react-native";
import GestureRecognizer, {
  swipeDirections
} from "react-native-swipe-gestures";
import DatepickerTest from "./DatepickerTest";
import Modal from "react-native-modal";

const SCREEN_WIDTH = Dimensions.get("window").width;

const xOffset = new Animated.Value(0);

const Screen = props => {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.scrollPage}>
        <Animated.View
          style={[styles.screen, transitionAnimation(props.index)]}
        >
          <Text style={styles.text}>{props.text}</Text>
        </Animated.View>
      </View>
    </View>
  );
};
const transitionAnimation = index => {
  return {
    transform: [
      { perspective: 800 },
      {
        scale: xOffset.interpolate({
          inputRange: [
            (index - 1) * SCREEN_WIDTH,
            index * SCREEN_WIDTH,
            (index + 1) * SCREEN_WIDTH
          ],
          outputRange: [0.25, 1, 0.25]
        })
      },
      {
        rotateX: xOffset.interpolate({
          inputRange: [
            (index - 1) * SCREEN_WIDTH,
            index * SCREEN_WIDTH,
            (index + 1) * SCREEN_WIDTH
          ],
          outputRange: ["45deg", "0deg", "45deg"]
        })
      },
      {
        rotateY: xOffset.interpolate({
          inputRange: [
            (index - 1) * SCREEN_WIDTH,
            index * SCREEN_WIDTH,
            (index + 1) * SCREEN_WIDTH
          ],
          outputRange: ["-45deg", "0deg", "45deg"]
        })
      }
    ]
  };
};

class SomeComponent extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "最佳車導"
  });

  constructor(props) {
    super(props);
    this.state = {
      Displayed0: false,
      Displayed1: false,
      Displayed2: false,
      Displayed3: false,
      Displayed4: false,
      Displayed5: false,
      pickerSelection: " ",
      person: " ",
      myText: "I'm ready to get swiped!",
      gestureName: "none",
      upperBound: 1,
      allDays: [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
      ],
      currentItem: 1,
      menuitems: [0, 0, 0]
    };
  }
  _onPress(onpressNum) {
    switch (onpressNum) {
      case 0: //預約地點
        this.setState({ Displayed0: !this.state.Displayed0 });
        break;
      case 1: //預約人數
        this.setState({ Displayed1: !this.state.Displayed1 });
        break;
      case 2: //預約天數
        this.setState({ Displayed2: !this.state.Displayed2 });
        break;
      case 3: //預約時數
        this.setState({ Displayed3: !this.state.Displayed3 });
        break;
      case 4: //預約時間(時)
        this.setState({ Displayed4: !this.state.Displayed4 });
        break;
      case 5: //預約時間(分)
        this.setState({ Displayed5: !this.state.Displayed5 });
        break;
    }
  }

  _Places(newValue) {
    this.setState({
      pickerSelection: newValue,
      Displayed0: !this.state.Displayed0
    });
  }
  _wherePlaces() {
    const pickerValues = [
      {
        title: "臺北市",
        value: "臺北市"
      },
      {
        title: "新北市",
        value: "新北市"
      },
      {
        title: "基隆市",
        value: "基隆市"
      },
      {
        title: "桃園市",
        value: "桃園市"
      },
      {
        title: "新竹縣",
        value: "新竹縣"
      },
      {
        title: "新竹市",
        value: "新竹市"
      },
      {
        title: "苗栗縣",
        value: "苗栗縣"
      },
      {
        title: "臺中市",
        value: "臺中市"
      },
      {
        title: "彰化縣",
        value: "彰化縣"
      },
      {
        title: "南投縣",
        value: "南投縣"
      },
      {
        title: "雲林縣",
        value: "雲林縣"
      },
      {
        title: "嘉義縣",
        value: "嘉義縣"
      },
      {
        title: "嘉義市",
        value: "嘉義市"
      },
      {
        title: "臺南市",
        value: "臺南市"
      },
      {
        title: "高雄市",
        value: "高雄市"
      },
      {
        title: "屏東縣",
        value: "屏東縣"
      },
      {
        title: "宜蘭縣",
        value: "宜蘭縣"
      },
      {
        title: "花蓮縣",
        value: "花蓮縣"
      },
      {
        title: "臺東縣",
        value: "臺東縣"
      },
      {
        title: "澎湖縣",
        value: "澎湖縣"
      },
      {
        title: "金門縣",
        value: "金門縣"
      },
      {
        title: "連江縣",
        value: "連江縣"
      },
      { title: "取消", value: " " }
    ];
    return (
      <View style={styles.border}>
        <Text style={styles.text}>旅遊地點：{this.state.pickerSelection}</Text>

        <TouchableOpacity onPress={() => this._onPress(0)}>
          <Text style={styles.button}>|選擇</Text>
        </TouchableOpacity>

        <Modal
          visible={this.state.Displayed0}
          animationType={"slide"}
          transparent={true}
          backdropOpacity={0.7}
          useNativeDriver={true}
          backgroundColor="white"
          animationIn="fadeIn"
          animationInTiming={1000}
          height={200}
          borderRadius={10}
          justifyContent="center"
          alignItems="center"
        >
          <View>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <TouchableOpacity>
                <Text style={styles.text}>確認</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.text}>CANCEL</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.text}>-----------------</Text>
            <ScrollView>
              {pickerValues.map((value, index) => {
                return (
                  <TouchableHighlight
                    key={index}
                    onPress={() => this._Places(value.value)}
                    style={{ paddingTop: 4, paddingBottom: 4 }}
                  >
                    <Text style={styles.modalText}>{value.title}</Text>
                  </TouchableHighlight>
                );
              })}
            </ScrollView>
          </View>
        </Modal>
      </View>
    );
  }

  _People(newValue) {
    this.setState({
      person: newValue,
      Displayed1: !this.state.Displayed1
    });
  }
  _howManypeople() {
    const person = [
      { title: "1", value: 1 },
      { title: "2", value: 2 },
      { title: "3", value: 3 },
      { title: "4", value: 4 },
      { title: "5", value: 5 },
      { title: "6", value: 6 },
      { title: "7", value: 7 },
      { title: "取消", value: "" }
    ];
    return (
      <View style={styles.border}>
        <Text style={styles.text}>包車人數：{this.state.person}</Text>

        <TouchableOpacity onPress={() => this._onPress(1)}>
          <Text style={styles.button}>|選擇</Text>
        </TouchableOpacity>
        <Modal
          visible={this.state.Displayed1}
          animationType={"slide"}
          transparent={true}
        >
          <View style={styles.modal}>
            <ScrollView>
              {person.map((value, index) => {
                return (
                  <TouchableHighlight
                    key={index}
                    onPress={() => this._People(value.value)}
                    style={{ paddingTop: 4, paddingBottom: 4 }}
                  >
                    <Text style={styles.modalText}>{value.title}</Text>
                  </TouchableHighlight>
                );
              })}
            </ScrollView>
          </View>
        </Modal>
      </View>
    );
  }

  _Days(newValue) {
    this.setState({
      Displayed2: !this.state.Displayed2,
      upperBound: newValue
    });
  }
  _howManydays() {
    const day = [
      { title: "1", value: 1 },
      { title: "2", value: 2 },
      { title: "3", value: 3 },
      { title: "4", value: 4 },
      { title: "5", value: 5 },
      { title: "6", value: 6 },
      { title: "7", value: 7 },
      { title: "取消", value: "" }
    ];
    return (
      <View style={styles.border}>
        <Text style={styles.text}>預約天數：{this.state.upperBound}</Text>

        <TouchableOpacity onPress={() => this._onPress(2)}>
          <Text style={styles.button}>|選擇</Text>
        </TouchableOpacity>
        <Modal
          visible={this.state.Displayed2}
          animationType={"slide"}
          transparent={true}
        >
          <View style={styles.modal}>
            <ScrollView>
              {day.map((value, index) => {
                return (
                  <TouchableHighlight
                    key={index}
                    onPress={() => this._Days(value.value)}
                    style={{ paddingTop: 4, paddingBottom: 4 }}
                  >
                    <Text style={styles.modalText}>{value.title}</Text>
                  </TouchableHighlight>
                );
              })}
            </ScrollView>
          </View>
        </Modal>
      </View>
    );
  }
  _Hours(newValue) {
    const arraycopy = [...this.state.allDays];
    arraycopy[this.state.currentItem].splice(0, 1, newValue);

    this.setState({
      Displayed3: !this.state.Displayed3,
      alldays: arraycopy
    });
  }
  _howManyhours() {
    const hour = [
      { title: "1", value: 1 },
      { title: "2", value: 2 },
      { title: "3", value: 3 },
      { title: "4", value: 4 },
      { title: "5", value: 5 },
      { title: "6", value: 6 },
      { title: "7", value: 7 },
      { title: "8", value: 8 },
      { title: "取消", value: " " }
    ];
    return (
      <View flexDirection="row">
        <Text style={styles.text}>預約時數： {this.state.menuitems[0]}</Text>

        <TouchableOpacity onPress={() => this._onPress(3)}>
          <Text style={styles.button}>|選擇</Text>
        </TouchableOpacity>
        <Modal
          visible={this.state.Displayed3}
          animationType={"slide"}
          transparent={true}
        >
          <View style={styles.modal}>
            <ScrollView>
              {hour.map((value, index) => {
                return (
                  <TouchableHighlight
                    key={index}
                    onPress={() => this._Hours(value.value)}
                    style={{ paddingTop: 4, paddingBottom: 4 }}
                  >
                    <Text style={styles.modalText}>{value.title}</Text>
                  </TouchableHighlight>
                );
              })}
            </ScrollView>
          </View>
        </Modal>
      </View>
    );
  }
  _Times(newValue) {
    const arraycopy = [...this.state.allDays];
    arraycopy[this.state.currentItem].splice(1, 1, newValue);

    this.setState({
      Displayed4: !this.state.Displayed4,
      alldays: arraycopy
    });
  }
  _howManytimes() {
    const time = [
      { title: "1", value: 1 },
      { title: "2", value: 2 },
      { title: "3", value: 3 },
      { title: "4", value: 4 },
      { title: "5", value: 5 },
      { title: "6", value: 6 },
      { title: "7", value: 7 },
      { title: "8", value: 8 },
      { title: "9", value: 9 },
      { title: "10", value: 10 },
      { title: "11", value: 11 },
      { title: "12", value: 12 },
      { title: "13", value: 13 },
      { title: "14", value: 14 },
      { title: "15", value: 15 },
      { title: "16", value: 16 },
      { title: "17", value: 17 },
      { title: "18", value: 18 },
      { title: "19", value: 19 },
      { title: "20", value: 20 },
      { title: "21", value: 21 },
      { title: "22", value: 22 },
      { title: "23", value: 23 },
      { title: "24", value: 24 },
      { title: "取消", value: " " }
    ];
    return (
      <View flexDirection="row">
        <Text style={styles.text}>預約時： {this.state.menuitems[1]}</Text>

        <TouchableOpacity onPress={() => this._onPress(4)}>
          <Text style={styles.button}>|選擇</Text>
        </TouchableOpacity>
        <Modal
          visible={this.state.Displayed4}
          animationType={"slide"}
          transparent={true}
        >
          <View style={styles.modal}>
            <ScrollView>
              {time.map((value, index) => {
                return (
                  <TouchableHighlight
                    key={index}
                    onPress={() => this._Times(value.value)}
                    style={{ paddingTop: 4, paddingBottom: 4 }}
                  >
                    <Text style={styles.modalText}>{value.title}</Text>
                  </TouchableHighlight>
                );
              })}
            </ScrollView>
          </View>
        </Modal>
      </View>
    );
  }
  _Minutes(newValue) {
    const arraycopy = [...this.state.allDays];
    arraycopy[this.state.currentItem].splice(2, 1, newValue);

    this.setState({
      Displayed5: !this.state.Displayed5,
      alldays: arraycopy
    });
  }
  _howManyminutes() {
    const minute = [
      { title: "00", value: 0 },
      { title: "15", value: 15 },
      { title: "30", value: 30 },
      { title: "45", value: 45 },
      { title: "取消", value: " " }
    ];
    return (
      <View flexDirection="row">
        <Text style={styles.text}>預約分： {this.state.menuitems[2]}</Text>

        <TouchableOpacity onPress={() => this._onPress(5)}>
          <Text style={styles.button}>|選擇</Text>
        </TouchableOpacity>
        <Modal
          visible={this.state.Displayed5}
          animationType={"slide"}
          transparent={true}
        >
          <View style={styles.modal}>
            <ScrollView>
              {minute.map((value, index) => {
                return (
                  <TouchableHighlight
                    key={index}
                    onPress={() => this._Minutes(value.value)}
                    style={{ paddingTop: 4, paddingBottom: 4 }}
                  >
                    <Text style={styles.modalText}>{value.title}</Text>
                  </TouchableHighlight>
                );
              })}
            </ScrollView>
          </View>
        </Modal>
      </View>
    );
  }

  _onSwipeRight(gestureState) {
    this.setState({ myText: "You swiped left!" });

    this.setState({
      currentItem: Math.max(this.state.currentItem - 1, 1),
      menuitems: [...this.state.allDays[this.state.currentItem]]
    });
  }

  _onSwipeLeft(gestureState) {
    this.setState({ myText: "You swiped right!" });

    this.setState({
      currentItem: Math.min(this.state.currentItem + 1, this.state.upperBound),
      menuitems: [...this.state.allDays[this.state.currentItem]]
    });
  }

  _onSwipe(gestureName, gestureState) {
    this.setState({ gestureName: gestureName });
  }

  render() {
    const config = {
      velocityThreshold: 0.3,
      directionalOffsetThreshold: 80
    };

    return (
      <View style={{ flex: 1 }} backgroundColor="#001540">
        {this._wherePlaces()}
        {this._howManypeople()}
        <View style={styles.border}>
          <Text style={styles.text}>預約日期：</Text>
          <DatepickerTest style={styles.text} />
        </View>
        {this._howManydays()}
        <View style={{ height: 350, backgroundColor: "#FFDD55" }}>
          <Animated.ScrollView
            scrollEventThrottle={16}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { x: xOffset } } }],
              { useNativeDriver: true }
            )}
            horizontal
            pagingEnabled
            style={styles.scrollView}
          >
            <GestureRecognizer
              onSwipe={(direction, state) => this._onSwipe(direction, state)}
              onSwipeLeft={state => this._onSwipeLeft(state)}
              onSwipeRight={state => this._onSwipeRight(state)}
              config={config}
            >
              <Screen
                text={this.state.currentItem}
                index={this.state.currentItem}
              >
                {this._howManyhours()}
                {this._howManytimes()}
                {this._howManyminutes()}
                <Text style={styles.text}>__________________________</Text>
                <Text style={styles.text}>第{this.state.currentItem}天</Text>
                <Text style={styles.text}>
                  預約時間 {this.state.menuitems[1]}:{this.state.menuitems[2]}
                </Text>
              </Screen>
            </GestureRecognizer>
          </Animated.ScrollView>
        </View>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("BestGuide3")}
          >
            <Text style={styles.buttonNext}>下一步</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  modal: {
    bottom: 50,
    backgroundColor: "#ccc",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    height: 200,
    width: 200
  },
  modalText: {
    color: "black",
    fontSize: 20,
    margin: 5
  },
  buttonNext: {
    fontSize: 20,
    color: "#fddb92",
    margin: 10
  },
  border: {
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    margin: 10,
    width: "95%",
    backgroundColor: "transparent",
    borderWidth: 0.5,
    borderColor: "#fddb92",
    borderRadius: 10
  },
  text: {
    color: "#ccc",
    fontSize: 20,
    margin: 10
  },
  button: {
    color: "powderblue",
    fontSize: 15,
    margin: 10
  }
});

export default SomeComponent;
