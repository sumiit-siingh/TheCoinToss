import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Header } from '../layout/Header';

export const AuthScreen = ({ navigation }: any) => {
  return (
    <View className="flex-1 bg-gray-800">
      <Header />
      <View className="flex-1 justify-center items-center p-6">
        <View className="items-center">
          <Image
            source={{ uri: 'https://res.cloudinary.com/dk5ge5xx8/image/upload/v1751023601/Favicon_tugon0.png' }}
            className="w-24 h-24 rounded-full mb-6"
          />
          <Text className="text-3xl font-bold text-white text-center mb-2">
            Welcome to TheCoinToss
          </Text>
          <Text className="text-lg text-gray-400 text-center mb-12">
            Test your luck and track your stats.
          </Text>
          <TouchableOpacity
            className="bg-orange-500 w-full py-4 rounded-lg items-center mb-4"
            onPress={() => navigation.navigate('Login')}
          >
            <Text className="text-white text-lg font-semibold">Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="bg-gray-700 w-full py-4 rounded-lg items-center"
            onPress={() => navigation.navigate('Signup')}
          >
            <Text className="text-white text-lg font-semibold">Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};