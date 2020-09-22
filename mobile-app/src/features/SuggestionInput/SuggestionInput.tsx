import React, { useRef, useEffect } from 'react';
import {
  View,
  Text,
  Animated,
  Easing,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

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
  useEffect(() => {
    console.log('SuggestionInput effect');
    Animated.timing(translateX, {
      toValue: opened ? 0 : -width,
      duration: 250,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start();
  }, [opened]);
  return (
    <Animated.View
      style={{
        transform: [{ translateX }],
        // flex: 1,
        width: width,
        height: height,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        // bottom: 0
      }}>
      <TouchableOpacity onPress={() => closeSetState()}>
        <Text>Close</Text>
      </TouchableOpacity>
    </Animated.View>
  );
};
