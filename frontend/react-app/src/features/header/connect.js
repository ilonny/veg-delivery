import { connect } from "react-redux";
import { HeaderTemplate } from "./templates";
import { sideBarReducer } from "../sidebar";
// import {cartReducer} from "../cart";
export const Header = connect(
  (state) => ({
    sidebar: state.sidebar,
    cart: state.cart,
    menu: state.main.menuCategories.tree,
    address: state.main.address,
    products: state.cart.products,
    cart_count: state?.cart?.products?.reduce((a, b) => a + b.count, 0) || 0,
  }),
  (dispatch) => ({
    toggleSideBar: (params) => dispatch(sideBarReducer.toggleSideBar(params)),
  })
)(HeaderTemplate);
