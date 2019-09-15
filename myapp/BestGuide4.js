import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Modal,
  TouchableHighlight,
  Alert,
  TouchableWithoutFeedback,
  TouchableOpacity
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";

export default class Test extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: "最佳車導"
  });

  constructor(props) {
    super(props);

    this.state = {
      age: " ",
      ageDisplayed: false,

      sex: " ",
      sexDisplayed: false,

      language: " ",
      languageDisplayed: false,

      characteristic: " ",
      characteristicDisplayed: false,

      comment: " ",
      commentDisplayed: false,

      note: " "
    };
  }

  _setAge(newValue) {
    this.setState({
      age: newValue,
      ageDisplayed: !this.state.ageDisplayed
    });
  }

  _setSex(newValue) {
    this.setState({
      sex: newValue,
      sexDisplayed: !this.state.sexDisplayed
    });
  }
  _setLanguage(newValue) {
    this.setState({
      language: newValue,
      languageDisplayed: !this.state.languageDisplayed
    });
  }
  _setCharacteristic(newValue) {
    this.setState({
      characteristic: newValue,
      characteristicDisplayed: !this.state.characteristicDisplayed
    });
  }
  _setComment(newValue) {
    this.setState({
      comment: newValue,
      commentDisplayed: !this.state.commentDisplayed
    });
  }
  _onPress(onpressNum) {
    switch (onpressNum) {
      case 0:
        this.setState({ ageDisplayed: !this.state.ageDisplayed });
        break;
      case 1:
        this.setState({ sexDisplayed: !this.state.sexDisplayed });
        break;
      case 2:
        this.setState({ languageDisplayed: !this.state.languageDisplayed });
        break;
      case 3:
        this.setState({
          characteristicDisplayed: !this.state.characteristicDisplayed
        });
        break;
      case 4:
        this.setState({ commentDisplayed: !this.state.commentDisplayed });
        break;
    }
  }

  _Age() {
    const age = [
      {
        title: "皆可",
        value: " "
      },
      {
        title: "21~30",
        value: 30
      },
      {
        title: "31~40",
        value: 40
      },
      {
        title: "41~50",
        value: 50
      },
      {
        title: "51~60",
        value: 60
      },
      {
        title: "61~65",
        value: 65
      }
    ];
    return (
      <View style={styles.border}>
        <Text style={styles.text}>司機年齡：{this.state.age}</Text>

        <TouchableOpacity onPress={() => this._onPress(0)}>
          <Text style={styles.button}>|選擇</Text>
        </TouchableOpacity>
        <Modal
          visible={this.state.ageDisplayed}
          animationType={"slide"}
          transparent={true}
        >
          <View style={styles.view}>
            {age.map((value, index) => {
              return (
                <TouchableHighlight
                  key={index}
                  onPress={() => this._setAge(value.value)}
                  style={{ paddingTop: 4, paddingBottom: 4 }}
                >
                  <Text style={{ color: "#efefef" }}>{value.title}</Text>
                </TouchableHighlight>
              );
            })}
          </View>
        </Modal>
      </View>
    );
  }

  _Sex() {
    const sex = [
      {
        title: "皆可",
        value: " "
      },
      {
        title: "男性",
        value: "男性"
      },
      {
        title: "女性",
        value: "女性"
      }
    ];
    return (
      <View style={styles.border}>
        <Text style={styles.text}>司機性別：{this.state.sex}</Text>

        <TouchableOpacity onPress={() => this._onPress(1)}>
          <Text style={styles.button}>|選擇</Text>
        </TouchableOpacity>
        <Modal
          visible={this.state.sexDisplayed}
          animationType={"slide"}
          transparent={true}
        >
          <View style={styles.view}>
            {sex.map((value, index) => {
              return (
                <TouchableHighlight
                  key={index}
                  onPress={() => this._setSex(value.value)}
                  style={{ paddingTop: 4, paddingBottom: 4 }}
                >
                  <Text style={{ color: "#efefef" }}>{value.title}</Text>
                </TouchableHighlight>
              );
            })}
          </View>
        </Modal>
      </View>
    );
  }

  _Language() {
    const language = [
      {
        title: "皆可",
        value: " "
      },
      {
        title: "中文",
        value: "中文"
      },
      {
        title: "英文",
        value: "英文"
      },
      {
        title: "日文",
        value: "日文"
      },
      {
        title: "韓文",
        value: "韓文"
      }
    ];
    return (
      <View style={styles.border}>
        <Text style={styles.text}>擅長語言：{this.state.language}</Text>

        <TouchableOpacity onPress={() => this._onPress(2)}>
          <Text style={styles.button}>|選擇</Text>
        </TouchableOpacity>
        <Modal
          visible={this.state.languageDisplayed}
          animationType={"slide"}
          transparent={true}
        >
          <View style={styles.view}>
            {language.map((value, index) => {
              return (
                <TouchableHighlight
                  key={index}
                  onPress={() => this._setLanguage(value.value)}
                  style={{ paddingTop: 4, paddingBottom: 4 }}
                >
                  <Text style={{ color: "#efefef" }}>{value.title}</Text>
                </TouchableHighlight>
              );
            })}
          </View>
        </Modal>
      </View>
    );
  }

  _Characteristic() {
    const characteristic = [
      {
        title: "皆可",
        value: " "
      },
      {
        title: "free WiFi",
        value: "free WiFi"
      },
      {
        title: "無菸酒",
        value: "無菸酒"
      },
      {
        title: "無香精",
        value: "無香精"
      },
      {
        title: "兒童座椅",
        value: "兒童座椅"
      },
      {
        title: "靜謐空間",
        value: "靜謐空間"
      },
      {
        title: "戶外達人",
        value: "戶外達人"
      },
      {
        title: "購物達人",
        value: "購物達人"
      },
      {
        title: "美食達人",
        value: "美食達人"
      },
      {
        title: "運動達人",
        value: "運動達人"
      },
      {
        title: "歷史達人",
        value: "歷史達人"
      },
      {
        title: "時事達人",
        value: "時事達人"
      },
      {
        title: "科技達人",
        value: "科技達人"
      },
      {
        title: "幽默風趣",
        value: "幽默風趣"
      },
      {
        title: "建築設計",
        value: "建築設計"
      },
      {
        title: "人文藝術",
        value: "人文藝術"
      },
      {
        title: "熱門歌曲",
        value: "熱門歌曲"
      }
    ];
    return (
      <View style={styles.border}>
        <Text style={styles.text}>司機特質：{this.state.characteristic}</Text>

        <TouchableOpacity onPress={() => this._onPress(3)}>
          <Text style={styles.button}>|選擇</Text>
        </TouchableOpacity>
        <Modal
          visible={this.state.characteristicDisplayed}
          animationType={"slide"}
          transparent={true}
        >
          <View style={styles.view}>
            {characteristic.map((value, index) => {
              return (
                <TouchableHighlight
                  key={index}
                  onPress={() => this._setCharacteristic(value.value)}
                  style={{ paddingTop: 4, paddingBottom: 4 }}
                >
                  <Text style={{ color: "#efefef" }}>{value.title}</Text>
                </TouchableHighlight>
              );
            })}
          </View>
        </Modal>
      </View>
    );
  }

  _Comment() {
    const comment = [
      {
        title: "皆可",
        value: " "
      },
      {
        title: "5星級",
        value: 5
      },
      {
        title: "4星級",
        value: 4
      },
      {
        title: "3星級",
        value: 3
      },
      {
        title: "2星級",
        value: 2
      },
      {
        title: "1星級",
        value: 1
      }
    ];
    return (
      <View style={styles.border}>
        <Text style={styles.text}>司機星級：{this.state.comment}</Text>

        <TouchableOpacity onPress={() => this._onPress(4)}>
          <Text style={styles.button}>|選擇</Text>
        </TouchableOpacity>
        <Modal
          visible={this.state.commentDisplayed}
          animationType={"slide"}
          transparent={true}
        >
          <View style={styles.view}>
            {comment.map((value, index) => {
              return (
                <TouchableHighlight
                  key={index}
                  onPress={() => this._setComment(value.value)}
                  style={{ paddingTop: 4, paddingBottom: 4 }}
                >
                  <Text style={{ color: "#efefef" }}>{value.title}</Text>
                </TouchableHighlight>
              );
            })}
          </View>
        </Modal>
      </View>
    );
  }
  _Note() {
    return (
      <View style={styles.border}>
        <Text style={styles.text}>備註：</Text>

        <TextInput
          style={{ height: 50, width: 100, color: "black" }}
          placeholder="備註欄"
        ></TextInput>
      </View>
    );
  }

  render() {
    return (
      <View style={{ flex: 1 }} backgroundColor="#001540">
        <ScrollView>
          {this._Age()}
          {this._Sex()}
          {this._Language()}
          {this._Characteristic()}
          {this._Comment()}
          {this._Note()}

          <TouchableOpacity style={styles.button}>
            <TouchableWithoutFeedback
              style={{ backgroundColor: "powderblue" }}
              onPress={() => {
                Alert.alert("提示", "是否確定叫車", [
                  {
                    text: "取消",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                  },
                  {
                    text: "確定",
                    onPress: () => this.props.navigation.navigate("WaitingPage")
                  }
                ]);
              }}
            >
              <View>
                <Text style={styles.text}> 預約叫車 </Text>
              </View>
            </TouchableWithoutFeedback>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    margin: 20,
    padding: 20,
    backgroundColor: "gray",
    bottom: 20,
    left: 50,
    right: 50,
    alignItems: "center",
    position: "absolute",
    fontSize: 20,
    borderColor: "#fddb92",
    borderWidth: 0.5
  },
  buttonContainer: {
    fontSize: 20,
    color: "#fddb92"
  },
  ////////////////
  border: {
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    margin: 10,
    width: "95%",
    backgroundColor: "transparent",
    borderWidth: 0.5,
    borderColor: "#fddb92",
    borderRadius: 10
  },
  text: {
    color: "#ccc",
    fontSize: 20,
    margin: 10
  },
  button: {
    color: "powderblue",
    fontSize: 15,
    margin: 10
  },
  //////

  screen: {
    height: 300,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    backgroundColor: "white"
  }
});
