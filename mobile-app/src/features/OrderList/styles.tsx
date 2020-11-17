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
  wrapper: ViewStyle;
  modalWrapper: ViewStyle;
  modal: ViewStyle;
  rowBetween: ViewStyle;
  itemPrice: TextStyle;
  itemStatus: TextStyle;
  rowStart: ViewStyle;
  itemRestLabel: TextStyle;
  itemBottomText: TextStyle;
  orderTitle: TextStyle;
  orderText: TextStyle;
};

export const styles: Styles = {
  loadingWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  restItemWrapperShadow: {
    // height: 500,
    borderRadius: 16,
    // overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 4,
    marginBottom: 30,
  },
  restItemWrapper: {
    borderRadius: 16,
    overflow: 'hidden',
    backgroundColor: 'white',
    paddingVertical: 30,
    paddingHorizontal: 16,
    // flexDirection: 'row',
    // alignItems: 'center',
    // justifyContent: 'space-between',
    // paddingBottom: 30,
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
  wrapper: {
    flexDirection: 'row',
    paddingVertical: 30,
    paddingHorizontal: 16,
    borderRadius: 16,
  },
  modalWrapper: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    justifyContent: 'space-between',
  },
  modal: {
    margin: 0,
    paddingTop: 100,
  },
  rowBetween: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
  },
  itemPrice: {
    fontSize: 21,
    fontFamily: 'Exo2-Bold',
    color: '#656665',
  },
  itemStatus: {
    fontSize: 21,
    fontFamily: 'Exo2-Bold',
    color: '#5AC17D',
  },
  rowStart: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  itemRestLabel: {
    color: '#9F9F9F',
    fontFamily: 'Exo2-Bold',
  },
  itemBottomText: {
    fontFamily: 'Exo2-Bold',
    color: '#CCCCCC',
  },
  orderTitle: {
    color: '#9F9F9F',
    fontFamily: 'Exo2-Bold',
    fontSize: 21,
  },
  orderText: {
    color: '#9F9F9F',
    fontFamily: 'Exo2-Bold',
    fontSize: 18,
    marginVertical: 10,
  },
};
