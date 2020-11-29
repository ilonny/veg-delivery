import React from 'react';
import { Image, Text, ImageStyle, ImageResizeMode } from 'react-native';
import { ImageSource, TImageSource, API_URL } from '../../lib';
type Props = {
  imageName?: TImageSource;
  styleProp?: ImageStyle;
  tintColor?: string;
  uri?: string;
  resizeMode?: ImageResizeMode;
};

export const ImageView = ({
  imageName,
  styleProp,
  tintColor,
  uri,
  resizeMode = 'cover',
}: Props) => {
  // console.log('uru', API_URL + '/' + uri);
  return (
    <>
      <Image
        source={uri ? { uri: API_URL + '/' + uri } : ImageSource[imageName]}
        style={[styleProp, tintColor && { tintColor }]}
        resizeMode={resizeMode}
        // tintColor={tintColor ? tintColor : undefined}
      />
    </>
  );
};
