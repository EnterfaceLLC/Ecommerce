//* REACT NAVIGATION IMPORTS //
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//* SCREEN IMPORTS
import Home from "../screens/Home";
import ProductDetails from "../screens/ProductDetails";
import Cart from "../screens/Cart";
import Confirmation from "../screens/Confirmation";
import Payment from "../screens/Payment/Payment";

//* REACT NATIVE TOAST //
import Toast from "react-native-toast-message";

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
          <Stack.Screen
            name='Cart'
            component={Cart}
          />
          <Stack.Screen
            name='Confirmation'
            component={Confirmation}
          />
          <Stack.Screen
            name='Payment'
            component={Payment}
          />
        </Stack.Group>
      </Stack.Navigator>

      <Toast position='top' />
    </NavigationContainer>
  );
};

export default Root;
