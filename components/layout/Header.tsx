import React from 'react';
import { View, Text } from 'react-native';

interface HeaderProps {
  title?: string;
  showBackButton?: boolean;
  onBackPress?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ 
  title = 'TheCoinToss',
  showBackButton = false,
  onBackPress 
}) => {
  return (
    <View className="w-full bg-white py-4 px-6 shadow-md items-center border-b border-gray-200">
      <Text className="text-2xl font-bold text-blue-600">{title}</Text>
    </View>
  );
}; 