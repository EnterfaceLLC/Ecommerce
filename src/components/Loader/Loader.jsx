//* REACT IMPORT //
import React from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import { colors } from '../../themes/colors';

//* STYLE IMPORT //
import { styles } from './styles';

//* LOADER CODE //
const Loader = () => {
  return (
    <View style={styles.indicator}>
      <ActivityIndicator
        color={colors.dark}
        size={150}
      />
      <Text style={styles.indicatorText}>Welcome Back</Text>
    </View>
  );
};

export default Loader;
