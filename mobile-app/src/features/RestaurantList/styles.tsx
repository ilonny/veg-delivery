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
  notFoundText: TextStyle;
  hintWrapper: ViewStyle;
  hintWrapperTitle: TextStyle;
  hintWrapperAddress: TextStyle;
  hintWrapperRow: ViewStyle;
  hintButton: ViewStyle;
  hintButtonText: TextStyle;
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
  },
  restItemWrapper: {
    borderRadius: 16,
    overflow: 'hidden',
    backgroundColor: 'white',
    paddingBottom: 16,
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
  notFoundText: {
    fontSize: 22,
    color: '#9F9F9F',
    fontFamily: 'Exo2-Bold',
    textAlign: 'center',
  },
  hintWrapper: {
    position: 'absolute',
    top: 70,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    zIndex: 333999,
    margin: 10,
    padding: 15,
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
  },
  hintWrapperTitle: {
    fontSize: 22,
    color: '#9F9F9F',
    fontFamily: 'Exo2-Bold',
  },
  hintWrapperAddress: {
    marginTop: 10,
  },
  hintWrapperRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  hintButton: {
    flex: 1,
    borderRadius: 6,
    marginHorizontal: 16,
    padding: 10,
    backgroundColor: '#fafafa',
    alignItems: 'center',
    justifyContent: 'center',
  },
  hintButtonText: {
    fontSize: 16,
    color: '#9F9F9F',
    fontFamily: 'Exo2-Bold',
  },
};
