import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import { useNavigation, CommonActions } from '@react-navigation/native';
import { ImageView } from '../../features';
import { RestaurantInfo } from '../../ui';
import { styles } from './styles';
type TProps = {
  getRestaurants: Function;
  addressData: Object;
  restaurantList: Array<any>;
};

// export const listItem = ({item}) => {
//   return <></>
// }

export const RestaurantList = ({
  getRestaurants,
  addressData,
  restaurantList,
}) => {
  const [loading, setLoading] = useState(false);
  const getRestaurantsInside = () => {
    // console.log('efffectt', getRestaurants);
    getRestaurants({
      callback: () => setLoading(false),
      addressData,
    });
  };
  useEffect(() => {
    setLoading(true);
    getRestaurantsInside();
  }, [addressData]);
  if (loading) {
    return (
      <View style={styles.loadingWrapper}>
        <ActivityIndicator />
      </View>
    );
  }
  const navigation = useNavigation();
  if (!restaurantList.length) {
    return (
      <View style={{ flex: 1, paddingTop: 16 }}>
        <Text style={styles.notFoundText}>
          К сожалению, не нашлось ни одного ресторана, доставляющих по Вашему
          адресу
        </Text>
      </View>
    );
  }
  return (
    <View style={{ flex: 1, paddingTop: 16 }}>
      <FlatList
        data={restaurantList}
        keyExtractor={(item) => item.id && item.id.toString()}
        style={{ margin: -10 }}
        contentContainerStyle={{
          paddingVertical: 16,
          paddingHorizontal: 10,
          flex: 0,
        }}
        refreshing={loading}
        onRefresh={getRestaurantsInside}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => {
          return <View style={{ height: 20 }} />;
        }}
        renderItem={({ item }) => {
          // console.log('item', item);
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('RestaurantScreen', { restaurant: item });
              }}>
              <View style={styles.restItemWrapperShadow}>
                <View style={styles.restItemWrapper}>
                  <ImageView
                    uri={item.image}
                    styleProp={styles.restItemImage}
                  />
                  <RestaurantInfo item={item} />
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};
