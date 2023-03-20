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
    padding: 35,
    backgroundColor: colors.bg,
  },
  headingContainer: {
    paddingTop: 70,
  },
  headingTxt: {
    fontSize: 25,
    color: colors.white,
  },
  orderListContainer: {
    flex: 1,
    paddingVertical: 20,
    borderRadius: 10,
    backgroundColor: colors.dark,
  },
  subTContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 7,

  },
  subText: {
    color: colors.white
  },
  subPricing: {
    fontSize: 16,
    color: 'gold',
    fontWeight: '500',
  },
  button: {
    backgroundColor: colors.accent,
    borderRadius: 100,
    margin: 10,
    padding: 5,
  }
});

export const AndroidView = StyleSheet.create({
  paddingTop: Android ? StatusBar.currentHeight : 0,
});