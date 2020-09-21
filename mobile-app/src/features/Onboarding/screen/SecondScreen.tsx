import React from 'react';
import { Text, SafeAreaView, TouchableOpacity } from 'react-native';
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
        {/* <View style={styles.lineDivider} /> */}
        <Text style={styles.title}>Разрешите доступ</Text>
        <Text style={styles.title}>к геопозиции, чтобы мы </Text>
        <Text style={styles.title}>смогли определить</Text>
        <Text style={styles.title}>ваш адрес</Text>
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
