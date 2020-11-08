//@ts-nocheck
import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  PermissionsAndroid,
  Platform,
  TouchableOpacity,
  Keyboard,
} from 'react-native';
import { useNavigation, CommonActions } from '@react-navigation/native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import { SuggestionInput } from '../../features';
import { AddressPlaceholder, MainButton, ScreenTitle } from '../../ui';
import { suggestionFetchOptions } from '../../lib';
import { styles } from './styles';

export const ChooseAddress = (props) => {
  console.log('props', props);
  const navigation = useNavigation();
  const { addressData, setUserAddressData } = props;
  const [userLocation, setUserLocation] = useState(
    addressData && addressData.data
      ? {
          lat: Number(addressData.data.geo_lat),
          long: Number(addressData.data.geo_lon),
        }
      : { lat: 55.751244, long: 37.618423 },
  );
  // const [userAddress, setUserAddress] = useState(undefined);
  const [suggestionWindowIsOpen, setSuggestionWindowIsOpen] = useState(false);
  useEffect(() => {
    if ((addressData && !addressData.value) || !addressData) {
      Geolocation.getCurrentPosition((info) => {
        console.log('location', info);
        if (info && info.coords) {
          setUserLocation({
            lat: info.coords.latitude,
            long: info.coords.longitude,
          });
        }
      });
    }
  }, []);
  useEffect(() => {
    fetch(
      'https://suggestions.dadata.ru/suggestions/api/4_1/rs/geolocate/address',
      {
        ...suggestionFetchOptions,
        body: JSON.stringify({
          lat: userLocation.lat,
          lon: userLocation.long,
        }),
      },
    )
      .then((res) => res.json())
      .then((res) => {
        console.log('suggestion res', res);
        // setUserAddress(res.suggestions ? res.suggestions[0] : undefined);
        setUserAddressData(res.suggestions ? res.suggestions[0] : {});
      });
  }, [userLocation]);
  return (
    <View style={{ flex: 1, paddingTop: 13 }}>
      <ScreenTitle text={'Выберите адрес'} />
      <ScreenTitle text={'доставки'} />
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
          setUserLocation({
            lat: e.nativeEvent.coordinate.latitude,
            long: e.nativeEvent.coordinate.longitude,
          });
          // console.log('coords', coords);
          // console.log('point', point);
        }}>
        <Marker
          coordinate={{
            latitude: userLocation.lat,
            longitude: userLocation.long,
          }}
          title={''}
          description={''}
        />
      </MapView>
      <View style={styles.bottomAddress}>
        <TouchableOpacity onPress={() => setSuggestionWindowIsOpen(true)}>
          <AddressPlaceholder text={addressData ? addressData.value : ''} />
        </TouchableOpacity>
        <MainButton
          text={'Сохранить'}
          styleProp={{ marginTop: 16 }}
          action={() => {
            navigation.navigate('MainTabScreen');
            navigation.dispatch((state) => {
              // Remove the home route from the stack
              const routes = state.routes.filter(
                (r) => r.name !== 'AddressScreen',
              );
              return CommonActions.reset({
                ...state,
                routes,
                index: routes.length - 1,
              });
            });
          }}
        />
      </View>
      <SuggestionInput
        opened={suggestionWindowIsOpen}
        closeSetState={() => {
          Keyboard.dismiss();
          setSuggestionWindowIsOpen(false);
        }}
        callback={(addressData) => {
          setUserLocation({
            lat: Number(addressData.data.geo_lat),
            long: Number(addressData.data.geo_lon),
          });
        }}
      />
    </View>
  );
};
