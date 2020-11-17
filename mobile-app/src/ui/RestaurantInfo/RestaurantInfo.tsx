import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';
import { ImageView } from '../../features';

export const RestaurantInfo = ({ item, inside = false }) => {
  let addressData;
  try {
    addressData = JSON.parse(item?.address_json);
  } catch (e) {}
  return (
    <View>
      {!inside && (
        <View style={styles.restItemRow}>
          <Text style={styles.restItemTitle}>{item.name}</Text>
          <View
            style={[styles.colorBg, { backgroundColor: 'rgb(235, 248, 239)' }]}>
            <ImageView imageName="rating_star" styleProp={styles.imageStar} />
            <Text style={styles.ratingText}>
              {item.rating ? item.rating : 'Мало отзывов'}
            </Text>
          </View>
        </View>
      )}
      <Text style={{ paddingHorizontal: 10, color: '#656565', marginTop: 10 }}>
        {addressData?.value}
      </Text>
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
  );
};
