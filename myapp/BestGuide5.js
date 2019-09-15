import React, { Component } from 'react';
import {

  StyleSheet,
  Text,
 
  Button,
  View,
  TouchableOpacity,
  FlatList,
  Alert,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { LinearGradient } from "expo-linear-gradient";
 class BestGuide5 extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        title: "最佳車導"
      });
    constructor(props) {
        super(props);
    
        this.state = {
          GridListItems: [
            { key: "A車導帶你玩" },
            { key: "B" },
            { key: "C" },
            { key: "D" },
            { key: "E" },
            { key: "F" },
            { key: "G" },
            { key: "H" },
           
          ]
        };
      }
      GetGridViewItem(item) {
        // Alert.alert(item);
        this.props.navigation.navigate("BestGuide6")
      }
  
 
  
  render() {
    return (
        
            <View >
              <LinearGradient
          colors={["#fddb92", "#ffecd2",'#fdfbfb']}
          style={{
            width: "100%",
            height: "100%"
          }}
        >
            <ScrollView>
                <View style={{flex:2}}>

          
                <Text style={{height:50,width:'100%',color:'orange',textAlign:'center',fontSize:40}}>
                     最佳車導
                </Text>
            </View>
            <View style={{flex:1,flexDirection:'row'}}>


            <Text style={{height:30,width:'100%',color:'black',textAlign:'left',fontSize:20}}>
              車導私房行程......
            </Text>

            </View>
            <View >
            <FlatList
            data={ this.state.GridListItems }
            renderItem={ ({item}) =>
              <View style={styles.GridViewContainer}>
               <Text style={styles.GridViewTextLayout} onPress={this.GetGridViewItem.bind(this, item.key)} > {item.key} </Text>
              </View> }
            numColumns={1}
         />
            
                 

            </View>
            
     
            

            </ScrollView>
            </LinearGradient>
            </View>
        
        
    );
  }
}
const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
    
  buttonContainer:{
    margin:30,
    backgroundColor:'black'
  },
  GridViewContainer: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width:300,
    margin: 20,
    backgroundColor: 'white',
    opacity:0.5
 },
 GridViewTextLayout: {
    fontSize: 20,
    fontWeight: 'bold',
    justifyContent: 'center',
    color: 'black',
    padding: 10,
  },
  
  });



export default BestGuide5;