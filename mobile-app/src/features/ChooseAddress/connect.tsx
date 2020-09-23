//@ts-nocheck
import { connect } from 'react-redux';
import { ChooseAddress as ChooseAddressTemplate } from './ChooseAddress';
import { USER_SET_ADDRESS_DATA } from '../../features';
export const ChooseAddress = connect(
  (state) => ({
    addressData: state.userReducer.addressData,
  }),
  (dispatch) => ({
    setUserAddressData: (addressData) =>
      dispatch({ type: USER_SET_ADDRESS_DATA, addressData }),
  }),
)(ChooseAddressTemplate);
