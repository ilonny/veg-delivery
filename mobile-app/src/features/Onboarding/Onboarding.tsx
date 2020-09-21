import React, { useRef, useEffect, useState } from 'react';
import { ActivityIndicator, View } from 'react-native';
import Swiper from 'react-native-swiper';
import { useNavigation, CommonActions } from '@react-navigation/native';
import { FirstScreen, SecondScreen, ThirdScreen } from './screen';

export const Onboarding = (props) => {
  const navigation = useNavigation();
  console.log('props onboarding', props);
  const goToAddress = () => {
    navigation.navigate('AddressScreen');
    navigation.dispatch((state) => {
      // Remove the home route from the stack
      const routes = state.routes.filter((r) => r.name !== 'OnboardingScreen');
      return CommonActions.reset({
        ...state,
        routes,
        index: routes.length - 1,
      });
    });
  };
  const swiperRef = useRef();
  return (
    <>
      <Swiper
        ref={swiperRef}
        loop={false}
        showsButtons={false}
        activeDotColor={'#5AC17D'}
        dotColor={'rgb(201, 224, 212)'}
        paginationStyle={{ bottom: 120 }}>
        <FirstScreen swiperRef={swiperRef} />
        <SecondScreen swiperRef={swiperRef} />
        <ThirdScreen
          goToAddress={goToAddress}
          setOnboardingIsVisible={props.setOnboardingIsVisible}
        />
      </Swiper>
    </>
    // <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

    // </View>
  );
};
