// *REACT IMPORTS BELOW ///////
import { StyleSheet, Dimensions, StatusBar, Platform } from "react-native";

// *THEME IMPORTS BELOW ///////
import { colors } from '../../themes/colors';

// *STYLE CODE BELOW ///////
const { height, width } = Dimensions.get('window');

const Android = Platform.OS === 'android';

export const styles = StyleSheet.create({
  card: {
    width: 250,
    height: 400,
    margin: 20,
    borderRadius: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 2,
  },
  image: {
    width: '100%',
    height: 180,
    position: 'absolute',
    left: 50,
    top: 105,
    resizeMode: 'contain'
  },
  cardInfo: {
    width: '100%',
    padding: 20,
    justifyContent: 'space-around',
    flexDirection: 'row'
  },
  name: {
    fontSize: 25,
    fontWeight: '300',
    width: '60%'
  },
  price: {
    fontSize: 20,
    fontWeight: '500'
  },
  button: {
    borderRadius: 0,
    paddingVertical: 5,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    width: '100%',
  },
});

export const AndroidView = StyleSheet.create({
  paddingTop: Android ? StatusBar.currentHeight : 0,
});