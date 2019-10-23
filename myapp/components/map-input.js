import React from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { Dimensions,View } from "react-native";
var { width, height } = Dimensions.get("window");

class MapInput extends React.Component {
  render() {
    return (
    
      <GooglePlacesAutocomplete
        placeholder="請輸入目的地..."
        minLength={2}
        autoFocus={false}
        returnKeyType={"search"}
        listViewDisplayed={false}
        fetchDetails={true}
        onPress={(data, details = null) => {
          this.props.notifyChange(
            details.geometry.location,
            data.terms[0].value
          );
          console.log(data.terms[0].value);
        }}
        query={{
          key: "AIzaSyCSWFI44pq410V3H1Kz3wCFVpitPvH98Qs",
          language: "zh-TW"
        }}
        styles={{
          textInputContainer: {
            width: width,
            
          },
          description: {
            color: "white"
          },
          predefinedPlacesDescription: {
            color: "#1faadb"
          }
        }}
      />
    
    );
  }
}
export default MapInput;
