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
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 25,
    padding: 5,
  },
  profileSection: {
    backgroundColor: colors.dark,
    alignItems: 'center',
    padding: 30,
    borderRadius: 10,
    elevation: 5,
  },
  avatar: {
    backgroundColor: colors.accent,
  },
  name: {
    fontSize: 20,
    fontWeight: '500',
    color: colors.white,
    marginVertical: 5
  },
  email: {
    fontSize: 16,
    fontWeight: '300',
    color: colors.white
  },
  buttonSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10
  },
  buttonSection2: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    margin: 10
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

export const Inputs = StyleSheet.create({
  height: 50,
  marginVertical: 10,
  marginHorizontal: 10,
  backgroundColor: colors.white,
});