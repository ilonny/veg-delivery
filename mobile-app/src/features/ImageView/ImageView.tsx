import React from 'react';
import { Image, Text, ImageStyle } from 'react-native';
import { ImageSource, TImageSource } from '../../lib';
type Props = {
  imageName: TImageSource;
  styleProp?: ImageStyle;
};

export const ImageView = ({ imageName, styleProp }: Props) => {
  return (
    <>
      <Image source={ImageSource[imageName]} style={styleProp} />
    </>
  );
};
