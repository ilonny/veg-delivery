import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { ScreenTitle, AddressPlaceholder, RestaurantInfo } from '../../ui';
import { useNavigation, CommonActions } from '@react-navigation/native';
import { WebView } from 'react-native-webview';
import { UserSettings } from '../../features';
import { MainButton } from '../../ui';
import { ScrollView } from 'react-native-gesture-handler';
import { API_URL } from '../../lib';
export const AboutScreen = ({ addressData, route }: any) => {
  const navigation = useNavigation();
  // console.log('rest route', route);
  // console.log('restaurant', restaurant);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <ScreenTitle
        text={`Пользовательское соглашение ${'\n'} и обработка данных`}
        backIcon={true}
        textStyle={{ fontSize: 20 }}
      />
      <WebView source={{ uri: `${API_URL}/api/about` }} style={{ flex: 1 }} />
    </SafeAreaView>
  );
};
