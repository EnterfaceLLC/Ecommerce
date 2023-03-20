//* REACT IMPORT //
import React from 'react';
import { View, ScrollView } from 'react-native';

//* COMPONENT IMPORT//
import HomeHeader from '../../components/HomeHeader';
import Loader from '../../components/Loader';
import OrderItem from '../../components/OrderItem';

//* REACT NATIVE PAPER //
import { Headline } from 'react-native-paper/lib/commonjs';

//* STYLE IMPORT //
import { AndroidView, styles } from './styles';


//* ORDERS CODE //
const orders = [
  {
    _id: 'xyz123',
    createdAt: '3-19-2023T12345',
    orderStatus: 'Processing',
    paymentMethod: 'CARRY',
    totalAmount: '141.99'
  },
  {
    _id: '321zyx',
    createdAt: '3-20-2023T12345',
    orderStatus: 'Processing',
    paymentMethod: 'ONLINE',
    totalAmount: '110.99'
  },
  {
    _id: 'qrs456',
    createdAt: '3-19-2023T12345',
    orderStatus: 'Processing',
    paymentMethod: 'CARRY',
    totalAmount: '141.99'
  },
  {
    _id: 'tuv789',
    createdAt: '3-20-2023T12345',
    orderStatus: 'Processing',
    paymentMethod: 'ONLINE',
    totalAmount: '110.99'
  },
];

const Orders = () => {
  const loading = false;

  return (
    <View style={[AndroidView, styles.container]}>
      <HomeHeader back={true} />

      {loading ? (
        <Loader />) : (
        <View style={styles.orderSection}>
          <ScrollView>
            {
              orders.length > 0 ?
                orders.map((item, index) => (
                  <OrderItem
                    key={item._id}
                    id={item._id}
                    i={index}
                    price={item.totalAmount}
                    status={item.orderStatus}
                    paymentMethod={item.paymentMethod}
                    createdAt={item.createdAt.split('T')[0]}
                    admin={true}
                  />
                ))
                : (
                  <Headline style={styles.headlineText}>No Valid Orders!</Headline>
                )
            }
          </ScrollView>
        </View>
      )}
    </View>
  );
};

export default Orders;
