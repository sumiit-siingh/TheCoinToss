import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { AppLayout } from '../layout';
import { Button, Card } from '../ui';

interface DashboardScreenProps {
  onLogout?: () => void;
}

export const DashboardScreen: React.FC<DashboardScreenProps> = ({
  onLogout
}) => {
  return (
    <AppLayout
      headerTitle="Dashboard"
      mainScreenTitle="Welcome to TheCoinToss"
      showFooter={true}
    >
      <ScrollView className="space-y-4" showsVerticalScrollIndicator={false}>
        <Card title="Account Overview" subtitle="Your coin toss statistics">
          <View className="space-y-3">
            <View className="flex-row justify-between">
              <Text className="text-gray-600">Total Tosses</Text>
              <Text className="font-semibold">1,234</Text>
            </View>
            <View className="flex-row justify-between">
              <Text className="text-gray-600">Heads</Text>
              <Text className="font-semibold text-green-600">612</Text>
            </View>
            <View className="flex-row justify-between">
              <Text className="text-gray-600">Tails</Text>
              <Text className="font-semibold text-blue-600">622</Text>
            </View>
            <View className="flex-row justify-between">
              <Text className="text-gray-600">Win Rate</Text>
              <Text className="font-semibold text-purple-600">49.6%</Text>
            </View>
          </View>
        </Card>

        <Card title="Quick Actions" subtitle="What would you like to do?">
          <View className="space-y-3">
            <Button
              title="Toss a Coin"
              onPress={() => console.log('Toss coin pressed')}
              variant="primary"
              size="large"
            />
            <Button
              title="View History"
              onPress={() => console.log('View history pressed')}
              variant="outline"
              size="large"
            />
            <Button
              title="Settings"
              onPress={() => console.log('Settings pressed')}
              variant="secondary"
              size="large"
            />
          </View>
        </Card>

        <Card title="Recent Activity" subtitle="Your latest coin tosses">
          <View className="space-y-2">
            <View className="flex-row justify-between items-center py-2 border-b border-gray-100">
              <Text className="text-gray-700">Toss #1234</Text>
              <Text className="text-green-600 font-semibold">Heads</Text>
            </View>
            <View className="flex-row justify-between items-center py-2 border-b border-gray-100">
              <Text className="text-gray-700">Toss #1233</Text>
              <Text className="text-blue-600 font-semibold">Tails</Text>
            </View>
            <View className="flex-row justify-between items-center py-2 border-b border-gray-100">
              <Text className="text-gray-700">Toss #1232</Text>
              <Text className="text-green-600 font-semibold">Heads</Text>
            </View>
            <View className="flex-row justify-between items-center py-2">
              <Text className="text-gray-700">Toss #1231</Text>
              <Text className="text-blue-600 font-semibold">Tails</Text>
            </View>
          </View>
        </Card>

        <View className="py-4">
          <Button
            title="Logout"
            onPress={onLogout ?? (() => {})}
            variant="outline"
            size="large"
            className="bg-red-50 border-red-300"
          />
        </View>
      </ScrollView>
    </AppLayout>
  );
}; 