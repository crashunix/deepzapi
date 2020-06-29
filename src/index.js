import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { StatusBar } from 'react-native';

import Navigation from './Navigation';

const Stack = createStackNavigator();

import Message from './screens/Message';

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={'#333740'}/>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Initial">
          <Stack.Screen name="Initial" component={Navigation}
          options={{
            title: 'Conversas',
            headerShown: false,
            headerStyle: {
              backgroundColor: '#333740',
            },
            headerTintColor: '#FFF',
          }}/>
          <Stack.Screen name="Message" component={Message}
          options={{
            headerShown: false,
          }}/>
        </Stack.Navigator>
        {/* <Navigation></Navigation> */}
      </NavigationContainer>
    </>
  );
}