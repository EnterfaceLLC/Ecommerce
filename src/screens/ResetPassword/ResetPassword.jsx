//* REACT IMPORT //
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';

//* REACT NATIVE PAPER //
import { Button, TextInput } from 'react-native-paper/lib/commonjs';

//* STYLE, THEME IMPORT //
import { AndroidView, Inputs, styles } from './styles';
import { colors } from '../../themes/colors';

//* COMPONENT IMPORT //
import Footer from '../../components/Footer';


//* RESET PASSWORD CODE //
const ResetPassword = ({ navigation }) => {

  const [email, setEmail] = useState("");

  const submitHandler = () => {
    Alert.alert('Code Sent Successful')
    navigation.navigate('Verify');
  };

  const loading = false;

  return (
    <>
      <View style={[AndroidView, styles.container]}>
        <View style={styles.heading}>
          <Text style={styles.headingTxt}>Reset Password</Text>
        </View>
        <View style={styles.section}>
          <TextInput
            style={Inputs}
            mode={'outlined'}
            activeOutlineColor={colors.accent}
            placeholder={'Email'}
            value={email}
            onChangeText={setEmail}
            keyboardType={'email-address'}
          />

          <Button
            loading={loading}
            style={styles.button}
            textColor={colors.white}
            disabled={email === ""}
            onPress={submitHandler}
          >
            Send Code
          </Button>

          <Text style={styles.orText}>OR</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.link}>Log-In</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Footer activeRoute='Profile' />
    </>
  );
};

export default ResetPassword;
