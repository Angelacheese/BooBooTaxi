import React, { Component } from "react";
import { Icon } from "react-native-elements";
import {
  Animated,
  Easing,
  StyleSheet,
  Text,
  Image,
  View,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  Platform
} from "react-native";
import SortableList from "react-native-sortable-list";

const window = Dimensions.get("window");

export default class Basic extends Component {
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
    data: {
      0: {
        text: "東海大學"
      },
      1: {
        text: "東海乳品小棧"
      },
      2: {
        text: "磐頂教堂"
      },
      3: {
        text: "坪頂番薯姨"
      },
      4: {
        text: "鰲峰山公園"
      },
      5: {
        text: "大甲鎮瀾宮"
      },
      6: {
        text: "鐵砧山風景特定區"
      },
      7: {
        text: "花巷松林餐廳"
      }
    }
  };

  render() {
    return (
      <View
        style={{ backgroundColor: "#001540", flex: 1, alignItems: "center" }}
      >
        <View style={{ flexDirection: "row", margin: 10 }}>
          <Image
            source={require("./pic/[BestGuide7]ryu.jpg")}
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
        <View style={styles.container}>
          <SortableList
            contentContainerStyle={styles.contentContainer}
            data={this.state.data}
            scrollEnabled={false}
            renderRow={this._renderRow}
            onChangeOrder={data => {
              console.log(data);
            }}
          />
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={{ fontSize: 20, color: "white" }}>我要預約</Text>
        </TouchableOpacity>
      </View>
    );
  }

  _renderRow = ({ data, active }) => {
    return <Row data={data} active={active} />;
  };
}

class Row extends Component {
  constructor(props) {
    super(props);

    this._active = new Animated.Value(0);

    this._style = {
      ...Platform.select({})
    };
  }

  render() {
    const { data, active } = this.props;

    return (
      <Animated.View style={[styles.row, this._style]}>
        <Text style={styles.text}>{data.text}</Text>
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "white",
    margin: 10,

    height: 370
  },

  contentContainer: {
    width: 300
  },
  button: {
    borderWidth: 0.5,
    borderColor: "#fddb92",
    borderRadius: 20,
    width: 110,
    height: 35,
    margin: 5,
    justifyContent: "center",
    alignItems: "center"
  },

  row: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    height: 40,
    flex: 1,
    margin: 3
  },
  circle: {
    width: 150,
    height: 150,
    borderRadius: 75
  },
  text: {
    fontSize: 20,
    color: "#222222"
  }
});