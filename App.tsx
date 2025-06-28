import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Import global styles
import './global.css';

// Import all necessary screens, including the new ones
import {
  LoginScreen,
  SignupScreen,
  DashboardScreen,
  LoadingScreen,
  LeaderboardScreen,
  TheCoinTossRoomScreen,
} from './components';

// --- Create the navigators ---

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

// 1. The Stack Navigator for authentication (unchanged)
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

// 2. UPDATED Drawer Navigator for the main app
// This now contains all your desired menu items.
function AppDrawerNavigator({ handleLogout }: { handleLogout: () => void }) {
  return (
    <Drawer.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Dashboard"
    >
      <Drawer.Screen name="Dashboard">
        {(props) => <DashboardScreen {...props} onLogout={handleLogout} />}
      </Drawer.Screen>
      
      {/* --- NEW MENU ITEMS --- */}
      <Drawer.Screen name="LeaderBoard" component={LeaderboardScreen} />
      <Drawer.Screen name="TheCoinTossRoom" component={TheCoinTossRoomScreen} />

    </Drawer.Navigator>
  );
}


// --- The Main App Component (unchanged) ---

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

  const handleLogin = async () => {
    try {
      await AsyncStorage.setItem('user-session', 'true');
      setIsAuthenticated(true);
    } catch (error) {
      console.error("Failed to save user session.", error);
    }
  };

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem('user-session');
      setIsAuthenticated(false);
    } catch (error) {
      console.error("Failed to clear user session.", error);
    }
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