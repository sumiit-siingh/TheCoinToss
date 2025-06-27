import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { LoginScreen } from './LoginScreen';
import { SignupScreen } from './SignupScreen';

interface AuthScreenProps {
  onAuthSuccess?: () => void;
  onBackToLanding?: () => void;
}

type AuthMode = 'login' | 'signup';

export const AuthScreen: React.FC<AuthScreenProps> = ({
  onAuthSuccess,
  onBackToLanding
}) => {
  const [authMode, setAuthMode] = useState<AuthMode>('login');

  const handleLoginSuccess = () => {
    onAuthSuccess?.();
  };

  const handleSignupSuccess = () => {
    onAuthSuccess?.();
  };

  const handleForgotPassword = () => {
    // TODO: Implement forgot password functionality
    console.log('Forgot password pressed');
  };

  return (
    <View className="flex-1 bg-gray-50">
      {/* Header */}
      <View className="bg-white py-4 px-6 border-b border-gray-200">
        <View className="flex-row justify-between items-center">
          <TouchableOpacity onPress={onBackToLanding}>
            <Text className="text-blue-600 text-lg">← Back</Text>
          </TouchableOpacity>
          <Text className="text-xl font-bold text-gray-800">TheCoinToss</Text>
          <View className="w-12" />
        </View>
      </View>

      {/* Tab Navigation */}
      <View className="bg-white border-b border-gray-200">
        <View className="flex-row">
          <TouchableOpacity
            className={`flex-1 py-4 ${authMode === 'login' ? 'border-b-2 border-blue-600' : ''}`}
            onPress={() => setAuthMode('login')}
          >
            <Text className={`text-center font-semibold ${authMode === 'login' ? 'text-blue-600' : 'text-gray-500'}`}>
              Sign In
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            className={`flex-1 py-4 ${authMode === 'signup' ? 'border-b-2 border-blue-600' : ''}`}
            onPress={() => setAuthMode('signup')}
          >
            <Text className={`text-center font-semibold ${authMode === 'signup' ? 'text-blue-600' : 'text-gray-500'}`}>
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Auth Content */}
      {authMode === 'login' ? (
        <LoginScreen
          onLoginSuccess={handleLoginSuccess}
          onSignupPress={() => setAuthMode('signup')}
          onForgotPassword={handleForgotPassword}
        />
      ) : (
        <SignupScreen
          onSignupSuccess={handleSignupSuccess}
          onLoginPress={() => setAuthMode('login')}
        />
      )}
    </View>
  );
}; 