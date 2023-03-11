// *REACT IMPORTS BELOW ///////
import { StyleSheet, Dimensions, StatusBar, Platform } from "react-native";

// *THEME IMPORTS BELOW ///////
import { colors } from '../../themes/colors';

// *STYLE CODE BELOW ///////
const { height, width } = Dimensions.get('window');

const Android = Platform.OS === 'android';

export const styles = StyleSheet.create({
  page: {
    paddingTop: Android ? StatusBar.currentHeight : 0,
    flex: 1,
    padding: 15,
  },
  arrowIcon: {
    position: 'absolute',
    left: 20,
    top: 40,
    zIndex: 10
  },
  cartIcon: {
    position: 'absolute',
    right: 20,
    top: 40,
    zIndex: 10
  },
  icons: {
    backgroundColor: colors.accent,
  }
});

export const AndroidView = StyleSheet.create({
  paddingTop: Android ? StatusBar.currentHeight : 0,
});