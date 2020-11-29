//@ts-nocheck
import { connect } from 'react-redux';
import { ChooseAddress as ChooseAddressTemplate } from './ChooseAddress';
import { USER_SET_ADDRESS_DATA, userReducer } from '../../features';
export const ChooseAddress = connect(
  (state) => ({
    addressData: state.userReducer.addressData,
  }),
  (dispatch) => ({
    setUserAddressData: (params) => dispatch(userReducer.changeAddress(params)),
    checkAddress: (params) => dispatch(userReducer.checkAddress(params)),
  }),
)(ChooseAddressTemplate);
