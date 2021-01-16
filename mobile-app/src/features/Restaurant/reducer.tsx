//@ts-nocheck
import { Alert } from 'react-native';
import { SET_REST_LIST, SET_REST_MENU } from '../../features';
import { API_URL, getLanLonFromAddressJson } from '../../lib';
const initialState = {
  restaurantList: [],
  restaurantMenu: undefined,
};

export const restaurantReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_REST_LIST:
      return {
        ...state,
        restaurantList: action.restaurantList,
      };
    case SET_REST_MENU:
      return {
        ...state,
        restaurantMenu: action.restaurantMenu,
      };
    default:
      return { ...state };
  }
};

restaurantReducer.getRestaurants = (params) => (dispatch, getState) => {
  console.log('restaurantReducer.getRestaurants ', params);
  const { addressData } = params || getState().userReducer.addressData || false;
  const { callback } = params;
  const coords = getLanLonFromAddressJson(addressData);
  // console.log('coords', coords);
  if (coords) {
    console.log(
      'fetch rest',
      `${API_URL}/restaurant/mobile-list?lat=${coords.lat}&lon=${coords.lon}`,
    );
    fetch(
      `${API_URL}/restaurant/mobile-list?lat=${coords.lat}&lon=${coords.lon}`,
    )
      .then((res) => res.json())
      .then((res) => {
        dispatch({
          type: SET_REST_LIST,
          restaurantList: res.filter((el) => el.active != 0),
        });
        // console.log('resss is ', res);
        callback();
      })
      .catch((err) => {
        console.log('get rest error', err);
        Alert.alert('Возникла внутренняя ошибка сервера');
        callback();
      });
  }
};

restaurantReducer.getMenu = (params) => (dispatch, getState) => {
  console.log('restaurantReducer.getMenu', params);
  const { restaurant, callback } = params;
  const data = new FormData();
  data.append('rest_id', restaurant.id);
  fetch(`${API_URL}/restaurant/get-menu`, {
    method: 'POST',
    body: data,
  })
    .then((res) => res.json())
    .then((res) => {
      // console.log('res menu ', res);
      dispatch({ type: SET_REST_MENU, restaurantMenu: res });
      callback();
    })
    .catch((err) => {
      console.log('get menu error', err);
      Alert.alert('Возникла внутренняя ошибка сервера');
      callback();
    });
};
