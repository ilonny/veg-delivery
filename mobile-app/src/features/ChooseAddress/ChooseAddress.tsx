//@ts-nocheck
import React, { useEffect, useState } from 'react';
import { View, Text, PermissionsAndroid, Platform } from 'react-native';
import { styles } from './styles';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

export const ChooseAddress = () => {
  const [userLocation, setUserLocation] = useState({
    lat: 55.751244,
    long: 37.618423,
  });
  useEffect(() => {
    Geolocation.getCurrentPosition((info) => {
      console.log('location', info);
      if (info && info.coords) {
        setUserLocation({
          lat: info.coords.latitude,
          long: info.coords.longitude,
        });
      }
    });
  }, []);
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <MapView
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={styles.mapView}
        region={{
          latitude: userLocation.lat,
          longitude: userLocation.long,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
        onPress={(e) => {
          console.log(e.nativeEvent);
          // console.log('coords', coords);
          // console.log('point', point);
        }}>
        <Marker
          coordinate={{
            latitude: userLocation.lat,
            longitude: userLocation.long,
          }}
          title={'test'}
          description={'test 2'}
        />
      </MapView>
    </View>
  );
};
