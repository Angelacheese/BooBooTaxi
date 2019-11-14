import * as React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

export default class App extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: "訂單資訊"
  });
  constructor(props) {
    super(props);
    this.state = {
      ordertype: "最佳車導",
      client: "鍾小姐",
      orderday: "2019-11-08",
      orderno: "1234567",
      location: "桃園市龜山區文化一路",
      travelarea: "台中市",
      time: "2019-11-20 08:00",
      howmanypeople: "3",
      howmanyday: "1",
      hour: "9",
      endtime: "17:00",
      language: "英文",
      feature: "美食達人",
      other: "希望給我安靜的搭車時光"
    };
  }
  render() {
    return (
      <View style={{ flex: 1 }} backgroundColor="#001540">
        <View
          style={{
            justifyContent: "center",
           
         
            borderWidth: 0.5,
            borderColor: "#fddb92",
            borderRadius: 20,
            height: 550,
            margin: 30
          }}
        >
          <Text style={[styles.text]}>
            {this.state.ordertype}訂單{"\n"}
           </Text> 
           <Text style={{color:"white",fontSize:17}}>
            {"\n"}
            {this.state.client},{this.state.orderday}
            {"\n"}
            {"\n"}
            訂單編號：{this.state.orderno}
            {"\n"}
            {"\n"}
            上車地點：{this.state.location}
            {"\n"}
            {"\n"}
            旅遊地點：{this.state.travelarea}
            {"\n"}
            {"\n"}
            上車時間：{this.state.time}
            {"\n"}
            {"\n"}
            搭車人數：{this.state.howmanypeople}人{"\n"}
            {"\n"}
            搭車天數：{this.state.howmanyday}天{"\n"}
            {"\n"}
            預約時數：{this.state.hour}小時{"\n"}
            {"\n"}
            預約結束時間：{this.state.endtime}
            {"\n"}
            {"\n"}
            語言要求：{this.state.language}
            {"\n"}
            {"\n"}
            特色：{this.state.feature}
            {"\n"}
            {"\n"}
            備註：{this.state.other}
          </Text>
        </View>
        <View style={{ flexDirection: "row", margin: 30 }}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.navigate("DriverHome");
            }}
          >
            <Text style={styles.btntext}>接受訂單</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.navigate("DriverHome");
            }}
          >
            <Text style={styles.btntext}>拒絕訂單</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  text: {
    color: "white",
    fontSize: 20,
  },
  
  button: {
    borderWidth: 0.5,
    borderColor: "#fddb92",
    borderRadius: 20,
    width: 150,
    height: 40,
    
    justifyContent: "center",
    alignItems: "center"
  },
  btntext: {
    color: "white",
    
    fontSize: 17
  },
});
