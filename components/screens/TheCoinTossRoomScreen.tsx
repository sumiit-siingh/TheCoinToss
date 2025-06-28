import React from 'react';
import { View, Text } from 'react-native';
import { AppLayout } from '../layout/AppLayout';

export const TheCoinTossRoomScreen = () => {
  return (
    <AppLayout
      isAuthenticated={true}
      headerTitle="The Coin Toss Room"
      mainScreenTitle="Live Matches"
    >
      <View className="flex-1 justify-center items-center">
        <Text className="text-xl">The Coin Toss Room Content Goes Here</Text>
      </View>
    </AppLayout>
  );
};
