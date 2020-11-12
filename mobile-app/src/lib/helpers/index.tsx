export const debounce = (f: Function, ms: number) => {
  let isCooldown = false;
  return function () {
    if (isCooldown) return;
    f.apply(this, arguments);
    isCooldown = true;
    setTimeout(() => (isCooldown = false), ms);
  };
};

export const getLanLonFromAddressJson = (addressData) => {
  if (
    addressData &&
    addressData.data &&
    addressData.data.geo_lat &&
    addressData.data.geo_lon
  ) {
    return { lat: addressData.data.geo_lat, lon: addressData.data.geo_lon };
  }
  return false;
};

export const itemIsAddedToCartIndex = (item, cartList) => {
  // console.log('itemIsAddedToCartIndex', item, cartList);
  if (!item || !cartList) {
    return -1;
  }
  return cartList.findIndex((el, index) => el.id == item.id);
};

export const getCartData = (cartList, restaurant = {}) => {
  let res = {
    totalPrice: 0,
    totalCount: 0,
    deliveryPrice: 0,
  };
  if (cartList && !!cartList.length) {
    cartList.forEach((cartEl) => {
      res.totalPrice =
        res.totalPrice + parseInt(cartEl.price) * parseInt(cartEl.count);
      if (
        !!cartEl.selectedModificatorsAll &&
        !!cartEl.selectedModificatorsAll.length &&
        !!Object.keys(cartEl.selectedModificatorsAll[0]).length
      ) {
        cartEl.selectedModificatorsAll.forEach((modificatorPart) => {
          let modificatorPartKey = Object.keys(modificatorPart)[0];
          let modificatorPartParent = modificatorPart[modificatorPartKey];
          if (
            modificatorPartParent &&
            modificatorPartParent.chosen_variants &&
            !!modificatorPartParent.chosen_variants.length
          ) {
            modificatorPartParent.chosen_variants.forEach((variant) => {
              res.totalPrice += parseInt(variant.price);
            });
          }
        });
      }
      res.totalCount = res.totalCount + parseInt(cartEl.count);
    });
  }
  //@ts-ignore
  let delivery_data = restaurant.delivery_data || [];
  // console.log('delivery_data', delivery_data);
  if (delivery_data.length) {
    //@ts-ignore
    delivery_data = delivery_data.sort((a, b) => {
      if (a.price_start < b.price_start) {
        return -1;
      }
      if (a.price_start > b.price_start) {
        return 1;
      }
      return 0;
    });
  }
  delivery_data.forEach((el) => {
    if (res.totalPrice > parseInt(el.price_start)) {
      res.deliveryPrice = parseInt(el.price);
    }
  });
  // console.log('delivery_data sorted', delivery_data);
  // console.log('res', res);
  return res;
};

export const declOfNum = (number, words) => {
  return words[
    number % 100 > 4 && number % 100 < 20
      ? 2
      : [2, 0, 1, 1, 1, 2][number % 10 < 5 ? number % 10 : 5]
  ];
};
