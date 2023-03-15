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
    borderRadius: 5,
    padding: 5,
  },
  section: {
    flex: 1,
    backgroundColor: colors.dark,
    padding: 20,
    justifyContent: 'center',
    borderRadius: 20,
    elevation: 5
  },
  button: {
    backgroundColor: colors.accent,
    borderRadius: 100,
    margin: 10,
    padding: 5
  },
  forgotText: {
    textAlign: 'center',
    marginVertical: 10,
    marginHorizontal: 10,
    color: colors.white,
    fontWeight: '100'
  },
  orText: {
    fontSize: 20,
    fontWeight: '100',
    textAlign: 'center',
    color: colors.white
  },
  link: {
    fontSize: 18,
    fontWeight: '500',
    color: colors.black,
    textAlign: 'center',
    textTransform: 'uppercase',
    marginVertical: 10,
    marginHorizontal: 20
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