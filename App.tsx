import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import './global.css';
import TheCoinTossRoom from 'components/screens/TheCoinTossRoom';

// Import all screens
import {
  LoginScreen, SignupScreen, DashboardScreen, LoadingScreen, LeaderboardScreen,
  TheCoinTossRoomScreen, ProfileScreen, CreateNewRoomScreen, JoinRoomScreen,
} from './components';


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function AuthNavigator({ handleLogin }: { handleLogin: () => void }) {
  return (
<<<<<<< HEAD
    <AppLayout
      headerTitle="TheCoinToss"
      mainScreenTitle="Welcome"
      onHomePress={() => navigation.navigate('Home')}
      onSettingsPress={() => navigation.navigate('Dashboard')}
      onProfilePress={() => navigation.navigate('Dashboard')}
      // onSettingsPress={() => navigation.navigate('TheCoinTossRoom')}
    >
      <View className="space-y-4">
        <Card title="Getting Started" subtitle="Welcome to TheCoinToss app!">
          <Text className="text-gray-700 mb-4">
            This is a well-structured React Native app with proper component organization.
            Click "Get Started" to begin your coin tossing journey!
          </Text>
          <Button 
            title="Get Started" 
            onPress={() => navigation.navigate('Login/Signup')}
            className="mt-2"
=======
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
>>>>>>> 8af547f432ce9ca96cc9a859890bd435902e5f09
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
<<<<<<< HEAD
    <AuthScreen
      onAuthSuccess={() => navigation.navigate('Dashboard')}
      onBackToLanding={() => navigation.navigate('Home')}
      // onAuthSuccess={() => navigation.navigate('TheCoinTossRoom')}
    />
  );
}

function DashboardScreenWrapper({ navigation }: any) {
  return (
    <DashboardScreen onLogout={() => navigation.navigate('Home')} />
=======
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
        component={DashboardScreen}
      />
      <Drawer.Screen name="LeaderBoard" component={LeaderboardScreen} />
      <Drawer.Screen name="TheCoinTossRoom" component={TheCoinTossRoomScreen} />
      <Drawer.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ drawerItemStyle: { height: 0, margin: 0 } }}
      />
      <Drawer.Screen name="CreateNewRoom" component={CreateNewRoomScreen} options={{ drawerItemStyle: { height: 0, margin: 0 } }} />
      <Drawer.Screen name="JoinRoom" component={JoinRoomScreen} options={{ drawerItemStyle: { height: 0, margin: 0 } }} />
    
    </Drawer.Navigator>
>>>>>>> 8af547f432ce9ca96cc9a859890bd435902e5f09
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
<<<<<<< HEAD
      <Drawer.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Login/Signup" component={AuthScreenWrapper} />
        <Drawer.Screen name="Dashboard" component={DashboardScreenWrapper} />
        <Drawer.Screen name="TheCoinTossRoom" component={TheCoinTossRoom} />
      </Drawer.Navigator>
=======
      {isAuthenticated ? (
        <AppDrawerNavigator handleLogout={handleLogout} />
      ) : (
        <AuthNavigator handleLogin={handleLogin} />
      )}
>>>>>>> 8af547f432ce9ca96cc9a859890bd435902e5f09
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}