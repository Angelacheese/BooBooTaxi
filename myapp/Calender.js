import React, { Component } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import CalendarPicker from "react-native-calendar-picker";

export default class App extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "行事曆"
  });
  constructor(props) {
    super(props);
    this.state = {
      selectedStartDate: null
    };
    this.onDateChange = this.onDateChange.bind(this);
  }

  onDateChange(date) {
    this.setState({
      selectedStartDate: date
    });
  }
  render() {
    const { selectedStartDate } = this.state;
    const startDate = selectedStartDate ? selectedStartDate.toString() : "";
    return (
      <ScrollView style={{ flex: 1 }} backgroundColor="#001540">
        <View style={{ marginTop: 100,backgroundColor:'white' }}>
          <CalendarPicker onDateChange={this.onDateChange} />

          <View>
            <Text>SELECTED DATE:{startDate}</Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}
