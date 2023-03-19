// *REACT IMPORTS BELOW ///////
import { StyleSheet, Dimensions, StatusBar, Platform } from "react-native";

// *THEME IMPORTS BELOW ///////
import { colors } from '../../themes/colors';

// *STYLE CODE BELOW ///////
const { height, width } = Dimensions.get('window');

const Android = Platform.OS === 'android';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
    paddingTop: 110,
    backgroundColor: colors.bg
  },
  headingTxt: {
    fontSize: 25,
    fontWeight: '300',
    color: colors.white,
    textAlign: 'center',
  },
  scrollSection: {
    padding: 20,
    borderRadius: 10,
    elevation: 5,
    backgroundColor: colors.dark,
  },
  button: {
    backgroundColor: colors.accent,
    borderRadius: 100,
    margin: 10,
    padding: 5
  },
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