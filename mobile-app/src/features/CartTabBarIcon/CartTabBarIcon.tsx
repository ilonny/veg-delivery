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
  cartList: Array<any>;
  focused: boolean;
};

// export const listItem = ({item}) => {
//   return <></>
// }

export const CartTabBarIcon = ({ cartList, focused }) => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, paddingTop: 16 }}>
      <ImageView
        imageName="shopping_basket"
        styleProp={{ width: 23, height: 19 }}
        tintColor={focused ? '#5AC17D' : '#F1F0F4'}
      />
      {!!cartList.length && (
        <View
          style={{
            width: 7,
            height: 7,
            borderRadius: 7,
            backgroundColor: '#5AC17D',
            position: 'absolute',
            right: 0,
            top: 10,
          }}
        />
      )}
    </View>
  );
};
