import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation, CommonActions } from '@react-navigation/native';
import { AddressPlaceholder } from '../../ui';
export const UserRegistration = (props) => {
  console.log('UserRegistration props', props);
  const { name, phone, addressData } = props;
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, padding: 16 }}>
      {!!addressData && addressData.value && (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('AddressScreen');
          }}>
          <AddressPlaceholder text={addressData.value} />
        </TouchableOpacity>
      )}
    </View>
  );
};
