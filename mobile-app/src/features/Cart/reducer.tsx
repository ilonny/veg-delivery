//@ts-nocheck
import { Alert } from 'react-native';
import {
  ADD_TO_CART,
  DELETE_FROM_CART,
  CHANGE_CART_ITEM,
} from '../../features';
import { API_URL, getLanLonFromAddressJson } from '../../lib';
import { itemIsAddedToCartIndex } from '../../lib';

const initialState = {
  cartList: [],
  totalPrice: undefined,
};

export const cartReducer = (state = initialState, action) => {
  let { item, force } = action;
  let { cartList } = state;
  if (!itemIsAddedToCartIndex) return { ...state };
  let index = itemIsAddedToCartIndex(item, cartList);
  let newCartList = [...cartList];
  switch (action.type) {
    case ADD_TO_CART:
      if (index !== -1) {
        newCartList = [...cartList];
        console.log('indexxx is', index);
        console.log('state', cartList);
        console.log('...item.selectedModificators', item.selectedModificators);
        console.log('newCartList', newCartList);
        console.log(
          '...old.selectedModificators',
          newCartList[index].selectedModificatorsAll,
        );
        newCartList[index] = {
          ...item,
          count: newCartList[index].count + 1,
          selectedModificatorsAll: newCartList[
            index
          ].selectedModificatorsAll.concat({ ...item.selectedModificators }),
        };
        return {
          ...state,
          cartList: [...newCartList],
        };
      } else {
        return {
          ...state,
          cartList: state.cartList.concat({
            ...item,
            count: 1,
            selectedModificatorsAll: [].concat({
              ...item.selectedModificators,
            }),
          }),
        };
      }
    case DELETE_FROM_CART:
      // let { item, force } = action;
      // let { cartList } = state;
      // let index = itemIsAddedToCartIndex(item, cartList);
      newCartList[index].count -= 1;

      if (
        force ||
        !newCartList[index].count ||
        newCartList[index].count == 0 ||
        newCartList[index].count < 0
      ) {
        return {
          ...state,
          cartList: state.cartList.filter((el) => el.id !== action.item.id),
        };
      } else {
        newCartList[index].selectedModificatorsAll = newCartList[
          index
        ].selectedModificatorsAll.splice(-1, 1);
        return {
          ...state,
          cartList: [...newCartList],
        };
      }
    case CHANGE_CART_ITEM:
      newCartList[index] = { ...item, count: newCartList[index].count || 1 };
      return {
        ...state,
        cartList: [...newCartList],
      };
    default:
      return { ...state };
  }
};
