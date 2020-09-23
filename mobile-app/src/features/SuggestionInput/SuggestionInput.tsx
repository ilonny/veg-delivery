import React, { useRef, useEffect, useState } from 'react';
import {
  View,
  Text,
  Animated,
  Easing,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
  TextInput,
  FlatList,
} from 'react-native';
import { ScreenTitle, MainButton } from '../../ui';
import { debounce, suggestionFetchOptions } from '../../lib';
import { styles } from './styles';

type TProps = {
  callback?: Function;
  closeSetState?: Function;
  opened: boolean;
};

export const SuggestionInput = ({
  callback,
  opened,
  closeSetState,
}: TProps) => {
  const { width, height } = Dimensions.get('window');
  const translateX = useRef(new Animated.Value(-width)).current;
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    console.log('SuggestionInput effect');
    Animated.timing(translateX, {
      toValue: opened ? 0 : -width,
      duration: 250,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start();
  }, [opened]);
  const inputHandler = (text) => {
    console.log('text', text);
    setLoading(false);
    fetch(
      'https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address',
      //@ts-ignore
      {
        ...suggestionFetchOptions,
        body: JSON.stringify({ query: text }),
      },
    )
      .then((res) => res.json())
      .then((res) => {
        setLoading(false);
        console.log('suggestion res', res);
        // setUserAddress(res.suggestions ? res.suggestions[0] : undefined);
        setSuggestions(res.suggestions);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };
  return (
    <Animated.View
      style={[
        {
          transform: [{ translateX }],
        },
        styles.wrapper,
      ]}>
      <View style={{ paddingTop: 16 }}>
        <ScreenTitle
          text={'Введите адрес'}
          backIcon={true}
          backIconAction={closeSetState}
        />
      </View>
      <View style={{ padding: 16 }}>
        <TextInput
          style={styles.input}
          onChangeText={debounce(inputHandler, 250)}
          placeholder="Улица, дом, квартира"
        />
        <FlatList
          data={suggestions}
          extraData={suggestions}
          keyExtractor={(item) => item.value}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  callback(item);
                  closeSetState();
                }}>
                <View style={styles.itemWrapper}>
                  <Text>{item.value}</Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </Animated.View>
  );
};
