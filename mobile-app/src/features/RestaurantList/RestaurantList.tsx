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
import { ImageSource } from '../../lib';
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
  return (
    <View style={{ flex: 1, paddingTop: 16 }}>
      <FlatList
        data={restaurantList}
        keyExtractor={(item) => item.id.toString()}
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
          console.log('item', item);
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
                  <View style={styles.restItemRow}>
                    <Text style={styles.restItemTitle}>{item.name}</Text>
                    <View
                      style={[
                        styles.colorBg,
                        { backgroundColor: 'rgb(235, 248, 239)' },
                      ]}>
                      <ImageView
                        imageName="rating_star"
                        styleProp={styles.imageStar}
                      />
                      <Text style={styles.ratingText}>
                        {item.rating ? item.rating : 'Мало отзывов'}
                      </Text>
                    </View>
                  </View>
                  <View style={styles.restItemRow}>
                    <View style={[styles.colorBg]}>
                      <Text>
                        <Text style={styles.infoText}>Заказ от: </Text>
                        <Text style={[styles.infoText, { color: '#656665' }]}>
                          {item.min_price} руб
                        </Text>
                      </Text>
                    </View>
                    <View style={[styles.colorBg]}>
                      <Text>
                        <Text style={styles.infoText}>Доставка: </Text>
                        <Text style={[styles.infoText, { color: '#656665' }]}>
                          40-50 мин
                        </Text>
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};
