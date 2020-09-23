//@ts-nocheck
import { connect } from 'react-redux';
import { UserRegistration as UserRegistrationTemplate } from './UserRegistration';
import { USER_SET_PHONE, USER_SET_NAME } from '../../features';
export const UserRegistration = connect(
  (state) => ({
    phone: state.userReducer.phone,
    name: state.userReducer.name,
    addressData: state.userReducer.addressData,
  }),
  (dispatch) => ({
    setUserPhone: (phone) => dispatch({ type: USER_SET_PHONE, phone }),
    setUserName: (name) => dispatch({ type: USER_SET_NAME, name }),
  }),
)(UserRegistrationTemplate);
