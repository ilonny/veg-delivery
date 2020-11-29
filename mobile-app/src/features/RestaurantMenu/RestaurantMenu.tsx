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
import Modal from 'react-native-modal';
import { ImageView } from '../../features';
import { RestaurantInfo, MainButton } from '../../ui';
import { itemIsAddedToCartIndex } from '../../lib';
import { styles } from './styles';
type TProps = {
  getMenu: Function;
  addressData: Object;
  restaurantMenu: Array<any>;
  restaurantList: Array<any>;
  restaurant: Object;
  cartList: Array<any>;
  addToCart: Function;
  deleteFromCart: Function;
};

// export const listItem = ({item}) => {
//   return <></>
// }

export const RestaurantMenu = ({
  getMenu,
  addressData,
  restaurantMenu,
  restaurant,
  cartList = [],
  addToCart,
  deleteFromCart,
  changeCartItem,
  item,
}) => {
  console.log('RestaurantMenu item??', item);
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
  useEffect(() => {
    if (item && item.id) {
      // let dish = restaurantMenu?.menu?.find((el) => el.id == item.id);
      console.log('dish???', item);
      console.log('restaurantMenu', restaurantMenu);
      setSelectedDish(item);
      setModalIsVisible(true);
    }
  }, [item]);
  // console.log('activeCategory', activeCategory);
  const listCategory = useRef(null);
  const listMenuCategory = useRef(null);
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [selectedDish, setSelectedDish] = useState<any>(false);
  if (loading) {
    return (
      <View style={styles.loadingWrapper}>
        <ActivityIndicator />
      </View>
    );
  }
  const cartIndexSelectedDish = itemIsAddedToCartIndex(selectedDish, cartList);

  const navigation = useNavigation();
  // console.log('rest menu', restaurantMenu);
  const setModificator = (modificator, variant) => {
    const { type } = modificator;
    const selectedDishNew = { ...selectedDish };
    if (!selectedDishNew.selectedModificators) {
      selectedDishNew.selectedModificators = {};
    }
    // console.log('modificator, variant', modificator, variant);
    let { selectedModificators } = selectedDishNew;
    if (!selectedModificators[modificator.id]) {
      selectedModificators[modificator.id] = { ...modificator };
      selectedDishNew.selectedModificators[modificator.id].chosen_variants = [];
    }
    //если это одиночный выбор то просто перетираем массиив
    //если это множественный выбор, удаляем выбранный, либо добавляем новый
    console.log(
      'before find chosen',
      selectedModificators[modificator.id].chosen_variants,
    );
    if (
      //если модификатор уже выбран просто удалим его
      selectedModificators[modificator.id].chosen_variants.find((el) => {
        console.log('el == var', el, variant);
        return el.id === variant.id;
      })
    ) {
      console.log('variant finded');
      selectedModificators[
        modificator.id
      ].chosen_variants = selectedModificators[
        modificator.id
      ].chosen_variants.filter((c) => c.id !== variant.id);
    } else {
      console.log('variant not finded');
      //если не выбран, в завиисиимости от тиипа либо добавим в список, либо заменими список
      if (type === 'single') {
        selectedModificators[modificator.id].chosen_variants = [{ ...variant }];
      } else {
        selectedModificators[
          modificator.id
        ].chosen_variants = selectedModificators[
          modificator.id
        ].chosen_variants.concat({
          ...variant,
        });
      }
    }
    console.log('selectedModificators res', selectedModificators);
    console.log('selectedDishNew res', selectedDishNew);
    setSelectedDish({
      ...selectedDishNew,
    });
    // if (cartIndexSelectedDish !== -1) {
    //   changeCartItem(selectedDishNew);
    // }
    //   if (
    //     selectedModificators.chosen_variants.find(
    //       (c_var) => c_var.id === variant.id,
    //     )
    //   ) {
    //     selectedModificators.chosen_variants = selectedModificators.chosen_variants.filter(
    //       (c) => c.id !== variant.id,
    //     );
    //   }
    // }
  };

  const findSelectedVariant = (variant) => {
    if (selectedDish && selectedDish.selectedModificators) {
      if (
        selectedDish.selectedModificators[
          variant.parent_id
        ]?.chosen_variants?.find((el) => el.id == variant.id)
      ) {
        return true;
      }
    }
    return false;
  };
  return (
    <View style={{ flex: 1, paddingTop: 16 }}>
      <View style={{ height: 45, flex: 0 }}>
        <FlatList
          ref={listCategory}
          data={(restaurantMenu && restaurantMenu.menu) || []}
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
          data={(restaurantMenu && restaurantMenu.menu) || []}
          // data={restaurantMenu.menu}
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
                  const cartIndexDish = itemIsAddedToCartIndex(dish, cartList);
                  return (
                    <TouchableOpacity
                      key={dish.id}
                      onPress={() => {
                        setModalIsVisible(true);
                        setSelectedDish(dish);
                      }}>
                      <View key={dish.id} style={styles.restItemWrapperShadow}>
                        <View key={dish.id} style={styles.restItemWrapper}>
                          <View style={styles.dishContentWrapper}>
                            <View style={styles.dishImage}>
                              {/* <ActivityIndicator
                                style={{
                                  position: 'absolute',
                                  alignSelf: 'center',
                                  top: 35,
                                  left: 45,
                                }}
                              /> */}
                              <ImageView
                                uri={dish.image}
                                styleProp={{
                                  ...styles.dishImage,
                                }}
                              />
                            </View>
                            <View
                              style={{
                                justifyContent: 'space-between',
                                height: 83,
                                flex: 1,
                              }}>
                              <Text style={styles.dishName}>{dish.name}</Text>
                              <View style={styles.dishBottom}>
                                <TouchableOpacity
                                  onPress={() => {
                                    if (cartIndexDish === -1) {
                                      addToCart(dish);
                                      setModalIsVisible(false);
                                      setSelectedDish(false);
                                    } else {
                                      deleteFromCart(dish, true);
                                    }
                                  }}>
                                  <ImageView
                                    imageName={
                                      cartIndexDish === -1
                                        ? 'add_icon'
                                        : 'minus_icon_gray'
                                    }
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
        onModalShow={() => {
          console.log('modal open', selectedDish);
        }}
        style={styles.modal}>
        <View style={styles.modalWrapper}>
          <View>
            <ImageView uri={selectedDish.image} styleProp={styles.modalImage} />
            <Text style={styles.modalTitle}>{selectedDish.name}</Text>
            <Text style={styles.modalDesc}>
              {selectedDish.description} ({selectedDish.weight} г)
            </Text>
            {selectedDish.modificators &&
              selectedDish.modificators_info &&
              selectedDish.modificators_info.length && (
                <ScrollView>
                  <View style={styles.modalModifWrapper}>
                    <Text style={[styles.modifTitle, { marginBottom: 5 }]}>
                      Добавить к блюду:
                    </Text>
                    {selectedDish.modificators_info.map((modificator) => {
                      return (
                        <View key={modificator.id}>
                          <Text style={styles.modifTitle}>
                            {modificator.name + ':'}
                          </Text>
                          {!!modificator.variants.length &&
                            modificator.variants.map((variant) => {
                              const isSelected = findSelectedVariant(variant);
                              return (
                                <TouchableOpacity
                                  key={variant.id}
                                  onPress={() => {
                                    setModificator(modificator, variant);
                                  }}>
                                  <View style={styles.variantRowBetween}>
                                    <View style={styles.variantRowStart}>
                                      <View
                                        style={[
                                          styles.variantCheckbox,
                                          modificator.type === 'single' && {
                                            borderRadius: 100,
                                          },
                                        ]}>
                                        {isSelected && (
                                          <View
                                            style={
                                              styles.variantCheckboxChecked
                                            }
                                          />
                                        )}
                                      </View>
                                      <Text style={styles.variantName}>
                                        {variant.name}
                                      </Text>
                                    </View>
                                    <Text style={styles.variantName}>
                                      +{variant.price} руб
                                    </Text>
                                  </View>
                                </TouchableOpacity>
                              );
                            })}
                          <View style={{ height: 20 }} />
                        </View>
                      );
                    })}
                    <Text></Text>
                  </View>
                </ScrollView>
              )}
          </View>
          <View style={styles.modalBottom}>
            <View style={styles.variantRowBetween}>
              <Text style={styles.selectedDishPrice}>
                {selectedDish.price} руб
              </Text>
              <View style={styles.countRow}>
                <TouchableOpacity
                  onPress={() => {
                    if (cartList[cartIndexSelectedDish]) {
                      deleteFromCart(selectedDish);
                    }
                  }}>
                  <ImageView
                    imageName="minus_icon_gray"
                    styleProp={{ width: 32, height: 32 }}
                  />
                </TouchableOpacity>
                <Text style={styles.countText}>
                  {cartList[cartIndexSelectedDish]
                    ? cartList[cartIndexSelectedDish].count
                    : '0'}
                </Text>
                <TouchableOpacity
                  onPress={() => {
                    addToCart(selectedDish);
                  }}>
                  <ImageView
                    imageName="plus_icon_gray"
                    styleProp={{ width: 32, height: 32 }}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <MainButton
              action={() => {
                // if (cartIndexSelectedDish === -1) {
                addToCart(selectedDish);
                setModalIsVisible(false);
                setSelectedDish(false);
                // }
              }}
              text={
                cartIndexSelectedDish === -1
                  ? 'В корзину'
                  : 'Добавлить еще в корзину'
              }
              styleProp={{ marginVertical: 10 }}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};
