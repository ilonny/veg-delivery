import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { styles } from './styles';
import { ImageView } from '../../features';
import Modal from 'react-native-modal';

export const RestaurantInfo = ({ item, inside = false }) => {
  let addressData;
  try {
    addressData = JSON.parse(item?.address_json);
  } catch (e) {}
  const [modalIsVisible, setModalIsVisible] = useState(false);

  return (
    <View>
      {!inside && (
        <View style={styles.restItemRow}>
          <Text style={styles.restItemTitle}>{item.name}</Text>
          {/* <View
            style={[styles.colorBg, { backgroundColor: 'rgb(235, 248, 239)' }]}>
            <ImageView imageName="rating_star" styleProp={styles.imageStar} />
            <Text style={styles.ratingText}>
              {item.rating ? item.rating : 'Мало отзывов'}
            </Text>
          </View> */}
        </View>
      )}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
        }}>
        <Text
          style={{ paddingHorizontal: 10, color: '#656565', marginTop: 10 }}>
          {addressData?.value}
        </Text>
        {inside && (
          <TouchableOpacity onPress={() => setModalIsVisible(true)}>
            <View style={styles.infoIconWrapper}>
              <Text>i</Text>
            </View>
          </TouchableOpacity>
        )}
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
        {!!item.delivery_time && (
          <View style={[styles.colorBg]}>
            <Text>
              <Text style={styles.infoText}>Доставка: </Text>
              <Text style={[styles.infoText, { color: '#656665' }]}>
                {item.delivery_time}
              </Text>
            </Text>
          </View>
        )}
      </View>
      {inside && (
        <Modal
          isVisible={modalIsVisible}
          swipeDirection={['down']}
          animationIn="slideInUp"
          animationOut="slideOutDown"
          animationInTiming={600}
          animationOutTiming={600}
          onSwipeComplete={(arg) => setModalIsVisible(false)}
          propagateSwipe={true}
          scrollHorizontal={true}
          // backdropColor={'transparent'}
          // backdropOpacity={0}
          onBackdropPress={() => setModalIsVisible(false)}
          style={styles.modal}>
          <View style={styles.modalWrapper}>
            <ScrollView>
              <Text style={styles.restItemTitle}>Информация о ресторане</Text>
              <Text> </Text>
              <Text>{item.restaurant_info}</Text>
            </ScrollView>
          </View>
        </Modal>
      )}
    </View>
  );
};
