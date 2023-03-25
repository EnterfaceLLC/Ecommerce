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
    backgroundColor: colors.dark,
  },
  imageContainer: {
    height: 380,
    paddingVertical: 40,
    backgroundColor: colors.dark
  },
  image: {
    height: 200,
    resizeMode: 'contain',
    marginTop: 15
  },
  productContainer: {
    flex: 1,
    backgroundColor: colors.bg,
    padding: 35,
    marginTop: -380,
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
  },
  productName: {
    fontSize: 25,
    color: colors.white
  },
  productPrice: {
    fontSize: 18,
    fontWeight: '500',
    color: 'gold'
  },
  productDescription: {
    letterSpacing: 1,
    lineHeight: 20,
    marginVertical: 15,
    color: colors.white
  },
  qtyContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 5,
  },
  qtyTitle: {
    color: colors.white,
    fontWeight: '100',
  },
  qtyIconContainer: {
    flexDirection: 'row',
    width: 80,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  qtyIcons: {
    width: 25,
    height: 25,
    borderRadius: 5,
    backgroundColor: colors.accent
  },
  qty: {
    width: 26,
    height: 26,
    textAlign: 'center',
    textAlignVertical: 'center',
    color: colors.white
  },
  button: {
    backgroundColor: colors.accent,
    borderRadius: 100,
    marginVertical: 20,
    padding: 5,

  }
});

export const AndroidView = StyleSheet.create({
  paddingTop: Android ? StatusBar.currentHeight : 0,
});