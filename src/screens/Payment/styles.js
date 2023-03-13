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
  headingContainer: {
    paddingTop: 70,
  },
  headingTxt: {
    fontSize: 25
  },
  infoContainer: {
    flex: 1,
    justifyContent: 'center',
    marginVertical: 20,
    padding: 30,
    borderRadius: 10,
    backgroundColor: colors.dark,
  },
  radioContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 5
  },
  radioText: {
    color: colors.white,
    fontSize: 18,
    fontWeight: '500',
    textTransform: 'uppercase',
  },
  button: {
    backgroundColor: colors.dark,
    borderRadius: 100,
    margin: 10,
    padding: 5
  }
});

export const AndroidView = StyleSheet.create({
  paddingTop: Android ? StatusBar.currentHeight : 0,
});