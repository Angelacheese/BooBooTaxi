import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Button,
  View,
  Image,
  FlatList,
  Alert, TouchableWithoutFeedback

} from 'react-native';


class BestGuide6 extends Component {
  showAlert() {
    Alert.alert('是否確認預約',' '
  [{onPress:() => this.props.navigation.navigate("WaitingPage")}]
);
  }
  constructor(props) {
    super(props);

    this.state = {
      ListItems: [
        { key: "東豐自行車綠廊" },
        { key: "后豐鐵馬道" },
        { key: "情人谷" },
        { key: "大甲溪花樑鋼橋" },
        { key: "薰衣草森林心之芳庭" },
        { key: "砲台山" },
        { key: "台中公園" },
        
       
      ]
    };
  }
  

  render() {
        

    return (
      <View style={{flex:1,backgroundColor:'lightyellow' }}>
         

          <View >
          <Text style={{width:'100%',color:'orange',textAlign:'center',fontSize:40}}>
            最佳車導
          </Text>
          </View>
          
          
 
        <View style={{flexDirection:'row'}}>
        <Image source={{uri:'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/00000-1559050214.jpg?crop=0.502xw:1.00xh;0,0&resize=640:*' }}
        style={styles.pic}>

        </Image>
        <Text style={{fontSize:20,justifyContent:'center',alignContent:'center'}}>
        
          主打：北台中
          {'\r\n'}NT800起/人
        </Text>
          

        </View>
        <View style={styles.container} >
        <Text style={{justifyContent:'center',alignItems:'center'}}>
          上車時間：08:00
        </Text>
        <FlatList
            data={ this.state.ListItems }
            renderItem={ ({item}) =>
              <View style={styles.list}>
               <Text > {item.key} </Text>
              </View> }
            
         />
         <Text style={{justifyContent:'center',alignItems:'center'}}>
           結束時間：16:00
         </Text>


        </View>
        <TouchableWithoutFeedback
              style={ { backgroundColor: "powderblue" }}
              onPress={() => {
                Alert.alert("提示", "是否確定叫車", [
                  {
                    text: "取消",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                  },
                  {
                    text: "確定",
                    onPress: () =>
                      this.props.navigation.navigate("WaitingPage")
                  }
                ]);
              }}
            >
              <View>
                <Text style={buttons.buttontext}> 預約叫車 </Text>
              </View>
            </TouchableWithoutFeedback>
          
      </View>
    );
    
  }

 
}


const styles = StyleSheet.create({
  container:{
    
    justifyContent: 'center',
    alignItems: 'center'
  },
    
  buttonContainer:{
    margin:30,
    
  },
  pic:{
    height:200,
    width:200,
    justifyContent:'center',
    alignItems:'center'
  },
  list:{
    width:300,
    padding:10,
    marginBottom:10,
    backgroundColor:"#FFDDAA",
    justifyContent:'center',
    alignItems:'center',
  }

});
const buttons = StyleSheet.create({
    // button: {
    //   marginBottom: 10,
    //   backgroundColor: "transparent",
  
    //   width: 200,
    //   height: 50,
    //   alignItems: "center",
    //   justifyContent: "center"
    // },
    buttontext: {
      marginTop:10,
      color: "blue",
      fontSize: 20,
      fontWeight: "normal"
    },
    area: {
      margin: 10,
      backgroundColor: "transparent",
      borderColor: "transparent",
      borderLeftColor: "white",
      borderWidth: 2,
      width: 100,
      height: 50,
      alignItems: "center",
      justifyContent: "center"
    }
  });
export default BestGuide6;