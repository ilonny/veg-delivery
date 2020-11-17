//@ts-nocheck
import { connect } from 'react-redux';
import { AboutScreen as AboutScreenTemplate } from './AboutScreen';
import { cartReducer } from '../../features';
export const AboutScreen = connect(
  (state) => ({
    // phone: state.userReducer.phone,
    // name: state.userReducer.name,
    addressData: state.userReducer.addressData,
    cartList: state.cartReducer.cartList,
  }),
  (dispatch) => ({
    // setUserPhone: (phone) => dispatch({ type: USER_SET_PHONE, phone }),
    // setUserName: (name) => dispatch({ type: USER_SET_NAME, name }),
  }),
)(AboutScreenTemplate);
