import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Header } from '../layout/Header';
import { FontAwesome } from '@expo/vector-icons';
// We can import the stat icons from our central Icons file
// Update the import below to match the actual exports from '../ui/Icons'
import { UsersIcon, StarIcon } from '../ui/Icons';

// --- Reusable component for each of the 4 stat boxes ---
type StatCardProps = {
  icon: React.ReactNode;
  label: string;
};

const StatCard = ({ icon, label }: StatCardProps) => (
  <View className="w-[48%] bg-slate-800 p-4 rounded-xl items-center justify-center space-y-2 mb-4">
    {icon}
    <Text className="text-white font-semibold">{label}</Text>
  </View>
);

export const ProfileScreen = () => {
  // Mock user data
  const user = {
    name: 'Sumit',
    location: 'global',
    joinDate: 'June 2025',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026709d', // Using a placeholder avatar
  };

  return (
    <View className="flex-1 bg-slate-900">
      <Header isAuthenticated={true} />
      <ScrollView contentContainerStyle={{ padding: 16, paddingBottom: 48 }}>
        
        {/* --- User Info Card --- */}
        <View className="bg-slate-800 rounded-2xl p-6 items-center">
          <Image source={{ uri: user.avatar }} className="w-28 h-28 rounded-full border-4 border-amber-400" />
          <Text className="text-white text-3xl font-bold mt-4">{user.name}</Text>
          
          <View className="flex-row items-center text-gray-400 mt-2">
            <FontAwesome name="globe" size={14} color="#9ca3af" />
            <Text className="text-gray-400 ml-1.5">{user.location}</Text>
            <Text className="text-gray-400 mx-1.5">•</Text>
            <Text className="text-gray-400">Joined {user.joinDate}</Text>
          </View>

          <TouchableOpacity className="flex-row items-center bg-slate-700 w-full justify-center p-3 rounded-lg mt-6">
            <FontAwesome name="pencil" size={16} color="#FFF" />
            <Text className="text-white font-bold ml-2">Edit Profile</Text>
          </TouchableOpacity>
        </View>

        {/* --- Stats Section --- */}
        <View className="mt-8">
          <Text className="text-white font-bold text-xl mb-4">Your Stats</Text>
          <View className="flex-row flex-wrap justify-between">
            <StatCard 
              label="Win Ratio" 
              icon={<StarIcon width={28} height={28} fill="#22c55e" />} 
            />
            <StatCard 
              label="Total Tosses" 
              icon={<UsersIcon width={28} height={28} stroke="#3b82f6" />} 
            />
            <StatCard 
              label="Rooms Joined" 
              icon={<UsersIcon width={28} height={28} stroke="#a855f7" />} 
            />
            <StatCard 
              label="Achievements" 
              icon={<StarIcon width={28} height={28} fill="#facc15" />} 
            />
          </View>
        </View>

        {/* --- Ad Banner --- */}
        <View className="w-full h-28 border-2 border-dashed border-gray-600 rounded-lg justify-center items-center my-8">
            <Text className="text-gray-500">Medium Rectangle</Text>
            <Text className="text-gray-600 text-xs">100% x 100</Text>
        </View>
        
      </ScrollView>
    </View>
  );
};