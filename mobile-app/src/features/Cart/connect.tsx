//@ts-nocheck
import { connect } from 'react-redux';
import { Cart as CartTemplate } from './Cart';
import {
  cartReducer,
  restaurantReducer,
  DELETE_FROM_CART,
  CHANGE_CART_ITEM,
  CLEAR_CART,
} from '../../features';
export const Cart = connect(
  (state) => ({
    // phone: state.userReducer.phone,
    // name: state.userReducer.name,
    addressData: state.userReducer.addressData,
    cartList: state.cartReducer.cartList,
    restaurantList: state.restaurantReducer.restaurantList,
  }),
  (dispatch) => ({
    addToCart: (item) => dispatch(cartReducer.addToCart(item)),
    deleteFromCart: (item, force = false) =>
      dispatch({ type: DELETE_FROM_CART, item, force }),
    changeCartItem: (item) => dispatch({ type: CHANGE_CART_ITEM, item }),
    clearCart: () => dispatch({ type: CLEAR_CART }),
    // setUserPhone: (phone) => dispatch({ type: USER_SET_PHONE, phone }),
    // setUserName: (name) => dispatch({ type: USER_SET_NAME, name }),
  }),
)(CartTemplate);
