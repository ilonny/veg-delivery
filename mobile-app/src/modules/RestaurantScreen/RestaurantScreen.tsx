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
import { RestaurantMenu } from '../../features';
export const RestaurantScreen = ({ addressData, route }: any) => {
  const navigation = useNavigation();
  // console.log('rest route', route);
  const { params } = route;
  const { restaurant, item } = params;
  // console.log('restaurant', restaurant);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff', paddingTop: 16 }}>
      <ScreenTitle text={restaurant.name} backIcon={true} />
      <RestaurantInfo item={restaurant} inside={true} />
      {/* @ts-ignore */}
      <RestaurantMenu restaurant={restaurant} item={item} />
    </SafeAreaView>
  );
};
