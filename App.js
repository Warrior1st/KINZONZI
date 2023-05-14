import React from "react";
import Main from "./screens/main";
import Map from "./screens/map";
import Trends from "./screens/tendances";
import Profile from "./screens/profile";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, navigation } from "@react-navigation/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { AntDesign } from "@expo/vector-icons";
import { DefaultTheme, Provider, IconButton } from "react-native-paper";
import { createStackNavigator } from "@react-navigation/stack";

const Tab = createBottomTabNavigator();
//const Stack = createStackNavigator();

//Todo: Go back from map
// function MyStack() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="Carte" component={Map} />
//     </Stack.Navigator>
//   );
// }

//Bottom bar navigation
function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{ headerShown: false }}
        labeled={false}
        barStyle={{
          backgroundColor: "white",
          height: 84,
          borderTopWidth: 1,
          borderTopColor: "gray",
        }}
        activeColor="blue"
      >
        <Tab.Screen
          name="Accueil"
          component={Main}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="home"
                color={color}
                size={size}
                style={{ margin: 0, }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Tendances"
          component={Trends}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="store"
                color={color}
                size={size}
                style={{ margin: 0, }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Map"
          component={Map}
          options={{
            // tabBarStyle: { display: "none" },
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="map"
                color={color}
                size={size}
                style={{ margin: 0, }}
              />
            ),
          }}
        />

        <Tab.Screen
          name="Profil"
          component={Profile}
          options={{
            tabBarIcon: ({ color, size }) => (
              <AntDesign
                name="user"
                size={26}
                color={size}
                style={{ margin: 0, }}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
//Disabling oval animation in bottom bar
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    secondaryContainer: "transparent", // Use transparent to disable the little highlighting oval
  },
};

export default function main() {
  return (
    <Provider theme={theme}>
      <App />
    </Provider>
  );
}
