import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Alert
} from "react-native";

import MyMapView from "../components/DriverHome-mapView";
import { getLocation } from "../services/location-service";

class MapContainer extends React.Component {
  state = {};

  constructor(props) {
    super(props);
    this.state = {
      region: {},
      area: {},
      add: " "
    };
  }

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

  getCoordsFromName(loc, dat) {
    this.setState({
      add: dat
    });
    this.updateState({
      latitude: loc.lat,
      longitude: loc.lng
    });
  }

  getCoordsFromEnd(end) {
    this.updateStateEnd({
      latitude: end.lat,
      longitude: end.lng
    });
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        {this.state.region[("latitude", "longitude")] ? (
          <MyMapView x={this.state.area} region={this.state.region} />
        ) : null}
      </View>
    );
  }
}

export default MapContainer;
