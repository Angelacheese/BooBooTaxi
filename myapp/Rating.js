import React from 'react';
import { Image, Text, View, FlatList, Platform, TextInput } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Rating, AirbnbRating } from 'react-native-elements';
const data = new Array(5).fill(0);

class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: '全部評價',
  });
  constructor(props) {
    super(props);
    this.state = {
      star: '',
      text: '',
    };
  }
  renderItem = ({ index }) => {
    return (
      <View style={{ margin: 10 }}>
        <View
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

          <AirbnbRating
            count={5}
            reviews={['Terrible', 'Bad', 'Hmm...', 'Amazing', 'Unbelievable']}
            defaultRating={4}
            size={20}
            reviewSize={20}
            isDisabled={true}
          />
        </View>
        <Text style={{ color: 'white' }}>-----------name---------------</Text>
         <Text style={{ color: 'white' }}>-----------name---------------</Text>
          
      </View>
    );
  };
  render() {
    return (
      <View style={{ flex: 1 }} backgroundColor="#001540">
        <Rating
          showRating
          fractions={1}
          startingValue={4.3}
          size={10}
          readonly={true}
          ratingColor="#fddb92"
          style={{ backgroundColor: 'white', paddingVertical: 50 }}
        />

        <FlatList
          ItemSeparatorComponent={() => (
            <View style={{ width: "100%", height: 1, backgroundColor: '#ccc',opacity:0.5 }} />
          )}
          data={data}
          renderItem={this.renderItem}
          contentContainerStyle={{ padding: 10 }}
        />
      </View>
    ); 
  }
}

class SettingsScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: '對司機的評價',
  });
  constructor(props) {
    super(props);
    this.state = {
      star: '',
      text: '',
    };
  }
  ratingCompleted(rating) {
    console.log("Rating is: " + rating)
  }
  renderItem = ({ index }) => {
    return (
      <View style={{ margin: 10 }}>
        <View
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

          <AirbnbRating
            count={5}
            reviews={['Terrible', 'Bad', 'Hmm...', 'Amazing', 'Unbelievable']}
            defaultRating={4}
            size={20}
            reviewSize={20}
            
          />

        </View>
        <TextInput style={{ color: 'white' }}></TextInput>
          
      </View>
    );
  };
  render() {
    return (
      <View style={{ flex: 1 }} backgroundColor="#001540">

        <FlatList
          ItemSeparatorComponent={() => (
            <View style={{ width: "100%", height: 1, backgroundColor: '#ccc',opacity:0.5 }} />
          )}
          data={data}
          renderItem={this.renderItem}
          contentContainerStyle={{ padding: 10 }}
        />
      </View>
    ); 
  }
}

const TabNavigator = createBottomTabNavigator({
  Home: HomeScreen,
  Settings: SettingsScreen,
});

export default createAppContainer(TabNavigator);