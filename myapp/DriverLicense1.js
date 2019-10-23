import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    TouchableOpacity,
    TextInput,
    Image,
    StatusBar,
    ImageBackground
  } from "react-native";

  export default class DriverLicense1 extends React.Component {
      static  navigationOptions = ({ navigation }) => ({
        title: "執業資料"   
      });
      render(){
          return(
              <View style={{ flex: 1 }} backgroundColor="#001540">

              
              <View style={{flex:1}}>
                  <Text style={styles.text}>
                  這裡要放駕照
                  </Text>
              </View>
              <View style={{flex:1}}>
                  <Text style={styles.text}>
                  這裡要放計程車執業
                  </Text>
              </View>
              <View style={{flex:1}}>
                  <Text style={styles.text}>
                  這裡要放導遊證照
                  </Text>
              </View>
              <View style={{flex:1}}>
                  <TouchableOpacity style={styles.button} onPress={() => {this.props.navigation.navigate('DriverLicense2')}}>
                      <Text style={styles.text}>
                          編輯
                      </Text>
                  </TouchableOpacity>
              </View>
              <View style={{flex:1}}>
                  <TouchableOpacity style={styles.button} onPress={() => {this.props.navigation.navigate('DriverMember1')}}>
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