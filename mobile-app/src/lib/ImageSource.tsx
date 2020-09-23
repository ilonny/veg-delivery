declare var require: any;
export const ImageSource = {
  logo: require('../assets/icons/logo.png'),
  onboarding_1: require('../assets/icons/onboarding_1.png'),
  worldwide: require('../assets/icons/worldwide.png'),
  notification: require('../assets/icons/notification.png'),
  place_small: require('../assets/icons/place_small.png'),
  back_icon: require('../assets/icons/back_icon.png'),
};

export type TImageSource = keyof typeof ImageSource;
