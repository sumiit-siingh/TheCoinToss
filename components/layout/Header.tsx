import React, { useState, useEffect } from 'react';
import { View, Image, Text, TouchableOpacity, useWindowDimensions } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  runOnJS,
} from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';

export const Header = () => {
  const navigation = useNavigation();
  const { width, height } = useWindowDimensions();
  const isPortrait = height >= width;
  const baseHeight = isPortrait ? 80 : 70;
  const expandedHeight = isPortrait ? 200 : 180;

  const [menuVisible, setMenuVisible] = useState(false);
  const [showMenuItems, setShowMenuItems] = useState(false);

  const animatedHeight = useSharedValue(baseHeight);

  const animatedStyle = useAnimatedStyle(() => ({
    height: withTiming(animatedHeight.value, {
      duration: 350,
    }, (finished) => {
      if (finished) {
        runOnJS(setShowMenuItems)(menuVisible);
      }
    }),
  }));

  const toggleMenu = () => {
    setMenuVisible((prev) => {
      const next = !prev;
      animatedHeight.value = next ? expandedHeight : baseHeight;
      if (!next) setShowMenuItems(false); // hide instantly when closing
      return next;
    });
  };

  const handleNavigate = (mode: 'login' | 'signup') => {
    setMenuVisible(false);
    setShowMenuItems(false);
    animatedHeight.value = baseHeight;
    (navigation as any).navigate('Login/Signup', { mode });
  };

  return (
    <Animated.View
      style={animatedStyle}
      className="w-full bg-gray-500 px-8 pt-1 pb-4 z-10"
    >
      {/* Header Row */}
      <View className="flex-row justify-between items-center">
        <View style={{ width: '50%' }}>
          <Image
            source={{
              uri: 'https://res.cloudinary.com/dk5ge5xx8/image/upload/v1751003473/The_Coin_Toss_Logo_Gradient_tin8dl.png',
            }}
            style={{ width: '100%', height: baseHeight * 1.2 }}
            resizeMode="contain"
          />
        </View>

        <TouchableOpacity onPress={toggleMenu}>
          <Text className="text-5xl text-gray-300 pr-2">
            {menuVisible ? 'x' : '≡'}
          </Text>
        </TouchableOpacity>
      </View>

      {/* Dropdown inside header */}
      {showMenuItems && (
        <View className="mt-2 space-y-5 ">
          <TouchableOpacity
            className="bg-gray-700 mb-2 rounded-md py-2 items-center"
            onPress={() => handleNavigate('login')}
          >
            <Text className="text-white text-base">Login</Text>
          </TouchableOpacity>

          <TouchableOpacity
            className="bg-orange-400 rounded-md py-2 items-center"
            onPress={() => handleNavigate('signup')}
          >
            <Text className="text-black text-base font-semibold">Sign Up</Text>
          </TouchableOpacity>
        </View>
      )}
    </Animated.View>
  );
};
