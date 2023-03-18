// *REACT IMPORTS BELOW ///////
import { StyleSheet, Dimensions, StatusBar, Platform } from "react-native";

// *THEME IMPORTS BELOW ///////
import { colors } from '../../themes/colors';

// *STYLE CODE BELOW ///////
const { height, width } = Dimensions.get('window');

const Android = Platform.OS === 'android';

export const styles = StyleSheet.create({
  page: {
    flex: 1,
    padding: 30,
    backgroundColor: colors.bg,
  },
  headContain: {
    flexDirection: 'row',
    paddingTop: 70,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerText: {
    fontSize: 25,
  },
  icons: {
    backgroundColor: colors.accent,
    elevation: 0
  },
  section2: {
    flexDirection: 'row',
    height: 50,
    // backgroundColor: 'orange'
  },
  button: {
    borderRadius: 100,
    margin: 5
  },
  buttonText: {
    fontSize: 12,
  },
});

export const AndroidView = StyleSheet.create({
  paddingTop: Android ? StatusBar.currentHeight : 0,
});