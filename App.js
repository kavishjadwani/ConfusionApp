import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, Alert, ScrollView,ViewPagerAndroid, Platform } from 'react-native';
import Blink from './components/BlinkApp';
import Main from './components/MainComponent';


export default class App extends React.Component {
constructor(props) {
    super(props);
    this.state = {text: ''};
  }
  _onPressButton() {
       Alert.alert('You tapped the button!')
     }
  _onLongPressButton() {
        Alert.alert('You long-pressed the button!')
     }


  render() {
    let pic = {
          uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
        };
    return (
        <View style={styles.container}>
                <Main/>
              </View>

    );
  }
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor: '#0fff',
        alignItems : 'stretch',
        justifyContent: 'space-around',
        flexDirection : 'column',
        paddingTop: Platform.OS == 'ios' ? 30 : Expo.Constants.statusBarHeight,
    }
});


