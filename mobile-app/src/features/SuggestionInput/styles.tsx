import { ViewStyle, TextStyle, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
type Styles = {
  wrapper: ViewStyle;
  input: ViewStyle | TextStyle;
  itemWrapper: ViewStyle;
};

export const styles: Styles = {
  wrapper: {
    flex: 1,
    backgroundColor: '#fff',
    width: width,
    height: height,
    position: 'absolute',
    top: 0,
  },
  input: {
    width: '100%',
    color: '#656665',
    backgroundColor: '#f6f6f6',
    height: 50,
    padding: 16,
    marginBottom: 16,
    borderRadius: 16,
  },
  itemWrapper: {
    padding: 16,
    backgroundColor: '#F1F0F4',
    borderRadius: 16,
    marginBottom: 16,
  },
};
