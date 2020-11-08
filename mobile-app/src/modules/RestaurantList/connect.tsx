//@ts-nocheck
import { connect } from 'react-redux';
import { RestaurantList as RestaurantListTemplate } from './RestaurantList';
import { USER_SET_PHONE, USER_SET_NAME } from '../../features';
export const RestaurantList = connect(
  (state) => ({
    // phone: state.userReducer.phone,
    // name: state.userReducer.name,
    addressData: state.userReducer.addressData,
  }),
  (dispatch) => ({
    // setUserPhone: (phone) => dispatch({ type: USER_SET_PHONE, phone }),
    // setUserName: (name) => dispatch({ type: USER_SET_NAME, name }),
  }),
)(RestaurantListTemplate);
