declare var require: any;
export const ImageSource = {
  logo: require('../assets/icons/logo.png'),
  onboarding_1: require('../assets/icons/onboarding_1.png'),
  worldwide: require('../assets/icons/worldwide.png'),
  notification: require('../assets/icons/notification.png'),
  place_small: require('../assets/icons/place_small.png'),
  back_icon: require('../assets/icons/back_icon.png'),
  dinner: require('../assets/icons/dinner.png'),
  user: require('../assets/icons/user.png'),
  shopping_basket: require('../assets/icons/shopping_basket.png'),
  rating_star: require('../assets/icons/rating_star.png'),
  add_icon: require('../assets/icons/add_icon.png'),
  plus_icon_gray: require('../assets/icons/plus_icon_gray.png'),
  minus_icon_gray: require('../assets/icons/minus_icon_gray.png'),
  cart_empty_big: require('../assets/icons/cart_empty_big.png'),
  cabinet_link_arrow: require('../assets/icons/cabinet_link_arrow.png'),
};

export type TImageSource = keyof typeof ImageSource;
