import React, { useRef } from 'react';
// import { View, Text } from 'react-native';
import Swiper from 'react-native-swiper';
import { FirstScreen, SecondScreen, ThirdScreen } from './screen';
export const Onboarding = (props) => {
  console.log('props onboarding', props);
  const swiperRef = useRef();
  return (
    <>
      <Swiper
        ref={swiperRef}
        loop={false}
        showsButtons={false}
        activeDotColor={'#5AC17D'}
        dotColor={'rgb(201, 224, 212)'}
        paginationStyle={{ bottom: 140 }}>
        <FirstScreen swiperRef={swiperRef} />
        <SecondScreen swiperRef={swiperRef} />
        <ThirdScreen swiperRef={swiperRef} />
      </Swiper>
    </>
    // <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

    // </View>
  );
};
