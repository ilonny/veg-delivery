import { ViewStyle, TextStyle, Dimensions } from 'react-native';

type Styles = {
  mapView: ViewStyle;
};

const { width, height } = Dimensions.get('window');
export const styles: Styles = {
  mapView: {
    flex: 1,
    width: width,
    height: height,
    marginTop: 10,
  },
};
