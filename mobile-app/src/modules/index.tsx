import * as React from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
import { OnboardingScreen } from './OnboardingScreen';
import { AddressScreen } from './AddressScreen';
import { UserRegistrationScreen } from './UserRegistrationScreen';
const HomeScreen = (props) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home screen {props.num}</Text>
    </View>
  );
};

const tabRoutes = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: '#e91e63',
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
        }}
      />
      <Tab.Screen
        name="Home2"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home2',
        }}
      />
      <Tab.Screen
        name="Home3"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home3',
        }}
      />
    </Tab.Navigator>
  );
};

export const StackNavigatorTemplate = (props) => {
  console.log('StackNavigatorTemplate', props);
  return (
    <>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName={
          // props.onboardingIsVisible ? 'AddressScreen' : 'OnboardingScreen'
          props.onboardingIsVisible
            ? 'UserRegistrationScreen'
            : 'UserRegistrationScreen'
        }>
        {/* {!props.onboardingIsVisible && (
          )} */}
        <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
        <Stack.Screen name="AddressScreen" component={AddressScreen} />
        <Stack.Screen
          name="UserRegistrationScreen"
          component={UserRegistrationScreen}
        />
        <Stack.Screen name="MainTabScreen" component={tabRoutes} />
      </Stack.Navigator>
    </>
  );
};

export const StackNavigator = connect(
  (state) => ({
    //@ts-ignore
    onboardingIsVisible: state.onboardingReducer.onboardingIsVisible,
  }),
  (dispatch) => ({}),
)(StackNavigatorTemplate);
