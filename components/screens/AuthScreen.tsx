import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { LoginScreen } from './LoginScreen';
import { SignupScreen } from './SignupScreen';
import { Header } from '../layout/Header';

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
      <Header />
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