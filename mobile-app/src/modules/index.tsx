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
import { CartScreen } from './CartScreen';
import { CreateOrderScreen } from './CreateOrderScreen';
import { CabinetScreen } from './CabinetScreen';
import { UserSettingsScreen } from './UserSettingsScreen';
import { AboutScreen } from './AboutScreen';
import { OrderListScreen } from './OrderListScreen';
import { ImageView, CartTabBarIcon } from '../features';
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

export const CartStack = (props) => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={'CartScreen'}>
      <Stack.Screen name="CartScreen" component={CartScreen} />
      <Stack.Screen name="CreateOrderScreen" component={CreateOrderScreen} />
    </Stack.Navigator>
  );
};

export const CabinetStack = (props) => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={'CabinetScreen'}>
      <Stack.Screen name="CabinetScreen" component={CabinetScreen} />
      <Stack.Screen name="UserSettingsScreen" component={UserSettingsScreen} />
      <Stack.Screen name="AboutScreen" component={AboutScreen} />
      <Stack.Screen name="OrderListScreen" component={OrderListScreen} />
    </Stack.Navigator>
  );
};

const tabRoutes = () => {
  return (
    <Tab.Navigator
      initialRouteName="Личный кабинет"
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
        name="Корзина"
        component={CartStack}
        options={{
          tabBarLabel: 'Корзина',
          tabBarIcon: ({ focused }) => {
            return (
              <>
                <CartTabBarIcon focused={focused} />
                {/* <ImageView
                  imageName="shopping_basket"
                  styleProp={{ width: 23, height: 19 }}
                  tintColor={focused ? '#5AC17D' : '#F1F0F4'}
                /> */}
              </>
            );
          },
        }}
      />
      <Tab.Screen
        name="Личный кабинет"
        component={CabinetStack}
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
