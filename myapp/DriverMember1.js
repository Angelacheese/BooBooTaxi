import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity,Image  } from 'react-native';

export default class DM extends React.Component {
    render(){
        return(
            <View style={styles.container}>
            <View>
                <Image  source={{uri:'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/00000-1559050214.jpg?crop=0.502xw:1.00xh;0,0&resize=640:*' }}
                 style={styles.pic}></Image>
            </View>
            
                <TouchableOpacity style={styles.button}  onPress={() => {this.props.navigation.navigate('DriverMember2')}}>
                <Text>會員資料</Text>
                </TouchableOpacity>
            
                <TouchableOpacity style={styles.button}  
                onPress={() => {this.props.navigation.navigate('DriverLicense1')}}
                >
                <Text>執業資料</Text>  
                </TouchableOpacity>
           
                <TouchableOpacity style={styles.button}>
                <Text>歷程記錄</Text>  
                </TouchableOpacity>
         
                <TouchableOpacity style={styles.button}>
                <Text>我的行程</Text>  
                </TouchableOpacity>
            
                <TouchableOpacity style={styles.button}>
                <Text>乘客評價</Text>  
                </TouchableOpacity>
           
                <TouchableOpacity style={styles.button}>
                <Text>行事曆</Text>  
                </TouchableOpacity>
            
                <TouchableOpacity style={styles.button}>
                <Text>回首頁</Text>  
                </TouchableOpacity>
            

            </View>

        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#001540',
      },
    pic:{
      height:200,
      width:200,
      justifyContent:'center',
      alignItems:'center',
      borderRadius:200/2,
    },
    button: {
        height:40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:15,
        width:100,
        borderRadius:10,
        backgroundColor: 'orange',
      },
  
  })