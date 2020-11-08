import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { ScreenTitle, AddressPlaceholder } from '../../ui';
import { useNavigation, CommonActions } from '@react-navigation/native';
export const RestaurantScreen = ({ addressData, route }: any) => {
  const navigation = useNavigation();
  console.log('rest route', route);
  const { params } = route;
  const { restaurant } = params;
  console.log('restaurant', restaurant);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff', paddingTop: 16 }}>
      <ScreenTitle text={restaurant.name} />
    </SafeAreaView>
  );
};
