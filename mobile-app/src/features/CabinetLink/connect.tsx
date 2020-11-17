//@ts-nocheck
import { connect } from 'react-redux';
import { CabinetLink as CabinetLinkTemplate } from './CabinetLink';
import {
  restaurantReducer,
  cartReducer,
  ADD_TO_CART,
  DELETE_FROM_CART,
} from '../../features';
// import { restaurantReducer } from './reducer';
export const CabinetLink = connect(
  (state) => ({
    cartList: state.cartReducer.cartList,
  }),
  (dispatch) => ({
    // getRestaurants: (params) =>
    //   dispatch(restaurantReducer.getRestaurants(params)),
    // setUserAddressData: (addressData) =>
    //   dispatch({ type: USER_SET_ADDRESS_DATA, addressData }),
  }),
)(CabinetLinkTemplate);
