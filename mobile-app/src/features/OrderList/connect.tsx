//@ts-nocheck
import { connect } from 'react-redux';
import { OrderList as OrderListTemplate } from './OrderList';
import {
  cartReducer,
  restaurantReducer,
  DELETE_FROM_CART,
  CHANGE_CART_ITEM,
  CLEAR_CART,
  userReducer,
} from '..';
export const OrderList = connect(
  (state) => ({
    // phone: state.userReducer.phone,
    // name: state.userReducer.name,
    addressData: state.userReducer.addressData,
    userInfo: state.userReducer.userInfo,
    cartList: state.cartReducer.cartList,
    restaurantList: state.restaurantReducer.restaurantList,
    orderList: state.userReducer.orders,
  }),
  (dispatch) => ({
    addToCart: (item) => dispatch(cartReducer.addToCart(item)),
    deleteFromCart: (item, force = false) =>
      dispatch({ type: DELETE_FROM_CART, item, force }),
    changeCartItem: (item) => dispatch({ type: CHANGE_CART_ITEM, item }),
    clearCart: () => dispatch({ type: CLEAR_CART }),
    changeUserInfo: (params) => dispatch(userReducer.changeUserInfo(params)),
    OrderList: (params) => dispatch(userReducer.OrderList(params)),
    // setUserPhone: (phone) => dispatch({ type: USER_SET_PHONE, phone }),
    // setUserName: (name) => dispatch({ type: USER_SET_NAME, name }),
  }),
)(OrderListTemplate);
