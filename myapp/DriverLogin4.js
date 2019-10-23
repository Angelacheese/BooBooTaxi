import React from 'react';
import { StyleSheet, Text, View, Button,  TouchableHighlight } from 'react-native';



export default class DriverSignUp extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        title: "註冊"   
      });
    
    render(){

    return (
      
        <View style={styles.container}>
    

        <View style={styles.inputContainer}>
        <Text style={styles.text}>職業駕照：</Text>

        </View>
        <View style={styles.inputContainer}>
        <Text style={styles.text}>計程車執業登記證：</Text>

        </View>
        <View style={styles.inputContainer}>
        <Text style={styles.text}>導遊執照：</Text>

        </View>
        
        <Button title='下一步' onPress={()=>this.props.navigation.navigate("Success")} ></Button>
        
        
  
    
      </View>
      
      
    );
    }
}
      
  

  


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightyellow',
    alignItems: 'center',
    justifyContent: 'center',
  },

  view:{
        margin: 20, padding: 20,
        backgroundColor: '#efefef',
        bottom: 20,
        left: 20,
        right: 20,
        alignItems: 'center',
        position: 'absolute' ,
        fontSize:20
  },
  inputContainer: {
     
      backgroundColor: '#FFFFFF',
      borderRadius:30,
      borderStyle:'solid',
      borderColor:'black',
      borderWidth:1,
      borderBottomWidth: 1,
      width:350,
      height:50,
      marginBottom:20,
      flexDirection: 'row',
      alignItems:'center'
  },
inputs:{
    height:50,
    marginLeft:16,
    borderBottomColor: '#FFFFFF',
    flex:1,
},


});