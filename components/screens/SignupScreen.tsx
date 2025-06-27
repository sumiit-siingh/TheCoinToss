import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { Button, Card } from '../ui';

interface SignupScreenProps {
  onSignupSuccess?: () => void;
  onLoginPress?: () => void;
}

export const SignupScreen: React.FC<SignupScreenProps> = ({
  onSignupSuccess,
  onLoginPress
}) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const updateFormData = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const validateForm = () => {
    const { firstName, lastName, email, password, confirmPassword } = formData;
    
    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      Alert.alert('Error', 'Please fill in all fields');
      return false;
    }

    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match');
      return false;
    }

    if (password.length < 6) {
      Alert.alert('Error', 'Password must be at least 6 characters long');
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Alert.alert('Error', 'Please enter a valid email address');
      return false;
    }

    return true;
  };

  const handleSignup = async () => {
    if (!validateForm()) return;

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      onSignupSuccess?.();
    }, 1500);
  };

  return (
    <ScrollView className="flex-1 bg-gray-50" showsVerticalScrollIndicator={false}>
      <View className="flex-1 justify-center px-6 py-8">
        <Card className="mb-6">
          <Text className="text-3xl font-bold text-gray-800 text-center mb-2">
            Create Account
          </Text>
          <Text className="text-gray-600 text-center mb-6">
            Join TheCoinToss today
          </Text>

          <View className="space-y-4">
            <View className="flex-row space-x-3">
              <View className="flex-1">
                <Text className="text-sm font-medium text-gray-700 mb-2">
                  First Name
                </Text>
                <TextInput
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white"
                  placeholder="First name"
                  value={formData.firstName}
                  onChangeText={(value) => updateFormData('firstName', value)}
                  autoCapitalize="words"
                />
              </View>
              <View className="flex-1">
                <Text className="text-sm font-medium text-gray-700 mb-2">
                  Last Name
                </Text>
                <TextInput
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white"
                  placeholder="Last name"
                  value={formData.lastName}
                  onChangeText={(value) => updateFormData('lastName', value)}
                  autoCapitalize="words"
                />
              </View>
            </View>

            <View>
              <Text className="text-sm font-medium text-gray-700 mb-2">
                Email
              </Text>
              <TextInput
                className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white"
                placeholder="Enter your email"
                value={formData.email}
                onChangeText={(value) => updateFormData('email', value)}
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
                placeholder="Create a password"
                value={formData.password}
                onChangeText={(value) => updateFormData('password', value)}
                secureTextEntry
                autoCapitalize="none"
              />
            </View>

            <View>
              <Text className="text-sm font-medium text-gray-700 mb-2">
                Confirm Password
              </Text>
              <TextInput
                className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white"
                placeholder="Confirm your password"
                value={formData.confirmPassword}
                onChangeText={(value) => updateFormData('confirmPassword', value)}
                secureTextEntry
                autoCapitalize="none"
              />
            </View>

            <Button
              title="Create Account"
              onPress={handleSignup}
              loading={isLoading}
              className="mt-4"
            />
          </View>
        </Card>

        <View className="flex-row justify-center items-center">
          <Text className="text-gray-600">Already have an account? </Text>
          <TouchableOpacity onPress={onLoginPress}>
            <Text className="text-blue-600 font-semibold">Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}; 