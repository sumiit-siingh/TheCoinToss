import React from 'react';
import { View, Text } from 'react-native';
import { AppLayout } from '../layout/AppLayout';

export const LeaderboardScreen = () => {
  return (
    <AppLayout
      isAuthenticated={true}
      headerTitle="Leaderboard"
      mainScreenTitle="Global Rankings"
    >
      <View className="flex-1 justify-center items-center">
        <Text className="text-xl">Leaderboard Content Goes Here</Text>
      </View>
    </AppLayout>
  );
};