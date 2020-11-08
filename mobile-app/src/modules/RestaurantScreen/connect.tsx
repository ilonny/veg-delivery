//@ts-nocheck
import { connect } from 'react-redux';
import { RestaurantScreen as RestaurantScreenTemplate } from './RestaurantScreen';
import { USER_SET_PHONE, USER_SET_NAME } from '../../features';
export const RestaurantScreen = connect(
  (state) => ({
    // phone: state.userReducer.phone,
    // name: state.userReducer.name,
    addressData: state.userReducer.addressData,
  }),
  (dispatch) => ({
    // setUserPhone: (phone) => dispatch({ type: USER_SET_PHONE, phone }),
    // setUserName: (name) => dispatch({ type: USER_SET_NAME, name }),
  }),
)(RestaurantScreenTemplate);
