import * as React from 'react';
import {View, Text} from 'react-native';
// import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
const HomeScreen = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home screen</Text>
    </View>
  );
};

export type TPage = {
  name: string;
  component: any;
};

export const pages: TPage[] = [
  {
    name: 'Меню',
    component: HomeScreen,
  },
];

export type RootStackParamList = {
  Меню: {name: string};
};

// const Stack = createStackNavigator<RootStackParamList>();
export const StackNavigator = () => {
  return <HomeScreen></HomeScreen>;
};
