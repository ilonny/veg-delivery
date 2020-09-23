import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { ScreenTitle } from '../../ui';
import { ChooseAddress } from '../../features';

export const AddressScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <ChooseAddress />
    </SafeAreaView>
  );
};
