import React from 'react';
import {
  Text,
  SafeAreaView,
  TouchableOpacity,
  PermissionsAndroid,
  Platform,
} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import { ImageView } from '../../../features';
import { styles } from './styles';

export const SecondScreen = (props: any) => {
  return (
    <>
      <ImageView imageName="onboarding_1" styleProp={styles.imageBackground} />
      <SafeAreaView style={styles.wrapper}>
        <ImageView
          imageName="worldwide"
          styleProp={{ ...styles.logo, marginBottom: 20 }}
        />
        <Text style={styles.title}>Разрешите доступ</Text>
        <Text style={styles.title}>к геопозиции, чтобы мы </Text>
        <Text style={styles.title}>смогли определить</Text>
        <Text style={styles.title}>ваш адрес</Text>
        <TouchableOpacity
          style={styles.nextButton}
          onPress={async () => {
            if (props.swiperRef && props.swiperRef.current) {
              if (Platform.OS === 'android') {
                const granted = await PermissionsAndroid.request(
                  PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                  {
                    title: 'VegDelivery запрашивает доступ к Вашей геопозиции',
                    message: '',
                    buttonNegative: 'Cancel',
                    buttonPositive: 'OK',
                  },
                );
                if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                  Geolocation.requestAuthorization();
                }
              } else {
                Geolocation.requestAuthorization();
              }
              props.swiperRef.current.scrollBy(1, true);
            }
          }}>
          <Text style={styles.buttonText}>Далее</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
};
