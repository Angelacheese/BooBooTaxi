import React, { Component } from "react";
import { Text, View, StyleSheet, Dimensions } from "react-native";

import { BarChart } from "react-native-chart-kit";

export default class ChartsSample extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "歷程記錄"
  });
  render() {
    return (
      <View style={{ backgroundColor: "#001540", flex: 1 }}>
        <Text style={{ color: "#fff" }}>這裡會列出這段期間所有訂單紀錄</Text>
        <Text style={{ color: "#fff" }}>這裡會列出這段期間所有訂單紀錄</Text>
        <Text style={{ color: "#fff" }}>這裡會列出這段期間所有訂單紀錄</Text>
        <Text style={{ color: "#fff" }}>這裡會列出這段期間所有訂單紀錄</Text>
        <Text style={{ color: "#fff" }}>這裡會列出這段期間所有訂單紀錄</Text>
        <BarChart
          data={{
            labels: [
              "台中火車站",
              "彩虹眷村",
              "審計新村",
              "台中美術館",
              "秋虹谷",
              "科博館"
            ],
            datasets: [
              {
                data: [10, 5, 20, 8, 7, 13]
              }
            ]
          }}
          width={Dimensions.get("window").width} // from react-native
          height={300}
          chartConfig={{
            backgroundColor: "#0000CD",
            backgroundGradientFrom: "#00008B",
            backgroundGradientTo: "#26ddff",
            decimalPlaces: 0, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            barPercentage: 0.5,
            style: {
              borderRadius: 16
            },
            propsForDots: {
              r: "6",
              strokeWidth: "5",
              stroke: "#ffa726"
            }
          }}
          verticalLabelRotation={30}
          style={{
            top: 20,
            marginVertical: 8,
            borderRadius: 16
          }}
        />
     
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
