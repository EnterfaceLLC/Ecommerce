//*REACT IMPORT //
import React from 'react';
import { View, Text } from 'react-native'

//* STYLE, THEME IMPORT //
import { styles } from './styles';
import { colors } from '../../themes/colors';
import { Button } from 'react-native-paper/lib/commonjs';


//* ORDER ITEM CODE //
const OrderItem = ({
  id,
  price,
  createdAt,
  status,
  paymentMethod,
  updateHandler,
  admin = false,
  loading,
  i = 0,
}) => {
  return (
    <View style={styles.container}>
      <Text style={[
        styles.orderText,
        { backgroundColor: i % 2 === 0 ? colors.dark : colors.accent }
      ]}>
        ID Num: {id}
      </Text>
      <TextBox i={i} title={'Created'} value={createdAt} />
      <TextBox i={i} title={'Price'} value={price} />
      <TextBox i={i} title={'Payment Method'} value={paymentMethod} />
      <TextBox i={i} title={'Status'} value={status} />
      <TextBox i={i} title={'Created'} value={createdAt} />

      {
        admin && (
          <Button
            icon={'update'}
            mode={'contained'}
            textColor={colors.white}
            style={[
              styles.button,
              { backgroundColor: i % 2 === 0 ? colors.dark : colors.accent }
            ]}
            loading={loading}
            disabled={loading}
            onPress={() => updateHandler(id)}
          >
            Update
          </Button>
        )
      }
    </View>
  );
};

const TextBox = ({ title, value, i }) => (
  <Text style={{
    marginVertical: 5,
    color: i % 2 === 0 ? colors.dark : colors.accent
  }}>
    <Text style={{ fontWeight: '500' }}>{title} </Text>
    {`\u2023`} {''}
    {title === "Price" ? "$" : ""}
    {value}

  </Text>
);

export default OrderItem;
