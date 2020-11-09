//@ts-nocheck
import { connect } from 'react-redux';
import { RestaurantMenu as RestaurantMenuTemplate } from './RestaurantMenu';
import { restaurantReducer } from '../../features';
export const RestaurantMenu = connect(
  (state) => ({
    addressData: state.userReducer.addressData,
    restaurantMenu: state.restaurantReducer.restaurantMenu,
    // restaurantList: state.restaurantReducer.restaurantList,
    // restaurantList: state.restaurantReducer.restaurantList,
  }),
  (dispatch) => ({
    getMenu: (params) => dispatch(restaurantReducer.getMenu(params)),
    // getRestaurants: (params) =>
    //   dispatch(restaurantReducer.getRestaurants(params)),
    // setUserAddressData: (addressData) =>
    //   dispatch({ type: USER_SET_ADDRESS_DATA, addressData }),
  }),
)(RestaurantMenuTemplate);
