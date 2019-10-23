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

  export default class DChangePhoto extends React.Component {
      static  navigationOptions = ({ navigation }) => ({
        title: "更改照片"   
      });
      render(){
          return(
              <View style={{ flex: 1 }} backgroundColor="#001540">

              
              <View style={{flex:1}}>
                  <Text style={styles.text}>
                  這裡要放上傳圖片
                  </Text>
              </View>
              <View style={{flex:1}}>
                  <TouchableOpacity style={styles.button} onPress={() => {this.props.navigation.navigate('DriverMember2')}}>
                      <Text style={styles.text}>
                          完成
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