import React from "react";
import { Icon } from "react-native-elements";
import { LinearGradient } from "expo-linear-gradient";
import LottieView from "lottie-react-native";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  Component,
  Animated,
  Dimensions,
  ImageBackground
} from "react-native";
import {
  Card,
  CardTitle,
  CardContent,
  CardAction,
  CardButton,
  CardImage
} from "react-native-cards";
import Swiper from "react-native-swiper";
//var {width,height}=Dimensions.get('window')

class Home extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: "B o o B o o",
    headerLeft: (
      <TouchableOpacity
        onPress={() => navigation.toggleDrawer()}
        style={{
          marginLeft: 10
        }}
      >
        <Icon name="menu" color="#fddb92" />
      </TouchableOpacity>
    ),
    headerRight: (
      <TouchableOpacity
        style={{
          marginRight: 10
        }}
        onPress={() => navigation.navigate("Login1")}
      >
        <Icon name="home" color="#fddb92" />
      </TouchableOpacity>
    )
  });

  state = {
    left: new Animated.Value(-40)
  };
  //////////////////
  _BestGuideCards() {
    return (
      <View flexDirection="row" margin={1}>
        <Card style={{ width: "100%", height: 220 }}>
          <CardImage
            source={require("./pic/[Home]Guide1.png")}
            style={{ width: "100%", height: "100%" }}
          />
          <CardTitle subtitle=" " />
          <CardContent justifyContent="center" text="⭐️⭐️⭐️⭐️⭐️" />
          <CardAction separator={true}>
            <CardButton
              onPress={() => this.props.navigation.navigate("GuideIntro1")}
              title="車導簡介"
              color="#fddb92"
            />
            <CardButton onPress={() => {}} title="我要預約" color="#fddb92" />
          </CardAction>
        </Card>

        <Card style={{ width: "100%", height: 220 }}>
          <CardImage
            source={require("./pic/[Home]Guide2.png")}
            style={{ width: "100%", height: "100%" }}
          />
          <CardTitle subtitle=" " />
          <CardContent justifyContent="center" text="⭐️⭐️⭐️⭐️⭐️" />
          <CardAction separator={true}>
            <CardButton
              onPress={() => this.props.navigation.navigate("GuideIntro1")}
              title="車導簡介"
              color="#fddb92"
            />
            <CardButton onPress={() => {}} title="我要預約" color="#fddb92" />
          </CardAction>
        </Card>
      </View>
    );
  }

  _HomeSwipers() {
    const website = [
      "https://img.oreo.blog/uploads/20190206233042_57.jpg",
      "https://i0.wp.com/img.ourtravel.tw/uploads/20171201001652_43.jpg",
      "https://i0.wp.com/img.dwplay.com.tw/pixnet/c7abea28f57f706123edbce9595330cf.jpg"
    ];
    website.map((value, index) => {
      return (
        <View style={styles.slide} key={index}>
          <Image
            source={{
              uri: value
            }}
            style={{ width: "100%", height: 280 }}
          />
        </View>
      );
    });
  }

  _cycleAnimation() {
    Animated.sequence([
      Animated.timing(this.state.left, {
        toValue: 25,
        duration: 1000
      }),

      Animated.timing(this.state.left, {
        toValue: -30,
        duration: 1000
      })
    ]).start(() => {
      this._cycleAnimation();
    });
  }
  componentDidMount() {
    this.animation0.play();

    this.animation1.play();

    this.animation2.play();
  }

  resetAnimation = () => {
    this.animation0.reset();
    this.animation0.play();

    this.animation1.reset();
    this.animation1.play();

    this.animation2.reset();
    this.animation2.play();
  };

  render() {
    return (
      <ScrollView style={{ flex: 1 }} backgroundColor="#001540">
        <Swiper
          style={styles.wrapper}
          showsButtons={false}
          autoplay={true}
          activeDotColor="gray"
        >
          <View style={styles.slide}>
            <ImageBackground
              source={{
                uri: "https://img.oreo.blog/uploads/20190206233042_57.jpg"
              }}
              style={{ width: "100%", height: 280 }}
            >
              <Text
                style={styles.footText}
                onPress={() => this.props.navigation.navigate("InmediateCall1")}
              >
                START
              </Text>
            </ImageBackground>
          </View>
          <View style={styles.slide}>
            <Image
              source={require("./擷取.png")}
              style={{ width: "100%", height: 280 }}
            />
          </View>
          {this._HomeSwipers()}
        </Swiper>

        <View style={styles.titleView}>
          <LottieView
            ref={animation0 => {
              this.animation0 = animation0;
            }}
            source={require("./4340-pew-pew.json")}
          />
          <Text style={styles.titleText}>WHAT can we do for you ?</Text>
        </View>

        <ImageBackground
          source={require("./S__8290309.jpg")}
          style={styles.buttonbg}
        >
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate("test1")}
          >
            <Text style={buttons.buttontext}>即時叫車</Text>
          </TouchableOpacity>
        </ImageBackground>

        <ImageBackground
          source={require("./S__8273922.jpg")}
          style={styles.buttonbg}
        >
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate("BestGuide1")}
          >
            <Text style={buttons.buttontext}>最佳車導</Text>
          </TouchableOpacity>
        </ImageBackground>

        <ImageBackground
          source={require("./S__8290308.jpg")}
          style={styles.buttonbg}
        >
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate("HistoryRoute1")}
          >
            <Text style={buttons.buttontext}>歷史路線</Text>
          </TouchableOpacity>
        </ImageBackground>

        <ImageBackground
          source={require("./S__8282114.jpg")}
          style={styles.buttonbg}
        >
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate("CommonRoute1")}
          >
            <Text style={buttons.buttontext}>常用路線</Text>
          </TouchableOpacity>
        </ImageBackground>

        <View flexDirection="row" justifyContent="center" margin={10}>
          <TouchableOpacity
            style={styles.personalBorder}
            onPress={() => this.props.navigation.navigate("Chat")}
          >
            <Icon name="face" color="#ccc" size={50} margin={15} />
            <Text style={{ color: "#ccc" }}>聊天室</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.personalBorder}
            onPress={() => this.props.navigation.navigate("test3")}
          >
            <Icon name="favorite" color="#ccc" size={50} margin={15} />
            <Text style={{ color: "#ccc" }}>行事曆</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.personalBorder}
            onPress={() => this.props.navigation.navigate("Member")}
          >
            <Icon name="person" color="#ccc" size={50} margin={15} />
            <Text style={{ color: "#ccc" }}>會員資訊</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.titleView}>
          <LottieView
            ref={animation1 => {
              this.animation1 = animation1;
            }}
            source={require("./4340-pew-pew.json")}
          />
          <Text style={styles.titleText}>TOP 10 BEST Guides !</Text>
          {/* <Animated.View
            {...this._cycleAnimation()}
            style={styles.titleAnimation}
            left={this.state.left}
          /> */}
        </View>

        <View
          style={{
            height: 250
          }}
        >
          <Swiper
            showsButtons={false}
            autoplay={true}
            dotColor="transparent"
            activeDotColor="transparent"
          >
            {this._BestGuideCards()}
            {this._BestGuideCards()}
          </Swiper>
        </View>

        <View style={styles.titleView}>
          <LottieView
            ref={animation2 => {
              this.animation2 = animation2;
            }}
            source={require("./4340-pew-pew.json")}
          />
          <Text style={styles.titleText}>WHERE can you go ?</Text>
          {/* <Animated.View
            {...this._cycleAnimation()}
            style={styles.titleAnimation}
            left={this.state.left}
          /> */}
        </View>

        <View justifyContent="center">
          <TouchableOpacity>
            <Image
              source={require("./pic/[Home]TAIPEI.png")}
              style={{ width: "100%", height: 300 }}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require("./pic/[Home]TAICHUNG.png")}
              style={{ width: "100%", height: 300 }}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require("./pic/[Home]KAOHSIUNG.png")}
              style={{ width: "100%", height: 300 }}
            />
          </TouchableOpacity>
          <View flexDirection="row" justifyContent="center">
            <TouchableOpacity style={buttons.area}>
              <Text color="yellow">系統推薦</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={buttons.area}
              onPress={() => this.props.navigation.navigate("GuidePackage1")}
            >
              <Text color="yellow">車導推薦</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    height: 280
  },

  slide: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  footText: {
    position: "absolute",
    bottom: 3,
    left: 3,
    width: "20%",
    height: "10%",
    fontSize: 20,
    borderRadius: 10,
    borderColor: "white",
    borderWidth: 2,
    color: "white",

    opacity: 0.7
  },
  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold"
  },
  line: {
    fontStyle: "italic",
    fontSize: 15,
    color: "white"
  },

  /////////

  button: {
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    opacity: 0.8,

    //borderBottomRightRadius: 400
  },
  buttonbg: {
    width: "100%",
    height: 100,
    shadowColor: "gray",
    margin: 2,
    shadowOffset: {
      height: 1
    },
    shadowOpacity: 0.9
  },

  //////

  titleView: {
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row"
  },
  titleText: {
    color: "white",
    fontSize: 20
  },
  titleAnimation: {
    width: 200,
    height: 0.2,
    justifyContent: "center",
    alignItems: "center",
    borderStyle: "solid",
    borderColor: "#fddb92",
    borderWidth: 0.2,
    top: 8
  },
  personalBorder: {
    width: 120,
    height: 120,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    margin: 3,
    borderStyle: "dotted",
    borderColor: "white",
    borderWidth: 1
  }
});

const lines = StyleSheet.create({
  line: {
    borderWidth: 7,
    borderColor: "khaki"
  },
  hr: {
    borderWidth: 5,
    borderColor: "lightyellow"
  }
});

///////////////////////所有button樣式///////////////////
// const linearGradients = StyleSheet.create({

//   background: {

//     color:["#fddb92" , "#d1fdff"],
//     width: "100%",
//     height: "100%"
//   }
// });

const buttons = StyleSheet.create({
  buttontext: {
    color: "brown",
    fontSize: 20,
    fontWeight: "bold",
    opacity: 1
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

export default Home;
