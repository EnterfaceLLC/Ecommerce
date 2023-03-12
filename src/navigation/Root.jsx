//* REACT NAVIGATION IMPORTS //
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//* SCREEN IMPORTS
import Home from "../screens/Home";
import ProductDetails from "../screens/ProductDetails";

//* ROOT CODE  //
const Stack = createNativeStackNavigator();

const Root = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false, }}
      >
        <Stack.Group>
          <Stack.Screen
            name='Home'
            component={Home}
          />
          <Stack.Screen
            name='ProductDetails'
            component={ProductDetails}
          />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Root;