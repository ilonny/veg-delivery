//@ts-nocheck
import { connect } from 'react-redux';
import { RestaurantList as RestaurantListTemplate } from './RestaurantList';
import { restaurantReducer } from '../../features';
export const RestaurantList = connect(
  (state) => ({
    addressData: state.userReducer.addressData,
  }),
  (dispatch) => ({
    getRestaurants: (params) =>
      dispatch(restaurantReducer.getRestaurants(params)),
    // setUserAddressData: (addressData) =>
    //   dispatch({ type: USER_SET_ADDRESS_DATA, addressData }),
  }),
)(RestaurantListTemplate);
