import React, {Component} from 'react';
import Menu from './MenuComponent';
import Dishdetail from './DishDetailComponent';
import { View, Platform, Image, StyleSheet, ScrollView,Text} from 'react-native';
import Home from './HomeComponent';
import About from './AboutComponent';
import Contact from './ContactComponent';
import {createStackNavigator, createDrawerNavigator, DrawerItems, SafeAreaView} from 'react-navigation';
import {Icon} from 'react-native-elements';

const CustomDrawerContentComponent = (props)=>(
    <ScrollView>
        <SafeAreaView style = {styles.container}
                      forceInset = {{top : 'always', horizontal  : 'never'}}
        >
            <View style = {styles.drawerHeader} >
                <View style = {{flex:1}}>
                    <Image source = {require('./images/logo.png')}
                           style = {styles.drawerImage} />
                </View>
                <View style = {{flex:2}} >
                    <Text style = {styles.drawerHeaderText}>Ristorante Con Fusion</Text>
                </View>
            </View>
            <DrawerItems {...props} />
        </SafeAreaView>
    </ScrollView>
);


const MenuNavigator = createStackNavigator({
    Menu : {screen : Menu,
            navigationOptions : ({navigation}) => ({
                headerLeft : <Icon
                                name = 'menu'
                                size = {30}
                                color = 'white'
                                onPress = {() => navigation.toggleDrawer()}
                             />
            })
    },
    Dishdetail : {screen : Dishdetail},
},{
    initialRouteName : 'Menu',
    navigationOptions : {
        headerStyle : {
            backgroundColor : '#512DA8'
        },
        headerTintColor: '#fff',
        headerTitleStyle :{
            color : '#fff'
        }
    }
});

const HomeNavigator = createStackNavigator({
    Home: { screen: Home,
            navigationOptions : ({navigation}) => ({
                headerLeft : <Icon
                                 name = 'menu'
                                 size = {30}
                                 color = 'white'
                                 onPress = {() => navigation.toggleDrawer()}
                              />
                        })
     }
  }, {
    navigationOptions: ({ navigation }) => ({
      headerStyle: {
          backgroundColor: "#512DA8"
      },
      headerTitleStyle: {
          color: "#fff"
      },
      headerTintColor: "#fff"
    })
});

const ContactNavigator = createStackNavigator({
    Contact: { screen: Contact,
                navigationOptions : ({navigation}) => ({
                     headerLeft : <Icon
                                     name = 'menu'
                                     size = {30}
                                     color = 'white'
                                     onPress = {() => navigation.toggleDrawer()}
                                  />
                 })
     }
  }, {
    navigationOptions: ({ navigation }) => ({
      headerStyle: {
          backgroundColor: "#512DA8"
      },
      headerTitleStyle: {
          color: "#fff"
      },
      headerTintColor: "#fff"
    })
});

const AboutNavigator = createStackNavigator({
    About: { screen: About,
                navigationOptions : ({navigation}) => ({
                    headerLeft : <Icon
                                    name = 'menu'
                                    size = {30}
                                    color = 'white'
                                    onPress = {() => navigation.toggleDrawer()}
                                             />
                            })
    }
  }, {
    navigationOptions: ({ navigation }) => ({
      headerStyle: {
          backgroundColor: "#512DA8"
      },
      headerTitleStyle: {
          color: "#fff"
      },
      headerTintColor: "#fff"
    })
});

const MainNavigator = createDrawerNavigator({
    Home : {
        screen : HomeNavigator,
        navigationOptions : {
            title : 'Home       ',
            drawerLabel : 'Home ',
            drawerIcon : ({tintColor}) => (
                <Icon
                    name = 'home'
                    type = 'font-awesome'
                    size = {30}
                    color = {tintColor}
                />
            )
        }
    },
    About : {
         screen : AboutNavigator,
         navigationOptions : {
            title : 'About Us       ',
            drawerLabel : 'About Us ',
            drawerIcon : ({tintColor}) => (
                            <Icon
                                name = 'info-circle'
                                type = 'font-awesome'
                                size = {30}
                                color = {tintColor}
                            />
                        )
            }
        },
    Menu :{
        screen : MenuNavigator,
        navigationOptions : {
            title : 'Menu',
            drawerLabel : 'Menu     ',
            drawerIcon : ({tintColor}) => (
                            <Icon
                                name = 'ellipsis-h'
                                type = 'font-awesome'
                                size = {30}
                                color = {tintColor}
                            />
                        )
        }
    },
    Contact :{
        screen : ContactNavigator,
        navigationOptions : {
            title : 'Contact Information',
            drawerLabel : 'Contact Information  ',
            drawerIcon : ({tintColor}) => (
                                        <Icon
                                            name = 'address-card'
                                            type = 'font-awesome'
                                            size = {28}
                                            color = {tintColor}
                                        />
                                    )
         }
    }
},{
    drawerBackgroundColor : '#D1C4E9',
    contentComponent : CustomDrawerContentComponent,
});

class Main extends Component{
    constructor(props){
        super(props);
        this.state = {
           // dishes : DISHES,
            selectedDish: null
        }
    }
    onDishSelect(dishId) {
          this.setState({selectedDish: dishId})
      }
    render() {
        return(
            <View style={{flex:1}}>
                <MainNavigator/>
             </View>
        );
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1
    },
    drawerHeader : {
        backgroundColor : '#512DA8',
        height : 140,
        alignItems : 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row'
    },
    drawerHeaderText: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold'
    },
    drawerImage: {
        margin: 10,
        width: 80,
        height: 60
    }
})
export default Main