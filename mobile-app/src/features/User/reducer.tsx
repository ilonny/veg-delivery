//@ts-nocheck
import { USER_SET_ADDRESS_DATA } from './action';
const initialState = {
  addressData: undefined,
};
export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_SET_ADDRESS_DATA:
      return {
        ...state,
        addressData: action.addressData,
      };
    default:
      return { ...state };
  }
};
