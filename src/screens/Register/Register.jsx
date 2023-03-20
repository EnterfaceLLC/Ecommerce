//* REACT IMPORT //
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert, ScrollView } from 'react-native';

//* REACT NATIVE PAPER //
import { Avatar, Button, TextInput } from 'react-native-paper/lib/commonjs';

//* STYLE, THEME IMPORT //
import { AndroidView, Inputs, styles } from './styles';
import { colors } from '../../themes/colors';

//* COMPONENT IMPORT //
import Footer from '../../components/Footer';



//* RESET PASSWORD CODE //
const Register = ({ navigation }) => {

  const [avatar, setAvatar] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  // const [pinCode, setPinCode] = useState("");

  const submitHandler = () => {
    Alert.alert('Code Sent Successful')
    navigation.navigate('Verify');
  };

  const loading = false;

  const disabled = !name || !email || !password || !phone || !pinCode

  const defaultImg = 'https://cdn.pixabay.com/photo/2022/08/21/08/09/woman-7400635_960_720.png';

  return (
    <>
      <View style={[AndroidView, styles.container]}>
        <View style={styles.heading}>
          <Text style={styles.headingTxt}>Register</Text>
        </View>

        <ScrollView style={styles.scrollSection}>
          <View style={styles.section}>

            <Avatar.Image
              style={styles.avatar}
              source={{ uri: avatar ? avatar : defaultImg }}
              size={75}
            />

            <TouchableOpacity onPress={() => navigation.navigate('Camera')}>
              <Button textColor={'white'}>Change Picture</Button>
            </TouchableOpacity>

            <TextInput
              style={Inputs}
              mode={'outlined'}
              activeOutlineColor={colors.accent}
              placeholder={'Name'}
              value={name}
              onChangeText={setName}
            />

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
              placeholder={'Set Password'}
              value={password}
              onChangeText={setPassword}
              secureTextEntry={true}
            />

            <TextInput
              style={Inputs}
              mode={'outlined'}
              activeOutlineColor={colors.accent}
              placeholder={'Phone Number'}
              value={phone}
              onChangeText={setPhone}
              keyboardType={'number-pad'}
            />

            {/* <TextInput
              style={Inputs}
              mode={'outlined'}
              activeOutlineColor={colors.accent}
              placeholder={'Pin Code'}
              value={pinCode}
              onChangeText={setPinCode}
              keyboardType={'number-pad'}
            /> */}

            <Button
              loading={loading}
              style={styles.button}
              textColor={colors.white}
              disabled={disabled}
              onPress={submitHandler}
            >
              Register
            </Button>

            <Text style={styles.orText}>OR</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={styles.link}>Log-In</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>

      <Footer activeRoute='Profile' />
    </>
  );
};

export default Register;
