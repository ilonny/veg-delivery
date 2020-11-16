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
import { CreateOrder } from '../../features';
export const CreateOrderScreen = ({ addressData, route }: any) => {
  const navigation = useNavigation();
  // console.log('rest route', route);
  // console.log('restaurant', restaurant);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff', paddingTop: 16 }}>
      <ScreenTitle text="Оформление заказа" backIcon={true} />
      <CreateOrder />
    </SafeAreaView>
  );
};
