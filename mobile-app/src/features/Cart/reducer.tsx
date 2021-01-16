//@ts-nocheck
import { Alert } from 'react-native';
import Toast from 'react-native-toast-message';
import {
  ADD_TO_CART,
  DELETE_FROM_CART,
  CHANGE_CART_ITEM,
  CLEAR_CART,
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
        newCartList[index] = {
          ...item,
          count: newCartList[index].count + 1,
          selectedModificatorsAll: newCartList[
            index
          ].selectedModificatorsAll.concat({ ...item.selectedModificators }),
        };
        console.log('indexxx is', index);
        console.log('state', cartList);
        console.log('...item.selectedModificators', item.selectedModificators);
        console.log('newCartList', newCartList);
        console.log(
          '...old.selectedModificators',
          newCartList[index].selectedModificatorsAll,
        );
        return {
          ...state,
          cartList: newCartList,
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
        newCartList[index].selectedModificatorsAll.splice(-1, 1);
        newCartList[index].selectedModificatorsAll = [
          ...newCartList[index].selectedModificatorsAll,
        ];
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
    case CLEAR_CART:
      return {
        ...initialState,
      };
    default:
      return { ...state };
  }
};

cartReducer.addToCart = (item) => (dispatch, getState) => {
  const store = getState();
  console.log('store.cartReducer.cartList', store.cartReducer.cartList);
  const restaurant_id =
    (store.cartReducer.cartList[0] &&
      store.cartReducer.cartList[0].restaurant_id) ||
    item.restaurant_id;
  if (restaurant_id != item.restaurant_id) {
    Alert.alert(
      'Очистить корзину?',
      'Все ранее выбранные товары будут удалены',
      [
        {
          text: 'Отмена',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'Продолжить',
          onPress: () => {
            dispatch({ type: CLEAR_CART });
            dispatch({ type: ADD_TO_CART, item });
            Toast.show({
              text1: 'Добавлено в корзину',
              position: 'bottom',
              bottomOffset: 100,
            });
          },
        },
      ],
    );
  } else {
    dispatch({ type: ADD_TO_CART, item });
    Toast.show({
      text1: 'Добавлено в корзину',
      position: 'bottom',
      bottomOffset: 100,
    });
  }
};
