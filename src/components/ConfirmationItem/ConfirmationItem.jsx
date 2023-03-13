//* REACT IMPORT //
import React from 'react';
import { View, Text, Image } from 'react-native';

//* STYLE IMPORT //
import { styles } from './styles';

//* CONFIRMATION ITEMS CODE //
const ConfirmationItem = ({ name, price, qty, image }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{ uri: image }}
        resizeMode={'contain'}
      />
      <Text
        numberOfLines={1}
      >
        {name}
      </Text>
      <Text>x{qty}</Text>
      <Text>${price}</Text>
    </View>
  )
}

export default ConfirmationItem;
