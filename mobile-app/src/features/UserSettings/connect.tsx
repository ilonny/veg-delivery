//@ts-nocheck
import { connect } from 'react-redux';
import { UserSettings as UserSettingsTemplate } from './UserSettings';
import {
  cartReducer,
  restaurantReducer,
  DELETE_FROM_CART,
  CHANGE_CART_ITEM,
  CLEAR_CART,
  userReducer,
} from '../../features';
export const UserSettings = connect(
  (state) => ({
    // phone: state.userReducer.phone,
    // name: state.userReducer.name,
    addressData: state.userReducer.addressData,
    userInfo: state.userReducer.userInfo,
    cartList: state.cartReducer.cartList,
    restaurantList: state.restaurantReducer.restaurantList,
  }),
  (dispatch) => ({
    addToCart: (item) => dispatch(cartReducer.addToCart(item)),
    deleteFromCart: (item, force = false) =>
      dispatch({ type: DELETE_FROM_CART, item, force }),
    changeCartItem: (item) => dispatch({ type: CHANGE_CART_ITEM, item }),
    clearCart: () => dispatch({ type: CLEAR_CART }),
    changeUserInfo: (params) => dispatch(userReducer.changeUserInfo(params)),
    UserSettings: (params) => dispatch(userReducer.UserSettings(params)),
    // setUserPhone: (phone) => dispatch({ type: USER_SET_PHONE, phone }),
    // setUserName: (name) => dispatch({ type: USER_SET_NAME, name }),
  }),
)(UserSettingsTemplate);
