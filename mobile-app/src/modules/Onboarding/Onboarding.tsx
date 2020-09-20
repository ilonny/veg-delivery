import React from 'react';
import {View, Text} from 'react-native';

export const Onboarding = (props) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>onBoarding {props.num}</Text>
    </View>
  );
};
