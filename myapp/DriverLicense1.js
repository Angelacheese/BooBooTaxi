import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Image,
  StatusBar,
  ImageBackground,
  Button
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import Constants from "expo-constants";
import * as Permissions from "expo-permissions";

export default class DriverLicense1 extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: "執業資料"
  });
  constructor(props) {
    super(props);
    this.state = {
      image1: null,
      image2: null,
      image3: null
    };
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

  _pickImage = async num => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3]
    });

    console.log(result);

    if (!result.cancelled) {
      switch (num) {
        case 1:
          this.setState({ image1: result.uri });
          break;
        case 2:
          this.setState({ image2: result.uri });
          break;
        case 3:
          this.setState({ image3: result.uri });
          break;
      }
    }
  };
  render() {
    return (
      <View style={{ flex: 1 }} backgroundColor="#001540">
        <View
          style={{
            justifyContent: "center",
            flexDirection: "row"
          }}
        >
          <Text style={styles.text}>職業駕照：</Text>
          {this.state.image1 && (
            <Image
              source={{ uri: this.state.image1 }}
              style={{ width: 200, height: 200 }}
              margin={5}
            />
          )}
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this._pickImage(1);
            }}
          >
            <Text style={styles.text}>重新上傳駕照</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            justifyContent: "center",
            flexDirection: "row"
          }}
        >
          <Text style={styles.text}>Taxi執照：</Text>
          {this.state.image2 && (
            <Image
              source={{ uri: this.state.image2 }}
              style={{ width: 200, height: 200 }}
              margin={5}
            />
          )}
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this._pickImage(2);
            }}
          >
            <Text style={styles.text}>重新上傳執照</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            justifyContent: "center",
            flexDirection: "row"
          }}
        >
          <Text style={styles.text}>導遊證照：</Text>
          {this.state.image3 && (
            <Image
              source={{ uri: this.state.image3 }}
              style={{ width: 200, height: 200 }}
              margin={5}
            />
          )}
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this._pickImage(3);
            }}
          >
            <Text style={styles.text}>重新上傳證照</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={{
            backgroundColor: "#fddb92",
            borderRadius: 30,
            width: 100,
            height: 35,
            margin: 5,
            justifyContent: "center",
            alignItems: "center",
            borderWidth: 1,
            borderColor: "#fff"
          }}
        >
          <Text
            style={{
              fontSize: 15,
              color: "#3b5998"
            }}
          >
            申請驗證
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
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
  text: {
    color: "white",
    margin: 10
  }
});
