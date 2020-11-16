//@ts-nocheck
import { Alert } from 'react-native';
import {
  USER_SET_ADDRESS_DATA,
  SET_USER_DATA,
  USER_SET_USER_INFO,
} from './action';
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
  const { totalPrice, deliveryPrice, callback } = params;
  const { userInfo, addressData } = getState().userReducer;
  const { cartList } = getState().cartReducer;
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
    ...userInfo,
    addressData,
    totalPrice,
    deliveryPrice,
    cartList,
  };
  console.log('create order data', data);
  setTimeout(() => {
    callback();
  }, 2500);
};
