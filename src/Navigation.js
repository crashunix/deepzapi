import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';

import HomeScreen from './screens/Home';
import MessagesScreen from './screens/Messages';
import ComingScreen from './screens/Coming';

const Tab = createBottomTabNavigator();

const icons = {
    Home: {
        lib: Feather,
        name: 'home',
    },
    Messages: {
        lib: Feather,
        name: 'message-square',
    },
    Friends: {
        lib: Feather,
        name: 'users',
    },
    Config: {
        lib: Feather,
        name: 'settings',
    },
};

export default function Navigation() {
    return(
        <Tab.Navigator
            screenOptions={({route}) => ({
                tabBarIcon: ({color, size}) => {
                    const { lib: Icon, name } = icons[route.name];
                    return <Icon name={name} size={size} color={color} />
                },
            })}
            tabBarOptions = {{
                style: {
                    backgroundColor: '#333740',
                    borderTopColor: 'rgba(255,255,255,0)',
                    height: 65,
                    paddingTop: 10
                },
                activeTintColor: '#04b5ff',
                inactiveTintColor: '#717179',
            }}
        >
            <Tab.Screen name="Home" options={{
                title: '',
            }} component={HomeScreen}/>
            <Tab.Screen name="Messages" options={{
                title: ''
            }} component={MessagesScreen}/>
            <Tab.Screen name="Friends" options={{
                title: ''
            }} component={ComingScreen}/>
            <Tab.Screen name="Config" options={{
                title: ''
            }} component={ComingScreen}/>
        </Tab.Navigator>
    );
}