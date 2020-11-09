import { ViewStyle, TextStyle, ImageStyle } from 'react-native';

type Styles = {
  loadingWrapper: ViewStyle;
  restItemWrapper: ViewStyle;
  restItemWrapperShadow: ViewStyle;
  restItemImage: ImageStyle;
  restItemRow: ViewStyle;
  restItemTitle: TextStyle;
  colorBg: ViewStyle;
  imageStar: ImageStyle;
  ratingText: TextStyle;
  infoText: TextStyle;
  itemTopWrapper: ViewStyle;
  itemTopWrapperText: TextStyle;
  categoryName: TextStyle;
  categoryLine: ViewStyle;
  dishContentWrapper: ViewStyle;
  dishImage: ImageStyle;
  dishName: TextStyle;
  dishBottom: ViewStyle;
  addIcon: ImageStyle;
  dishPrice: TextStyle;
};

export const styles: Styles = {
  loadingWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  restItemWrapperShadow: {
    // height: 500,
    borderRadius: 5,
    // overflow: 'hidden',
    shadowColor: '#e5e5e5',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 4,
    margin: 10,
  },
  restItemWrapper: {
    borderRadius: 5,
    overflow: 'hidden',
    backgroundColor: 'white',
    padding: 10,
  },
  restItemImage: {
    width: '100%',
    height: 200,
    // backgroundColor: 'red',
  },
  restItemRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    paddingBottom: 0,
  },
  restItemTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#656665',
    fontFamily: 'Exo2-Bold',
  },
  colorBg: {
    padding: 7,
    paddingHorizontal: 10,
    backgroundColor: 'rgb(244, 244, 244)',
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageStar: {
    width: 13,
    height: 13,
    marginRight: 5,
  },
  ratingText: {
    fontSize: 14,
    color: '#656665',
    fontFamily: 'Exo2-Bold',
  },
  infoText: {
    fontSize: 14,
    color: '#9F9F9F',
    fontFamily: 'Exo2-Bold',
  },
  itemTopWrapper: {
    padding: 10,
    backgroundColor: '#fff',
    borderBottomWidth: 2,
    borderBottomColor: '#fff',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemTopWrapperText: {
    color: '#9F9F9F',
    fontWeight: '600',
    fontSize: 18,
  },
  categoryName: {
    fontFamily: 'Exo2-Bold',
    fontSize: 18,
    marginRight: 15,
    color: '#9F9F9F',
  },
  categoryLine: {
    flex: 1,
    height: 2,
    backgroundColor: '#9F9F9F',
    borderRadius: 10,
  },
  dishContentWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  dishImage: {
    width: 100,
    height: 83,
    borderRadius: 5,
    marginRight: 10,
    backgroundColor: 'red',
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
};
