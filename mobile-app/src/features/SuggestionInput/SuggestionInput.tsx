import React from 'react';
import { View, Text, Animated, Easing } from 'react-native';

type TProps = {
  callback?: Function;
  opened: boolean;
};
export const SuggestionInput = ({ callback }: TProps) => {
  return (
    <View>
      <Text>Suggestion Input</Text>
    </View>
  );
};
