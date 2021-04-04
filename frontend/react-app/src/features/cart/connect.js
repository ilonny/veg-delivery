import { connect } from "react-redux";
import { CartTemplate } from "./templates";
import { cartReducer } from "./reducer";
import { productReducer } from "../product";
export const Cart = connect(
  (state) => ({
    cart: state.cart,
    products: state.product.products,
    // restaurants: state.main.restaurants,
    total_price: state?.cart?.total_price,
    delivery_price: state?.cart?.delivery_price,
  }),
  (dispatch) => ({
    getCurrentProduct: (id) => dispatch(productReducer.getProducts(id)),
    addToCart: (product_id, price) =>
      dispatch(cartReducer.addToCart(product_id, price)),
    removeFromCart: (product_id) =>
      dispatch(cartReducer.removeFromCart(product_id)),
  })
)(CartTemplate);
