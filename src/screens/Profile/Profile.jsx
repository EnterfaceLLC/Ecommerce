//* REACT IMPORT //
import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

//* STYLE IMPORT //
import { styles, AndroidView } from './styles';

//* REACT NATIVE PAPER //
import { Avatar, Button } from 'react-native-paper/lib/commonjs';

//* PROFILE CODE //
const user = {
  name: '.Enterface LLC',
  email: 'develope@enterfacellc.com'
};

const Profile = ({ navigation }) => {

  const [avatar, setAvatar] = useState(null);

  return (
    <View style={[AndroidView, styles.container]}>
      <View style={styles.heading}>
        <Text style={styles.headingTxt}>Profile</Text>
      </View>

      <View style={styles.section}>
        <Avatar.Image
          size={100}
          style={styles.avatar}
          source={{ uri: avatar }}
        />

        <TouchableOpacity
          onPress={() => navigation.navigate('Camera', { updateProfile: true })}
        >
          <Button textColor={'white'}>
            Change Photo
          </Button>
        </TouchableOpacity>

        <Text style={styles.name}>{user?.name}</Text>
        <Text style={styles.email}>{user?.email}</Text>
      </View>
    </View>
  );
};

export default Profile;
