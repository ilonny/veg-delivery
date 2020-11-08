import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import { ScreenTitle, AddressPlaceholder } from '../../ui';
import { RestaurantList as RestaurantListFeature } from '../../features';
import { useNavigation, CommonActions } from '@react-navigation/native';
export const RestaurantList = ({ addressData }: any) => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff', paddingTop: 16 }}>
      <ScreenTitle text={'Рестораны'} />
      <View style={{ padding: 16 }}>
        <TouchableOpacity onPress={() => navigation.navigate('AddressScreen')}>
          <AddressPlaceholder text={addressData.value} />
        </TouchableOpacity>
        <RestaurantListFeature />
      </View>
    </SafeAreaView>
  );
};
