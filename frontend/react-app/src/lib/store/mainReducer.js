import { request } from "../rest";
import { SET_MENU_CATEGORIES } from "./actions";
const initialState = {
  menuCategories: {},
  address: {},
  restaurants: [],
};
export const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MENU_CATEGORIES: {
      return { ...state, menuCategories: action.categories };
    }
    case "CHANGE_ADDRESS": {
      return { ...state, address: action.address };
    }
    case "CHANGE_STORE_BY_KEY": {
      return {
        ...state,
        [action.key]: action.value,
      };
    }
    default: {
      return state;
      // return { ...state };
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
  });
};
mainReducer.getRestList = (params) => (dispatch, getState) => {
  const address = getState()?.main?.address;
  let callback = () => {};
  if (params) {
    callback = params?.callback;
  }
  // let lat = 55.7520233;
  // let lon = 37.6153107;
  let lat = address?.data?.geo_lat;
  let lon = address?.data?.geo_lon;
  request({
    method: "GET",
    url: `restaurant/mobile-list?lat=${lat}&lon=${lon}`,
  }).then((response) => {
    callback();
    dispatch({
      type: "CHANGE_STORE_BY_KEY",
      key: "restaurants",
      value: response,
    });
    console.log("response mobile list", response);
  });
};
