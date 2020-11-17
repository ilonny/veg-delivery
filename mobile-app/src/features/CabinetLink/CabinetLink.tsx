import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import { useNavigation, CommonActions } from '@react-navigation/native';
import { ImageView } from '../../features';
import { RestaurantInfo } from '../../ui';
import { styles } from './styles';
type TProps = {
  screenName: string;
  title: string;
};

// export const listItem = ({item}) => {
//   return <></>
// }

export const CabinetLink = ({ screenName, title }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(screenName)}
      style={styles.restItemWrapperShadow}>
      <View style={styles.restItemWrapper}>
        <Text style={styles.restItemTitle}>{title}</Text>
        <ImageView
          imageName="cabinet_link_arrow"
          styleProp={{ width: 10, height: 12 }}
        />
      </View>
    </TouchableOpacity>
  );
};
