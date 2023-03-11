//* REACT IMPORTS //
import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

//* STYLES, THEME IMPORTS //
import { styles } from './styles';
import { colors } from '../../themes/colors';

//* REACT NATIVE PAPER IMPORTS //
import { Button } from 'react-native-paper';


//* PRODUCT CARD CODE //
const ProductCard = ({ stock, name, price, image, addToCart, id, i, navigate }) => {
  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={() => navigate.navigate("ProductDetails", { id })}
    >
      <View style={[
        styles.card,
        { backgroundColor: i % 2 === 0 ? colors.primary : colors.accent }
      ]}>
        <Image
          source={{ uri: image }}
          style={styles.image}
        />
        <View style={styles.cardInfo}>
          <Text
            numberOfLines={2}
            style={[
              styles.name,
              { color: i % 2 === 0 ? 'white' : 'black' }
            ]}>
            {name}
          </Text>

          <Text
            numberOfLines={2}
            style={[
              styles.price,
              { color: i % 2 === 0 ? 'white' : 'black' }
            ]}>
            ${price}
          </Text>
        </View>
        <TouchableOpacity
          style={[
            styles.button,
            { backgroundColor: i % 2 === 0 ? colors.accent : colors.primary }
          ]}
        >
          <Button
            onPress={() => addToCart(id, stock)}
            textColor={i % 2 === 0 ? 'white' : 'black'}
          >
            Add To Cart
          </Button>
        </TouchableOpacity>
      </View>
    </TouchableOpacity >
  );
};

export default ProductCard;
