import React from 'react';
import {
  View,
  StatusBar,
  AsyncStorage,
  ActivityIndicator
} from "react-native";
import User from './User';
import firebase from 'firebase';


export default class AuthLoadingScreen extends React.Component{
constructor(props){
    super(props);
    this._bootstrapAsync();
}

componentWillMount(){
    var config = {
        apiKey: "AIzaSyAtmYuZ_P2UL_ztKkX2as_tYkb8QSUdJ0w",
        authDomain: "chat-8861b.firebaseapp.com",
        databaseURL: "https://chat-8861b.firebaseio.com",
        projectId: "chat-8861b",
        storageBucket: "chat-8861b.appspot.com",
        messagingSenderId: "560720448661",
        appId: "1:560720448661:web:d4fa252004b9f8eb8edf9c",
      };
      firebase.initializeApp(config);
}


_bootstrapAsync = async () => {
    User.phone = await AsyncStorage.getItem('userPhone');
    this.props.navigation.navigate(User.phone ? 'App' : 'Auth'
    )
};

render() {
    return(
        <View>
            <ActivityIndicator />
            <StatusBar barStyle="default" />
        </View>
    );
}
}

