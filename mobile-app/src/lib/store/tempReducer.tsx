// import {request} from '../rest';
// import {SET_CONNECTION_SETTINGS} from './actions';
//temp reducer нужен для инфы которая не должна сохраняться в redux-persist
const initialState = {
  addressHintShowed: false,
};
export const tempReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_ADDRESS_HINT_SHOWED': {
      return {
        ...state,
        addressHintShowed: true,
      };
    }
    default: {
      return { ...state };
    }
  }
};

// mainReducer.getMenuCategories = (dispatch) => request({
//     method: 'GET',
//     url: 'get-categories',
// }).then((response) => {
//     dispatch({ type: SET_MENU_CATEGORIES, categories: response })
// })
