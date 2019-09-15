import React, { Component } from "react";
import { StyleSheet, Text, Button, View, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import LottieView from "lottie-react-native";

export default class BestGuide3 extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "最佳車導"
  });
  componentDidMount() {
    this.animation.play(30,120);
    
  }

  resetAnimation = () => {
    this.animation.reset();
    this.animation.play();
  };
  render() {
    return (
      <View style={{flex:1,backgroundColor:"#001540"}}>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center",flexDirection:'row' }}
        >
          <LottieView
          ref={animation => {
            this.animation = animation;
          }}
          style={{
            width: 100,
            height: 100,
            backgroundColor: '#eee',
          }}
          source={require('./751-thumbs-up.json')}
           />
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate("BestGuide4")}
          >
            <Text style={styles.text}>依條件選車導</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" ,flexDirection:'row'}}
        >
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate("BestGuide5")}
          >
            <Text style={styles.text}>依行程選車導</Text>
          </TouchableOpacity>
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
  },
});
