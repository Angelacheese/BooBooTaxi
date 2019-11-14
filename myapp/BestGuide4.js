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
import { Dropdown } from "react-native-material-dropdown";
import styles from "./Stylesheet";

export default class Test extends React.Component {
  static navigationOptions = {
    title: "最佳車導"
  };

  constructor(props) {
    super(props);
    this.state = {
      age: " ",

      sex: " ",

      language: " ",

      characteristic: " ",

      rate: " ",

      note: " "
    };
  }

  _setAge(newValue) {
    this.setState({
      age: newValue
    });
  }

  _setSex(newValue) {
    this.setState({
      sex: newValue
    });
  }
  _setLanguage(newValue) {
    this.setState({
      language: newValue
    });
  }
  _setCharacteristic(newValue) {
    this.setState({
      characteristic: newValue
    });
  }
  _setRate(newValue) {
    this.setState({
      rate: newValue
    });
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
      <View margin={5}>
        <Dropdown
          label="司機年齡"
          data={age}
          onChangeText={value => this._setAge(value)}
          textColor="#ccc"
          baseColor="white"
          selectedItemColor="powderblue"
        />
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
      <View margin={5}>
        <Dropdown
          label="司機性別"
          data={sex}
          onChangeText={value => this._setSex(value)}
          textColor="#ccc"
          baseColor="white"
          selectedItemColor="powderblue"
        />
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
      <View margin={5}>
        <Dropdown
          label="擅長語言"
          data={language}
          onChangeText={value => this._setLanguage(value)}
          textColor="#ccc"
          baseColor="white"
          selectedItemColor="powderblue"
        />
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
      <View margin={5}>
        <Dropdown
          label="司機特質"
          data={characteristic}
          onChangeText={value => this._setCharacteristic(value)}
          textColor="#ccc"
          baseColor="white"
          selectedItemColor="powderblue"
        />
      </View>
    );
  }

  _Rate() {
    const rate = [
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
      <View margin={5}>
        <Dropdown
          label="司機星級"
          data={rate}
          onChangeText={value => this._setRate(value)}
          textColor="#ccc"
          baseColor="white"
          selectedItemColor="powderblue"
        />
      </View>
    );
  }
  _Note() {
    return (
      <View
        style={{
          height: 100,
          flexDirection: "row",
          alignItems: "center",

          width: "96%",
          backgroundColor: "transparent",
          borderWidth: 0.5,
          borderColor: "#fddb92",
          borderRadius: 10
        }}
      >
        <Text style={styles.text3}>備註：</Text>

        <TextInput
          style={{ height: 50, width: 100, color: "black" }}
          placeholder="備註欄"
        />
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container2}>
        <ScrollView>
          {this._Age()}
          {this._Sex()}
          {this._Language()}
          {this._Characteristic()}
          {this._Rate()}

          <View style={{ alignItems: "center", justifyContent: "center" }}>
            {this._Note()}

            <View style={styles.button2}>
              <TouchableWithoutFeedback
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
                        this.props.navigation.navigate("BestGuide_WaitingPage")
                    }
                  ]);
                }}
              >
                <Text style={styles.text4}>預約叫車</Text>
              </TouchableWithoutFeedback>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
