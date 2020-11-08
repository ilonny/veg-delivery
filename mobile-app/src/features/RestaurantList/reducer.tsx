//@ts-nocheck
import { Alert } from 'react-native';
import { SET_REST_LIST } from './actions';
import { API_URL, getLanLonFromAddressJson } from '../../lib';
const initialState = {
  restaurantList: [],
};

export const restaurantReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_REST_LIST:
      return {
        ...state,
        restaurantList: action.restaurantList,
      };
      break;
    default:
      return { ...state };
  }
};

restaurantReducer.getRestaurants = (params) => (dispatch, getState) => {
  console.log('restaurantReducer.getRestaurants ', params);
  const { addressData } = params || getState().userReducer.addressData || false;
  const { callback } = params;
  const coords = getLanLonFromAddressJson(addressData);
  console.log('coords', coords);
  if (coords) {
    fetch(
      `${API_URL}/restaurant/mobile-list?lat=${coords.lat}&lon=${coords.lon}`,
    )
      .then((res) => res.json())
      .then((res) => {
        dispatch({ type: SET_REST_LIST, restaurantList: res });
        console.log('resss is ', res);
        callback();
      })
      .catch((err) => {
        Alert.alert('Возниикла внутренняя ошибка сервера');
        callback();
      });
  }
};
