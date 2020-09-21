import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import { ImageView } from '../../../features';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';

export const ThirdScreen = () => {
  const navigation = useNavigation();
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
        <TouchableOpacity style={styles.nextButton}>
          <Text style={styles.buttonText}>Далее</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
};
