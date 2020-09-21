import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import { ImageView } from '../../../features';
import { TImageSource } from '../../../lib';
import { styles } from './styles';

export const FirstScreen = (props: any) => {
  return (
    <>
      <ImageView imageName="onboarding_1" styleProp={styles.imageBackground} />
      <SafeAreaView style={styles.wrapper}>
        <ImageView imageName="logo" styleProp={styles.logo} />
        <View style={styles.lineDivider} />
        <Text style={styles.title}>Это доставка здорового</Text>
        <Text style={styles.title}>питания из любимых</Text>
        <Text style={styles.title}>ресторанов</Text>
        <TouchableOpacity
          style={styles.nextButton}
          onPress={() => {
            if (props.swiperRef && props.swiperRef.current) {
              props.swiperRef.current.scrollBy(1, true);
            }
          }}>
          <Text style={styles.buttonText}>Далее</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
};
