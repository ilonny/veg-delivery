import { ViewStyle, TextStyle, Platform } from 'react-native';
type Styles = {
  title: TextStyle;
  wrapper: TextStyle;
};

export const styles: Styles = {
  title: {
    color: '#656665',
    fontFamily: 'Exo2-Bold',
    fontSize: 30,
    lineHeight: 30,
  },
  wrapper: {
    paddingHorizontal: 16,
    paddingVertical: 5,
    paddingRight: 32,
  },
};
