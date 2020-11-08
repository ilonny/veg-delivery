import * as React from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { OnboardingScreen } from './OnboardingScreen';
import { AddressScreen } from './AddressScreen';
import { UserRegistrationScreen } from './UserRegistrationScreen';
import { RestaurantList } from './RestaurantList';
import { RestaurantScreen } from './RestaurantScreen';
import { ImageView } from '../features';
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const HomeScreen = (props) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home screen {props.num}</Text>
    </View>
  );
};

export const RestaurantStack = (props) => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={'RestaurantList'}>
      <Stack.Screen name="RestaurantList" component={RestaurantList} />
      <Stack.Screen name="RestaurantScreen" component={RestaurantScreen} />
    </Stack.Navigator>
  );
};

const tabRoutes = () => {
  return (
    <Tab.Navigator
      initialRouteName="Рестораны"
      tabBarOptions={{
        activeTintColor: '#e91e63',
      }}>
      <Tab.Screen
        name="Рестораны"
        component={RestaurantStack}
        options={{
          tabBarLabel: 'Рестораны',
          tabBarIcon: ({ focused }) => {
            return (
              <>
                <ImageView
                  imageName="dinner"
                  styleProp={{ width: 28, height: 17 }}
                  tintColor={focused ? '#5AC17D' : '#F1F0F4'}
                />
              </>
            );
          },
        }}
      />
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Корзина',
          tabBarIcon: ({ focused }) => {
            return (
              <>
                <ImageView
                  imageName="shopping_basket"
                  styleProp={{ width: 23, height: 19 }}
                  tintColor={focused ? '#5AC17D' : '#F1F0F4'}
                />
              </>
            );
          },
        }}
      />
      <Tab.Screen
        name="Home2"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Личный кабинет',
          tabBarIcon: ({ focused }) => {
            return (
              <>
                <ImageView
                  imageName="user"
                  styleProp={{ width: 22, height: 20 }}
                  tintColor={focused ? '#5AC17D' : '#F1F0F4'}
                />
              </>
            );
          },
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
          props.onboardingIsVisible ? 'MainTabScreen' : 'OnboardingScreen'
          // props.onboardingIsVisible
          //   ? 'UserRegistrationScreen'
          //   : 'UserRegistrationScreen'
        }>
        {!props.onboardingIsVisible && (
          <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
        )}
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
