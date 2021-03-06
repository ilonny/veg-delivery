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
import { List } from '../../features/Cart/List';
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
};
export const OrderList = ({
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
}: any) => {
  const [loading, setLoading] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState({});
  const navigation = useNavigation();
  const scrollViewRef = useRef(null);
  const modalRef = useRef(null);
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [modalIsAnimating, setModalIsAnimating] = useState(false);
  let shouldDismiss = false;

  const onScroll = (event) => {
    if (modalIsAnimating) return;
    const offsetY = event.nativeEvent.contentOffset.y;
    const contentSizeHeight = event.nativeEvent.contentSize.height;
    const layoutMeasurementHeight = event.nativeEvent.layoutMeasurement.height;
    const dismissBuffer = (contentSizeHeight / 100) * 20;

    if (offsetY > 0)
      if (
        layoutMeasurementHeight + offsetY >
        contentSizeHeight + dismissBuffer
      ) {
        modalRef.current.animationOut = 'slideOutUp';
        shouldDismiss = true;
      } else shouldDismiss = false;
    else if (offsetY < 0)
      if (
        layoutMeasurementHeight + offsetY * -1 >
        contentSizeHeight + dismissBuffer
      ) {
        modalRef.current.animationOut = 'slideOutDown';
        shouldDismiss = true;
      } else shouldDismiss = false;
  };

  const onScrollEndDrag = () => {
    if (shouldDismiss) setModalIsVisible(false);
  };

  const openModal = () => {
    setModalIsVisible(true);
  };

  const closeModal = () => {
    setModalIsVisible(false);
  };

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
  console.log('orderList', orderList);
  return (
    <View style={{ flex: 1, paddingTop: 16 }}>
      <FlatList
        data={orderList
          .filter((el) => Boolean(el))
          .sort((a, b) => (a.id > b.id ? -1 : 1))}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ paddingHorizontal: 16 }}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              style={styles.restItemWrapperShadow}
              onPress={() => {
                setSelectedOrder({
                  ...item,
                  address_data: JSON.parse(item.address_data),
                  user_info: JSON.parse(item.user_info),
                });
                setTimeout(() => {
                  navigation.navigate('OrderInfoScreen', {
                    selectedOrder: {
                      ...item,
                      address_data: JSON.parse(item.address_data),
                      user_info: JSON.parse(item.user_info),
                    },
                  });
                }, 10);
                // setModalIsVisible(true);
              }}>
              <View style={styles.restItemWrapper}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View>
                    <View style={styles.rowBetween}>
                      <Text style={styles.itemPrice}>
                        {item.total_price + item.delivery_price} руб
                      </Text>
                      {/* <Text style={styles.itemStatus}>{item.status}</Text> */}
                    </View>
                    <View style={[styles.rowStart, { marginVertical: 10 }]}>
                      <Text style={styles.itemRestLabel}>Ресторан: </Text>
                      <Text
                        style={[styles.itemRestLabel, { color: '#656565' }]}>
                        {item?.restaurantInfo?.name}
                      </Text>
                    </View>
                    <View style={styles.rowBetween}>
                      <Text style={styles.itemBottomText}>
                        {item.id ? '№' + item.id : ''}
                      </Text>
                      <Text style={styles.itemBottomText}>
                        {item?.date_create}
                      </Text>
                    </View>
                  </View>
                  <ImageView
                    uri={item?.restaurantInfo?.image}
                    styleProp={{ width: 100, height: 83 }}
                  />
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
      />
      <Modal
        isVisible={modalIsVisible}
        swipeDirection={['down']}
        animationIn="slideInUp"
        animationOut="slideOutDown"
        animationInTiming={600}
        animationOutTiming={600}
        onSwipeComplete={(arg) => setModalIsVisible(false)}
        propagateSwipe={true}
        scrollHorizontal={true}
        // backdropColor={'transparent'}
        // backdropOpacity={0}
        onBackdropPress={() => setModalIsVisible(false)}
        style={styles.modal}>
        <View style={styles.modalWrapper}>
          <ScrollView ref={scrollViewRef}>
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
        {/* <View style={styles.modalBottom}></View> */}
      </Modal>
    </View>
  );
};
