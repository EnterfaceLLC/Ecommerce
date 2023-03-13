// *REACT IMPORTS BELOW ///////
import { StyleSheet, Dimensions, StatusBar, Platform } from "react-native";

// *THEME IMPORTS BELOW ///////
import { colors } from '../../themes/colors';

// *STYLE CODE BELOW ///////
const { height, width } = Dimensions.get('window');

const Android = Platform.OS === 'android';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 100,
    marginVertical: 20
  },
  itemContainer: {
    width: '40%',
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
  },
  productImg: {
    width: '150',
    height: '100%',
  },
  productInfo: {
    width: '40%',
    paddingHorizontal: 25,
  },
  productName: {
    fontSize: 15
  },
  productPrice: {
    fontSize: 15,
    fontWeight: '700'
  },
  qtyContainer: {
    width: '20%',
    height: 80,
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center'
  },
  icon: {
    width: 25,
    height: 25,
    borderRadius: 5,
    backgroundColor: colors.accent,
  },
  qtyText: {
    width: 25,
    height: 25,
    textAlign: 'center',
    textAlignVertical: 'center',
  }
});

export const AndroidView = StyleSheet.create({
  paddingTop: Android ? StatusBar.currentHeight : 0,
});