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
import { CabinetLink } from '../../features';
import { ScrollView } from 'react-native-gesture-handler';
export const CabinetScreen = ({ addressData, route }: any) => {
  const navigation = useNavigation();
  // console.log('rest route', route);
  // console.log('restaurant', restaurant);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff', paddingTop: 16 }}>
      <ScreenTitle text="Личный кабинет" />
      <ScrollView style={{ flex: 1, padding: 16 }}>
        <CabinetLink screenName="UserSettingsScreen" title="Мои данные" />
        <CabinetLink screenName="OrderListScreen" title="Мои заказы" />
        <CabinetLink screenName="AboutScreen" title="О приложении" />
      </ScrollView>
    </SafeAreaView>
  );
};
