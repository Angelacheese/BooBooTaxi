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
import DatePicker from "react-native-datepicker";
import { Dropdown } from "react-native-material-dropdown";

class SomeComponent extends Component {
  static navigationOptions = () => ({
    title: "最佳車導"
  });
  constructor(props) {
    super(props);
    this.state = {
      place: " ",
      person: " ",

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

  _Places(newValue) {
    this.setState({
      place: newValue
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
      <View margin={5}>
        <Dropdown
          label="旅遊地點"
          data={pickerValues}
          onChangeText={title => this._Places(title)}
          textColor="#ccc"
          baseColor="white"
          selectedItemColor="powderblue"
        />
      </View>
    );
  }

  _People(newValue) {
    this.setState({
      person: newValue
    });
  }
  _howManypeople() {
    const person = [
      { value: "1" },
      { value: "2" },
      { value: "3" },
      { value: "4" },
      { value: "5" },
      { value: "6" },
      { value: "7" },
      { value: "取消" }
    ];
    return (
      <View margin={5}>
        <Dropdown
          label="包車人數"
          data={person}
          onChangeText={value => this._People(value)}
          textColor="#ccc"
          baseColor="white"
          selectedItemColor="powderblue"
        />
      </View>
    );
  }

  _Days(newValue) {
    this.setState({
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
      <View margin={5}>
        <Dropdown
          label="預約天數"
          data={day}
          onChangeText={value => this._Days(value)}
          textColor="#ccc"
          baseColor="white"
          selectedItemColor="powderblue"
        />
      </View>
    );
  }
  _Hours(newValue) {
    const arraycopy = [...this.state.allDays];
    arraycopy[this.state.currentItem].splice(0, 1, newValue);

    this.setState({
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
      { title: "取消", value: 0 }
    ];
    return (
      <View margin={5}>
        <Dropdown
          label="預約時數"
          data={hour}
          onChangeText={value => this._Hours(value)}
          textColor="#ccc"
          baseColor="white"
          selectedItemColor="powderblue"
        />
      </View>
    );
  }
  _Times(newValue) {
    const arraycopy = [...this.state.allDays];
    arraycopy[this.state.currentItem].splice(1, 1, newValue);

    this.setState({
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
      <View margin={5}>
        <Dropdown
          label="時"
          data={time}
          onChangeText={value => this._Times(value)}
          textColor="#ccc"
          baseColor="white"
          selectedItemColor="powderblue"
        />
      </View>
    );
  }
  _Minutes(newValue) {
    const arraycopy = [...this.state.allDays];
    arraycopy[this.state.currentItem].splice(2, 1, newValue);

    this.setState({
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
      <View margin={5}>
        <Dropdown
          label="分"
          data={minute}
          onChangeText={value => this._Minutes(value)}
          textColor="#ccc"
          baseColor="white"
          selectedItemColor="powderblue"
        />
      </View>
    );
  }

  _onSwipeRight(gestureState) {
    this.setState({
      currentItem: Math.max(this.state.currentItem - 1, 1),
      menuitems: [...this.state.allDays[this.state.currentItem]]
    });
  }

  _onSwipeLeft(gestureState) {
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
      <View style={{ flex: 1, backgroundColor: "#001540" }}>
        {this._wherePlaces()}
        {this._howManypeople()}
        {this._howManydays()}

        <GestureRecognizer
          onSwipe={(direction, state) => this._onSwipe(direction, state)}
          onSwipeLeft={state => this._onSwipeLeft(state)}
          onSwipeRight={state => this._onSwipeRight(state)}
          config={config}
        >
          <View
            style={{
              margin: 10,
              height: 350,
              top: 10,
              width: "96%",
              backgroundColor: "transparent",
              borderWidth: 1,
              borderColor: "#fddb92",
              borderRadius: 10
            }}
          >
            <Text style={styles.text}>第{this.state.currentItem}天</Text>
            {this._howManyhours()}
            {this._howManytimes()}
            {this._howManyminutes()}

            <Text style={styles.text}>
              預約時間 {this.state.menuitems[1]}:{this.state.menuitems[2]}
            </Text>
          </View>
        </GestureRecognizer>
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
  buttonNext: {
    fontSize: 20,
    color: "#fddb92",
    margin: 10
  },

  text: {
    color: "white",
    fontSize: 20,
    margin: 10
  }
});

export default SomeComponent;
