import { connect } from "react-redux";
import { RestList as RestListTemplate } from "./RestList";
// import { categoriesReducer } from "./reducer";
// import { productReducer } from "../product";
import { mainReducer } from "../../features";
export const RestList = connect(
  (state) => ({
    restaurants: state.main.restaurants,
    address: state.main.address,
    // menuCategories: state.main.menuCategories,
    // ...state.categories,
  }),
  (dispatch) => ({

    getRestList: (params) => dispatch(mainReducer.getRestList(params)),
    changeAddress: (address) => dispatch(mainReducer.changeAddress(address))

  })
)(RestListTemplate);
