import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import { ImageView } from '../../../features';

import { styles } from './styles';

export const ThirdScreen = (props: any) => {
  return (
    <>
      <ImageView imageName="onboarding_1" styleProp={styles.imageBackground} />
      <SafeAreaView style={styles.wrapper}>
        <ImageView
          imageName="notification"
          styleProp={{ ...styles.logo, marginBottom: 20 }}
        />
        <Text style={styles.title}>Разрешите</Text>
        <Text style={styles.title}>уведомления, чтобы </Text>
        <Text style={styles.title}>получать информацию</Text>
        <Text style={styles.title}>о своем заказе и акциях</Text>
        <TouchableOpacity
          style={styles.nextButton}
          onPress={() => {
            props.setOnboardingIsVisible(true);
            props.goToAddress();
          }}>
          <Text style={styles.buttonText}>Далее</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
};
