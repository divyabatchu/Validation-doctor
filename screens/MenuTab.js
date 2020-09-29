import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons'
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ProfileScreen from './ProfileScreen';
import Explore from './Explore';
import HomeScreen from './HomeScreen';
import LayoutScreen from './LayoutScreen';

const HomeStack = createStackNavigator();
const AppointmentsStack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const MenuTab = () => (
    <Tab.Navigator
        initialRouteName="Feed"
        activeColor="#fff"
        style={{ backgroundColor: 'tomato' }}
    >
        <Tab.Screen
            name="Home"
            component={HomeStackScreen}
            options={{
                tabBarLabel: 'Home',
                tabBarColor: '#671fc4',
                tabBarIcon: ({ color }) => (
                    <Icon name="ios-home" color={color} size={26} />
                ),
            }}
        />
        <Tab.Screen
            name="Notifications"
            component={AppointmentStackScreen}
            options={{
                tabBarLabel: 'Updates',
                tabBarColor: '#bf501d',
                tabBarIcon: ({ color }) => (
                    <Icon name="ios-notifications" color={color} size={26} />
                ),
            }}
        />
        <Tab.Screen
            name="Profile"
            component={ProfileScreen}
            options={{
                tabBarLabel: 'Profile',
                tabBarColor: '#c41f6f',
                tabBarIcon: ({ color }) => (
                    <Icon name="ios-person" color={color} size={26} />
                ),
            }}
        />

        <Tab.Screen
            name="Explore"
            component={Explore}
            options={{
                tabBarLabel: 'Profile',
                tabBarColor: '#671fc4',
                tabBarIcon: ({ color }) => (
                    <Icon name="ios-aperture" color={color} size={26} />
                ),
            }}
        />
    </Tab.Navigator>
)
export default MenuTab;
const HomeStackScreen = ({ navigation }) => (
    <HomeStack.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: '#671fc4'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold'
        }
    }}>
        <HomeStack.Screen name="Home" component={HomeScreen}
            options={{
                title: 'Overview',
                headerLeft: () => (
                    <Icon.Button name="ios-menu" size={25}
                        backgroundColor='#671fc4' onPress={() => { navigation.openDrawer() }}></Icon.Button>
                )
            }} />
    </HomeStack.Navigator>
)

const AppointmentStackScreen = ({ navigation }) => (
    <AppointmentsStack.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: '#bf501d'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold'
        }
    }}>
        <AppointmentsStack.Screen name="Appointments" component={LayoutScreen}
            options={{
                headerLeft: () => (
                    <Icon.Button name="ios-menu" size={25}
                        backgroundColor='#bf501d' onPress={() => { navigation.openDrawer() }}></Icon.Button>
                )
            }} />
    </AppointmentsStack.Navigator>
)


