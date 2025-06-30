
import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Header } from '../layout/Header';
import { CoinIcon } from '../ui/Icons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// Helper function to get medal colors (unchanged)
const getTrophyColor = (rank: number) => {
  if (rank === 1) return '#FFD700'; // Gold
  if (rank === 2) return '#C0C0C0'; // Silver
  if (rank === 3) return '#CD7F32'; // Bronze
  return '#A1A1AA'; // Default color (gray-400)
};

// --- DATA (unchanged) ---
const globalLeaderboardData = [
  { rank: 1, name: 'Sam', score: 10000, avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704d' },
  { rank: 2, name: 'Alex', score: 4500, avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026705d' },
  { rank: 3, name: 'Rio', score: 2000, avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026706d' },
  { rank: 4, name: 'Suri', score: 1500, avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026707d' },
  { rank: 5, name: 'Tony', score: 950, avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026708d' },
  { rank: 6, name: 'Priya', score: 800, avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026714d' },
];

const friendsLeaderboardData = [
  { rank: 1, name: 'Harsh Tripathi', score: 7500, avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026709d' },
  { rank: 2, name: 'Isha Chaudhary', score: 6200, avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026710d' },
  { rank: 3, name: 'Altaf Raza', score: 3100, avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026711d' },
  { rank: 4, name: 'Sumit', score: 1500, avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026712d' },
  { rank: 5, name: 'Amit', score: 950, avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026713d' },
];

// --- Component for Top 3 Players ---
const TopPlayerCard = ({ user }: { user: Player }) => (
  <View key={user.rank} className="relative bg-slate-800 mb-5 pb-4 border border-gray-700 rounded-xl">
    <View className="absolute top-4 right-4 flex-row items-center">
      <Text style={{ color: getTrophyColor(user.rank), fontSize: 20, fontWeight: 'bold' }}>
        {user.rank}
      </Text>
      <FontAwesome name="trophy" size={24} color={getTrophyColor(user.rank)} style={{ marginLeft: 6 }} />
    </View>
    <View className="items-center pt-8">
      <Image source={{ uri: user.avatar }} className="w-20 h-20 rounded-full mb-3 border-2 border-white" />
      <Text className="text-white font-bold text-xl">{user.name}</Text>
      <View className="flex-row items-center mt-2">
        <MaterialCommunityIcons name="circle-double" color="#fabe32" size={20} />
        <Text className="text-yellow-300 font-semibold text-lg ml-2">
          {user.score.toLocaleString()}
        </Text>
      </View>
    </View>
  </View>
);

// --- NEW: Component for players 4+ (compact, linear view) ---
type Player = {
  rank: number;
  name: string;
  score: number;
  avatar: string;
};

const PlayerRow = ({ user }: { user: Player }) => (
  <View key={user.rank} className="flex-row items-center bg-slate-800 p-3 rounded mb-1 border border-gray-700">
    <View className="flex-row items-center">
      <Text className="text-lg font-bold text-gray-400 w-8 text-center">{user.rank}</Text>
      <Image source={{ uri: user.avatar }} className="w-10 h-10 rounded-full ml-2" />
      <Text className="text-base font-semibold text-white flex-1 mx-4" numberOfLines={1}>{user.name}</Text>
      <View className="flex-row items-center">
       <MaterialCommunityIcons name="circle-double" color="#fabe32" size={15} />
      <Text className="text-yellow-300 font-semibold ml-1.5">{user.score.toLocaleString()}</Text>
    </View>
    </View>
  </View>
);

export const LeaderboardScreen = () => {
  const [activeTab, setActiveTab] = useState<'global' | 'friends'>('global');
  const [displayedData, setDisplayedData] = useState(globalLeaderboardData);

  useEffect(() => {
    if (activeTab === 'global') {
      setDisplayedData(globalLeaderboardData);
    } else {
      setDisplayedData(friendsLeaderboardData);
    }
  }, [activeTab]);

  const topThree = displayedData.slice(0, 3);
  const restOfPlayers = displayedData.slice(3);

  return (
    <View className="flex-1 bg-slate-900">
      <Header isAuthenticated={true} />
      
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ padding: 16, paddingBottom: 48 }}>
        {/* Header and Tabs are unchanged */}
        <View className="items-center mb-6">
          <View className="flex-row items-center">
            <FontAwesome name="trophy" size={32} color="#FBBF24" />
            <Text className="text-4xl font-extrabold text-white ml-3">Leaderboards</Text>
          </View>
          <Text className="text-lg text-gray-400 mt-2">See who's ruling the world of coin tossing.</Text>
        </View>
        <View className="flex-row bg-slate-800 rounded-lg p-1.5 mb-6">
          <TouchableOpacity className={`flex-1 p-2 rounded-md ${activeTab === 'global' ? 'bg-amber-500' : ''}`} onPress={() => setActiveTab('global')}>
            <View className="flex-row justify-center items-center">
              <FontAwesome name="globe" size={16} color={activeTab === 'global' ? '#000' : '#FFF'} />
              <Text className={`ml-2 font-bold ${activeTab === 'global' ? 'text-black' : 'text-white'}`}>Global</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity className={`flex-1 p-2 rounded-md ${activeTab === 'friends' ? 'bg-amber-500' : ''}`} onPress={() => setActiveTab('friends')}>
            <View className="flex-row justify-center items-center">
              <FontAwesome name="users" size={16} color={activeTab === 'friends' ? '#000' : '#FFF'} />
              <Text className={`ml-2 font-bold ${activeTab === 'friends' ? 'text-black' : 'text-white'}`}>Friends</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* --- Render the Top 3 Players using TopPlayerCard --- */}
        <View className="space-y-4">
          {topThree.map((user) => (
            <TopPlayerCard key={user.rank} user={user} />
          ))}
        </View>

        {/* Ad Banner */}
        <View className="w-full h-24 border-2 border-dashed border-gray-600 rounded-lg justify-center items-center my-8">
          <Text className="text-gray-500">Leaderboard Ad</Text>
          <Text className="text-gray-600 text-xs">900 x 90</Text>
        </View>
        
        {/* --- Render the Rest of the Players using PlayerRow --- */}
        {restOfPlayers.length > 0 && (
          <View className="space-y-2">
            {restOfPlayers.map((user) => (
              <PlayerRow key={user.rank} user={user} />
            ))}
          </View>
        )}
      </ScrollView>
    </View>
  );
};