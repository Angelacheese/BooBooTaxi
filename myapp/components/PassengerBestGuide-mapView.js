import React from "react";
import MapView from "react-native-maps";

import { Dimensions } from "react-native";
const GOOGLE_MAPS_APIKEY = "AIzaSyCSWFI44pq410V3H1Kz3wCFVpitPvH98Qs";

var { width, height } = Dimensions.get("window");
export default MyMapView = props => {
  return (
    <MapView
      style={{ flex: 1 }}
      region={props.region}
      showsUserLocation={true}
      x={props.x}
    >
  
      <MapView.Marker coordinate={props.region} />
    </MapView>
  );
};
