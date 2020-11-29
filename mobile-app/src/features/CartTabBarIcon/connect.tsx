//@ts-nocheck
import { connect } from 'react-redux';
import { CartTabBarIcon as CartTabBarIconTemplate } from './CartTabBarIcon';
import {
  restaurantReducer,
  cartReducer,
  ADD_TO_CART,
  DELETE_FROM_CART,
} from '../../features';
// import { restaurantReducer } from './reducer';
export const CartTabBarIcon = connect(
  (state) => ({
    cartList: state.cartReducer.cartList,
  }),
  (dispatch) => ({}),
)(CartTabBarIconTemplate);
