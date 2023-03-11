//* REACT IMPORTS //
import React, { useEffect } from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Image, BackHandler, Alert } from 'react-native';

//* REACT NAVIGATION IMPORTS //
import { useNavigation } from '@react-navigation/native';

//* STYLES IMPORTS //
import { styles } from './styles';

//* REACT NATIVE PAPER //
import { Headline, Searchbar } from 'react-native-paper';

//* SEARCH MODAL CODE //
const SearchModal = ({ search, setSearch, setActiveSearch, products = [] }) => {

  const navigation = useNavigation();

  // const backAction = () => {
  //   try {
  //     setSearch("");
  //     setActiveSearch(false);
  //   } catch (e) {
  //     // Alert.alert('Oops', e.message)
  //   }
  //   return true;
  // };

  const bAction = () => {
    setSearch("");
    setActiveSearch(false);
    return true;
  };

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', bAction);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', bAction)
    };
  }, []);

  return (
    <View style={styles.modal}>
      <SafeAreaView>
        <Searchbar
          placeholder={'Search...'}
          onChangeText={(v) => setSearch(v)}
          value={search}
          style={styles.searchBar}
        />

        <ScrollView>
          <View style={styles.productScroll}>
            {
              products.map((i) => (
                <SearchItem
                  key={i._id}
                  imgSrc={i.images[0]?.url}
                  name={i.name}
                  price={i.price}
                  handler={() => navigation.navigate('ProductDetails', { id: i._id })}
                />
              ))
            }
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};


const SearchItem = ({ name, price, imgSrc, handler }) => (
  <TouchableOpacity onPress={handler}>
    <View style={styles.productSection}>
      <Image
        source={{ uri: imgSrc }}
        style={styles.img}
      />
      <View style={styles.productInfo}>
        <Text numberOfLines={1} style={styles.productName}>{name}</Text>
        <Headline numberOfLines={1} style={styles.productPrice}>${price}</Headline>
      </View>
    </View>
  </TouchableOpacity>
);

export default SearchModal;
