import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { ScreenContent } from 'components/ScreenContent';
import './global.css';

function Header() {
  return (
    <View className="w-full bg-white py-4 px-6 shadow-md items-center">
      <Text className="text-2xl font-bold text-blue-600">TheCoinToss</Text>
    </View>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <ScreenContent title="" path="">
        <Text className="text-xl text-blue-500">
          Welcome to the Expo app with Tailwind CSS!
        </Text>
      </ScreenContent>
      <StatusBar style="auto" />
    </>
  );
}
