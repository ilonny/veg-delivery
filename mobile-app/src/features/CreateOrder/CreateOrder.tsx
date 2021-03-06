import React, { useEffect, useState } from 'react';
import Modal from 'react-native-modal';
import { WebView } from 'react-native-webview';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
  Alert,
  TextInput,
  Platform,
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
import { UserSettings } from '../../features';
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
  confirmOrder: Function;
  userInfo: Object;
};
export const CreateOrder = ({
  cartList,
  restaurantList,
  addToCart,
  deleteFromCart,
  clearCart,
  addressData,
  changeUserInfo,
  createOrder,
  userInfo,
  confirmOrder,
}: any) => {
  const [loading, setLoading] = useState(false);
  const [paymentLink, setPaymentLink] = useState<string>('');
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [currentOrder, setCurrentOrder] = useState(false);
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
      }}>
      <ScrollView>
        <View
          style={[
            { flex: 1, padding: 16 },
            // Platform.OS === 'android' && { paddingBottom: 80 },
          ]}>
          <UserSettings showCommentInput={true} />
          {/* <View style={styles.divider} /> */}
          <View style={{ height: 30 }} />
          <Text style={styles.textLabel}>Стоимость:</Text>
          <View style={styles.divider} />
          <View style={styles.rowBetween}>
            <Text style={styles.bottomText}>Сумма заказа</Text>
            <Text style={styles.bottomText}>{totalPrice} руб</Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.rowBetween}>
            <Text style={styles.bottomText}>Доставка</Text>
            <Text style={styles.bottomText}>
              {deliveryPrice ? deliveryPrice + ' руб' : 'Бесплатно'}
            </Text>
          </View>
        </View>
      </ScrollView>
      <View style={styles.cartBottom}>
        <Text style={styles.emptyCartText}>
          {+deliveryPrice + +totalPrice} руб
        </Text>
        {loading ? (
          <ActivityIndicator />
        ) : (
          <MainButton
            text="Оплатить"
            styleProp={
              !canOrder && {
                backgroundColor: '#F1F0F4',
              }
            }
            action={() => {
              if (canOrder) {
                setLoading(true);
                createOrder({
                  totalPrice,
                  deliveryPrice,
                  callback: (data) => {
                    setLoading(false);
                    if (data && data?.paymentLink) {
                      setPaymentLink(data?.paymentLink);
                      setCurrentOrder(data?.order);
                      setModalIsVisible(true);
                    }
                  },
                  navigation,
                });
                // navigation.navigate('CreateOrderScreen');
              }
            }}
          />
        )}
      </View>
      <Modal
        isVisible={modalIsVisible}
        style={{
          margin: 0,
          paddingTop: 100,
        }}
        swipeDirection={['down']}
        animationIn="slideInUp"
        animationOut="slideOutDown"
        animationInTiming={250}
        animationOutTiming={250}
        onSwipeComplete={(arg) => setModalIsVisible(false)}
        propagateSwipe={true}
        // scrollHorizontal={true}
      >
        <WebView
          style={{ flex: 1 }}
          source={{ uri: paymentLink }}
          onMessage={(event) => {
            const { data } = event.nativeEvent;
            console.log('webview recieved', data);
            if (data == 'success') {
              setModalIsVisible(false);
              confirmOrder({ navigation, orderData: currentOrder });
            }
            if (data == 'error') {
              setModalIsVisible(false);
              setTimeout(() => {
                Alert.alert('Оплата не удалась');
              }, 300);
            }
          }}
        />
      </Modal>
    </SafeAreaView>
  );
};
