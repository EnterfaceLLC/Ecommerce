//* REACT IMPORT //
import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native'

//* REACT NATIVE PAPER //
import { Button, RadioButton } from 'react-native-paper/lib/commonjs';

//* COMPONENT IMPORT //
import HomeHeader from '../../components/HomeHeader';

//* STYLE, THEME IMPORT //
import { AndroidView, styles } from './styles';
import { colors } from '../../themes/colors';


//* PAYMENT CODE //
const Payment = ({ navigation, route }) => {

  const [paymentMethod, setPaymentMethod] = useState("");

  const isAuthenticated = false;

  const redirectToLogin = () => {
    navigation.navigate('Login');
  };
  const carryHandler = () => { };
  const onlineHandler = () => { };

  return (
    <View style={[AndroidView, styles.container]}>
      <HomeHeader back={true} />
      <Heading />

      <View style={styles.infoContainer}>

        <RadioButton.Group
          value={paymentMethod}
          onValueChange={setPaymentMethod}
        >
          <View style={styles.radioContainer}>
            <Text style={styles.radioText}>Carry-out Payment</Text>
            <RadioButton color={colors.accent} value={'CARRY'} />
          </View>
          <View style={styles.radioContainer}>
            <Text style={styles.radioText}>Online Payment</Text>
            <RadioButton color={colors.accent} value={'ONLINE'} />
          </View>
        </RadioButton.Group>
      </View>

      <TouchableOpacity
        onPress={
          !isAuthenticated ? redirectToLogin : paymentMethod === "CARRY" ? carryHandler : onlineHandler
        }
      >
        <Button
          style={styles.button}
          textColor={colors.white}
          icon={paymentMethod === "CARRY" ? "check-circle" : "circle-multiple"}
        >
          {paymentMethod === "CARRY" ? "SUBMIT ORDER" : "PAY ONLINE"}
        </Button>
      </TouchableOpacity>
    </View>
  );
};

//* SUB COMPONENTS //
const Heading = () => (
  <View style={styles.headingContainer}>
    <Text style={styles.headingTxt}>Confirm</Text>
    <Text style={[styles.headingTxt, { fontWeight: '500' }]}>Order</Text>
  </View>
);

export default Payment;
