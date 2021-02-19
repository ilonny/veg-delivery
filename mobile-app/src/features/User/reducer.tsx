//@ts-nocheck
import { CommonActions } from '@react-navigation/native';
import { Alert } from 'react-native';
import { API_URL } from '../../lib';
import {
  USER_SET_ADDRESS_DATA,
  SET_USER_DATA,
  USER_SET_USER_INFO,
  ADD_ORDER,
  CLEAR_CART,
} from '../../features';
const initialState = {
  addressData: undefined,
  userInfo: {
    phone: '',
    name: '',
  },
  orders: [],
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_SET_ADDRESS_DATA:
      return {
        ...state,
        addressData: action.addressData,
      };
    case USER_SET_USER_INFO:
      // const { key, value } = action;
      return {
        ...state,
        userInfo: {
          ...state.userInfo,
          ...action.userInfo,
        },
      };
    case ADD_ORDER:
      return {
        ...state,
        orders: state.orders.concat(action.order),
      };
    // case USER_SET_PHONE:
    //   return {
    //     ...state,
    //     phone: action.phone,
    //   };
    // case USER_SET_NAME:
    //   return {
    //     ...state,
    //     phone: action.name,
    //   };
    default:
      return { ...state };
  }
};

userReducer.changeUserInfo = (params) => (dispatch, getState) => {
  const { key, value } = params;
  const userInfo = getState().userReducer.userInfo;
  userInfo[key] = value;
  dispatch({ type: USER_SET_USER_INFO, userInfo });
};

userReducer.createOrder = (params) => (dispatch, getState) => {
  console.log('userReducer.createOrder', params);
  const { totalPrice, deliveryPrice, callback, navigation } = params;
  const { userInfo, addressData } = getState().userReducer;
  const { cartList } = getState().cartReducer;
  const { restaurant_id } = cartList[0];
  if (
    !addressData.value ||
    !userInfo.flat ||
    !userInfo.name ||
    !userInfo.phone
  ) {
    Alert.alert(
      'Не заполнены обязательные поля',
      'Адрес, кв/офис, имя, телефон',
    );
    callback();
    return;
  }
  const data = {
    userInfo,
    addressData,
    totalPrice,
    deliveryPrice,
    cartList,
    restaurant_id,
  };
  console.log('create order data', data);
  console.log(`${API_URL}/order/create`);
  const formData = new FormData();
  formData.append('data', JSON.stringify(data));
  fetch(`${API_URL}/order/create`, {
    method: 'POST',
    mode: 'cors',
    // headers: {
    //   'Content-Type': 'application/json',
    //   Accept: 'application/json',
    // },
    body: formData,
  })
    .then((res) => res.json())
    .then((res) => {
      console.log('create order res', res);
      let orderData = {
        ...res.orderInfo,
        restaurantInfo: res.restInfo,
        cartList,
        date_create: res.date_create,
      };
      // Alert.alert(res.message);
      if (res.status == 200) {
        if (res?.orderInfo?.id) {
          fetch(
            `${API_URL}/payment/init-pay?order_id=${res?.orderInfo?.id}`,
            {},
          )
            .then((res) => res.json())
            .then((res) => {
              if (res.Success) {
                console.log('create payment link res', res);
                callback({
                  paymentLink: res?.PaymentURL,
                  order: orderData,
                });
              } else {
                console.log('res != success', res);
                Alert.alert(
                  'Возникла ошибка при создании оплаты. Попробуйте позже.',
                );
              }
            })
            .catch((err) => {
              console.log('create payment link error', err);
              Alert.alert(
                'Возникла ошибка при создании оплаты. Попробуйте позже.',
              );
            });
        } else {
          Alert.alert('Возникла ошибка при создании заказа. Попробуйте позже.');
        }
        // dispatch({
        //   type: ADD_ORDER,
        //   order: {
        //     ...res.orderInfo,
        //     restaurantInfo: res.restInfo,
        //     cartList,
        //     date_create: res.date_create,
        //   },
        // });
        // setTimeout(() => {
        //   dispatch({ type: CLEAR_CART });
        //   navigation.navigate('Рестораны');
        // }, 200);
      }
    })
    .catch((error) => {
      console.log(error);
    });
  //   var request = new XMLHttpRequest();
  // request.onreadystatechange = (e) => {
  //   if (request.readyState !== 4) {
  //     return;
  //   }
  //   if (request.status === 200) {
  //     console.log('success', request.responseText);
  //   } else {
  //     console.warn('error', request);
  //   }
  // };
  // request.open('GET', url);
  // request.send();
  // setTimeout(() => {
  //   callback();
  // }, 2500);
};

userReducer.confirmOrder = (params) => (dispatch, getState) => {
  const { totalPrice, deliveryPrice, callback, navigation, orderData } = params;
  const { userInfo, addressData } = getState().userReducer;
  const { cartList } = getState().cartReducer;
  const { restaurant_id } = cartList[0];

  dispatch({
    type: ADD_ORDER,
    order: orderData,
  });
  setTimeout(() => {
    dispatch({ type: CLEAR_CART });
    navigation.navigate('Рестораны');
    setTimeout(() => {
      Alert.alert('Спасибо, ваш заказ успешно оплачен.');
    }, 500);
  }, 200);
};

userReducer.changeAddress = (params) => (dispatch, getState) => {
  console.log('userReducer.changeAddress', params);
  const { addressData, navigation } = params;
  const oldData = getState()?.userReducer?.addressData?.value;
  // if (oldData != addressData?.value) {
  //   dispatch({ type: CLEAR_CART });
  //   navigation.navigate('RestaurantList');
  //   navigation.dispatch((state) => {
  //     // Remove the home route from the stack
  //     const routes = state.routes.filter((r) => r.name !== 'CartScreen' && r.name !== 'CreateOrderScreen');
  //     return CommonActions.reset({
  //       ...state,
  //       routes,
  //       index: routes.length - 1,
  //     });
  //   });
  // }
  dispatch({ type: USER_SET_ADDRESS_DATA, addressData });
};

userReducer.checkAddress = (params) => (dispatch, getState) => {
  console.log('userReducer.checkAddress', params);
  const { addressData, navigation } = params;
  // const oldData = getState()?.userReducer?.addressData?.value;
  const oldData = getState()?.userReducer?.addressData?.value;
  console.log('userReducer.checkAddress olddata', oldData);
  if (oldData != addressData?.value) {
    console.log('new data chosen');
    dispatch({ type: CLEAR_CART });
    navigation.navigate('RestaurantList');
    navigation.dispatch((state) => {
      // Remove the home route from the stack
      const routes = state.routes.filter(
        (r) => r.name !== 'CartScreen' && r.name !== 'CreateOrderScreen',
      );
      return CommonActions.reset({
        ...state,
        routes,
        index: routes.length - 1,
      });
    });
  }
};
