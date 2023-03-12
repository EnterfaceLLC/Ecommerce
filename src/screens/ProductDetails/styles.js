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
  }
});

export const AndroidView = StyleSheet.create({
  paddingTop: Android ? StatusBar.currentHeight : 0,
});