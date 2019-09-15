import React from "react";
import { Alert, TextInput, View, TouchableOpacity, Text } from "react-native";
import { StyleSheet, TouchableWithoutFeedback } from "react-native";
import MapView from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import { LinearGradient } from "expo-linear-gradient";

var origin = {
  latitude: 25.035852,
  longitude: 121.389898,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421
};
var destination = {
  latitude: 25.037998,
  longitude: 121.431877,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421
};
const GOOGLE_MAPS_APIKEY = "AIzaSyC8QWZpneiLanpS3HeP4iaIBfVkB76FSeY";

export default class CommonRoute2 extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: "即時叫車",
    headerBackTitle: "Back"
  });

  constructor(props) {
    super(props);
    this.state = { text: "press your location" };
  }

  render() {
    input = ["常用路線名稱:", "地址:", "景點:"];

    return (
      <View style={{ flex: 1 }}>
        <LinearGradient
          colors={["#fddb92", "#ffecd2", "#fdfbfb"]}
          style={{
            width: "100%",
            height: "100%"
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <Text
              style={{
                margin: 10,
                fontSize: 15
              }}
            >
              上車地點
            </Text>
            <TextInput
              style={{ height: 30, width: 100, borderColor: "gray" }}
              placeholder="請輸入..."
              onChangeText={t => this.setState({ t })}
              value={this.state.t}
            />
          </View>

          <View style={{ flex: 7, alignItems: "center" }}>
            <MapView
              initialRegion={{
                latitude: 25.037998,
                longitude: 121.431877,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421
              }}
              style={StyleSheet.absoluteFill}
            >
              <MapView.Marker coordinate={origin} />
              <MapView.Marker coordinate={destination} />
              <MapViewDirections
                origin={{
                  latitude: 25.035852,
                  longitude: 121.389898,
                  latitudeDelta: 0.0922,
                  longitudeDelta: 0.0421
                }}
                destination={{
                  latitude: 25.037998,
                  longitude: 121.431877,
                  latitudeDelta: 0.0922,
                  longitudeDelta: 0.0421
                }}
                apikey={GOOGLE_MAPS_APIKEY}
                strokeWidth={3}
                strokeColor="hotpink"
              />
            </MapView>
          </View>

          <View style={{ flex: 1, alignItems: "center" }}>
            <TouchableWithoutFeedback
              style={{ backgroundColor: "powderblue" }}
              onPress={() => {
                Alert.alert("提示", "是否確定叫車", [
                  {
                    text: "取消",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                  },
                  {
                    text: "確定",
                    onPress: () =>
                      this.props.navigation.navigate("CommonRoute3")
                  }
                ]);
              }}
            >
              <View>
                <Text style={buttons.buttontext}> 用此路線叫車 </Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </LinearGradient>
      </View>
    );

    /* return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>We need your permission!</Text>
      </View>
    );*/
  }
}

//////////////////

const buttons = StyleSheet.create({
  // button: {
  //   marginBottom: 10,
  //   backgroundColor: "transparent",

  //   width: 200,
  //   height: 50,
  //   alignItems: "center",
  //   justifyContent: "center"
  // },
  buttontext: {
    marginTop: 10,
    color: "blue",
    fontSize: 20,
    fontWeight: "normal"
  },
  area: {
    margin: 10,
    backgroundColor: "transparent",
    borderColor: "transparent",
    borderLeftColor: "white",
    borderWidth: 2,
    width: 100,
    height: 50,
    alignItems: "center",
    justifyContent: "center"
  }
});
