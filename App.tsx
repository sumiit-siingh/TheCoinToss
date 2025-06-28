import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { AppLayout, Button, Card } from './components'; // Ensure these imports are correct
import {AuthScreen} from './components/screens/AuthScreen';  // Make sure this path is correct
import { DashboardScreen } from './components/screens/DashboardScreen'; // Ensure the path is correct
import './global.css';

const Drawer = createDrawerNavigator();

// HomeScreen for the main landing page
function HomeScreen({ navigation }: any) {
  return (
    <AppLayout
      headerTitle="TheCoinToss"
      mainScreenTitle="Welcome"
      onHomePress={() => navigation.navigate('Home')}
      onSettingsPress={() => navigation.navigate('Dashboard')}
      onProfilePress={() => navigation.navigate('Dashboard')}
    >
      <View className="space-y-4">
        <Card title="Getting Started" subtitle="Welcome to TheCoinToss app!">
          <Text className="text-gray-700 mb-4">
            This is a well-structured React Native app with proper component organization.
            Click "Get Started" to begin your coin tossing journey!
          </Text>
          <Button 
            title="Get Started" 
            onPress={() => navigation.navigate('Login/Signup')} // Navigate to login/signup screen
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
  );
}

// Wrapper for AuthScreen
function AuthScreenWrapper({ navigation }: any) {
  return (
    <AuthScreen
      onAuthSuccess={() => navigation.navigate('Dashboard')} // Navigate to Dashboard after successful auth
      onBackToLanding={() => navigation.navigate('Home')} // Navigate back to Home screen if needed
    />
  );
}

// Wrapper for DashboardScreen
function DashboardScreenWrapper({ navigation }: any) {
  return (
    <DashboardScreen onLogout={() => navigation.navigate('Home')} />  // Logout and go back to Home
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Login/Signup" component={AuthScreenWrapper} />
        <Drawer.Screen name="Dashboard" component={DashboardScreenWrapper} />
      </Drawer.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
