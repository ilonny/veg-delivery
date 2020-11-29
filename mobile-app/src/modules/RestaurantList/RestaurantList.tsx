import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ActivityIndicator,
  Animated,
  Easing,
} from 'react-native';
import { ScreenTitle, AddressPlaceholder } from '../../ui';
import { RestaurantList as RestaurantListFeature } from '../../features';
import { styles } from '../../features/RestaurantList/styles';
import { useNavigation, CommonActions } from '@react-navigation/native';
export const RestaurantList = ({
  addressData,
  addressHintShowed,
  setAddressHintShowed,
}: any) => {
  const navigation = useNavigation();
  const hintTranslate = useRef(new Animated.Value(-300)).current;
  useEffect(() => {
    if (!addressHintShowed) {
      Animated.timing(hintTranslate, {
        toValue: 0,
        duration: 250,
        easing: Easing.ease,
        useNativeDriver: true,
      }).start();
    }
  }, []);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff', paddingTop: 16 }}>
      <ScreenTitle text={'Рестораны'} />
      <View style={{ padding: 16, flex: 1, paddingBottom: 0 }}>
        <TouchableOpacity onPress={() => navigation.navigate('AddressScreen')}>
          <AddressPlaceholder text={addressData.value} />
        </TouchableOpacity>
        <RestaurantListFeature />
      </View>
      {/* {!addressHintShowed && ( */}
      <Animated.View
        style={[
          styles.hintWrapper,
          { transform: [{ translateY: hintTranslate }] },
        ]}>
        <Text style={styles.hintWrapperTitle}>Закажете на этот адрес?</Text>
        <Text style={styles.hintWrapperAddress}>{addressData.value}</Text>
        <View style={styles.hintWrapperRow}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('AddressScreen');
              setAddressHintShowed();
              Animated.timing(hintTranslate, {
                toValue: -300,
                duration: 250,
                easing: Easing.ease,
                useNativeDriver: true,
              }).start();
            }}
            style={[styles.hintButton, { marginLeft: 0 }]}>
            <Text style={styles.hintButtonText}>Нет, другой</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setAddressHintShowed();
              Animated.timing(hintTranslate, {
                toValue: -300,
                duration: 250,
                easing: Easing.ease,
                useNativeDriver: true,
              }).start();
            }}
            style={[
              styles.hintButton,
              { marginRight: 0, backgroundColor: '#5AC17D' },
            ]}>
            <Text style={[styles.hintButtonText, { color: '#fff' }]}>Да</Text>
          </TouchableOpacity>
        </View>
      </Animated.View>
      {/* )} */}
    </SafeAreaView>
  );
};
