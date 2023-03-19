//* REACT IMPORT //
import React, { useState } from 'react';
import { View, Text, Alert } from 'react-native';

//* REACT NATIVE PAPER //
import { Avatar, Button, TextInput } from 'react-native-paper/lib/commonjs';

//* STYLE, THEME IMPORT //
import { AndroidView, Inputs, styles } from './styles';
import { colors } from '../../themes/colors';

//* COMPONENT IMPORT //
import HomeHeader from '../../components/HomeHeader';

//* RESET PASSWORD CODE //
const UpdateProfile = ({ navigation }) => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const submitHandler = () => {
    Alert.alert('Code Sent Successful')
  };

  const loading = false;

  const disabled = !name || !email || !phone

  const defaultImg = 'https://cdn.pixabay.com/photo/2022/08/21/08/09/woman-7400635_960_720.png';

  return (
    <View style={[AndroidView, styles.container]}>
      <HomeHeader back={true} />


      <View style={styles.scrollSection}>

        <Text style={styles.headingTxt}>Edit Profile</Text>

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
          placeholder={'Phone Number'}
          value={phone}
          onChangeText={setPhone}
          keyboardType={'number-pad'}
        />

        <Button
          loading={loading}
          style={styles.button}
          textColor={colors.white}
          disabled={disabled}
          onPress={submitHandler}
        >
          Update
        </Button>

      </View>
    </View>
  );
};

export default UpdateProfile;
