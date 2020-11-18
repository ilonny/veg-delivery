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
import { OrderInfo } from '../../features';
import { MainButton } from '../../ui';
import { ScrollView } from 'react-native-gesture-handler';
export const OrderInfoScreen = ({ addressData, route }: any) => {
  const navigation = useNavigation();
  const { params } = route;
  const { selectedOrder } = params;
  // console.log('rest route', route);
  console.log('selectedOrder screen', selectedOrder);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff', paddingTop: 16 }}>
      <ScreenTitle text="Информация о заказе" backIcon={true} />
      <OrderInfo selectedOrder={selectedOrder} />
    </SafeAreaView>
  );
};
