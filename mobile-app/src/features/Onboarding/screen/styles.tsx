import { ViewStyle, TextStyle, ImageStyle, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
type Styles = {
  imageBackground: ImageStyle;
  logo: ImageStyle;
  wrapper: ViewStyle;
  lineDivider: ViewStyle;
  title: TextStyle;
  nextButton: ViewStyle;
  buttonText: TextStyle;
};

export const styles: Styles = {
  imageBackground: {
    position: 'absolute',
    flex: 1,
    width: width,
    height: height,
  },
  wrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    // backgroundColor: 'red',
  },
  logo: {
    // height: 60,
  },
  lineDivider: {
    height: 2,
    width: 30,
    backgroundColor: '#C4C4C4',
    marginVertical: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#656665',
  },
  nextButton: {
    width: 230,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: '#5AC17D',
    marginTop: 30,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
};
