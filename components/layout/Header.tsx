import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity, useWindowDimensions } from 'react-native';
import { useNavigation, DrawerActions } from '@react-navigation/native';

// The Header now accepts an optional 'isAuthenticated' prop.
interface HeaderProps {
  isAuthenticated?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ isAuthenticated = false }) => {
  const navigation = useNavigation();
  const { width, height } = useWindowDimensions();
  const isPortrait = height >= width;
  const baseHeight = isPortrait ? 80 : 70;

  // This menu is now ONLY for logged-out users.
  const [authMenuVisible, setAuthMenuVisible] = useState(false);

  // --- UPDATED NAVIGATION LOGIC ---

  const handlePressMenuIcon = () => {
    if (isAuthenticated) {
      // If logged in, open the REAL drawer navigator.
      navigation.dispatch(DrawerActions.openDrawer());
    } else {
      // If logged out, toggle our custom dropdown menu.
      setAuthMenuVisible((prev) => !prev);
    }
  };

  const handlePressAuthButton = (screenName: 'Login' | 'Signup') => {
    setAuthMenuVisible(false);
    navigation.navigate(screenName as never);
  };

  const handlePressLogo = () => {
    // When the logo is pressed, go to the correct "home" screen.
    if (isAuthenticated) {
      navigation.navigate('Dashboard' as never);
    } else {
      navigation.navigate('Auth' as never);
    }
  };

  return (
    <View
      style={{ height: authMenuVisible ? 200 : baseHeight }}
      className="w-full bg-gray-500  px-8 pt-1 pb-4 z-10"
    >
      {/* Header Row */}
      <View className="flex-row justify-between items-center">
        <TouchableOpacity onPress={handlePressLogo} style={{ width: '50%' }}>
          <Image
            source={{
              uri: 'https://res.cloudinary.com/dk5ge5xx8/image/upload/v1751003473/The_Coin_Toss_Logo_Gradient_tin8dl.png',
            }}
            style={{ width: '100%', height: baseHeight * 1.2 }}
            resizeMode="contain"
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={handlePressMenuIcon}>
          <Text className="text-5xl text-gray-300 pr-2">
            {/* The icon is 'x' only if the auth menu is open, otherwise it's the hamburger */}
            {!isAuthenticated && authMenuVisible ? 'x' : '≡'}
          </Text>
        </TouchableOpacity>
      </View>

      {/* Dropdown now only appears if NOT authenticated AND menu is visible */}
      {!isAuthenticated && authMenuVisible && (
        <View className="mt-2 space-y-5">
          <TouchableOpacity
            className="bg-gray-700 mb-2 rounded-md py-2 items-center"
            onPress={() => handlePressAuthButton('Login')}
          >
            <Text className="text-white text-base">Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="bg-orange-400 rounded-md py-2 items-center"
            onPress={() => handlePressAuthButton('Signup')}
          >
            <Text className="text-black text-base font-semibold">Sign Up</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};