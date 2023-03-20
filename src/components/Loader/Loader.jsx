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
        color={colors.accent}
        size={150}
      />
      <Text style={styles.indicatorText}>Gathering Info...</Text>
    </View>
  );
};

export default Loader;
