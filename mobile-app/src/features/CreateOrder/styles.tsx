import { ViewStyle, TextStyle, ImageStyle, View } from 'react-native';

type Styles = {
  rowStart: ViewStyle;
  restTitle: TextStyle;
  cartItemWrapper: ViewStyle;
  cartItemImage: ImageStyle;
  cartItemTitle: TextStyle;
  dishName: TextStyle;
  dishBottom: ViewStyle;
  addIcon: ImageStyle;
  dishPrice: TextStyle;
  deliveryRow: ViewStyle;
  deliveryRowTitle: TextStyle;
  deliveryRowValue: TextStyle;
  cartBottom: ViewStyle;
  cartBottomClear: ViewStyle;
  cartBottomClearText: TextStyle;
  disabledText: TextStyle;
  emptyCartText: TextStyle;
};
export const styles: Styles = {
  rowStart: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 16,
  },
  restTitle: {
    fontFamily: 'Exo2-Bold',
    fontSize: 18,
    color: '#656665',
  },
  cartItemWrapper: {
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#F1F0F4',
    // flexDirection: 'row',
    // alignItems: 'flex-start',
    // justifyContent: 'flex-start',
  },
  cartItemImage: {
    width: 100,
    height: 83,
    borderRadius: 10,
    marginRight: 16,
  },
  cartItemTitle: {
    color: '#656665',
    fontFamily: 'Exo2-Bold',
    fontSize: 22,
  },
  dishName: {
    fontFamily: 'Exo2-Bold',
    fontSize: 20,
    color: '#656665',
  },
  dishBottom: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
  },
  addIcon: {
    width: 32,
    height: 32,
  },
  dishPrice: {
    fontFamily: 'Exo2-Bold',
    color: '#5AC17D',
    fontSize: 18,
  },
  deliveryRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#F1F0F4',
  },
  deliveryRowTitle: {
    fontFamily: 'Exo2-Bold',
    fontSize: 18,
    color: '#656665',
  },
  deliveryRowValue: {
    fontFamily: 'Exo2-Bold',
    fontSize: 18,
    color: '#5AC17D',
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
  emptyCartText: {
    fontFamily: 'Exo2-Bold',
    color: '#656665',
    textAlign: 'center',
    fontSize: 24,
    marginVertical: 20,
  },
};
