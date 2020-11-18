import React, { useEffect, useState, useRef } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
  Alert,
  TextInput,
  FlatList,
} from 'react-native';
import {
  ScreenTitle,
  AddressPlaceholder,
  RestaurantInfo,
  MainButton,
} from '../../ui';
import { ImageView } from '..';
import Modal from 'react-native-modal';
import { useNavigation, CommonActions } from '@react-navigation/native';
import { getCartData, declOfNum } from '../../lib';
import { styles } from './styles';
import { List } from '../Cart/List';
type TProps = {
  cartList: Array<any>;
  restaurantList: Array<any>;
  addToCart: Function;
  deleteFromCart: Function;
  clearCart: Function;
  addressData: Object;
  changeUserInfo: Function;
  createOrder: Function;
  userInfo: Object;
  showCommentInput: Boolean;
  orderList: Array<any>;
  selectedOrder: Any;
};
export const OrderInfo = ({
  cartList,
  restaurantList,
  addToCart,
  deleteFromCart,
  clearCart,
  addressData,
  changeUserInfo,
  createOrder,
  userInfo,
  showCommentInput = false,
  orderList = [],
  selectedOrder,
}: any) => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, paddingTop: 16 }}>
      <View style={styles.modalWrapper}>
        <ScrollView>
          <Text style={styles.orderTitle}>Заказ №{selectedOrder.id}</Text>
          <Text style={styles.orderText}>
            Ресторан: {selectedOrder?.restaurantInfo?.name}
          </Text>
          <Text style={styles.orderText}>Детали заказа:</Text>
          {!!selectedOrder.cartList && !!selectedOrder.cartList.length && (
            <List cartList={selectedOrder.cartList} showButtons={false} />
          )}
          <Text style={styles.orderText}>
            Заказ: {selectedOrder?.total_price + ' руб'}
          </Text>
          <Text style={styles.orderText}>
            Доставка:{' '}
            {selectedOrder.delivery_price
              ? selectedOrder.delivery_price + ' руб'
              : 'Бесплатно'}
          </Text>
          <Text style={styles.orderText}>
            Итого: {selectedOrder?.total_price + selectedOrder.delivery_price}{' '}
            руб
          </Text>
          <Text style={styles.orderText}>
            Адрес доставки: {selectedOrder?.address_data?.value}
            {!!selectedOrder.user_info?.flat &&
              ` Квартира: ${selectedOrder.user_info.flat}`}
            {!!selectedOrder.user_info?.flat_p &&
              ` Подъезд: ${selectedOrder.user_info.flat_p}`}
            {!!selectedOrder.user_info?.floor &&
              ` Этаж: ${selectedOrder.user_info.floor}`}
          </Text>
          <Text style={styles.orderText}>
            Имя: {selectedOrder?.user_info?.name}
          </Text>
          <Text style={styles.orderText}>
            Телефон: {selectedOrder?.user_info?.phone}
          </Text>
        </ScrollView>
      </View>
    </View>
  );
};
