import React from 'react';
import { SwipeListView } from 'react-native-swipe-list-view';
import {
  Image,
  Text,
  View,
  FlatList,
  Platform,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Rating, AirbnbRating } from 'react-native-elements';
const data1 = new Array(5).fill(0);
const data2 = new Array(10).fill(0);

class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: '收藏景點',
  });
  renderItem = (data, rowMap) => (
    <View style={styles.rowFront}>
      <Text>I am {data.item} in a SwipeListView</Text>
    </View>
  );
  render() {
    return (
      <View style={{ flex: 1 }} backgroundColor="#001540">
        <SwipeListView
          data={data1}
          renderItem={this.renderItem}
          contentContainerStyle={{ padding: 10 }}
          renderHiddenItem={(data, rowMap) => (
            <View style={styles.rowBack}>
              <Text>Left</Text>
              <Text>Right</Text>
            </View>
          )}
          leftOpenValue={75}
          rightOpenValue={-75}
        />
      </View>
    );
  }
}

class SettingsScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: '收藏司機',
  });
  renderItem = ({ index }) => {
    return (
      <View style={{ margin: 10 }}>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-between',
            alignItems: 'center',
          }}>
          <Image
            source={{
              uri:
                'https://6.viki.io/image/a11230e2d98d4a73825a4c10c8c6feb0.jpg?x=b&a=0x0&s=780x436&q=h&e=t&f=t&cb=1',
            }}
            style={{ width: 80, height: 80, borderRadius: 40 }}
          />
          <Text style={{ color: 'white', fontSize: 30, margin: 10 }}>name</Text>

          <AirbnbRating count={5} size={15} isDisabled={true} />
        </TouchableOpacity>
      </View>
    );
  };
  render() {
    return (
      <View style={{ flex: 1 }} backgroundColor="#001540">
        <FlatList
          ItemSeparatorComponent={() => (
            <View
              style={{
                width: '100%',
                height: 1,
                backgroundColor: '#ccc',
                opacity: 0.5,
              }}
            />
          )}
          data={data2}
          renderItem={this.renderItem}
          contentContainerStyle={{ padding: 10 }}
        />
      </View>
    );
  }
}

class ThreeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: '收藏路線',
  });
  render() {
    return (
      <View style={{ flex: 1 }} backgroundColor="#001540">
        <Text>Settings!</Text>
      </View>
    );
  }
}
const TabNavigator = createBottomTabNavigator({
  Home: HomeScreen,
  Settings: SettingsScreen,
  ThreeScreen: ThreeScreen,
});
const styles = StyleSheet.create({
  rowBack: {
    alignItems: 'center',
    backgroundColor: '#DDD',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 15,
  },
  rowFront: {
    alignItems: 'center',
    backgroundColor: '#CCC',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    justifyContent: 'center',
    height: 50,
  },
});
export default createAppContainer(TabNavigator);
