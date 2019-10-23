import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Modal,
  TouchableHighlight
} from "react-native";

export default class DriverSignUp extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: "註冊"
  });
  constructor(props) {
    super(props);

    this.state = {
      ageSelection: " ",
      ageDisplayed: false,
      yearSelection: " ",
      yearDisplayed: false
    };
  }
  setAge(newValue) {
    this.setState({
      ageSelection: newValue
    });

    this.age();
  }
  age() {
    this.setState({
      ageDisplayed: !this.state.ageDisplayed
    });
  }
  setYear(newValue) {
    this.setState({
      yearSelection: newValue
    });
    this.year();
  }
  year() {
    this.setState({
      yearDisplayed: !this.state.yearDisplayed
    });
  }

  render() {
    const age = [
      {
        title: "20-30",
        value: "20-30"
      },
      {
        title: "31-40",
        value: "31-40"
      },
      {
        title: "41-50",
        value: "41-50"
      },
      {
        title: "51-60",
        value: "51-60"
      },
      {
        title: "61-65",
        value: "61-65"
      }
    ];
    const year = [
      {
        title: "0-5年",
        value: "0-5年"
      },
      {
        title: "5-10年",
        value: "5-10年"
      },
      {
        title: "10年以上",
        value: "10年以上"
      }
    ];

    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Text style={styles.text}>年紀： {this.state.ageSelection}</Text>
          <Button onPress={() => this.age()} title={"請選擇年紀"} />

          <Modal
            visible={this.state.ageDisplayed}
            animationType={"slide"}
            transparent={true}
          >
            <View style={[styles.view]}>
              <Text>請選擇年紀</Text>
              {age.map((value, index) => {
                return (
                  <TouchableHighlight
                    key={index}
                    onPress={() => this.setAge(value.value)}
                    style={{ paddingTop: 4, paddingBottom: 4 }}
                  >
                    <Text>{value.title}</Text>
                  </TouchableHighlight>
                );
              })}

              <TouchableHighlight
                onPress={() => this.age()}
                style={{ paddingTop: 4, paddingBottom: 4 }}
              >
                <Text style={{ color: "#999" }}>取消</Text>
              </TouchableHighlight>
            </View>
          </Modal>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.text}>年資： {this.state.yearSelection}</Text>
          <Button onPress={() => this.year()} title={"請選擇年資"} />

          <Modal
            visible={this.state.yearDisplayed}
            animationType={"slide"}
            transparent={true}
          >
            <View style={[styles.view]}>
              <Text>請選擇年資</Text>
              {year.map((value, index) => {
                return (
                  <TouchableHighlight
                    key={index}
                    onPress={() => this.setYear(value.value)}
                    style={{ paddingTop: 4, paddingBottom: 4 }}
                  >
                    <Text>{value.title}</Text>
                  </TouchableHighlight>
                );
              })}

              <TouchableHighlight
                onPress={() => this.year()}
                style={{ paddingTop: 4, paddingBottom: 4 }}
              >
                <Text style={{ color: "#999" }}>取消</Text>
              </TouchableHighlight>
            </View>
          </Modal>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.text}>熟悉地區：</Text>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.text}>擅長語言：</Text>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.text}>特色：</Text>
        </View>

        <Button
          title="下一步"
          onPress={() => this.props.navigation.navigate("DriverLogin3")}
        ></Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightyellow",
    alignItems: "center",
    justifyContent: "center"
  },

  view: {
    margin: 20,
    padding: 20,
    backgroundColor: "#efefef",
    bottom: 20,
    left: 20,
    right: 20,
    alignItems: "center",
    position: "absolute",
    fontSize: 20
  },
  inputContainer: {
    backgroundColor: "#FFFFFF",
    borderRadius: 30,
    borderStyle: "solid",
    borderColor: "black",
    borderWidth: 1,
    borderBottomWidth: 1,
    width: 350,
    height: 50,
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center"
  },
  inputs: {
    height: 50,
    marginLeft: 16,
    borderBottomColor: "#FFFFFF",
    flex: 1
  },
  text: {
    color: "black",
    textAlign: "left",
    fontSize: 15,
    margin: 10
  }
});
