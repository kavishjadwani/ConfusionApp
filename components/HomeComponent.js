import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

class Home extends Component{

    static navigationOptions = {
        title : 'Home'
    };
    render(){
        return(
            <View><Text> Home Component </Text></View>
        );
    }
}

export default Home;