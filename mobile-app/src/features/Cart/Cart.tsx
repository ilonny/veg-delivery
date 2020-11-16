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
import { ImageView } from '../../features';
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
export const Cart = ({
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
      <ScrollView style={{ flex: 1 }}>
        <ScreenTitle
          text={`Вы выбрали ${totalCount} ${declOfNum(totalCount, [
            'блюд',
            'блюда',
            'блюда',
          ])} на сумму ${totalPrice} руб`}
          backIcon={false}
        />
        {/* ts-ignore */}
        <View style={styles.rowStart}>
          <Text style={styles.restTitle}>Ресторан: {restaurant.name}</Text>
        </View>
        <View>
          {cartList.map((cartItem) => {
            return (
              <View key={cartItem.id} style={styles.cartItemWrapper}>
                <View style={{ flexDirection: 'row' }}>
                  <ImageView
                    uri={cartItem.image}
                    styleProp={styles.cartItemImage}
                  />
                  <View
                    style={{
                      justifyContent: 'space-between',
                      height: 83,
                      flex: 1,
                    }}>
                    <Text style={styles.dishName}>{cartItem.name}</Text>
                    <View style={[styles.dishBottom]}>
                      <View
                        style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <TouchableOpacity
                          onPress={() => {
                            // if (cartIndexDish === -1) {
                            //   addToCart(dish);
                            //   setModalIsVisible(false);
                            //   setSelectedDish(false);
                            // } else {
                            //   deleteFromCart(dish, true);
                            // }
                            deleteFromCart(cartItem);
                          }}>
                          <ImageView
                            imageName={'minus_icon_gray'}
                            styleProp={styles.addIcon}
                          />
                        </TouchableOpacity>
                        <Text style={{ marginHorizontal: 10 }}>
                          {cartItem.count}
                        </Text>
                        <TouchableOpacity
                          onPress={() => {
                            // if (cartIndexDish === -1) {
                            //   addToCart(dish);
                            //   setModalIsVisible(false);
                            //   setSelectedDish(false);
                            // } else {
                            //   deleteFromCart(dish, true);
                            // }
                            addToCart(cartItem);
                          }}>
                          <ImageView
                            imageName={'plus_icon_gray'}
                            styleProp={styles.addIcon}
                          />
                        </TouchableOpacity>
                      </View>
                      <Text style={styles.dishPrice}>{cartItem.price} руб</Text>
                    </View>
                  </View>
                </View>
                {!!cartItem.selectedModificatorsAll &&
                  !!cartItem.selectedModificatorsAll.length &&
                  !!Object.keys(cartItem.selectedModificatorsAll[0]).length && (
                    <View>
                      <Text>Дополнительно:</Text>
                      {cartItem.selectedModificatorsAll.map(
                        (modificatorPart, index) => {
                          let modificatorPartKey = Object.keys(
                            modificatorPart,
                          )[0];
                          let modificatorPartParent =
                            modificatorPart[modificatorPartKey];
                          if (
                            modificatorPartParent &&
                            modificatorPartParent.name
                          ) {
                            return (
                              <View style={{ paddingLeft: 10 }} key={index}>
                                <Text>{modificatorPartParent.name}</Text>
                                {modificatorPartParent.chosen_variants.map(
                                  (chosenVariant, index) => {
                                    return (
                                      <View
                                        key={index}
                                        style={{
                                          paddingLeft: 10,
                                          flexDirection: 'row',
                                          alignItems: 'center',
                                          justifyContent: 'space-between',
                                        }}>
                                        <Text>{chosenVariant.name}</Text>
                                        <Text>{chosenVariant.price} руб</Text>
                                      </View>
                                    );
                                  },
                                )}
                              </View>
                            );
                          }
                          return <></>;
                          console.log('modificatorPart', modificatorPart);
                          console.log('modificatorPart');
                        },
                      )}
                    </View>
                  )}
              </View>
            );
          })}
        </View>
        <View style={styles.deliveryRow}>
          <Text style={styles.deliveryRowTitle}>Доставка</Text>
          <Text style={styles.deliveryRowValue}>
            {deliveryPrice == 0 ? 'Бесплатно' : deliveryPrice + ' руб'}
          </Text>
        </View>
        <View style={styles.deliveryRow}>
          <Text style={styles.deliveryRowTitle}>Итого</Text>
          <Text style={styles.deliveryRowValue}>
            {deliveryPrice + totalPrice} руб
          </Text>
        </View>
      </ScrollView>
      <View style={styles.cartBottom}>
        {!canOrder && (
          <Text style={styles.disabledText}>
            {minPrice - totalPrice} до минимальной суммы заказа
          </Text>
        )}
        <MainButton
          text="Оформить заказ"
          styleProp={
            !canOrder && {
              backgroundColor: '#F1F0F4',
            }
          }
          action={() => {
            if (canOrder) {
              navigation.navigate('CreateOrderScreen');
            }
          }}
        />
        <TouchableOpacity
          style={styles.cartBottomClear}
          onPress={() => {
            Alert.alert(
              'Очистить корзину?',
              'Все ранее выбранные товары будут удалены',
              [
                {
                  text: 'Отмена',
                  onPress: () => console.log('Cancel Pressed'),
                  style: 'cancel',
                },
                {
                  text: 'Продолжить',
                  onPress: () => {
                    clearCart();
                  },
                },
              ],
            );
          }}>
          <Text style={styles.cartBottomClearText}>Очистить корзину</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
