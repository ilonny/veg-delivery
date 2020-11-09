import React from 'react';
import { View, Text, ViewStyle, TouchableOpacity } from 'react-native';
import { useNavigation, CommonActions } from '@react-navigation/native';
import { ImageView } from '../../features';
import { styles } from './styles';
type TProps = {
  text: string;
  styleProp?: ViewStyle;
  backIcon?: boolean;
  backIconAction?: Function;
};

export const ScreenTitle = ({
  text,
  styleProp = {},
  backIcon,
  backIconAction,
}: TProps) => {
  const navigation = useNavigation();
  return (
    <View
      style={[
        styles.wrapper,
        styleProp,
        backIcon && { flexDirection: 'row', alignItems: 'center' },
      ]}>
      {backIcon && (
        <TouchableOpacity
          onPress={() =>
            backIconAction ? backIconAction() : navigation.goBack()
          }
          style={{ marginRight: 20 }}>
          <ImageView imageName="back_icon" />
        </TouchableOpacity>
      )}
      <Text style={styles.title}>{text}</Text>
    </View>
  );
};
