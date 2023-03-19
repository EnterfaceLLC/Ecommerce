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
    backgroundColor: colors.accent,
  },
  imageContainer: {
    height: 380,
    paddingVertical: 40,
    backgroundColor: colors.accent
  },
  image: {
    height: 250,
    resizeMode: 'contain'
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
    fontSize: 25
  },
  productPrice: {
    fontSize: 18,
    fontWeight: '500'
  },
  productDescription: {
    letterSpacing: 1,
    lineHeight: 20,
    marginVertical: 15
  },
  qtyContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 5,
  },
  qtyTitle: {
    color: colors.black,
    fontWeight: '100'
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
    backgroundColor: colors.light,
    textAlign: 'center',
    textAlignVertical: 'center',
    borderRadius: 13,
    // borderWidth: 1,
    // borderColor: '#f2f2f2'
  },
  button: {
    backgroundColor: colors.primary,
    borderRadius: 100,
    marginVertical: 20,
    padding: 5,

  }
});

export const AndroidView = StyleSheet.create({
  paddingTop: Android ? StatusBar.currentHeight : 0,
});