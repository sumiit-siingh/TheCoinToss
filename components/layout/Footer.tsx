import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

interface FooterProps {
  onHomePress?: () => void;
  onSettingsPress?: () => void;
  onProfilePress?: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onHomePress,
  onSettingsPress,
  onProfilePress
}) => {
  return (
    <View className="w-full bg-white py-3 px-6 border-t border-gray-200">
      <View className="flex-row justify-around items-center">
        <TouchableOpacity 
          className="items-center"
          onPress={onHomePress}
        >
          <Text className="text-sm text-gray-600">Home</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          className="items-center"
          onPress={onSettingsPress}
        >
          <Text className="text-sm text-gray-600">Settings</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          className="items-center"
          onPress={onProfilePress}
        >
          <Text className="text-sm text-gray-600">Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}; 