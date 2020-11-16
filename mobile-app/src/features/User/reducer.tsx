//@ts-nocheck
import {
  USER_SET_ADDRESS_DATA,
  USER_SET_PHONE,
  USER_SET_NAME,
  USER_SET_USER_INFO,
} from './action';
const initialState = {
  addressData: undefined,
  userInfo: {
    phone: '',
    name: '',
  },
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_SET_ADDRESS_DATA:
      return {
        ...state,
        addressData: action.addressData,
      };
    case USER_SET_USER_INFO:
      // const { key, value } = action;
      return {
        ...state,
        userInfo: {
          ...state.userInfo,
          ...action.userInfo,
        },
      };
    // case USER_SET_PHONE:
    //   return {
    //     ...state,
    //     phone: action.phone,
    //   };
    // case USER_SET_NAME:
    //   return {
    //     ...state,
    //     phone: action.name,
    //   };
    default:
      return { ...state };
  }
};
