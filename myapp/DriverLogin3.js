import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Modal, TouchableHighlight } from 'react-native';



export default class DriverSignUp extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        title: "註冊"   
      });
    constructor(props) {
        super(props);
    
        this.state = {
          
            oneSelection:' ',
            oneDisplayed:false,
            twoSelection:' ',
            twoDisplayed:false,
            threeSelection:' ',
            threeDisplayed:false,
            fourSelection:' ',
            fourDisplayed:false,
            fiveSelection:' ',
            fiveDisplayed:false,
            sixSelection:' ' ,
            sixDisplayed:false
        }
      }
      setOne(newValue) {
        this.setState({
          oneSelection: newValue
        })
    
        this.one();
      }
      one() {
        this.setState({
          oneDisplayed: !this.state.oneDisplayed
        })
      }
      setTwo(newValue) {
        this.setState({
          twoSelection:newValue
        })
        this.two();
      }
        two(){
          this.setState({
            twoDisplayed : ! this.state.twoDisplayed
          })
        }
        setThree(newValue) {
            this.setState({
              threeSelection:newValue
            })
            this.three();
          }
            three(){
              this.setState({
                threeDisplayed : ! this.state.threeDisplayed
              })
            }
      setFour(newValue) {
        this.setState({
          fourSelection:newValue
        })
        this.four();
      }
        four(){
          this.setState({
            fourDisplayed : ! this.state.fourDisplayed
          })
        }
        setFive(newValue) {
            this.setState({
              fiveSelection:newValue
            })
            this.five();
          }
            five(){
              this.setState({
                fiveDisplayed : ! this.state.fiveDisplayed
              })
            }
            setSix(newValue) {
                this.setState({
                  sixSelection:newValue
                })
                this.six();
              }
                six(){
                  this.setState({
                    sixDisplayed : ! this.state.sixDisplayed
                  })
                }      
  render() {
    const one = [
        {
      title: '個人',
          value: '個人'
        },
        {
          title: '大都會',
          value: '大都會'
        },
        {
          title: '台灣大車隊',
          value: '台灣大車隊'
        },
        {
          title: '皇冠大車隊',
          value: '皇冠大車隊'
        },
        {
          title: '其他',
          value: '其他'
        },

      ];
       const two=[
        {
          title:'4',
          value:'4'
        },
        {
          title:'5',
          value:'5'
        },
        {
          title:'6',
          value:'6'
        },
        {
            title:'7',
            value:'7'
          },
          {
            title:'8',
            value:'8'
          },
      ];
      const three=[
          {
              title:'現金',
              value:'現金'
          },
          {
            title:'悠遊卡',
            value:'悠遊卡'
          },
          {
            title:'信用卡',
            value:'信用卡'
          },
      ]
      const four=[
        {
            title:'1',
            value:'1'
        },
        {
          title:'2',
          value:'2'
        },
        {
          title:'3',
          value:'3'
        },
    ]
    const five=[
        {
            title:'是',
            value:'是'
        },
        {
          title:'否',
          value:'否'
        },
        
    ]
    const six=[
        {
            title:'是',
            value:'是'
        },
        {
          title:'否',
          value:'否'
        },
        
    ]
    
    
    return (
      
        <View style={styles.container}>
    

        <View style={styles.inputContainer}>
        <Text style={styles.text}>隸屬車隊： { this.state.oneSelection }</Text>
        <Button onPress={() => this.one()} title={ "請選擇隸屬車隊" } />
      

        <Modal visible={this.state.oneDisplayed} animationType={"slide"} transparent={true}>
          <View style={[styles.view]}>
            <Text>請選擇隸屬車隊</Text>
            { one.map((value, index) => {
              return <TouchableHighlight key={index} onPress={() => this.setOne(value.value)} style={{ paddingTop: 4, paddingBottom: 4 }}>
                  <Text>{ value.title }</Text>
                </TouchableHighlight>
            })}

            
            <TouchableHighlight onPress={() => this.one()} style={{ paddingTop: 4, paddingBottom: 4 }}>
              <Text style={{ color: '#999' }}>取消</Text>
            </TouchableHighlight>
          </View>
        </Modal>

        </View>
        <View style={styles.inputContainer}>
              <Text style={styles.text}>車牌號碼：</Text>
              <TextInput style={styles.inputs}
              placeholder="請輸入車牌號碼"
              returnKeyType="next"
              underlineColorAndroid='transparent'/>
          </View>
          <View style={styles.inputContainer}>
              <Text style={styles.text}>車子型號：</Text>
              <TextInput style={styles.inputs}
              placeholder="請輸入車子型號 ex:TOYOTA WISH"
              returnKeyType="next"
              underlineColorAndroid='transparent'/>
          </View>

        


        <View style={styles.inputContainer}>
        <Text style={styles.text}>承載人數： { this.state.twoSelection }</Text>
        <Button onPress={() => this.two()} title={ "請選擇最多可承載人數" } />
      

        <Modal visible={this.state.twoDisplayed} animationType={"slide"} transparent={true}>
          <View style={[styles.view]}>
            <Text>請選擇最多可承載人數</Text>
            { two.map((value, index) => {
              return <TouchableHighlight key={index} onPress={() => this.setTwo(value.value)} style={{ paddingTop: 4, paddingBottom: 4 }}>
                  <Text>{ value.title }</Text>
                </TouchableHighlight>
            })}

            
            <TouchableHighlight onPress={() => this.two()} style={{ paddingTop: 4, paddingBottom: 4 }}>
              <Text style={{ color: '#999' }}>取消</Text>
            </TouchableHighlight>
          </View>
        </Modal>

        </View>
        <View style={styles.inputContainer}>
              <Text style={styles.text}>車齡：</Text>
              <TextInput style={styles.inputs}
              placeholder="請輸入車齡"
              returnKeyType="next"
              underlineColorAndroid='transparent'/>
          </View>
          <View style={styles.inputContainer}>
        <Text style={styles.text}>付款方式： { this.state.threeSelection }</Text>
        <Button onPress={() => this.three()} title={ "請選擇可使用的付款方式" } />
      

        <Modal visible={this.state.threeDisplayed} animationType={"slide"} transparent={true}>
          <View style={[styles.view]}>
            <Text>請選擇可使用的付款方式</Text>
            { three.map((value, index) => {
              return <TouchableHighlight key={index} onPress={() => this.setThree(value.value)} style={{ paddingTop: 4, paddingBottom: 4 }}>
                  <Text>{ value.title }</Text>
                </TouchableHighlight>
            })}

            
            <TouchableHighlight onPress={() => this.three()} style={{ paddingTop: 4, paddingBottom: 4 }}>
              <Text style={{ color: '#999' }}>取消</Text>
            </TouchableHighlight>
          </View>
        </Modal>

        </View>
        <View style={styles.inputContainer}>
        <Text style={styles.text}>行李件數： { this.state.fourSelection }</Text>
        <Button onPress={() => this.four()} title={ "請選擇最多可承載的行李件數" } />
      

        <Modal visible={this.state.fourDisplayed} animationType={"slide"} transparent={true}>
          <View style={[styles.view]}>
            <Text>請選擇最多可承載的行李件數</Text>
            { four.map((value, index) => {
              return <TouchableHighlight key={index} onPress={() => this.setFour(value.value)} style={{ paddingTop: 4, paddingBottom: 4 }}>
                  <Text>{ value.title }</Text>
                </TouchableHighlight>
            })}

            
            <TouchableHighlight onPress={() => this.four()} style={{ paddingTop: 4, paddingBottom: 4 }}>
              <Text style={{ color: '#999' }}>取消</Text>
            </TouchableHighlight>
          </View>
        </Modal>

        </View>
        <View style={styles.inputContainer}>
        <Text style={styles.text}>是否可承載寵物： { this.state.fiveSelection }</Text>
        <Button onPress={() => this.five()} title={ "請選擇" } />
      

        <Modal visible={this.state.fiveDisplayed} animationType={"slide"} transparent={true}>
          <View style={[styles.view]}>
            <Text>請選擇</Text>
            { five.map((value, index) => {
              return <TouchableHighlight key={index} onPress={() => this.setFive(value.value)} style={{ paddingTop: 4, paddingBottom: 4 }}>
                  <Text>{ value.title }</Text>
                </TouchableHighlight>
            })}

            
            <TouchableHighlight onPress={() => this.five()} style={{ paddingTop: 4, paddingBottom: 4 }}>
              <Text style={{ color: '#999' }}>取消</Text>
            </TouchableHighlight>
          </View>
        </Modal>

        </View>
        <View style={styles.inputContainer}>
        <Text style={styles.text}>是否可承載輪椅： { this.state.sixSelection }</Text>
        <Button onPress={() => this.six()} title={ "請選擇" } />
      

        <Modal visible={this.state.sixDisplayed} animationType={"slide"} transparent={true}>
          <View style={[styles.view]}>
            <Text>請選擇</Text>
            { six.map((value, index) => {
              return <TouchableHighlight key={index} onPress={() => this.setSix(value.value)} style={{ paddingTop: 4, paddingBottom: 4 }}>
                  <Text>{ value.title }</Text>
                  </TouchableHighlight>
            })}

            
            <TouchableHighlight onPress={() => this.six()} style={{ paddingTop: 4, paddingBottom: 4 }}>
              <Text style={{ color: '#999' }}>取消</Text>
            </TouchableHighlight>
          </View>
        </Modal>

        </View>
        
        
        <Button title='下一步' onPress={()=>this.props.navigation.navigate("DriverLogin4")} ></Button>
        
        
  
    
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
text:{
  color:'black',
  textAlign:'left',
  fontSize:15,
  margin:10,
}

});