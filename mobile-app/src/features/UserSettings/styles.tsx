import { ViewStyle, TextStyle, ImageStyle } from 'react-native';

type Styles = {
  textLabel: TextStyle;
  emptyCartText: TextStyle;
  rowStart: ViewStyle;
  rowBetween: ViewStyle;
  textInput: ViewStyle;
  divider: ViewStyle;
  bottomText: TextStyle;
  cartBottom: ViewStyle;
  cartBottomClear: ViewStyle;
  cartBottomClearText: TextStyle;
  disabledText: TextStyle;
};
export const styles: Styles = {
  textLabel: {
    fontFamily: 'Exo2-Bold',
    color: '#656665',
    marginBottom: 5,
  },
  emptyCartText: {
    fontFamily: 'Exo2-Bold',
    color: '#656665',
    textAlign: 'center',
    fontSize: 21,
    marginBottom: 10,
  },
  rowStart: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rowBetween: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textInput: {
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#F6F6F6',
    height: 50,
    paddingHorizontal: 15,
    borderRadius: 10,
    flex: 1,
  },
  divider: {
    height: 1,
    flex: 1,
    marginVertical: 10,
    backgroundColor: '#F6F6F6',
  },
  bottomText: {
    fontFamily: 'Exo2-Bold',
    color: '#656665',
  },
  cartBottom: {
    padding: 16,
    width: '100%',
    // backgroundColor: 'red'
  },
  cartBottomClear: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    padding: 8,
    marginTop: 10,
  },
  cartBottomClearText: {
    color: '#5AC17D',
    textDecorationLine: 'underline',
  },
  disabledText: {
    padding: 8,
    color: '#9F9F9F',
    textAlign: 'center',
  },
};
