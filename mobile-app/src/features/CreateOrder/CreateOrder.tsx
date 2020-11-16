import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
  Alert,
} from 'react-native';
import {
  ScreenTitle,
  AddressPlaceholder,
  RestaurantInfo,
  MainButton,
} from '../../ui';
import { ImageView } from '..';
import { useNavigation, CommonActions } from '@react-navigation/native';
import { getCartData, declOfNum } from '../../lib';
import { styles } from './styles';

type TProps = {
  cartList: Array<any>;
  restaurantList: Array<any>;
  addToCart: Function;
  deleteFromCart: Function;
  clearCart: Function;
};
export const CreateOrder = ({
  cartList,
  restaurantList,
  addToCart,
  deleteFromCart,
  clearCart,
}: any) => {
  const navigation = useNavigation();

  let restaurant = {};
  if (restaurantList && !!restaurantList.length && !!cartList[0]) {
    try {
      restaurant = restaurantList.find(
        (el) => el.id == cartList[0].restaurant_id,
      );
    } catch (e) {}
  }
  // console.log('cartData', totalCount, totalPrice);
  const { totalCount, totalPrice, deliveryPrice } = getCartData(
    cartList,
    restaurant,
  );
  console.log('Cart feature ', cartList, restaurant);
  //@ts-ignore
  const minPrice = parseInt(restaurant.min_price) || 0;
  const canOrder = totalPrice >= minPrice;
  console.log('canOrder', totalPrice, minPrice, canOrder);
  if (!cartList || !cartList.length) {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View
          style={{
            flex: 1,
            padding: 16,
            paddingBottom: 0,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <ImageView
            imageName="cart_empty_big"
            styleProp={{ width: 108, height: 89 }}
          />
          <Text style={styles.emptyCartText}>Корзина пуста!</Text>
          <MainButton
            text="Перейти к выбору еды"
            action={() => navigation.navigate('Рестораны')}
          />
        </View>
      </SafeAreaView>
    );
  }
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#fff',
        padding: 16,
        paddingBottom: 0,
      }}>
      <Text>Create order comp</Text>
    </SafeAreaView>
  );
};
