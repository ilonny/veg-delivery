import React from 'react';
import { View, Text } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

export const ChooseAddress = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Chooooseee</Text>
      <MapView
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={{
          height: 400,
          width: 400,
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}
        region={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}></MapView>
    </View>
  );
};
