import React from "react";
import { View, Text } from "react-native";
import MapInput from "../components/map-input";
import MyMapView from "../components/PassengerInmediateCall-mapView";
import { getLocation } from "../services/location-service";

class MapContainer extends React.Component {
  state = {
    region: {},
    area: {},
    text: " "
  };

  componentDidMount() {
    this.getInitialState();
  }

  getInitialState() {
    getLocation().then(data => {
      this.updateState({
        latitude: data.latitude,
        longitude: data.longitude
      });
    });
  }

  updateState(location) {
    this.setState({
      region: {
        latitude: location.latitude,
        longitude: location.longitude,
        latitudeDelta: 0.0023,
        longitudeDelta: 0.0023
      }
    });
  }

  updateStateEnd(end) {
    this.setState({
      area: {
        latitude: end.latitude,
        longitude: end.longitude,
        latitudeDelta: 0.0023,
        longitudeDelta: 0.0023
      }
    });
  }
  getCoordsFromName(loc) {
    this.updateState({
      latitude: loc.lat,
      longitude: loc.lng
    });
  }

  getCoordsFromEnd(end, text) {
    this.setState({
      text: text
    });
    this.updateStateEnd({
      latitude: end.lat,
      longitude: end.lng
    });
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <MapInput
            notifyChange={(end, text) => this.getCoordsFromEnd(end, text)}
          />
        </View>
        {this.state.region[("latitude", "longitude")] ? (
          <MyMapView x={this.state.area} region={this.state.region} />
        ) : null}
        <Text style={{ color: "white", fontSize: 20, top: 5 }}>
          確認目的地: {this.state.text}
        </Text>
      </View>
    );
  }
}

export default MapContainer;
