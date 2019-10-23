import React, { Component } from "react";
import ActionButton from "react-native-action-button";
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
  Button,
  Platform
} from "react-native";
import SortableList from "react-native-sortable-list";
import * as ImagePicker from "expo-image-picker";
import Constants from "expo-constants";
import * as Permissions from "expo-permissions";

const window = Dimensions.get("window");

export default class Basic extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "我的行程",
    headerRight: (
      <View flexDirection="row" justifyContent="flex-end" width={250}>
        <TouchableOpacity
        onPress={() => navigation.navigate("DriverPackage1")}
        >
          <Text style={{ color: "#fff" }}>儲存</Text>
        </TouchableOpacity>
      </View>
    )
  });

  state = {
    packagename: "耕億車導帶你玩",
    area: "台中",
    image: null,
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
    let { image } = this.state;
    return (
      <View style={{ backgroundColor: "#001540", flex: 1 }}>
        <View style={{ flexDirection: "row", margin: 5 }}>
          <Text style={{ color: "#fff" }}>行程名稱: </Text>
          <Text style={{ color: "#fff" }}>{this.state.packagename}</Text>
        </View>
        <View style={{ flexDirection: "row", margin: 5 }}>
          <Text style={{ color: "#fff" }}>地區: </Text>
          <Text style={{ color: "#fff" }}>{this.state.area}</Text>
        </View>
        <View style={{ margin: 5 }}>
          <Text style={{ color: "#fff" }}>行程內容: </Text>
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
        <View
          style={{
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <View
            style={{
              flexDirection: "row"
            }}
          >
            <Text style={{ color: "#fff" }}>封面照片: </Text>
            <Button title="Pick an image " onPress={this._pickImage} />
          </View>
          {image && (
            <Image
              source={{ uri: image }}
              style={{ width: 200, height: 200 }}
            />
          )}
        </View>
      </View>
    );
  }
  componentDidMount() {
    this.getPermissionAsync();
  }

  getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== "granted") {
        alert("Sorry, we need camera roll permissions to make this work!");
      }
    }
  };

  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3]
    });

    console.log(result);

    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }
  };

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
    borderWidth: 0.5,
    borderColor: "#fddb92",
    height: 320,

    margin: 10
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: "white"
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
    height: 30,
    flex: 1,
    margin: 5
  },

  text: {
    fontSize: 15,
    color: "#222222"
  }
});
