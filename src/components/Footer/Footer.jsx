//* REACT IMPORTS //
import React from 'react';
import { View, TouchableOpacity } from 'react-native';

//* REACT NAVIGATION //
import { useNavigation } from '@react-navigation/native';

//* STYLES IMPORTS //
import { styles } from './styles';

//* REACT NATIVE PAPER IMPORTS //
import { Avatar } from 'react-native-paper';


//* FOOTER CODE //
const Footer = ({ activeRoute = 'Home' }) => {

  const navigate = useNavigation();

  const loading = false;

  const isAuthenticated = true;

  const navigationHandler = (key) => {
    switch (key) {
      case 0:
        navigate.navigate('Home');
        break;
      case 1:
        navigate.navigate('Cart');
        break;
      case 2:
        if (isAuthenticated)
          navigate.navigate('Profile');
        else
          navigate.navigate('Login');
        break;
      default:
        navigate.navigate('Home');
        break;
    }
  };

  return (
    loading === false && (
      <View style={styles.container}>
        <View style={styles.footer}>
          <TouchableOpacity
            onPress={() => navigationHandler(1)}
            activeOpacity={0.7}
          >
            <Avatar.Icon
              style={styles.icon}
              color={'white'}
              size={50}
              icon={activeRoute === 'Cart' ? 'shopping' : 'shopping-outline'}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigationHandler(2)}
            activeOpacity={0.7}
          >
            <Avatar.Icon
              style={styles.icon}
              color={'white'}
              size={50}
              icon={
                isAuthenticated === false
                  ? 'login'
                  : activeRoute === 'Profile'
                    ? 'account'
                    : 'account-outline'
              }
            />
          </TouchableOpacity>
        </View>

        <View style={styles.homeButtonContainer}>
          <View style={styles.iconContainer}>
            <TouchableOpacity
              onPress={() => navigationHandler(0)}
              activeOpacity={0.7}
            >
              <Avatar.Icon
                style={styles.icon}
                color={'white'}
                size={50}
                icon={activeRoute === 'Home' ? 'home' : 'home-outline'}
              />
            </TouchableOpacity>
          </View>

        </View>
      </View>
    )
  );
};

export default Footer;
