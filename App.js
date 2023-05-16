// import React from "react";
// import Main from "./screens/main";
// import Map from "./screens/map";
// import Trends from "./screens/tendances";
// import Profile from "./screens/profile";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { NavigationContainer, navigation } from "@react-navigation/native";
// import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
// import { AntDesign } from "@expo/vector-icons";
// import { DefaultTheme, Provider, IconButton } from "react-native-paper";
// import { createStackNavigator } from "@react-navigation/stack";

// const Tab = createBottomTabNavigator();
// //const Stack = createStackNavigator();

// //Todo: Go back from map
// // function MyStack() {
// //   return (
// //     <Stack.Navigator>
// //       <Stack.Screen name="Carte" component={Map} />
// //     </Stack.Navigator>
// //   );
// // }

// //Bottom bar navigation
// function App() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator
//         screenOptions={{ headerShown: false }}
//         labeled={false}
//         barStyle={{
//           backgroundColor: "white",
//           height: 84,
//           borderTopWidth: 1,
//           borderTopColor: "gray",
//         }}
//         activeColor="blue"
//       >
//         <Tab.Screen
//           name="Accueil"
//           component={Main}
//           options={{
//             tabBarIcon: ({ color, size }) => (
//               <MaterialCommunityIcons
//                 name="home"
//                 color={color}
//                 size={size}
//                 style={{ margin: 0, }}
//               />
//             ),
//           }}
//         />
//         <Tab.Screen
//           name="Tendances"
//           component={Trends}
//           options={{
//             tabBarIcon: ({ color, size }) => (
//               <MaterialCommunityIcons
//                 name="store"
//                 color={color}
//                 size={size}
//                 style={{ margin: 0, }}
//               />
//             ),
//           }}
//         />
//         <Tab.Screen
//           name="Map"
//           component={Map}
//           options={{
//             // tabBarStyle: { display: "none" },
//             tabBarIcon: ({ color, size }) => (
//               <MaterialCommunityIcons
//                 name="map"
//                 color={color}
//                 size={size}
//                 style={{ margin: 0, }}
//               />
//             ),
//           }}
//         />

//         <Tab.Screen
//           name="Profil"
//           component={Profile}
//           options={{
//             tabBarIcon: ({ color, size }) => (
//               <AntDesign
//                 name="user"
//                 size={26}
//                 color={size}
//                 style={{ margin: 0, }}
//               />
//             ),
//           }}
//         />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }
// //Disabling oval animation in bottom bar
// const theme = {
//   ...DefaultTheme,
//   colors: {
//     ...DefaultTheme.colors,
//     secondaryContainer: "transparent", // Use transparent to disable the little highlighting oval
//   },
// };

// export default function main() {
//   return (
//     <Provider theme={theme}>
//       <App />
//     </Provider>
//   );
// }
//New version
import React from "react";

import notify from "devextreme/ui/notify";
import Button from "devextreme-react/button";
import Popup from "devextreme-react/popup";

import { housesSource } from "./data.js";
import House from "./House.js";

const ADD_TO_FAVORITES = "Add to Favorites";
const REMOVE_FROM_FAVORITES = "Remove from Favorites";

const formatCurrency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 0,
  maximumFractionDigits: 2,
}).format;

const favButtonAttrs = {
  class: "favorites",
};

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentHouse: housesSource[0],
    };

    this.renderPopup = this.renderPopup.bind(this);
    this.showHouse = this.showHouse.bind(this);
    this.changeFavoriteState = this.changeFavoriteState.bind(this);
    this.handlePopupHidden = this.handlePopupHidden.bind(this);
  }

  render() {
    return (
      <div className="images">
        {housesSource.map((h) => (
          <House house={h} show={this.showHouse} key={h.ID} />
        ))}
        <Popup
          width={660}
          height={540}
          showTitle={true}
          title={this.state.currentHouse.Address}
          dragEnabled={false}
          hideOnOutsideClick={true}
          visible={this.state.popupVisible}
          onHiding={this.handlePopupHidden}
          contentRender={this.renderPopup}
        />
      </div>
    );
  }

  renderPopup() {
    const { currentHouse } = this.state;
    return (
      <div className="popup-property-details">
        <div className="large-text">{formatCurrency(currentHouse.Price)}</div>
        <div className="opacity">
          {currentHouse.Address}, {currentHouse.City}, {currentHouse.State}
        </div>
        <Button
          icon="favorites"
          text={
            currentHouse.Favorite ? REMOVE_FROM_FAVORITES : ADD_TO_FAVORITES
          }
          width={260}
          height={44}
          elementAttr={favButtonAttrs}
          onClick={this.changeFavoriteState}
        />
        <div className="images">
          <img src={currentHouse.Image} />
          <img src={currentHouse.Image.replace(".jpg", "b.jpg")} />
        </div>
        <div>{currentHouse.Features}</div>
      </div>
    );
  }

  showHouse(house) {
    this.setState({
      currentHouse: house,
      popupVisible: true,
    });
  }

  handlePopupHidden() {
    this.setState({
      popupVisible: false,
    });
  }

  changeFavoriteState() {
    const { currentHouse } = this.state;
    currentHouse.Favorite = !currentHouse.Favorite;

    this.renderPopup = this.renderPopup.bind(this);
    this.setState({
      currentHouse,
    });

    notify(
      {
        message: `This item has been ${
          currentHouse.Favorite ? "added to" : "removed from"
        } the Favorites list!`,
        width: 450,
      },
      currentHouse.Favorite ? "success" : "error",
      2000
    );
  }
}

export default App;
