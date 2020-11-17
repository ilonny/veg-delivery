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
import { UserSettings } from '../../features';
import { MainButton } from '../../ui';
import { ScrollView } from 'react-native-gesture-handler';
export const UserSettingsScreen = ({ addressData, route }: any) => {
  const navigation = useNavigation();
  // console.log('rest route', route);
  // console.log('restaurant', restaurant);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff', paddingTop: 16 }}>
      <ScreenTitle text="Мои настройки" backIcon={true} />
      <ScrollView style={{ flex: 1, padding: 16 }}>
        <UserSettings showCommentInput={false} />
        <MainButton
          text="Сохранить"
          action={() => navigation.goBack()}
          styleProp={{ marginTop: 30 }}
        />
      </ScrollView>
    </SafeAreaView>
  );
};
