import { connect } from "react-redux";
import { RestList as RestListTemplate } from "./RestList";
// import { categoriesReducer } from "./reducer";
// import { productReducer } from "../product";
import { mainReducer } from "../../features";
export const RestList = connect(
  (state) => ({
    restaurants: state.main.restaurants,
    // menuCategories: state.main.menuCategories,
    // ...state.categories,
  }),
  (dispatch) => ({
    getRestList: (params) => dispatch(mainReducer.getRestList(params)),
  })
)(RestListTemplate);
