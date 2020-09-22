import { ViewStyle, TextStyle } from 'react-native';
type Styles = {
  title: TextStyle;
  wrapper: TextStyle;
};

export const styles: Styles = {
  title: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'Exo2-Bold',
  },
  wrapper: {
    width: '100%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: '#5AC17D',
  },
};
