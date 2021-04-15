import { request } from "../rest";
import { SET_MENU_CATEGORIES } from "./actions";
import { API_URL } from "../../lib";
const initialState = {
  menuCategories: {},
  address: {},
  restaurants: [],
  userInfo: {},
  orders: [],
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
    case "ADD_ORDER": {
      return {
        ...state,
        orders: state.orders.concat(action.order),
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
    // console.log("response mobile list", response);
  });
};

mainReducer.changeStoreByKey = (params) => (dispatch, getState) => {
  const { key, value } = params;
  dispatch({
    type: "CHANGE_STORE_BY_KEY",
    key,
    value,
  });
};

mainReducer.createOrder = (params) => (dispatch, getState) => {
  // console.log("userReducer.createOrder", params);
  const { totalPrice, deliveryPrice, callback, navigation } = params;
  const { userInfo } = getState().main;
  let addressData = getState().main?.address;
  let cartList = getState().cart?.products;
  // const { cartList } = getState().cartReducer;
  const { restaurant_id } = cartList[0];
  if (
    !addressData.value ||
    !userInfo.flat ||
    !userInfo.name ||
    userInfo.phone.replace(/[^a-zA-Z0-9]/g, "").length < 11
  ) {
    window.alert(
      "Не заполнены обязательные поля (Адрес, кв/офис, имя, телефон)"
      // 'Адрес, кв/офис, имя, телефон',
    );
    callback();
    return;
  }
  const data = {
    userInfo,
    addressData,
    totalPrice,
    deliveryPrice,
    cartList,
    restaurant_id,
  };
  // console.log("create order data", data);
  // console.log(`${API_URL}/order/create`);
  const formData = new FormData();
  formData.append("data", JSON.stringify(data));
  fetch(`${API_URL}/order/create`, {
    method: "POST",
    mode: "cors",
    body: formData,
  })
    .then((res) => res.json())
    .then((res) => {
      // console.log("create order res", res);
      let orderData = {
        ...res.orderInfo,
        restaurantInfo: res.restInfo,
        cartList,
        date_create: res.date_create,
      };
      // Alert.alert(res.message);
      if (res.status == 200) {
        if (res?.orderInfo?.id) {
          fetch(
            `${API_URL}/payment/init-pay?order_id=${res?.orderInfo?.id}`,
            {}
          )
            .then((res) => res.json())
            .then((res) => {
              if (res.Success) {
                // console.log("create payment link res", res);
                callback({
                  paymentLink: res?.PaymentURL,
                  order: orderData,
                });
              } else {
                // console.log("res != success", res);
                window.alert(
                  "Возникла ошибка при создании оплаты. Попробуйте позже."
                );
              }
            })
            .catch((err) => {
              // console.log("create payment link error", err);
              window.alert(
                "Возникла ошибка при создании оплаты. Попробуйте позже."
              );
            });
        } else {
          window.alert(
            "Возникла ошибка при создании заказа. Попробуйте позже."
          );
        }
      }
    })
    .catch((error) => {
      // console.log(error);
    });
};

mainReducer.addOrder = (order) => (dispatch, getState) => {
  // console.log("mainReducer.addOrder", order);
  dispatch({ type: "ADD_ORDER", order });
};
