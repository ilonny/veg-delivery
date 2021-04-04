import { connect } from "react-redux";
import { OrderListTemplate } from "./OrderList";
// import { cartReducer } from "./reducer";
// import { productReducer } from "../product";
import { mainReducer } from "../../features";
export const OrderList = connect(
  (state) => ({
    orders: state?.main?.orders?.filter((ord) => Boolean(ord)),
    // cart: state.cart,
    // products: state.product.products,
    // // restaurants: state.main.restaurants,
    // address: state?.main?.address,
    // total_price: state?.cart?.total_price,
    // delivery_price: state?.cart?.delivery_price,
    // userInfo: state?.main?.userInfo,
  }),
  (dispatch) => ({
    // getCurrentProduct: (id) => dispatch(productReducer.getProducts(id)),
    // addToCart: (product_id, price) =>
    //     dispatch(cartReducer.addToCart(product_id, price)),
    // removeFromCart: (product_id) =>
    //     dispatch(cartReducer.removeFromCart(product_id)),
    // changeStoreByKey: (params) =>
    //     dispatch(mainReducer.changeStoreByKey(params)),
    // changeAddress: (address) => dispatch(mainReducer.changeAddress(address)),
    // createOrder: (params) => dispatch(mainReducer.createOrder(params)),
    // addOrder: (order) => dispatch(mainReducer.addOrder(order)),
    // clearCart: () => dispatch(cartReducer.clearCart()),
  })
)(OrderListTemplate);
