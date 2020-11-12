import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { ScreenTitle, AddressPlaceholder, RestaurantInfo } from '../../ui';
import { useNavigation, CommonActions } from '@react-navigation/native';
import { Cart } from '../../features';
export const CartScreen = ({ addressData, route }: any) => {
  const navigation = useNavigation();
  // console.log('rest route', route);
  // console.log('restaurant', restaurant);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff', paddingTop: 16 }}>
      <Cart />
    </SafeAreaView>
  );
};
