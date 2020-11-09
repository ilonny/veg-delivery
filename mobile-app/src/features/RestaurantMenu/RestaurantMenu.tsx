import React, { useEffect, useState, useRef } from 'react';
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { useNavigation, CommonActions } from '@react-navigation/native';
import { ImageView } from '../../features';
import { RestaurantInfo } from '../../ui';
import { styles } from './styles';
type TProps = {
  getMenu: Function;
  addressData: Object;
  restaurantMenu: Array<any>;
  restaurantList: Array<any>;
  restaurant: Object;
};

// export const listItem = ({item}) => {
//   return <></>
// }

export const RestaurantMenu = ({
  getMenu,
  addressData,
  restaurantMenu,
  restaurant,
}) => {
  const [loading, setLoading] = useState(false);
  const getMenuInside = () => {
    getMenu({
      callback: () => setLoading(false),
      restaurant,
    });
  };
  useEffect(() => {
    setLoading(true);
    getMenuInside();
  }, [addressData]);
  const [activeCategory, setActiveCategory] = useState(
    (restaurantMenu && restaurantMenu.menu && restaurantMenu.menu[0]) || false,
  );
  useEffect(() => {
    setActiveCategory(
      (restaurantMenu && restaurantMenu.menu && restaurantMenu.menu[0]) ||
        false,
    );
  }, [restaurantMenu]);
  console.log('activeCategory', activeCategory);
  const listCategory = useRef(null);
  const listMenuCategory = useRef(null);

  if (loading) {
    return (
      <View style={styles.loadingWrapper}>
        <ActivityIndicator />
      </View>
    );
  }
  const navigation = useNavigation();
  console.log('rest menu', restaurantMenu);
  return (
    <View style={{ flex: 1, paddingTop: 16 }}>
      <View style={{ height: 45, flex: 0 }}>
        <FlatList
          ref={listCategory}
          data={restaurantMenu.menu}
          keyExtractor={(item) => item.id.toString()}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{ height: 45 }}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  setActiveCategory(item);
                  let index = restaurantMenu.menu.findIndex(
                    (el) => el.id === item.id,
                  );
                  console.log('index', index);
                  listMenuCategory.current.scrollToIndex({ index });
                  listCategory.current.scrollToIndex({
                    index:
                      index === 0 || index === restaurantMenu.menu.length - 1
                        ? index
                        : index - 1,
                  });
                }}>
                <View
                  style={[
                    styles.itemTopWrapper,
                    item.id == activeCategory.id && {
                      borderBottomColor: '#5AC17D',
                    },
                  ]}>
                  <Text
                    style={[
                      styles.itemTopWrapperText,
                      item.id == activeCategory.id && { color: '#5AC17D' },
                    ]}>
                    {item.name}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
      <View style={{ flex: 1, backgroundColor: '#E5E5E5' }}>
        <FlatList
          ref={listMenuCategory}
          data={restaurantMenu.menu}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
          style={{ flex: 1 }}
          renderItem={({ item }) => {
            return (
              <View>
                <View style={styles.restItemRow}>
                  <Text style={styles.categoryName}>{item.name}</Text>
                  <View style={styles.categoryLine} />
                </View>
                {item.menu.map((dish) => {
                  return (
                    <TouchableOpacity>
                      <View key={dish.id} style={styles.restItemWrapperShadow}>
                        <View key={dish.id} style={styles.restItemWrapper}>
                          <View style={styles.dishContentWrapper}>
                            <ImageView
                              uri={dish.image}
                              styleProp={styles.dishImage}
                            />
                            <View
                              style={{
                                justifyContent: 'space-between',
                                height: 83,
                                flex: 1,
                              }}>
                              <Text style={styles.dishName}>{dish.name}</Text>
                              <View style={styles.dishBottom}>
                                <TouchableOpacity>
                                  <ImageView
                                    imageName="add_icon"
                                    styleProp={styles.addIcon}
                                  />
                                </TouchableOpacity>
                                <Text style={styles.dishPrice}>
                                  {dish.price} руб
                                </Text>
                              </View>
                            </View>
                          </View>
                        </View>
                      </View>
                    </TouchableOpacity>
                  );
                })}
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};
