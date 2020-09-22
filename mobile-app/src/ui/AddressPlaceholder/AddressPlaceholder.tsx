import React from 'react';
import { View, Text } from 'react-native';
import { ImageView } from '../../features';
import { styles } from './styles';
type TProps = {
  text: string;
};

export const AddressPlaceholder = ({ text }: TProps) => {
  return (
    <View style={styles.wrapper}>
      <ImageView
        imageName="place_small"
        styleProp={{ width: 12, height: 14 }}
      />
      <Text numberOfLines={2} ellipsizeMode={'tail'} style={styles.title}>
        {text}
      </Text>
    </View>
  );
};
