import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
  Alert,
} from 'react-native';
import {
  ScreenTitle,
  AddressPlaceholder,
  RestaurantInfo,
  MainButton,
} from '../../ui';
import { ImageView } from '../../features';
import { useNavigation, CommonActions } from '@react-navigation/native';
import { getCartData, declOfNum } from '../../lib';
import { styles } from './styles';

export const List = ({
  cartList,
  deleteFromCart,
  addToCart,
  showButtons = true,
  showImages = true,
}) => {
  return (
    <View>
      {cartList.map((cartItem) => {
        return (
          <View key={cartItem.id} style={styles.cartItemWrapper}>
            <View style={{ flexDirection: 'row' }}>
              {showImages && (
                <ImageView
                  uri={cartItem.image}
                  styleProp={styles.cartItemImage}
                />
              )}
              <View
                style={{
                  justifyContent: 'space-between',
                  height: showImages ? 83 : 'auto',
                  flex: 1,
                }}>
                <Text style={styles.dishName}>{cartItem.name}</Text>
                <View style={[styles.dishBottom]}>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    {showButtons && (
                      <TouchableOpacity
                        onPress={() => {
                          deleteFromCart(cartItem);
                        }}>
                        <ImageView
                          imageName={'minus_icon_gray'}
                          styleProp={styles.addIcon}
                        />
                      </TouchableOpacity>
                    )}
                    <Text style={{ marginHorizontal: 10 }}>
                      {cartItem.count}
                    </Text>
                    {showButtons && (
                      <TouchableOpacity
                        onPress={() => {
                          // if (cartIndexDish === -1) {
                          //   addToCart(dish);
                          //   setModalIsVisible(false);
                          //   setSelectedDish(false);
                          // } else {
                          //   deleteFromCart(dish, true);
                          // }
                          addToCart(cartItem);
                        }}>
                        <ImageView
                          imageName={'plus_icon_gray'}
                          styleProp={styles.addIcon}
                        />
                      </TouchableOpacity>
                    )}
                  </View>
                  <Text style={styles.dishPrice}>
                    {cartItem.count} x {cartItem.price} руб
                  </Text>
                </View>
              </View>
            </View>
            {!!cartItem.selectedModificatorsAll &&
              !!cartItem.selectedModificatorsAll.length &&
              !!Object.keys(cartItem.selectedModificatorsAll[0]).length && (
                <View>
                  <Text>Дополнительно:</Text>
                  {cartItem.selectedModificatorsAll.map(
                    (modificatorPart, index) => {
                      let modificatorPartKey = Object.keys(modificatorPart)[0];
                      let modificatorPartParent =
                        modificatorPart[modificatorPartKey];
                      if (modificatorPartParent && modificatorPartParent.name) {
                        return (
                          <View style={{ paddingLeft: 10 }} key={index}>
                            <Text>{modificatorPartParent.name}</Text>
                            {modificatorPartParent.chosen_variants.map(
                              (chosenVariant, index) => {
                                return (
                                  <View
                                    key={index}
                                    style={{
                                      paddingLeft: 10,
                                      flexDirection: 'row',
                                      alignItems: 'center',
                                      justifyContent: 'space-between',
                                    }}>
                                    <Text>{chosenVariant.name}</Text>
                                    <Text>{chosenVariant.price} руб</Text>
                                  </View>
                                );
                              },
                            )}
                          </View>
                        );
                      }
                      return <></>;
                      console.log('modificatorPart', modificatorPart);
                      console.log('modificatorPart');
                    },
                  )}
                </View>
              )}
          </View>
        );
      })}
    </View>
  );
};
