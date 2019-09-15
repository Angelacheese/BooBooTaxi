import React, {Component} from 'react';
import {
    Text,
    View,
    TouchableHighlight,
    FlatList,
    StyleSheet,
    Button,
    ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
export default class TTTTT extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: "景點"   
      });
    constructor(props) {
        super(props)
        this.state = {
            data: [{
                "id": "0",
                select: false,
                key:"景點一"
            },
                {
                    "id": "1",
                    select: false,
                    key:"景點二"
                },
                {
                    "id": "2",
                    select: false,
                    key:"景點三"
                },
                {
                    "id": "3",
                    select: false,
                    key:"景點四"
                },
                {
                    "id": "4",
                    select: false,
                    key:"景點五"
                },
                {
                    "id": "5",
                    select: false,
                    key:"景點六"
                }
],
            selectItem: [],
        }
    }

    _itemPress = (item) => {
        console.log(item);
    }
    _selectItemPress = (item) => {//改！加個檢查動作
        if (item.select) {
         this.state.selectItem.splice(this.state.selectItem.findIndex(function (x) {
                return x === item.name;
            }))
        } else {
            this.state.selectItem.push(item)
        }
        this.state.data[item.id].select = !item.select
        this.setState({data: this.state.data})
    }

    _submitPress() {
        alert(`加入收藏清單${JSON.stringify(this.state.selectItem)}`)
    }
    render() {
        return (
            <View style={{backgroundColor:"lightyellow",flex:1}}>
            <ScrollView>
               <View>
               <FlatList
                keyExtractor={item => item.key}
                data={this.state.data}
                extraData={this.state} 
                ListHeaderComponent={({item}) => {
                    return (<Button title={"確定"} onPress={_ = () => this._submitPress()}/>)
                }}
                renderItem={({item}) => {
                    return (
                        <TouchableHighlight onPress={ _ => this._itemPress(item)}>
                            <View style={styles.standaloneRowFront}>
                            <Text style={styles.GridViewTextLayout} > {item.key} </Text>
                                <TouchableHighlight
                                        onPress={_ => this._selectItemPress(item)}>
                                        <View>
                                            <Icon name={item.select ? 'heart':'heart-o'} color='red'  size={20} margin={5}  ></Icon>
                                        </View>
                                </TouchableHighlight>
                                
                            </View>
                        </TouchableHighlight>)
                }}
                
            />    
            </View>
            <Button title='我的收藏清單(還沒成功)' //onPress={()=>this.props.navigation.navigate("Favorite")} 
              
            ></Button>  
            </ScrollView>            
            </View>
            
            
        );
    }
}
const styles = StyleSheet.create({
    standaloneRowFront: {
        flex:1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
        margin: 20,
        backgroundColor: 'white'
    },
    GridViewTextLayout: {
        fontSize: 20,
        fontWeight: 'bold',
        justifyContent: 'center',
        color: 'black',
        padding: 10,
      },
});