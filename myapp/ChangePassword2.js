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

  export default class DChangePassword extends React.Component {
      static  navigationOptions = ({ navigation }) => ({
        title: "更改密碼"   
      });
      render(){
          return(
              <View style={{ flex: 1 }} backgroundColor="#001540">

              
              <View style={{flexDirection:'row'}}>
                  <Text style={styles.text}>
                  請輸入新密碼：
                  </Text>
                  <TextInput placeholderTextColor="white"  style={styles.textInput}
                   secureTextEntry={true}
                   placeholder="請輸入新密碼"></TextInput>
              </View>
              <View style={{flexDirection:'row'}}>
                  <Text style={styles.text}>
                  請再次輸入新密碼：
                  </Text>
                  <TextInput placeholderTextColor="white"  style={styles.textInput}
                   secureTextEntry={true}
                   placeholder="請再次輸入新密碼"></TextInput>
              </View>
              <View >
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
        height: 40,
        margin: 5,
        justifyContent: "center",
        alignItems: "center"
      },
      text:{
        color: "white",
        margin: 10,
        fontSize:20,
      },
      textInput: {
        height: 40,
        width: 100,
        borderColor: "#ccc",
        borderStyle: "dashed",
        borderWidth: 0.5,
        color: "#ccc",
        
      }
  })