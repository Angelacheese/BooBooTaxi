import React from "react";
import { View, Text } from "react-native";
import MapInput from "../components/map-input";
import MyMapView from "../components/map-view";
import { getLocation } from "../services/location-service";

class MapContainer extends React.Component {
  state = {
    region: {},
    area: {}
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

  getCoordsFromEnd(end) {
    this.updateStateEnd({
      latitude: end.lat,
      longitude: end.lng
    });
  }

  /*
  onMapRegionChange(region) {
    this.setState({ region });
  }
  */

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View
          style={{
            flex: 0.5,
            flexDirection: "row",
            justifyContent: "center"
          }}
        >
          <View style={{ top:10 }}>
            <Text style={{ color: "white" }}>上車地:</Text>
          </View>
          <MapInput notifyChange={loc => this.getCoordsFromName(loc)} style={{color:'#ccc',}} />
        </View>
        <View
          style={{
            flex: 0.5,
            flexDirection: "row",
            justifyContent: "center"
          }}
        >
          <View style={{  top:10 }}>
            <Text style={{ color: "white" }}>目的地:</Text>
          </View>
          <MapInput notifyChange={end => this.getCoordsFromEnd(end)} />
        </View>
        {this.state.region[("latitude", "longitude")] ? (
          <View style={{ flex: 1 }}>
            <MyMapView
              x={this.state.area}
              region={this.state.region}
              //onRegionChange={reg => this.onMapRegionChange(reg)}
            />
          </View>
        ) : null}
      </View>
    );
  }
}

export default MapContainer;
