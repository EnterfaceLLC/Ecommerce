//* REACT IMPORTS //
import React from 'react';
import { TouchableOpacity, Alert } from 'react-native';

//* REACT NAVIGATION IMPORTS //
import { useNavigation, useRoute } from '@react-navigation/native';

//* REACT-NATIVE-PAPER IMPORTS //
import { Avatar } from 'react-native-paper';

//* STYLES, THEME IMPORT //
import { styles } from './styles';


//* HOME HEADER CODE //
const HomeHeader = ({ back, emptyCart = false }) => {
  const navigation = useNavigation();
  const route = useRoute();

  const isEmpty = () => {
    Alert.alert('Cart is empty!');
  }

  return (
    <>
      {back &&
        <TouchableOpacity
          style={styles.arrowIcon}
          onPress={() => navigation.goBack()}
        >
          <Avatar.Icon
            style={styles.icons}
            icon={'arrow-left-thin'}
            color={route.name === 'productDetails' ? 'white' : 'black'}
          />
        </TouchableOpacity>
      }

      <TouchableOpacity
        style={styles.cartIcon}
        onPress={emptyCart ? isEmpty : () => navigation.navigate('Cart')}
      >
        <Avatar.Icon
          style={styles.icons}
          icon={emptyCart ? 'delete-outline' : 'cart-outline'}
          color={route.name === 'productDetails' ? 'white' : 'black'}
        />
      </TouchableOpacity>
    </>
  );
};

export default HomeHeader;
