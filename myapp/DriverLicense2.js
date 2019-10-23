import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,

  } from "react-native";

  export default class DLicense2 extends React.Component {
      static  navigationOptions = ({ navigation }) => ({
        title: "編輯執業資料"   
      });
      render(){
          return(
              <View style={{ flex: 1 }} backgroundColor="#001540">

              
              <View style={{flex:1}}>
                  <Text style={styles.text}>
                  這裡放上傳駕照
                  </Text>
              </View>
              <View style={{flex:1}}>
                  <Text style={styles.text}>
                  這裡要放上傳計程車執業
                  </Text>
              </View>
              <View style={{flex:1}}>
                  <Text style={styles.text}>
                  這裡要放上傳導遊證照
                  </Text>
              </View>
              <View style={{flex:1}}>
                  <TouchableOpacity style={styles.button}
                   onPress={() => {this.props.navigation.navigate('DriverLicense1')}}
                  >
                      <Text style={styles.text}>
                          編輯
                      </Text>
                  </TouchableOpacity>
              </View>
              <View style={{flex:1}}>
                  <TouchableOpacity style={styles.button}
                   onPress={() => {this.props.navigation.navigate('DriverMember1')}}
                   >
                      <Text style={styles.text}>
                          回上一頁
                      </Text>
                  </TouchableOpacity>
              </View>
              </View>
          )
      }
  }
  const styles = StyleSheet.create({
      button:{
        borderWidth: 0.5,
        borderColor: "#fddb92",
        borderRadius: 20,
        width: 110,
        height: 35,
        margin: 5,
        justifyContent: "center",
        alignItems: "center"
      },
      text:{
        color: "white",
        margin: 10
      },
  })