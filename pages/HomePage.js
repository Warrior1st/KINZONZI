import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import HouseDetail from "../screens/HouseDetail";

const Stack = createStackNavigator();

export default function HomePage() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false, }}
      />
      <Stack.Screen
        name="HouseDetail"
        component={HouseDetail}
        options={{ headerShown: false, }}
      />
    </Stack.Navigator>
  );
}
