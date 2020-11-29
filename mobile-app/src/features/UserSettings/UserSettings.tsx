import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
  Alert,
  TextInput,
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
  addressData: Object;
  changeUserInfo: Function;
  createOrder: Function;
  userInfo: Object;
  showCommentInput: Boolean;
};
export const UserSettings = ({
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
}: any) => {
  const [loading, setLoading] = useState(false);
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
  // console.log('create order feature ', cartList, restaurant);
  //@ts-ignore
  const minPrice = parseInt(restaurant.min_price) || 0;
  const canOrder = totalPrice >= minPrice;
  // console.log('canOrder', totalPrice, minPrice, canOrder);
  return (
    <View>
      <Text style={styles.textLabel}>Адрес доставки</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('AddressScreen');
        }}>
        <AddressPlaceholder text={addressData ? addressData.value : ''} />
      </TouchableOpacity>
      <View
        style={[styles.rowStart, { marginVertical: 10, marginHorizontal: -5 }]}>
        <View style={styles.textInputWrapper}>
          <Text style={[styles.textLabel, { left: 10 }]}>Кв./Офис*</Text>
          <TextInput
            placeholder="Кв./Офис*"
            style={[styles.textInput, { marginHorizontal: 5 }]}
            value={userInfo.flat}
            onChangeText={(text) =>
              changeUserInfo({ key: 'flat', value: text })
            }
          />
        </View>
        <View style={styles.textInputWrapper}>
          <Text style={[styles.textLabel, { left: 10 }]}>Подъезд</Text>
          <TextInput
            placeholder="Подъезд"
            style={[styles.textInput, { marginHorizontal: 5 }]}
            value={userInfo.flat_p}
            onChangeText={(text) =>
              changeUserInfo({ key: 'flat_p', value: text })
            }
          />
        </View>
        <View style={styles.textInputWrapper}>
          <Text style={[styles.textLabel, { left: 10 }]}>Этаж</Text>
          <TextInput
            placeholder="Этаж"
            style={[styles.textInput, { marginHorizontal: 5 }]}
            value={userInfo.floor}
            onChangeText={(text) =>
              changeUserInfo({ key: 'floor', value: text })
            }
          />
        </View>
      </View>
      {showCommentInput && (
        <View style={styles.textInputWrapper}>
          <Text style={[styles.textLabel]}>Комментарий</Text>
          <TextInput
            placeholder="Комментарий"
            style={[styles.textInput]}
            value={userInfo.comment}
            onChangeText={(text) =>
              changeUserInfo({ key: 'comment', value: text })
            }
          />
        </View>
      )}
      <View style={{ height: 30 }} />
      <Text style={styles.textLabel}>Контактные данные</Text>
      <View style={styles.textInputWrapper}>
        <Text style={[styles.textLabel]}>Имя*</Text>
        <TextInput
          placeholder="Имя*"
          style={[styles.textInput]}
          value={userInfo.name}
          onChangeText={(text) => changeUserInfo({ key: 'name', value: text })}
        />
      </View>
      <View style={styles.textInputWrapper}>
        <Text style={[styles.textLabel, { marginTop: 15 }]}>Телефон*</Text>
        <TextInput
          placeholder="Телефон*"
          style={[styles.textInput, { marginTop: 10 }]}
          value={userInfo.phone}
          onChangeText={(text) => changeUserInfo({ key: 'phone', value: text })}
        />
      </View>
    </View>
  );
};
