import React, { Component } from 'react';
import {
    Text,
    Button,
    View,
    StyleSheet
}from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
class CommonRoute3 extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        title: "常用路線",
        headerBackTitle: 'Back'
      })
      
    render(){
        return(
            <View>
             <LinearGradient
          colors={["#fddb92", "#ffecd2", "#fdfbfb"]}
          style={{
            width: "100%",
            height: "100%"
          }}
        >
                <View style={{flex:1}}>

                </View>
                <View style={{flex:2,alignItems:'center'}}>
                    <Text >
                    車隊：
                    </Text>
                    <Text >
                    {'\r\n'}車牌號碼：
                    </Text>
                    <Text>
                    {'\r\n'}分鐘後到達
                    </Text>
                   {/* style={{height:200,width:100,color:'black',textAlign:'center',fontSize:20}}*/}
                </View>

                <View style={{flex:1}}>
                    <Button 
                    style={styles.buttonContainer} title='與司機聯絡'
                    onPress={()=>this.props.navigation.navigate()}>

                    </Button>
                    <Button 
                    style={styles.buttonContainer} title='回首頁'
                    onPress={() => this.props.navigation.navigate("Home")}>

                    </Button>

                </View>
                </LinearGradient>

            </View>
        )
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

})
export default CommonRoute3;