//@ts-nocheck
import { connect } from 'react-redux';
import { RestaurantList as RestaurantListTemplate } from './RestaurantList';
import { USER_SET_ADDRESS_DATA } from '../../features';
export const RestaurantList = connect(
  (state) => ({
    // addressData: state.userReducer.addressData,
  }),
  (dispatch) => ({
    // setUserAddressData: (addressData) =>
    //   dispatch({ type: USER_SET_ADDRESS_DATA, addressData }),
  }),
)(RestaurantListTemplate);
