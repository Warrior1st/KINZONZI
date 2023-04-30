import React from 'react';
import Main from './screens/main';
import Map from './screens/map';
import Trends from './screens/tendances';
import Profile from './screens/profile';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer, navigation } from '@react-navigation/native';
import  MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons';
import { AntDesign } from '@expo/vector-icons';
import {DefaultTheme, Provider, IconButton } from 'react-native-paper';
import { createStackNavigator } from '@react-navigation/stack';

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Carte" 
        component={Map}
      />
    </Stack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator 
        labeled={false}
        barStyle={{ backgroundColor: 'white', height: 84, borderTopWidth: 1, borderTopColor: 'gray'}}
        activeColor="blue"
      >
        <Tab.Screen name="Accueil" component={Main} 
          //A little comment
          options={{
            tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="home" color={color} size={26} style={{ marginTop: -15 }}/>
            ),
          }}
        />
        <Tab.Screen name="Tendances" component={Trends}
          options={{
            tabBarIcon: ({color, size }) => (
                <MaterialCommunityIcons name="store" color={color} size={26} style={{ marginTop: -15 }}/>
            ),
          }}
        />
        <Tab.Screen name="Map" component={MyStack} 
          options={{
            tabBarVisible: false,
            tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="map" color={color} size={26} style={{ marginTop: -15 }}/>
            ),
            
          }}
        />
        <Tab.Screen name="Profil" component={Profile} 
          options={{
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="user" size={26} color={color} style={{ marginTop: -15 }} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    secondaryContainer: 'transparent', // Use transparent to disable the little highlighting oval
  },
};


export default function main() {
  return (
    <Provider theme={theme}>
      <App />
    </Provider>
  );
}
