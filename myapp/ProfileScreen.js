import React from 'react';
import {
    Alert,
    Text,
    TextInput,
    AsyncStorage,
    SafeAreaView,    
    TouchableOpacity, StyleSheet
  } from "react-native"; 
import User from './User';
import styles from './styles';
import firebase from 'firebase';


export default class ProfileScreen extends React.Component {
    static navigationOptions =({ navigation })=>{
            title: 'Profile'    
}

 state = {
     name: User.name
 }

 _logOut = async () =>{
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
}

 handleChange = key => val => {
     this.setState({[key]:val})
 }

 changeName = async () => {
     if(this.state.name.length<2){
        Alert.alert('ERROR', '更改名字失敗')
     }else if(User.name !== this.state.name){
    firebase.database().ref('users').child(User.phone).set({name:this.state.name});
    User.name = this.state.name;
    Alert.alert('Success', '更改名字成功');
     }
 }
    render(){
        return(
        <SafeAreaView style={styles.container}>
           <Text style={{fontSize:20}}>
            {User.phone}
            </Text>
            <TextInput
                style={styles.input}
                value={this.state.name}
                onChangeText={this.handleChange('name')}
            />
            <TouchableOpacity onPress={this.changeName}>
               <Text style={styles.btnText}>Change Name</Text>
            </TouchableOpacity> 
            <TouchableOpacity onPress={this._logOut}>
               <Text style={styles.btnText}>登出</Text>
            </TouchableOpacity>       
           </SafeAreaView>
           )
    }
}

