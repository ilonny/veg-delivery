import { ViewStyle, TextStyle } from 'react-native';
type Styles = {
  title: TextStyle;
  wrapper: TextStyle;
};

export const styles: Styles = {
  title: {
    color: '#656665',
    fontFamily: 'Exo2-Regular',
    fontSize: 16,
    marginLeft: 15,
  },
  wrapper: {
    backgroundColor: '#F6F6F6',
    borderRadius: 10,
    // height: 55,
    paddingVertical: 16,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
};
