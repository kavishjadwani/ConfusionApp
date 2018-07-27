import React, { Component } from 'react';
import { ScrollView, Text, View, StyleSheet } from 'react-native';
import { Card } from 'react-native-elements';


class Contact extends Component{
    constructor(props){
        super(props);
        this.state = {
            address : 'Our Address :  \n\n121, Clear Water Bay Road\n\nClear Water Bay, Kowloon\n\nHONG KONG\n\nTel: +852 1234 5678\n\nFax: +852 8765 4321\n\nEmail:confusion@food.net\n\n'
        }
    }

    static navigationOptions = {
        title : 'Contact Us     '
    };
    render(){
        return(
            <ScrollView>
                <Card title = "Contact Information">
                    <View>
                        <Text style={{fontWeight: 'bold'}}>
                            {this.state.address}
                        </Text>
                    </View>
                </Card>
            </ScrollView>
        );
    }
}

export default Contact;