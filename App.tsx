import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { 
  LoadingScreen, 
  AppLayout, 
  Button, 
  Card, 
  AuthScreen, 
  DashboardScreen 
} from './components';
import './global.css';

type AppState = 'loading' | 'landing' | 'auth' | 'dashboard';

export default function App() {
  const [appState, setAppState] = useState<AppState>('loading');

  useEffect(() => {
    // Simulate app initialization
    const timer = setTimeout(() => {
      setAppState('landing');
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleGetStarted = () => {
    setAppState('auth');
  };

  const handleAuthSuccess = () => {
    setAppState('dashboard');
  };

  const handleBackToLanding = () => {
    setAppState('landing');
  };

  const handleLogout = () => {
    setAppState('landing');
  };

  const handleHomePress = () => {
    console.log('Home pressed');
  };

  const handleSettingsPress = () => {
    console.log('Settings pressed');
  };

  const handleProfilePress = () => {
    console.log('Profile pressed');
  };

  // Loading Screen
  if (appState === 'loading') {
    return (
      <LoadingScreen 
        onLoadingComplete={() => setAppState('landing')}
        loadingText="Initializing TheCoinToss..."
      />
    );
  }

  // Authentication Screen
  if (appState === 'auth') {
    return (
      <>
        <AuthScreen
          onAuthSuccess={handleAuthSuccess}
          onBackToLanding={handleBackToLanding}
        />
        <StatusBar style="auto" />
      </>
    );
  }

  // Dashboard Screen
  if (appState === 'dashboard') {
    return (
      <>
        <DashboardScreen onLogout={handleLogout} />
        <StatusBar style="auto" />
      </>
    );
  }

  // Landing Page (Default)
  return (
    <>
      <AppLayout
        headerTitle="TheCoinToss"
        mainScreenTitle="Welcome"
        onHomePress={handleHomePress}
        onSettingsPress={handleSettingsPress}
        onProfilePress={handleProfilePress}
      >
        <View className="space-y-4">
          <Card title="Getting Started" subtitle="Welcome to TheCoinToss app!">
            <Text className="text-gray-700 mb-4">
              This is a well-structured React Native app with proper component organization.
              Click "Get Started" to begin your coin tossing journey!
            </Text>
            <Button 
              title="Get Started" 
              onPress={handleGetStarted}
              className="mt-2"
            />
          </Card>

          <Card title="Features" subtitle="What you can do with this app">
            <View className="space-y-2">
              <Text className="text-gray-700">• Clean component structure</Text>
              <Text className="text-gray-700">• TypeScript support</Text>
              <Text className="text-gray-700">• Tailwind CSS styling</Text>
              <Text className="text-gray-700">• Reusable UI components</Text>
              <Text className="text-gray-700">• Authentication flow</Text>
              <Text className="text-gray-700">• Dashboard with statistics</Text>
            </View>
          </Card>

          <Card title="How it Works" subtitle="Simple coin tossing made fun">
            <View className="space-y-2">
              <Text className="text-gray-700">1. Sign up or log in to your account</Text>
              <Text className="text-gray-700">2. Toss coins and track your results</Text>
              <Text className="text-gray-700">3. View your statistics and history</Text>
              <Text className="text-gray-700">4. Challenge friends and compete</Text>
            </View>
          </Card>
        </View>
      </AppLayout>
      <StatusBar style="auto" />
    </>
  );
}
