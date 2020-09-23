//@ts-nocheck
import { USER_SET_ADDRESS_DATA, USER_SET_PHONE, USER_SET_NAME } from './action';
const initialState = {
  addressData: undefined,
  phone: '',
  name: '',
};
export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_SET_ADDRESS_DATA:
      return {
        ...state,
        addressData: action.addressData,
      };
    case USER_SET_PHONE:
      return {
        ...state,
        phone: action.phone,
      };
    case USER_SET_NAME:
      return {
        ...state,
        phone: action.name,
      };
    default:
      return { ...state };
  }
};
