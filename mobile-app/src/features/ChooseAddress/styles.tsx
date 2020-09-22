import { ViewStyle, TextStyle, Dimensions } from 'react-native';

type Styles = {
  mapView: ViewStyle;
  bottomAddress: ViewStyle;
};

const { width, height } = Dimensions.get('window');
export const styles: Styles = {
  mapView: {
    flex: 1,
    width: width,
    height: height,
    marginTop: 10,
  },
  bottomAddress: {
    position: 'absolute',
    bottom: 0,
    width: width,
    padding: 16,
    backgroundColor: '#fff',
  },
};
