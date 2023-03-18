//* REACT IMPORT //
import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

//* STYLE, THEME IMPORT //
import { styles, AndroidView } from './styles';
import { colors } from '../../themes/colors';

//* REACT NATIVE PAPER //
import { Avatar, Button } from 'react-native-paper/lib/commonjs';

//* COMPONENT IMPORTS //
import Footer from '../../components/Footer';
import Loader from '../../components/Loader';

//* PROFILE CODE //
const user = {
  name: '.Enterface LLC',
  email: 'develope@enterfacellc.com'
};

const loading = false;

const Profile = ({ navigation }) => {

  const [avatar, setAvatar] = useState(null);

  const navigationHandler = () => {

  };


  return (
    <>
      <View style={[AndroidView, styles.container]}>
        <View style={styles.heading}>
          <Text style={styles.headingTxt}>Profile</Text>
        </View>

        {
          loading ? <Loader /> : (
            <>
              <View style={styles.profileSection}>
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

              <View>
                <View style={styles.buttonSection}>
                  <ButtonBox
                    handler={navigationHandler}
                    icon={'shopping-outline'}
                    text={'Orders'}
                  />
                  <ButtonBox
                    handler={navigationHandler}
                    reverse={true}
                    icon={'view-dashboard'}
                    text={'Admin'}
                  />
                  <ButtonBox
                    handler={navigationHandler}
                    icon={'pencil'}
                    text={'Profile'}
                  />
                </View>

                <View style={styles.buttonSection2}>
                  <ButtonBox
                    handler={navigationHandler}
                    icon={'pencil'}
                    text={'Password'}
                  />
                  <ButtonBox
                    handler={navigationHandler}
                    icon={'exit-to-app'}
                    text={'Sign-Out'}
                  />
                </View>
              </View>
            </>
          )
        }

      </View>

      <Footer />
    </>
  );
};

const ButtonBox = ({ icon, text, handler, reverse = false, loading = false }) => {
  return (
    <TouchableOpacity
      style={[
        styles.buttonBox,
        { backgroundColor: reverse ? colors.accent : colors.dark }
      ]}
      onPres={() => handler(text)}
      disabled={loading}
    >
      <Avatar.Icon
        style={styles.icons}
        size={50}
        color={'white'}
        icon={icon}
      />
      <Text style={styles.iconText}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Profile;
