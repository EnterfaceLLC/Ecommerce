// *REACT IMPORTS BELOW ///////
import { StyleSheet, Dimensions, StatusBar, Platform } from "react-native";

// *THEME IMPORTS BELOW ///////
import { colors } from '../../../themes/colors';

// *STYLE CODE BELOW ///////
const { height, width } = Dimensions.get('window');

const Android = Platform.OS === 'android';

export const styles = StyleSheet.create({
  page: {
    flex: 1,
    padding: 35,
    backgroundColor: colors.bg,
  },
  header: {
    paddingTop: 75,
  },
  headerText: {
    fontSize: 24,
    color: colors.white,
  },
  section: {
    alignItems: 'center',
    backgroundColor: colors.dark,
    borderRadius: 20,
    margin: 10,
  },
  section2: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  buttonBox: {
    width: 80,
    height: 80,
    borderRadius: 20,
    alignItems: 'center'
  },
  icons: {
    backgroundColor: colors.trans,
  },
  iconText: {
    color: colors.white,
    textAlign: 'center',
  }
});

export const AndroidView = StyleSheet.create({
  paddingTop: Android ? StatusBar.currentHeight : 0,
});