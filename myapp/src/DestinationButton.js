import React from 'react';
import { 
    StyleSheet,
    Text,
    View,
    Dimensions,
    TouchableOpacity,
 } from 'react-native';
import{ Ionicons } from '@expo/vector-icons';

const WIDTH = Dimensions.get('window').width;

export const DestinationButton = function(props) {
    return (
        <View style = {styles.container}>
            <View style={styles.leftCol}>           
                <Text style={{fontSize: 8}}>{'\u25A0'}</Text>
            </View>
            <View style={styles.centerCol}>
                <Text style={{fontSize: 21, color: '#545454'}}>
                    搜尋
                </Text>
            </View>
            <View style={styles.rightCol}>
                <Ionicons name="md-car" color="#000000" size={25} style={{alignSelf: 'center'}} />
            </View>
        </View> 
    )
}

const styles = StyleSheet.create({
    container: {
        zIndex: 9,
        position: 'absolute',
        flexDirection: 'row',
        width: (WIDTH-40),
        height: 60,
        top: 40,
        left: 20,
        borderRadius: 2,
        borderColor:'black',
        backgroundColor: 'white',
        opacity:(0.5),
        alignItems: 'center',      
        elevation: 7,
        
    },
    leftCol: {
        flex: 1,
        alignItems: 'center',
    },
    centerCol: {
        flex: 4,
    },
    rightCol: {
        flex: 1,
        borderLeftWidth: 1,
        borderColor: '#ededed',
    },
})