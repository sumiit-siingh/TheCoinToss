import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import './global.css';

// Import all screens
import {
  LoginScreen,
  SignupScreen,
  DashboardScreen,
  LoadingScreen,
  LeaderboardScreen,
  TheCoinTossRoomScreen,
  ProfileScreen,
} from './components';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function AuthNavigator({ handleLogin }: { handleLogin: () => void }) {
  return (
    <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login">{(props) => <LoginScreen {...props} onAuthSuccess={handleLogin} />}</Stack.Screen>
      <Stack.Screen name="Signup">{(props) => <SignupScreen {...props} onAuthSuccess={handleLogin} />}</Stack.Screen>
    </Stack.Navigator>
  );
}

import type { DrawerContentComponentProps } from '@react-navigation/drawer';

function CustomDrawerContent(props: DrawerContentComponentProps & { onLogout: () => void }) {
  const { onLogout, ...restProps } = props;
  return (
    <View className="flex-1 bg-slate-800">
      <DrawerContentScrollView {...restProps}>
        <DrawerItemList {...restProps} />
      </DrawerContentScrollView>
      <View className="p-4 border-t border-gray-600 flex-row items-center justify-between">
        <TouchableOpacity
          onPress={() => props.navigation.navigate('Profile')}
          className="flex-row items-center flex-1 mr-2"
        >
          <Image
            source={{ uri: 'https://i.pravatar.cc/150?u=a042581f4e29026709d' }}
            className="w-10 h-10 rounded-full"
          />
          <Text className="text-white font-semibold ml-3" numberOfLines={1}>Prem Yadav</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onLogout} className="p-2">
          <FontAwesome name="sign-out" size={28} color="#ef4444" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

function AppDrawerNavigator({ handleLogout }: { handleLogout: () => void }) {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} onLogout={handleLogout} />}
      screenOptions={{
        headerShown: false,
        drawerStyle: { backgroundColor: '#1E293B' },
        drawerInactiveTintColor: 'white',
        drawerActiveTintColor: '#FBBF24',
        drawerActiveBackgroundColor: '#334155',
      }}
      initialRouteName="Dashboard"
    >
      <Drawer.Screen
        name="Dashboard"
        children={(props) => <DashboardScreen {...props} onLogout={handleLogout} />}
      />
      <Drawer.Screen name="LeaderBoard" component={LeaderboardScreen} />
      <Drawer.Screen name="TheCoinTossRoom" component={TheCoinTossRoomScreen} />
      <Drawer.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ drawerItemStyle: { height: 0, margin: 0 } }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // --- THIS IS THE MODIFIED SECTION ---
  useEffect(() => {
    const checkUserSession = async () => {
      console.log("DEBUG: 1. Starting session check...");
      try {
        const session = await AsyncStorage.getItem('user-session');
        console.log("DEBUG: 2. Session check complete. Found session:", session);
        if (session !== null) {
          setIsAuthenticated(true);
        }
      } catch (error) {
        console.error("DEBUG: 3. An error occurred during session check:", error);
      } finally {
        console.log("DEBUG: 4. Hiding loading screen.");
        setIsLoading(false);
      }
    };

    checkUserSession();
  }, []);
  // --- END OF MODIFIED SECTION ---

  const handleLogin = async () => {
    await AsyncStorage.setItem('user-session', 'true');
    setIsAuthenticated(true);
  };
  const handleLogout = async () => {
    await AsyncStorage.removeItem('user-session');
    setIsAuthenticated(false);
  };

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <NavigationContainer>
      {isAuthenticated ? (
        <AppDrawerNavigator handleLogout={handleLogout} />
      ) : (
        <AuthNavigator handleLogin={handleLogin} />
      )}
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}