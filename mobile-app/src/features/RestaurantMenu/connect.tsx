//@ts-nocheck
import { connect } from 'react-redux';
import { RestaurantMenu as RestaurantMenuTemplate } from './RestaurantMenu';
import {
  restaurantReducer,
  cartReducer,
  ADD_TO_CART,
  DELETE_FROM_CART,
  CHANGE_CART_ITEM,
} from '../../features';
export const RestaurantMenu = connect(
  (state) => ({
    addressData: state.userReducer.addressData,
    restaurantMenu: state.restaurantReducer.restaurantMenu,
    cartList: state.cartReducer.cartList,
    // restaurantList: state.restaurantReducer.restaurantList,
    // restaurantList: state.restaurantReducer.restaurantList,
  }),
  (dispatch) => ({
    getMenu: (params) => dispatch(restaurantReducer.getMenu(params)),
    addToCart: (item) => dispatch({ type: ADD_TO_CART, item }),
    deleteFromCart: (item, force = false) =>
      dispatch({ type: DELETE_FROM_CART, item, force }),
    changeCartItem: (item) => dispatch({ type: CHANGE_CART_ITEM, item }),
    // getRestaurants: (params) =>
    //   dispatch(restaurantReducer.getRestaurants(params)),
    // setUserAddressData: (addressData) =>
    //   dispatch({ type: USER_SET_ADDRESS_DATA, addressData }),
  }),
)(RestaurantMenuTemplate);
