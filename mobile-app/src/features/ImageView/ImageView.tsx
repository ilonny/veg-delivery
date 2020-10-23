import React from 'react';
import { Image, Text, ImageStyle } from 'react-native';
import { ImageSource, TImageSource } from '../../lib';
type Props = {
  imageName: TImageSource;
  styleProp?: ImageStyle;
  tintColor?: string;
};

export const ImageView = ({ imageName, styleProp, tintColor }: Props) => {
  return (
    <>
      <Image
        source={ImageSource[imageName]}
        style={[styleProp, tintColor && { tintColor }]}
        // tintColor={tintColor ? tintColor : undefined}
      />
    </>
  );
};
