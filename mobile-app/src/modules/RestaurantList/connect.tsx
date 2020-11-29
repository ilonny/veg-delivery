//@ts-nocheck
import { connect } from 'react-redux';
import { RestaurantList as RestaurantListTemplate } from './RestaurantList';
import { USER_SET_PHONE, USER_SET_NAME } from '../../features';
export const RestaurantList = connect(
  (state) => ({
    // phone: state.userReducer.phone,
    // name: state.userReducer.name,
    addressData: state.userReducer.addressData,
    addressHintShowed: state.tempReducer.addressHintShowed,
  }),
  (dispatch) => ({
    // setUserPhone: (phone) => dispatch({ type: USER_SET_PHONE, phone }),
    // setUserName: (name) => dispatch({ type: USER_SET_NAME, name }),
    setAddressHintShowed: () => dispatch({ type: 'SET_ADDRESS_HINT_SHOWED' }),
  }),
)(RestaurantListTemplate);
