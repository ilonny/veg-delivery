import * as React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
import { OnboardingScreen } from './OnboardingScreen';

// const tabRoutes = () => {
//   return (
//     <Tab.Navigator
//       initialRouteName="Home"
//       tabBarOptions={{
//         activeTintColor: '#e91e63',
//       }}>
//       <Tab.Screen
//         name="Home"
//         component={HomeScreen}
//         options={{
//           tabBarLabel: 'Home',
//         }}
//       />
//       <Tab.Screen
//         name="Home2"
//         component={HomeScreen}
//         options={{
//           tabBarLabel: 'Home2',
//         }}
//       />
//       <Tab.Screen
//         name="Home3"
//         component={HomeScreen}
//         options={{
//           tabBarLabel: 'Home3',
//         }}
//       />
//     </Tab.Navigator>
//   );
// };
// const HomeScreen = (props) => {
//   return (
//     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//       <Text>Home screen {props.num}</Text>
//     </View>
//   );
// };

// export type TPage = {
//   name: string;
//   component: any;
// };

// export const pages: TPage[] = [
//   {
//     name: 'Меню',
//     component: HomeScreen,
//   },
// ];

// export type RootStackParamList = {
//   Меню: {name: string};
// };

export const StackNavigator = () => {
  return (
    <>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
      </Stack.Navigator>
    </>
  );
};
