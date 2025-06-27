import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import { FontAwesome, Feather } from '@expo/vector-icons';

// Important: For Tailwind CSS to work, you need to set up a library like NativeWind.
// Ensure your 'tailwind.config.js' is configured and your 'babel.config.js' includes NativeWind.
// The classes below will be processed by NativeWind.

interface LoginScreenProps {
  onLoginSuccess?: () => void;
  onSignupPress?: () => void;
  onForgotPassword?: () => void;
}

export const LoginScreen: React.FC<LoginScreenProps> = ({
  onLoginSuccess,
  onSignupPress,
  onForgotPassword,
}) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleLogin = (): void => {
    if (!email || !password) {
      console.log('Please enter both email and password.'); // In RN, you might use Alert.alert here
      return;
    }
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      console.log('Login successful!');
      onLoginSuccess && onLoginSuccess();
    }, 1500);
  };

  const handleSocialLogin = (provider: string): void => {
    console.log(`Signing in with ${provider}`);
    // Implement actual social login logic here
  };

  return (
    <View className="flex-1 bg-gray-800 justify-center items-center p-4">
      <View
        className="
          items-center mx-2 my-2
          rounded-xl bg-[#2D3748] p-5
          w-full h-[97%] max-w-md
        "
        style={{
          width: '100%',
          maxWidth: 400,
          backgroundColor: '#1e293b',
          borderRadius: 16,
          padding: 24,
          shadowColor: '#000',
          shadowOpacity: 0.2,
          shadowRadius: 8,
          elevation: 5,
        }}
      >
        <Image
          source={require('../../assets/images/Favicon.png')} // Ensure the path is correct
          className="w-16 h-16 rounded-full mb-4"
          onError={() => console.log('Error loading Favicon.png')} // Fallback error handling
        />
        <Text className="text-2xl font-bold text-white text-center mb-1">
          Welcome to TheCoinToss
        </Text>
        <Text className="text-sm text-gray-400 text-center mb-6">
          Sign in to test your luck
        </Text>

        <View className="w-full mb-3">
          <View className="flex-row items-center bg-[#3C4459] rounded-lg px-3 py-1 border border-gray-600">
            <Feather name="mail" size={20} color="#94a3b8" className="mr-2" />
            <TextInput
              placeholder="Email Address"
              placeholderTextColor="#94a3b8"
              className="flex-1 text-white py-3"
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
              onChangeText={setEmail}
            />
          </View>
        </View>

        <View className="w-full mb-3">
          <View className="flex-row items-center bg-[#3C4459] rounded-lg px-3 py-1 border border-gray-600">
            <Feather name="lock" size={20} color="#94a3b8" className="mr-2" />
            <TextInput
              placeholder="Password"
              placeholderTextColor="#94a3b8"
              className="flex-1 text-white py-3"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />
          </View>
        </View>

        <TouchableOpacity
          className={`bg-orange-500 w-full py-3 rounded-lg items-center mt-3 ${isLoading ? 'opacity-75' : ''
            }`}
          onPress={handleLogin}
          disabled={isLoading}
        >
          {isLoading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text className="text-white font-semibold">Login Securely</Text>
          )}
        </TouchableOpacity>

        <View className="flex-row items-center my-4 w-full">
          <View className="flex-1 h-[1px] bg-gray-500" />
          <Text className="text-gray-500 mx-3 font-medium">Or continue with</Text>
          <View className="flex-1 h-[1px] bg-gray-500" />
        </View>

        <TouchableOpacity
          className="bg-[#3C4459] w-full py-3 rounded-lg items-center mb-2"
          onPress={() => handleSocialLogin('Google')}
        >
          <Text className="text-gray-300 font-semibold">
            <FontAwesome name="google" size={18} color="#D1D5DB" />   Sign in with Google
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="bg-[#3C4459] w-full py-3 rounded-lg items-center mb-2"
          onPress={() => handleSocialLogin('Twitter')}
        >
          <Text className="text-gray-300 font-semibold">
            <FontAwesome name="twitter" size={18} color="#D1D5DB" />   Sign in with Twitter
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="bg-[#3C4459] w-full py-3 rounded-lg items-center mb-2"
          onPress={() => handleSocialLogin('Facebook')}
        >
          <Text className="text-gray-300 font-semibold">
            <FontAwesome name="facebook" size={18} color="#D1D5DB" />   Sign in with Facebook
          </Text>
        </TouchableOpacity>

        <View className="flex-row mt-6">
          <Text className="text-gray-400">Don't have an account? </Text>
          <TouchableOpacity onPress={onSignupPress}>
            <Text className="text-orange-500 font-semibold">Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
