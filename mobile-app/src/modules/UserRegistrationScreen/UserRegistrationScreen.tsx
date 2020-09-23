import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { UserRegistration } from '../../features';

export const UserRegistrationScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <UserRegistration />
    </SafeAreaView>
  );
};
