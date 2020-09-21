// import {request} from '../rest';
// import {SET_CONNECTION_SETTINGS} from './actions';
const initialState = {
  main: {},
};
export const mainReducer = (state = initialState, action) => {
  switch (action.type) {
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
