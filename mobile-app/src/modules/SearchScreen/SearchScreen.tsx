//@ts-nocheck
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ActivityIndicator,
  TextInput,
  FlatList,
} from 'react-native';
import { ScreenTitle, AddressPlaceholder, RestaurantInfo } from '../../ui';
import { useNavigation, CommonActions } from '@react-navigation/native';
import { styles } from './styles';
export const SearchScreen = ({
  addressData,
  route,
  restaurantList,
  restaurantMenu,
}: any) => {
  const navigation = useNavigation();
  const [textVal, setTextVal] = useState('');
  const [results, setResults] = useState([]);
  // console.log('rest route', route);
  // console.log('restaurant', restaurant);
  console.log('restaurantList', restaurantList, restaurantMenu);
  const [dataForSearch, setDataForSearch] = useState([]);
  useEffect(() => {
    let searchData = [];
    restaurantList.forEach((rest) => {
      searchData.push({
        value: rest.name,
        restaurant_id: rest.id,
        type: 'Ресторан',
      });
      rest?.menu?.forEach((category) => {
        category?.menu?.forEach((item) => {
          searchData.push({
            ...item,
            value: item.name,
            rest_name: rest.name,
            type: 'Блюдо',
            restaurant_id: item.restaurant_id,
            id: item.id,
          });
        });
      });
    });
    setDataForSearch(searchData);
  }, []);
  console.log('dataForSearch', dataForSearch);
  useEffect(() => {
    if (!textVal) {
      setResults([]);
    } else {
      setResults(
        dataForSearch.filter((el) => {
          return (
            el?.value?.toLowerCase().indexOf(textVal.toLocaleLowerCase()) !== -1
          );
        }),
      );
    }
  }, [textVal]);
  console.log('results', results);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff', paddingTop: 16 }}>
      <ScreenTitle text="Поиск" />
      <TextInput
        placeholder="Блюдо, или ресторан"
        style={[styles.textInput, { marginHorizontal: 5 }]}
        value={textVal}
        onChangeText={(text) => {
          setTextVal(text);
          console.log('text changed', text);
        }}
      />
      {!textVal || !results.length ? (
        <View
          style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Ничего не найдено</Text>
        </View>
      ) : (
        <View style={{ flex: 1 }}>
          <FlatList
            data={results}
            keyExtractor={(item) => item.value}
            contentContainerStyle={{
              paddingVertical: 16,
              paddingHorizontal: 10,
            }}
            ItemSeparatorComponent={() => {
              return <View style={{ height: 20 }} />;
            }}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('RestaurantScreen', {
                      restaurant: restaurantList.find(
                        (rest) => rest.id == item.restaurant_id,
                      ),
                      item: item.type == 'Блюдо' && item,
                    });
                  }}>
                  <View style={styles.resWrapper}>
                    <View style={styles.restItemWrapper}>
                      <Text style={styles.title}>{item.value}</Text>
                      <Text>
                        {item.type}{' '}
                        {item.type == 'Блюдо' && `(${item.rest_name})`}{' '}
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      )}
    </SafeAreaView>
  );
};
