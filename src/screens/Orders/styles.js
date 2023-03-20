// *REACT IMPORTS BELOW //
import { StyleSheet, Dimensions, StatusBar, Platform } from "react-native";

// *THEME IMPORTS BELOW //
import { colors } from '../../themes/colors';

// *STYLE CODE BELOW //
const { height, width } = Dimensions.get('window');

const Android = Platform.OS === 'android';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
    paddingTop: 110,
    backgroundColor: colors.bg
  },
  heading: {
    marginBottom: 20,
  },
  headingTxt: {
    fontSize: 25,
    fontWeight: '500',
    color: colors.white,
    textAlign: 'center',
    backgroundColor: colors.dark,
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 25,
    padding: 5,
  },
  orderSection: {
    flex: 1,
    padding: 10,
  },
  headlineText: {
    textAlign: 'center',
    color: colors.white,
  }
});

export const AndroidView = StyleSheet.create({
  paddingTop: Android ? StatusBar.currentHeight : 0,
});

export const Inputs = StyleSheet.create({
  height: 50,
  marginVertical: 10,
  marginHorizontal: 10,
  backgroundColor: colors.white,
});