declare var require: any;
export const ImageSource = {
  logo: require('../assets/icons/logo.png'),
  onboarding_1: require('../assets/icons/onboarding_1.png'),
  worldwide: require('../assets/icons/worldwide.png'),
  notification: require('../assets/icons/notification.png'),
};

export type TImageSource = keyof typeof ImageSource;
