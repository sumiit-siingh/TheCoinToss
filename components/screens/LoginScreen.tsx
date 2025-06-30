import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  Alert,
} from 'react-native';
import { FontAwesome, Feather } from '@expo/vector-icons';
<<<<<<< HEAD
=======
import { Header } from '../layout/Header'; // Import Header for consistent UI
>>>>>>> 8af547f432ce9ca96cc9a859890bd435902e5f09

// UPDATE 1: The props interface now expects 'navigation' and 'onAuthSuccess'
interface LoginScreenProps {
  navigation: any;
  onAuthSuccess?: () => void;
  onForgotPassword?: () => void;
}

export const LoginScreen: React.FC<LoginScreenProps> = ({
  // UPDATE 2: We get 'navigation' and 'onAuthSuccess' from the props
  navigation,
  onAuthSuccess,
  onForgotPassword,
}) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleLogin = (): void => {
    if (!email || !password) {
      Alert.alert('Missing Fields', 'Please enter both email and password.');
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      console.log('Login successful!');
      // This now calls the correct prop
      onAuthSuccess?.();
    }, 1500);
  };

  const handleSocialLogin = (provider: string): void => {
    console.log(`Signing in with ${provider}`);
<<<<<<< HEAD
    // Placeholder for social login logic
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
          source={{
            uri: 'https://res.cloudinary.com/dk5ge5xx8/image/upload/v1751023601/Favicon_tugon0.png',
          }}
          className="w-16 h-16 rounded-full mb-4"
          onError={() => console.log('Error loading image')}
        />
=======
  };

  return (
    // We add the Header here so it appears on this screen
    <View className="flex-1 bg-gray-900">
      <Header isAuthenticated={false} />
      {/* The container below centers your design on the screen */}
      <View className="flex-1 justify-center items-center p-4">
        {/* THIS IS YOUR EXACT DESIGN CODE BELOW */}
        <View
          className="items-center mx-2 my-2 rounded-xl bg-gray-800 border-gray-600 border p-5 w-full max-w-md"
          style={{ elevation: 5 }}
        >
          <Image
            source={{
              uri: 'https://res.cloudinary.com/dk5ge5xx8/image/upload/v1751023601/Favicon_tugon0.png',
            }}
            className="w-16 h-16 rounded-full mb-4"
            onError={() => console.log('Error loading image')}
          />
>>>>>>> 8af547f432ce9ca96cc9a859890bd435902e5f09

          <Text className="text-2xl font-bold text-white text-center mb-1">
            Welcome to TheCoinToss
          </Text>
          <Text className="text-sm text-gray-400 text-center mb-6">
            Sign in to test your luck
          </Text>

<<<<<<< HEAD
        <View className="w-full mb-3">
          <View className="flex-row items-center bg-[#3C4459] rounded-lg px-3 py-1 border border-gray-600">
            <Feather name="mail" size={20} color="#94a3b8" />
            <TextInput
              placeholder="Email Address"
              placeholderTextColor="#94a3b8"
              className="flex-1 text-white py-3 ml-2"
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
              onChangeText={setEmail}
            />
=======
          <View className="w-full mb-3">
            <View className="flex-row items-center bg-[#3C4459] rounded-lg px-3 py-1 border border-gray-600">
              <Feather name="mail" size={20} color="#94a3b8" />
              <TextInput
                placeholder="Email Address"
                placeholderTextColor="#94a3b8"
                className="flex-1 text-white py-3 ml-2"
                keyboardType="email-address"
                autoCapitalize="none"
                value={email}
                onChangeText={setEmail}
              />
            </View>
>>>>>>> 8af547f432ce9ca96cc9a859890bd435902e5f09
          </View>

<<<<<<< HEAD
        <View className="w-full mb-3">
          <View className="flex-row items-center bg-[#3C4459] rounded-lg px-3 py-1 border border-gray-600">
            <Feather name="lock" size={20} color="#94a3b8" />
            <TextInput
              placeholder="Password"
              placeholderTextColor="#94a3b8"
              className="flex-1 text-white py-3 ml-2"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />
=======
          <View className="w-full mb-3">
            <View className="flex-row items-center bg-[#3C4459] rounded-lg px-3 py-1 border border-gray-600">
              <Feather name="lock" size={20} color="#94a3b8" />
              <TextInput
                placeholder="Password"
                placeholderTextColor="#94a3b8"
                className="flex-1 text-white py-3 ml-2"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
              />
            </View>
>>>>>>> 8af547f432ce9ca96cc9a859890bd435902e5f09
          </View>

<<<<<<< HEAD
        <TouchableOpacity
          className={`bg-orange-500 w-full py-3 rounded-lg items-center mt-3 ${
            isLoading ? 'opacity-75' : ''
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
          <Text className="text-gray-500 mx-3 font-medium">
            Or continue with
          </Text>
          <View className="flex-1 h-[1px] bg-gray-500" />
        </View>

        <TouchableOpacity
          className="bg-[#3C4459] w-full py-3 rounded-lg items-center mb-2"
          onPress={() => handleSocialLogin('Google')}
        >
          <Text className="text-gray-300 font-semibold">
            <FontAwesome name="google" size={18} color="#D1D5DB" /> Sign in with Google
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="bg-[#3C4459] w-full py-3 rounded-lg items-center mb-2"
          onPress={() => handleSocialLogin('Twitter')}
        >
          <Text className="text-gray-300 font-semibold">
            <FontAwesome name="twitter" size={18} color="#D1D5DB" /> Sign in with Twitter
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="bg-[#3C4459] w-full py-3 rounded-lg items-center mb-2"
          onPress={() => handleSocialLogin('Facebook')}
        >
          <Text className="text-gray-300 font-semibold">
            <FontAwesome name="facebook" size={18} color="#D1D5DB" /> Sign in with Facebook
          </Text>
        </TouchableOpacity>

        <View className="flex-row mt-6">
          <Text className="text-gray-400">Don't have an account? </Text>
          <TouchableOpacity onPress={onSignupPress}>
            <Text className="text-orange-500 font-semibold">Sign Up</Text>
=======
          <TouchableOpacity
            className={`bg-orange-500 w-full py-3 rounded-lg items-center mt-3 ${
              isLoading ? 'opacity-75' : ''
            }`}
            onPress={handleLogin}
            disabled={isLoading}
          >
            {isLoading ? <ActivityIndicator color="#fff" /> : <Text className="text-white font-semibold">Login Securely</Text>}
>>>>>>> 8af547f432ce9ca96cc9a859890bd435902e5f09
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
            <Text className="text-gray-300 font-semibold"><FontAwesome name="google" size={18} color="#D1D5DB" /> Sign in with Google</Text>
          </TouchableOpacity>

          <TouchableOpacity
            className="bg-[#3C4459] w-full py-3 rounded-lg items-center mb-2"
            onPress={() => handleSocialLogin('Twitter')}
          >
            <Text className="text-gray-300 font-semibold"><FontAwesome name="twitter" size={18} color="#D1D5DB" /> Sign in with Twitter</Text>
          </TouchableOpacity>

          <TouchableOpacity
            className="bg-[#3C4459] w-full py-3 rounded-lg items-center mb-2"
            onPress={() => handleSocialLogin('Facebook')}
          >
            <Text className="text-gray-300 font-semibold"><FontAwesome name="facebook" size={18} color="#D1D5DB" /> Sign in with Facebook</Text>
          </TouchableOpacity>

          <View className="flex-row mt-6">
            <Text className="text-gray-400">Don't have an account? </Text>
            {/* UPDATE 3: The onPress now uses navigation to go to the Signup screen */}
            <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
              <Text className="text-orange-500 font-semibold">Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};