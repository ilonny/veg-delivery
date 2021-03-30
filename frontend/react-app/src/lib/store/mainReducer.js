import { request } from "../rest";
import { SET_MENU_CATEGORIES } from "./actions";
const initialState = {
  menuCategories: {},
  address: {
    test: 123,
  },
};
export const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MENU_CATEGORIES: {
      return { ...state, menuCategories: action.categories };
    }
    case "CHANGE_ADDRESS": {
      return { ...state, address: action.address };
    }
    default: {
      return { ...state };
    }
  }
};

mainReducer.getMenuCategories = (dispatch) =>
  request({
    method: "GET",
    url: "get-categories",
  }).then((response) => {
    dispatch({ type: SET_MENU_CATEGORIES, categories: response });
  });

mainReducer.changeAddress = (address) => (dispatch, getState) => {
  dispatch({
    type: "CHANGE_ADDRESS",
    address,
  })
};
