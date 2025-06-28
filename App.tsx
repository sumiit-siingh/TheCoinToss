import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'; // Import drawer components
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, Text, Image, TouchableOpacity } from 'react-native'; // Import core components
import { FontAwesome } from '@expo/vector-icons'; // For the logout icon

// Import global styles
import './global.css';

// Import all necessary screens
import {
  LoginScreen,
  SignupScreen,
  DashboardScreen,
  LoadingScreen,
  LeaderboardScreen,
  TheCoinTossRoomScreen,
} from './components';

// --- Navigators (Stack is unchanged) ---
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function AuthNavigator({ handleLogin }: { handleLogin: () => void }) {
  return (
    <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login">
        {(props) => <LoginScreen {...props} onAuthSuccess={handleLogin} />}
      </Stack.Screen>
      <Stack.Screen name="Signup">
        {(props) => <SignupScreen {...props} onAuthSuccess={handleLogin} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
}

// --- NEW: Custom Component for the Drawer's Content ---
import type { DrawerContentComponentProps } from '@react-navigation/drawer';

type CustomDrawerContentProps = DrawerContentComponentProps & {
  onLogout: () => void;
};

function CustomDrawerContent(props: CustomDrawerContentProps) {
  // Extract our custom onLogout function, pass the rest of the props to the item list
  const { onLogout, ...restProps } = props;

  return (
    // Use a View to control the overall layout (items on top, footer on bottom)
    <View className="flex-1 bg-slate-800">
      <DrawerContentScrollView {...restProps}>
        {/* This component automatically renders the links for our screens */}
        <DrawerItemList {...restProps} />
      </DrawerContentScrollView>

      {/* This is our custom footer section */}
      <View className="p-4 border-t border-gray-600">
        <TouchableOpacity onPress={onLogout} className="flex-row items-center p-2">
          <Image
            source={{ uri: 'https://i.pravatar.cc/150?u=a042581f4e29026709d' }} // Placeholder avatar
            className="w-10 h-10 rounded-full"
          />
          <Text className="text-white font-semibold ml-4 flex-1">Prem Yadav</Text>
          <FontAwesome name="sign-out" size={26} color="#ef4444" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

// --- UPDATED: The Drawer Navigator now uses our custom component ---
function AppDrawerNavigator({ handleLogout }: { handleLogout: () => void }) {
  return (
    <Drawer.Navigator
      // Use the 'drawerContent' prop to specify our custom component
      drawerContent={(props) => <CustomDrawerContent {...props} onLogout={handleLogout} />}
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          backgroundColor: '#1E293B', // bg-slate-800
        },
        drawerInactiveTintColor: 'white',
        drawerActiveTintColor: '#FBBF24', // amber-400
        drawerActiveBackgroundColor: '#334155', // bg-slate-700
      }}
      initialRouteName="Dashboard"
    >
      {/* The screen definitions are now simpler */}
      <Drawer.Screen
        name="Dashboard"
        children={(props) => <DashboardScreen {...props} onLogout={handleLogout} />}
      />
      <Drawer.Screen name="LeaderBoard" component={LeaderboardScreen} />
      <Drawer.Screen name="TheCoinTossRoom" component={TheCoinTossRoomScreen} />
    </Drawer.Navigator>
  );
}

// --- Main App Component (unchanged) ---
export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkUserSession = async () => {
      try {
        const session = await AsyncStorage.getItem('user-session');
        if (session !== null) {
          setIsAuthenticated(true);
        }
      } catch (error) {
        console.error("Failed to load user session.", error);
      } finally {
        setIsLoading(false);
      }
    };
    checkUserSession();
  }, []);

  const handleLogin = async () => { /* ... */ setIsAuthenticated(true); };
  const handleLogout = async () => { /* ... */ setIsAuthenticated(false); };

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