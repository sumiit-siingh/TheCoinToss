import React, { useEffect, useRef } from 'react';
import { View, Text, Animated } from 'react-native';

interface LoadingScreenProps {
  onLoadingComplete?: () => void;
  loadingText?: string;
  duration?: number;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({
  onLoadingComplete,
  loadingText = 'Loading...',
  duration = 2000
}) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.8)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start();

    const timer = setTimeout(() => {
      onLoadingComplete?.();
    }, duration);

    return () => clearTimeout(timer);
  }, [fadeAnim, scaleAnim, duration, onLoadingComplete]);

  return (
    <View className="flex-1 bg-blue-600 justify-center items-center">
      <Animated.View 
        className="items-center"
        style={{
          opacity: fadeAnim,
          transform: [{ scale: scaleAnim }]
        }}
      >
        <Text className="text-4xl font-bold text-white mb-4">TheCoinToss</Text>
        <Text className="text-lg text-white opacity-80">{loadingText}</Text>
      </Animated.View>
    </View>
  );
}; 