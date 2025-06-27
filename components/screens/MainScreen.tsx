import React from 'react';
import { View, Text, ScrollView } from 'react-native';

interface MainScreenProps {
  children?: React.ReactNode;
  title?: string;
  showScroll?: boolean;
}

export const MainScreen: React.FC<MainScreenProps> = ({
  children,
  title,
  showScroll = true
}) => {
  const Content = () => (
    <View className="flex-1 bg-gray-50 px-4 py-6">
      {title && (
        <Text className="text-2xl font-bold text-gray-800 mb-6">{title}</Text>
      )}
      {children}
    </View>
  );

  if (showScroll) {
    return (
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        <Content />
      </ScrollView>
    );
  }

  return <Content />;
}; 