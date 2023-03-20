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
    padding: 0,
    backgroundColor: colors.bg,
  },
  headingContainer: {
    paddingTop: 70,
    marginLeft: 35,
  },
  headingTxt: {
    fontSize: 25,
    color: colors.white,
  },
  cartListContainer: {
    flex: 1,
    paddingVertical: 20,
  },
  qtyListContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 35,
  },
  qtyText: {
    color: colors.white
  },
  qtyTotal: {
    fontSize: 16,
    color: 'gold',
    fontWeight: '500'
  },
  button: {
    backgroundColor: colors.accent,
    padding: 5,
    margin: 30
  },
});

export const AndroidView = StyleSheet.create({
  paddingTop: Android ? StatusBar.currentHeight : 0,
});