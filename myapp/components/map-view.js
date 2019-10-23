import React from "react";
import MapView from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
const GOOGLE_MAPS_APIKEY = "AIzaSyCSWFI44pq410V3H1Kz3wCFVpitPvH98Qs";

const MyMapView = props => {
  return (
    <MapView
      style={{ flex: 1 }}
      region={props.region}
      x={props.x}
      showsUserLocation={true}
    >
      <MapView.Marker coordinate={props.region} />
      <MapViewDirections
        origin={props.x}
        destination={props.region}
        apikey={GOOGLE_MAPS_APIKEY}
        strokeWidth={3}
        strokeColor="blue"
      />
      <MapView.Marker coordinate={props.x} />
    </MapView>
  );
};
export default MyMapView;