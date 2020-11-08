import React from 'react';
import { Image, Text, ImageStyle } from 'react-native';
import { ImageSource, TImageSource, API_URL } from '../../lib';
type Props = {
  imageName?: TImageSource;
  styleProp?: ImageStyle;
  tintColor?: string;
  uri?: string;
};

export const ImageView = ({ imageName, styleProp, tintColor, uri }: Props) => {
  console.log('uru', API_URL + '/' + uri);
  return (
    <>
      <Image
        source={uri ? { uri: API_URL + '/' + uri } : ImageSource[imageName]}
        style={[styleProp, tintColor && { tintColor }]}
        // tintColor={tintColor ? tintColor : undefined}
      />
    </>
  );
};
