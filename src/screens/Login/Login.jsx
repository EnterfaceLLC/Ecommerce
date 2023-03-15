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


//* LOGIN CODE //
const Login = ({ navigation }) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const loginHandler = () => {
    Alert.alert('Login Successful')
  };

  const loading = false;

  return (
    <>
      <View style={[AndroidView, styles.container]}>
        <View style={styles.heading}>
          <Text style={styles.headingTxt}>Login</Text>
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
          <TextInput
            style={Inputs}
            mode={'outlined'}
            activeOutlineColor={colors.accent}
            placeholder={'Password'}
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true}
          />

          <TouchableOpacity onPress={() => navigation.navigate('ResetPassword')}>
            <Text style={styles.forgotText}>Forgot Password?</Text>
          </TouchableOpacity>

          <Button
            loading={loading}
            style={styles.button}
            textColor={colors.white}
            disabled={email === "" || password === ""}
            onPress={loginHandler}
          >
            Log-In
          </Button>

          <Text style={styles.orText}>OR</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={styles.link}>Sign-up</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Footer activeRoute='Profile' />
    </>
  );
};

export default Login;
