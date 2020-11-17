//@ts-nocheck
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
    headers: {
      'Content-Type': 'application/json',
      // Accept: 'application/json',
    },
    body: formData,
  })
    .then((res) => res.json())
    .then((res) => {
      console.log('create order res', res);
      Alert.alert(res.message);
      if (res.status == 200) {
        dispatch({
          type: ADD_ORDER,
          order: {
            ...res.orderInfo,
            restaurantInfo: res.restInfo,
            cartList,
            date_create: res.date_create,
          },
        });
        setTimeout(() => {
          dispatch({ type: CLEAR_CART });
          navigation.navigate('Рестораны');
        }, 200);
      }
    })
    .catch((error) => {
      console.log(error);
    });
  setTimeout(() => {
    callback();
  }, 2500);
};

//TODO!!!!!!!!
////////////////////////////////
//короче. надо сохранять данные корзины в заказе. думаю добавлять прям из редьюсера ее, и чистить после добавлениия заказа.
//добавиить поле date_create в ответ
//подумать как формировать заказы. по id походу..
//
