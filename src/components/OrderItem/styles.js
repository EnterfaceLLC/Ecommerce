// *REACT IMPORTS BELOW //
import { StyleSheet, Dimensions, StatusBar, Platform } from "react-native";

// *THEME IMPORTS BELOW //
import { colors } from '../../themes/colors';

// *STYLE CODE BELOW //
const { height, width } = Dimensions.get('window');

const Android = Platform.OS === 'android';

export const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderRadius: 10,
    marginVertical: 10,
    elevation: 3,
    backgroundColor: colors.white
  },
  orderText: {
    color: colors.white,
    fontSize: 16,
    marginHorizontal: -20,
    marginTop: -20,
    marginBottom: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  button: {
    width: 120,
    alignSelf: 'center',
    marginTop: 10,
    elevation: 2
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