//* REACT IMPORTS //
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

//* STYLE, THEME IMPORT //
import { styles } from './styles';
import { colors } from '../../themes/colors';

//* REACT NATIVE PAPER //
import { Avatar } from 'react-native-paper/lib/commonjs';


//* CART ITEM CODE //
const CartItem = ({
  name,
  price,
  qty,
  stock,
  index,
  img,
  id,
  minusQtyHandler,
  plusQtyHandler,
  navigate
}) => {
  return (
    <View style={styles.container}>
      <View
        style={[
          styles.itemContainer,
          { backgroundColor: index % 2 === 0 ? colors.accent : colors.primary }
        ]}
      >
        <TouchableOpacity
          onPress={() => navigate.navigate('ProductDetails', { id })}
        >
          <Image
            source={{ uri: img }}
            style={{ width: 200, height: '100%', top: '-15%', left: '10%' }} //! Bug w/ importing styles for Image //
            resizeMode={'contain'}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.productInfo}>
        <Text
          numberOfLines={2}
          style={styles.productName}
        >
          {name}
        </Text>
        <Text
          style={styles.productPrice}
        >
          ${price}
        </Text>
      </View>

      <View style={styles.qtyContainer}>
        <TouchableOpacity onPress={() => minusQtyHandler(id, qty)}>
          <Avatar.Icon
            icon={'minus'}
            size={20}
            style={styles.icon}
          />
        </TouchableOpacity>

        <Text style={styles.qtyText}>{qty}</Text>

        <TouchableOpacity onPress={() => plusQtyHandler(id, qty, stock)}>
          <Avatar.Icon
            icon={'plus'}
            size={20}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default CartItem;
