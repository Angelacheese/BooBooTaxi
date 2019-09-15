import React, { Component } from "react";
import {
  Dimensions,
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  Button,
  View,
  Animated,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Alert
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MapView, Permissions, Location } from "expo";
//import MapView from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
const GOOGLE_MAPS_APIKEY = "AIzaSyA3fMCJqnvm_dk-gJ1Yjrtey1QnjUtuB4A";

export default class App extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: "常用路線"
  });

  state = {
    text: "",
    origin: null,
    //預設目的地
    destination: {
      latitude: 25.037998,
      longitude: 121.431877,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421
    },
    time: null,
    coords: null,
    distance: null
  };

  async componentDidMount() {
    const { status } = await Permissions.getAsync(Permissions.LOCATION);
    if (status !== "granted") {
      const response = await Permissions.getAsync(Permissions.LOCATION);
    }
    const location = await Location.getCurrentPositionAsync();

    const { latitude, longitude } = location.coords;
    this.setState({
      origin: {
        latitude: latitude,
        longitude: longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      }
    });
  }

  async getDirections(startLoc, desLoc) {
    try {
      const resp = await fetch(
        `https://maps.googleapis.com/maps/api/directions/json?origin=${this.state.origin}&destination=${desLoc}&key=AIzaSyA3fMCJqnvm_dk-gJ1Yjrtey1QnjUtuB4A`
      );
      const respJson = await resp.json();
      const response = respJson.routes[0];
      const distanceTime = response.legs[0];
      this.state.distance = distanceTime.distance.text;
      this.state.time = distanceTime.duration.text;
      const points = Polyline.decode(
        respJson.routes[0].overview_polyline.points
      );
      this.state.coords = points.map(point => {
        return {
          latitude: point[0],
          longitude: point[1]
        };
      });
      this.setState({ coords, distance, time });
    } catch (error) {
      console.log("Error: ", error);
    }
  }

  render() {
    return (
      <View style={{ flex: 1 }} backgroundColor="#001540">
        <View style={{ flex: 1, flexDirection: "row" }}>
          <Text style={styles.text}>Estimated Time: 1hrs{this.state.time}</Text>
          <Text style={styles.text}>
            Estimated Distance: 100km{this.state.distance}
          </Text>
        </View>

        <View style={{ flex: 12 }}>
          {this.state.origin ? (
            <MapView
              showsUserLocation
              initialRegion={this.state.origin}
              style={StyleSheet.absoluteFill}
            >
              <View style={{ flexDirection: "row", backgroundColor: "white" }}>
                <Text style={styles.text}>目的地經度：124.33</Text>

                <Text style={styles.text}>目的地緯度：24.3</Text>
              </View>
              {this.state.destination ? (
                <MapView.Marker coordinate={this.state.destination}>
                  <Animated.Image
                    style={{
                      marginBottom: 35,
                      height: 50,
                      width: 50
                    }}
                    source={{
                      uri:
                        "http://www.myiconfinder.com/uploads/iconsets/256-256-76f453c62108782f0cad9bfc2da1ae9d.png"
                    }}
                  />
                </MapView.Marker>
              ) : null}
              {this.state.destination ? (
                <MapViewDirections
                  origin={this.state.origin}
                  destination={this.state.destination}
                  apikey={GOOGLE_MAPS_APIKEY}
                  strokeWidth={3}
                  strokeColor="blue"
                />
              ) : null}
            </MapView>
          ) : null}
        </View>
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
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
                  onPress: () => this.props.navigation.navigate("WaitingPage")
                }
              ]);
            }}
          >
            <View>
              <Text style={styles.buttonContainer}> 預約叫車 </Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
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
  //////
  buttonContainer: {
    fontSize: 20,
    color: "#fddb92"
  },

  text: {
    color: "#ccc",
    fontSize: 15,
    margin: 10
  }
});
