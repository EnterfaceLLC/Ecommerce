//* REACT IMPORT //
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert, Image } from 'react-native';

//* REACT NATIVE PAPER //
import { Button, TextInput } from 'react-native-paper/lib/commonjs';

//* STYLE, THEME IMPORT //
import { AndroidView, Inputs, styles } from './styles';
import { colors } from '../../themes/colors';

//* COMPONENT IMPORT //
import Footer from '../../components/Footer';


//* RESET PASSWORD CODE //
const Verify = ({ navigation }) => {

  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = () => {
    Alert.alert('Code Sent Successful')
    navigation.navigate('Login');
  };

  const loading = false;

  return (
    <>
      <View style={[AndroidView, styles.container]}>
        <View style={styles.heading}>
          <Text style={styles.headingTxt}>Reset Password</Text>
        </View>
        <View style={styles.section}>
          <Image style={styles.logo} source={require('../../../assets/TWTR.png')} />
          <TextInput
            style={Inputs}
            mode={'outlined'}
            activeOutlineColor={colors.accent}
            placeholder={'OTP'}
            value={otp}
            onChangeText={setOtp}
            keyboardType={'numeric'}
          />

          <TextInput
            style={Inputs}
            mode={'outlined'}
            activeOutlineColor={colors.accent}
            placeholder={'New Password'}
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true}
          />

          <Button
            loading={loading}
            style={styles.button}
            textColor={colors.white}
            disabled={otp === "" || password === ""}
            onPress={submitHandler}
          >
            Reset
          </Button>

          <Text style={styles.orText}>OR</Text>
          <TouchableOpacity onPress={() => navigation.navigate('ResetPassword')}>
            <Text style={styles.link}>Resend Code</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Footer activeRoute='Profile' />
    </>
  );
};

export default Verify;
