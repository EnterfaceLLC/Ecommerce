//* REACT IMPORT //
import React from 'react';
import { View, Text } from 'react-native';

//* STYLE IMPORT //
import { styles } from './styles';


//* PRODUCT LIST HEADER CODE //
const ProductListHeader = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Image</Text>
      <Text style={styles.text}>Price</Text>
      <Text style={[styles.text, { width: null, maxWidth: 120 }]}>Name</Text>
      <Text style={[styles.text, { width: 60 }]}>Category</Text>
      <Text style={styles.text}>Stock</Text>
    </View>
  );
};

export default ProductListHeader;
