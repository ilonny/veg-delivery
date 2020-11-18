//@ts-nocheck
import { connect } from 'react-redux';
import { OrderInfo as OrderInfoTemplate } from './OrderInfo';
import {
  cartReducer,
  restaurantReducer,
  DELETE_FROM_CART,
  CHANGE_CART_ITEM,
  CLEAR_CART,
  userReducer,
} from '..';
export const OrderInfo = connect(
  (state) => ({}),
  (dispatch) => ({}),
)(OrderInfoTemplate);
