import React from 'react';
import { View, Text } from 'react-native';
import { Header } from '../layout/Header';

export const JoinRoomScreen = () => {
  return (
    <View className="flex-1 bg-slate-900">
      <Header isAuthenticated={true} />
      <View className="flex-1 justify-center items-center p-4">
        <Text className="text-white text-2xl font-bold">Join an Existing Room</Text>
        <Text className="text-gray-400 mt-2">Form to enter a room code will go here.</Text>
      </View>
    </View>
  );
};