//* REACT NAVIGATION IMPORTS //
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//* SCREEN IMPORTS
import Home from "../screens/Home";
import ProductDetails from "../screens/ProductDetails";
import Cart from "../screens/Cart";
import Confirmation from "../screens/Confirmation";
import Payment from "../screens/Payment/Payment";
import Login from "../screens/Login/Login";
import ResetPassword from "../screens/ResetPassword";
import Verify from "../screens/Verify/Verify";
import Register from "../screens/Register/Register";
import Profile from "../screens/Profile/Profile";
import UpdateProfile from "../screens/UpdateProfile";
import UpdatePassword from "../screens/UpdatePassword";
import Orders from "../screens/Orders";
import AdminPanel from "../screens/Admin Screens/AdminPanel";

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
          <Stack.Screen
            name='Login'
            component={Login}
          />
          <Stack.Screen
            name='ResetPassword'
            component={ResetPassword}
          />
          <Stack.Screen
            name='Verify'
            component={Verify}
          />
          <Stack.Screen
            name='Register'
            component={Register}
          />
          <Stack.Screen
            name='Profile'
            component={Profile}
          />
          <Stack.Screen
            name='UpdateProfile'
            component={UpdateProfile}
          />
          <Stack.Screen
            name='UpdatePassword'
            component={UpdatePassword}
          />
          <Stack.Screen
            name='Orders'
            component={Orders}
          />
          <Stack.Screen
            name='AdminPanel'
            component={AdminPanel}
          />
        </Stack.Group>
      </Stack.Navigator>

      <Toast position='top' />
    </NavigationContainer>
  );
};

export default Root;
