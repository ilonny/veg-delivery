//@ts-nocheck
import { connect } from 'react-redux';
import { SearchScreen as SearchScreenTemplate } from './SearchScreen';
import { cartReducer, restaurantReducer } from '../../features';
export const SearchScreen = connect(
  (state) => ({
    // phone: state.userReducer.phone,
    // name: state.userReducer.name,
    addressData: state.userReducer.addressData,
    cartList: state.cartReducer.cartList,
    restaurantList: state.restaurantReducer.restaurantList,
    restaurantMenu: state.restaurantReducer.restaurantMenu,
  }),
  (dispatch) => ({
    // setUserPhone: (phone) => dispatch({ type: USER_SET_PHONE, phone }),
    // setUserName: (name) => dispatch({ type: USER_SET_NAME, name }),
  }),
)(SearchScreenTemplate);
