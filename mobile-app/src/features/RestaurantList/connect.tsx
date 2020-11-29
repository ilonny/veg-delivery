//@ts-nocheck
import { connect } from 'react-redux';
import { RestaurantList as RestaurantListTemplate } from './RestaurantList';
import {
  restaurantReducer,
  cartReducer,
  ADD_TO_CART,
  DELETE_FROM_CART,
} from '../../features';
// import { restaurantReducer } from './reducer';
export const RestaurantList = connect(
  (state) => ({
    addressData: state.userReducer.addressData,
    restaurantList: state.restaurantReducer.restaurantList,
    cartList: state.cartReducer.cartList,
  }),
  (dispatch) => ({
    getRestaurants: (params) =>
      dispatch(restaurantReducer.getRestaurants(params)),
  }),
)(RestaurantListTemplate);
