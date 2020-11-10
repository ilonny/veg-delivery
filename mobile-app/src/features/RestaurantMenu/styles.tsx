import { ViewStyle, TextStyle, ImageStyle, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

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
  modalWrapper: ViewStyle;
  modal: ViewStyle;
  modalImage: ImageStyle;
  modalTitle: TextStyle;
  modalDesc: TextStyle;
  modalModifWrapper: ViewStyle;
  modifTitle: TextStyle;
  variantRowStart: ViewStyle;
  variantRowBetween: ViewStyle;
  variantName: TextStyle;
  variantCheckbox: ViewStyle;
  variantCheckboxChecked: ViewStyle;
  modalBottom: ViewStyle;
  selectedDishPrice: TextStyle;
  countRow: ViewStyle;
  countText: TextStyle;
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
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'red',
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
  modalImage: {
    width: width - 32,
    height: height - 600,
    borderRadius: 10,
  },
  modalTitle: {
    color: '#656665',
    fontFamily: 'Exo2-Bold',
    fontSize: 20,
    marginVertical: 20,
  },
  modalDesc: {
    color: '#9F9F9F',
    fontFamily: 'Exo2-Bold',
    fontSize: 15,
    marginBottom: 20,
  },
  modalModifWrapper: {},
  modifTitle: {
    color: '#9F9F9F',
    fontFamily: 'Exo2-Bold',
    marginBottom: 10,
  },
  variantRowStart: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  variantRowBetween: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  variantName: {
    color: '#9F9F9F',
    fontFamily: 'Exo2-Bold',
    fontSize: 18,
    marginTop: -5,
  },
  variantCheckbox: {
    width: 15,
    height: 15,
    borderRadius: 3,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#F1F0F4',
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  variantCheckboxChecked: {
    width: 4,
    height: 4,
    borderRadius: 4,
    backgroundColor: '#5AC17D',
  },
  modalBottom: {},
  selectedDishPrice: {
    color: '#5AC17D',
    fontFamily: 'Exo2-Bold',
    fontSize: 22,
  },
  countRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  countText: {
    marginHorizontal: 10,
    fontSize: 18,
    color: '#656665',
  },
};
