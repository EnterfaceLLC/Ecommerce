//* REACT IMPORT //
import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';

//* REACT NATIVE PAPER //
import { Button } from 'react-native-paper';

//* COMPONENT IMPORTS //
import HomeHeader from '../../components/HomeHeader';
import CartItem from '../../components/CartItem';

//* STYLES IMPORT //
import { AndroidView, styles } from './styles';


//* CART CODE //
const cartItems = [
  {
    name: 'New Castle Jersey',
    image: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/56/Newcastle_United_Logo.svg/1200px-Newcastle_United_Logo.svg.png',
    product: '123abc',
    stock: 5,
    price: 79.99,
    qty: 2,
  },
  {
    name: 'Manchester Jersey',
    image: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/Manchester_United_FC_crest.svg/1200px-Manchester_United_FC_crest.svg.png',
    product: '456def',
    stock: 3,
    price: 79.95,
    qty: 1,
  },
  {
    name: 'New Castle Jersey',
    image: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/56/Newcastle_United_Logo.svg/1200px-Newcastle_United_Logo.svg.png',
    product: '123abcd',
    stock: 5,
    price: 79.99,
    qty: 2,
  },
  {
    name: 'Manchester Jersey',
    image: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/Manchester_United_FC_crest.svg/1200px-Manchester_United_FC_crest.svg.png',
    product: '456defg',
    stock: 3,
    price: 79.95,
    qty: 1,
  }
];

const Cart = () => {

  const minusQtyHandler = (id, qty) => {
    console.log('Decreasing', id, qty);
  };

  const plusQtyHandler = (id, qty, stock) => {
    console.log('Increasing', id, qty, stock);
  };

  return (
    <View style={[styles.page, AndroidView]}>
      <HomeHeader back={true} emptyCart={true} />

      <Heading />

      <View style={styles.cartListContainer}>
        <ScrollView>
          {
            cartItems.map((i, index) => (
              <CartItem
                key={i.product}
                id={i.product}
                name={i.name}
                stock={i.stock}
                price={i.price}
                img={i.image}
                index={index}
                qty={i.qty}
                minusQtyHandler={minusQtyHandler}
                plusQtyHandler={plusQtyHandler}
              />
            ))
          }
        </ScrollView>
      </View>

      <View style={styles.qtyListContainer}>
        <Text>8 Items</Text>
        <Text>$16.55</Text>
      </View>

      <TouchableOpacity>
        <Button
          style={styles.button}
          icon={'cart'}
          textColor={'white'}
        >
          Check Out
        </Button>
      </TouchableOpacity>
    </View>
  );
};

const Heading = () => (
  <View style={styles.headingContainer}>
    <Text style={styles.headingTxt}>Shopping</Text>
    <Text style={[styles.headingTxt, { fontWeight: '500' }]}>Cart</Text>
  </View>
);

export default Cart;
