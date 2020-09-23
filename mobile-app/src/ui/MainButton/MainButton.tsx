import React from 'react';
import { View, Text, TouchableOpacity, ViewStyle } from 'react-native';
// import { ImageView } from '../../features';
import { styles } from './styles';
type TProps = {
  text: string;
  styleProp?: ViewStyle;
  action?: Function;
};

export const MainButton = ({
  text,
  styleProp = {},
  action = () => {},
}: TProps) => {
  return (
    <TouchableOpacity
      onPress={() => action()}
      style={{ ...styles.wrapper, ...styleProp }}>
      <Text style={styles.title}>{text}</Text>
    </TouchableOpacity>
  );
};
