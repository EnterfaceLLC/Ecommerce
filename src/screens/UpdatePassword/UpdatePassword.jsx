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
import HomeHeader from '../../components/HomeHeader';


//* LOGIN CODE //
const UpdatePassword = ({ navigation }) => {

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const loginHandler = () => {
    Alert.alert('Update Successful')
  };

  const loading = false;

  return (
    <View style={[AndroidView, styles.container]}>
      <HomeHeader back={true} />

      <View style={styles.section}>
        <Text style={styles.headingTxt}>Change Password</Text>

        <TextInput
          style={Inputs}
          mode={'outlined'}
          activeOutlineColor={colors.accent}
          placeholder={'Old Password'}
          value={oldPassword}
          onChangeText={setOldPassword}
          secureTextEntry={true}
        />
        <TextInput
          style={Inputs}
          mode={'outlined'}
          activeOutlineColor={colors.accent}
          placeholder={'New Password'}
          value={newPassword}
          onChangeText={setNewPassword}
          secureTextEntry={true}
        />

        <Button
          loading={loading}
          style={styles.button}
          textColor={colors.white}
          disabled={oldPassword === "" || newPassword === ""}
          onPress={loginHandler}
        >
          Update
        </Button>
      </View>
    </View>
  );
};
export default UpdatePassword;
