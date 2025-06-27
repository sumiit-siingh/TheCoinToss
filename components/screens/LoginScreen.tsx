import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { Button, Card } from '../../components/ui';

interface LoginScreenProps {
  onLoginSuccess?: () => void;
  onSignupPress?: () => void;
  onForgotPassword?: () => void;
}

export const LoginScreen: React.FC<LoginScreenProps> = ({
  onLoginSuccess,
  onSignupPress,
  onForgotPassword
}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      onLoginSuccess?.();
    }, 1500);
  };

  return (
    <View className="flex-1 bg-gray-50 justify-center px-6">
      <Card className="mb-6">
        <Text className="text-3xl font-bold text-gray-800 text-center mb-2">
          Welcome Back
        </Text>
        <Text className="text-gray-600 text-center mb-6">
          Sign in to your account
        </Text>

        <View className="space-y-4">
          <View>
            <Text className="text-sm font-medium text-gray-700 mb-2">
              Email
            </Text>
            <TextInput
              className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white"
              placeholder="Enter your email"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
            />
          </View>

          <View>
            <Text className="text-sm font-medium text-gray-700 mb-2">
              Password
            </Text>
            <TextInput
              className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white"
              placeholder="Enter your password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              autoCapitalize="none"
            />
          </View>

          <TouchableOpacity 
            className="self-end"
            onPress={onForgotPassword}
          >
            <Text className="text-blue-600 text-sm">
              Forgot Password?
            </Text>
          </TouchableOpacity>

          <Button
            title="Sign In"
            onPress={handleLogin}
            loading={isLoading}
            className="mt-4"
          />
        </View>
      </Card>

      <View className="flex-row justify-center items-center">
        <Text className="text-gray-600">Don't have an account? </Text>
        <TouchableOpacity onPress={onSignupPress}>
          <Text className="text-blue-600 font-semibold">Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}; 