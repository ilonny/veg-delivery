import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';
type TProps = {
  text: string;
};

export const ScreenTitle = ({ text }: TProps) => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>{text}</Text>
    </View>
  );
};
