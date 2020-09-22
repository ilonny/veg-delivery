import React from 'react';
import { View, Text, TouchableOpacity, ViewStyle } from 'react-native';
// import { ImageView } from '../../features';
import { styles } from './styles';
type TProps = {
  text: string;
  styleProp?: ViewStyle;
};

export const MainButton = ({ text, styleProp = {} }: TProps) => {
  return (
    <TouchableOpacity style={{ ...styles.wrapper, ...styleProp }}>
      <Text style={styles.title}>{text}</Text>
    </TouchableOpacity>
  );
};
