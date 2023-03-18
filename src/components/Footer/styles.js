// *REACT IMPORTS BELOW ///////
import { StyleSheet, Dimensions, StatusBar, Platform } from "react-native";

// *THEME IMPORTS BELOW ///////
import { colors } from '../../themes/colors';

// *STYLE CODE BELOW ///////
const { height, width } = Dimensions.get('window');

const Android = Platform.OS === 'android';

export const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.bg
  },
  container: {
    backgroundColor: colors.accent,
    borderTopStartRadius: 120,
    borderTopEndRadius: 120,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  icon: {
    backgroundColor: colors.accent,
  },
  homeButtonContainer: {
    width: 70,
    height: 70,
    position: 'absolute',
    top: -30,
    borderRadius: 100,
    backgroundColor: colors.bg,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100
  },
});

export const AndroidView = StyleSheet.create({
  paddingTop: Android ? StatusBar.currentHeight : 0,
});