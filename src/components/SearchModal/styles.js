// *REACT IMPORTS BELOW ///////
import { StyleSheet, Dimensions, StatusBar, Platform } from "react-native";

// *THEME IMPORTS BELOW ///////
import { colors } from '../../themes/colors';

// *STYLE CODE BELOW ///////
const { height, width } = Dimensions.get('window');

const Android = Platform.OS === 'android';

export const styles = StyleSheet.create({
  modal: {
    width: '100%',
    height: '100%',
    paddingTop: Android ? StatusBar.currentHeight : 0,
    top: 0,
    padding: 35,
    backgroundColor: colors.secondary,
    zIndex: 100,
  },
  searchBar: {
    marginTop: 30,
  },
  productScroll: {
    paddingHorizontal: 10,
    paddingVertical: 40,
  },
  productSection: {
    width: '100%',
    padding: 20,
    borderRadius: 10,
    marginVertical: 30,
    backgroundColor: colors.accent,
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexDirection: 'row',
    elevation: 5,

  },
  img: {
    width: 80,
    height: 80,
    position: 'absolute',
    top: -15,
    left: 10,
    borderTopLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  productInfo: {
    width: '80%',
    paddingHorizontal: 30
  },
  productName: {

  },
  productPrice: {
    fontWeight: '500'
  },
});

export const AndroidView = StyleSheet.create({
  paddingTop: Android ? StatusBar.currentHeight : 0,
});