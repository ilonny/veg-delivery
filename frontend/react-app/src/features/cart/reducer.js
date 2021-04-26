import {
  // CART_ADD,
  // CART_REMOVE,
  SET_CART_PRODUCTS,
  // SAVE_LOCAL_CART,
  // LOAD_LOCAL_CART
} from "./actions";
import { ToastsContainer, ToastsStore } from "react-toasts";
const emptyCart = {
  cart_id: undefined,
  products: [],
  total_price: 0,
  delivery_price: 0,
  min_price: 0,
};
const initialState = emptyCart;
const filterByElem = (item, arr) =>
  arr.filter((a_item) => a_item.id !== item.id);

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CART_PRODUCTS: {
      // ?.find(rest => rest.id == action.products[0].restaurant_id)?.delivery_data;
      return {
        ...state,
        products: action.products,
        total_price: action.totalPrice,
        delivery_price: action.deliveryPrice,
        min_price: action.restaurantMinPrice,
      };
    }
    case "CLEAR_CART": {
      return {
        ...state,
        products: [],
        total_price: 0,
        delivery_price: 0,
      };
    }
    default: {
      return state;
    }
  }
};

// cartReducer.addToCart = (product_id, price) => (dispatch, getState) => {
//   let cartProducts = getState().cart.products;
//   if (!price) {
//     let productPrice = parseFloat(
//       getState().product.products.find((item) => item.id === product_id)
//     );
//     if (productPrice) {
//       price = productPrice.new_price || productPrice.price;
//     }
//   }
//   let existingProductIndex = cartProducts.findIndex(
//     (product) => product.id === product_id
//   );
//   if (existingProductIndex !== -1) {
//     cartProducts[existingProductIndex].count++;
//   } else {
//     cartProducts.push({ id: product_id, count: 1, price: price });
//   }
//   dispatch({ type: SET_CART_PRODUCTS, products: cartProducts });
//   localStorage.setItem("cart", JSON.stringify(getState().cart));
// };
cartReducer.addToCart = (product) => (dispatch, getState) => {
  let cartProducts = getState().cart.products;
  let restaurants = getState()?.main?.restaurants;
  let { restaurant_id } = product;
  if (
    cartProducts?.length > 0 &&
    restaurant_id != cartProducts[0].restaurant_id
  ) {
    if (window.confirm("Перед добавлением блюда необходимо очистить корзину")) {
      cartProducts = [];
    } else {
      return false;
    }
  }
  let existingProductIndex = cartProducts.findIndex(
    (productInCart) => productInCart?.id === product?.id
  );
  if (existingProductIndex !== -1) {
    cartProducts[existingProductIndex].count++;
  } else {
    cartProducts.push({ ...product, count: 1 });
  }
  // console.log('cartReducer.addToCart', product, cartProducts)
  //
  let totalPrice = cartProducts?.reduce(
    (a, b) => a + Number(b.price) * (b.count || 1),
    0
  );

  let deliveryPrice = 0;
  let restaurantMinPrice = 0;
  try {
    let restaurantData = restaurants?.find(
      (rest) => rest.id == cartProducts[0].restaurant_id
    );
    let restaurantDeliveryData = restaurantData?.delivery_data;
    restaurantMinPrice = restaurantData?.min_price;
    restaurantDeliveryData.forEach((d) => {
      let priceStart = Number(d.price_start);
      if (totalPrice >= priceStart) {
        deliveryPrice = d.price;
      }
    });
    // console.log("restaurantDeliveryData", restaurantDeliveryData);
    // console.log("deliveryPrice", deliveryPrice);
  } catch (e) {}
  //

  dispatch({
    type: SET_CART_PRODUCTS,
    products: [...cartProducts],
    totalPrice,
    deliveryPrice,
    restaurantMinPrice,
  });
  ToastsStore.success("Товар добавлен в корзину");
};

cartReducer.removeFromCart = (product) => (dispatch, getState) => {
  let cartProducts = getState().cart.products;
  let restaurants = getState()?.main?.restaurants;
  let existingProductIndex = cartProducts.findIndex(
    (productInCart) => productInCart?.id === product?.id
  );
  cartProducts[existingProductIndex].count--;
  if (cartProducts[existingProductIndex].count < 1) {
    cartProducts = cartProducts.filter(
      (productInCart) => productInCart?.id != product?.id
    );
  }
  // if (existingProductIndex !== -1) {
  //   cartProducts[existingProductIndex].count++;
  // } else {
  //   cartProducts.push({ ...product, count: 1 });
  // }
  let totalPrice = cartProducts?.reduce(
    (a, b) => a + Number(b.price) * (b.count || 1),
    0
  );

  let deliveryPrice = 0;
  let restaurantMinPrice = 0;
  try {
    let restaurantData = restaurants?.find(
      (rest) => rest.id == cartProducts[0].restaurant_id
    );
    let restaurantDeliveryData = restaurantData?.delivery_data;
    restaurantMinPrice = restaurantData?.min_price;
    restaurantDeliveryData.forEach((d) => {
      let priceStart = Number(d.price_start);
      if (totalPrice >= priceStart) {
        deliveryPrice = d.price;
      }
    });
  } catch (e) {}

  // console.log("cartReducer.removeFromCart", cartProducts, product);
  dispatch({
    type: SET_CART_PRODUCTS,
    products: [...cartProducts],
    totalPrice,
    deliveryPrice,
    restaurantMinPrice,
  });
};

cartReducer.clearCart = () => (dispatch) => {
  dispatch({ type: "CLEAR_CART" });
};
// cartReducer.removeFromCart = (product_id) => (dispatch, getState) => {
//   let cartProducts = getState().cart.products;
//   let existingProductIndex = cartProducts.findIndex(
//     (product) => product.id === product_id
//   );
//   if (existingProductIndex !== -1) {
//     if (cartProducts[existingProductIndex].count < 2) {
//       cartProducts = filterByElem(
//         cartProducts[existingProductIndex],
//         cartProducts
//       );
//     } else {
//       cartProducts[existingProductIndex].count--;
//     }
//   } else {
//     cartProducts = filterByElem(
//       cartProducts[existingProductIndex],
//       cartProducts
//     );
//   }
//   dispatch({ type: SET_CART_PRODUCTS, products: cartProducts });
//   localStorage.setItem("cart", JSON.stringify(getState().cart));
// };
