//* REACT IMPORT //
import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';

//* STYLE IMPORT //
import { AndroidView, styles } from './styles';

//* COMPONENT IMPORTS //
import HomeHeader from '../../components/HomeHeader';
import ConfirmationItem from '../../components/ConfirmationItem';
import { cartItems } from '../Cart/Cart';

//* REACT NATIVE NAVIGATION //
import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native-paper/lib/commonjs';


//* CONFIRMATION CODE //
const Confirmation = () => {

  const navigate = useNavigation();

  const itemsPrice = 125.00;
  const shipping = 5.00;
  const taxes = 0.0915 * itemsPrice;
  const totalPrice = itemsPrice + shipping + taxes;

  return (
    <View style={[AndroidView, styles.page]}>
      <HomeHeader back={true} />
      <Heading />
      <View style={styles.orderListContainer}>
        <ScrollView>
          {cartItems.map((i) => (
            <ConfirmationItem
              key={i.product}
              name={i.name}
              price={i.price}
              image={i.image}
              qty={i.qty}
            />
          ))}
        </ScrollView>
      </View>
      <Pricing title={'Sub Total'} value={itemsPrice.toFixed(2)} />
      <Pricing title={'Shipping'} value={shipping.toFixed(2)} />
      <Pricing title={'Taxes'} value={taxes.toFixed(2)} />
      <Pricing title={'Total'} value={totalPrice.toFixed(2)} />

      <TouchableOpacity onPress={() => navigate.navigate('Payment', { itemsPrice, shipping, taxes, totalPrice })}>
        <Button
          style={styles.button}
          icon={'credit-card-outline'}
          textColor={'white'}
        >
          Payment
        </Button>
      </TouchableOpacity>
    </View>
  );
};


//* SUB COMPONENTS //
const Pricing = ({ title, value }) => (
  <View style={styles.subTContainer}>
    <Text style={styles.subText}>{title}</Text>
    <Text style={styles.subPricing}>${value}</Text>
  </View>
);

const Heading = () => (
  <View style={styles.headingContainer}>
    <Text style={styles.headingTxt}>Confirm</Text>
    <Text style={[styles.headingTxt, { fontWeight: '500' }]}>Order</Text>
  </View>
);

export default Confirmation;
