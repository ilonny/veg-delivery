import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
type TProps = {
  getRestaurants: Function;
  addressData: Object;
};

export const RestaurantList = ({ getRestaurants, addressData }) => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    getRestaurants({
      callback: () => setLoading(false),
      addressData,
    });
  }, [addressData]);
  return (
    <View>
      <Text>Restaurant list</Text>
    </View>
  );
};
