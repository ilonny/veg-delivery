import { connect } from "react-redux";
import { CatalogListTemplate } from "./templates";
import { productReducer } from "../product";
import { cartReducer } from "../cart";
export const CatalogList = connect(
  (state) => ({
    data: state.product.products,
    cart_products: state.cart.products,
    menuCategories: state.main.menuCategories.tree,
  }),
  (dispatch) => ({
    getProducts: (id, _isPopular) =>
      dispatch(productReducer.getProducts(id, _isPopular)),
    addToCart: (product) => dispatch(cartReducer.addToCart(product)),
    removeFromCart: (product) => dispatch(cartReducer.removeFromCart(product)),
  })
)(CatalogListTemplate);
