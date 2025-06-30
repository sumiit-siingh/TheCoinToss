import React, { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient'; // at the top of your file


import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
  Pressable,
} from 'react-native';
import { Ionicons, FontAwesome, MaterialIcons, Feather } from '@expo/vector-icons';

interface Room {
  id: string;
  name: string;
  owner: string;
  participants: number;
  maxParticipants: number;
  entryFee: number;
  live: boolean;
}

const roomsData: Room[] = [
  { id: '1', name: 'Test', owner: 'Akash', participants: 25, maxParticipants: 50, entryFee: 0.0, live: true },
  { id: '2', name: 'Chill Zone', owner: 'Bhavya', participants: 10, maxParticipants: 20, entryFee: 5.00, live: true },
  { id: '3', name: 'Pro Gamers', owner: 'Chirag', participants: 45, maxParticipants: 50, entryFee: 10.00, live: true },
  { id: '4', name: 'Beginner Friendly', owner: 'Deepak', participants: 5, maxParticipants: 15, entryFee: 0.00, live: true },
  { id: '5', name: 'Strategy Masters', owner: 'Esha', participants: 30, maxParticipants: 30, entryFee: 2.50, live: true },
  { id: '6', name: 'Test', owner: 'Akash', participants: 25, maxParticipants: 50, entryFee: 0.0, live: true },
  { id: '7', name: 'Test', owner: 'Akash', participants: 25, maxParticipants: 50, entryFee: 0.0, live: true },
  { id: '8', name: 'Test', owner: 'Akash', participants: 25, maxParticipants: 50, entryFee: 0.0, live: true },
];

const adCards = [
  {
    title: 'Featured Room',
    subtitle: 'Check out this exclusive room with special rewards!',
    buttonText: 'Join Now',
    onPress: () => { },
  },
  {
    title: 'Bonus Coins!',
    subtitle: 'Join this sponsored room and get 100 bonus coins!',
    buttonText: 'Claim Bonus',
    onPress: () => { },
  },
  {
    title: 'Tournament Access',
    subtitle: 'Get a free ticket for our weekly tournament.',
    buttonText: 'Get Ticket',
    onPress: () => {
      console.log('Tournament Access clicked');
    },
  },
];

const TheCoinTossRoom = () => {
  const [searchText, setSearchText] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [isCreating, setIsCreating] = useState(false);

  const filteredRooms = roomsData.filter(room =>
    room.name.toLowerCase().includes(searchText.toLowerCase()) ||
    room.owner.toLowerCase().includes(searchText.toLowerCase())
  );

  type CombinedItem =
    | { type: 'room'; data: Room }
    | { type: 'ad'; data: typeof adCards[number] };

  const combinedList: CombinedItem[] = [];
  const adInterval = 2; // Insert an ad card after every 2 rooms
  let adIndex = 0;

  for (let i = 0; i < filteredRooms.length; i++) {
    combinedList.push({ type: 'room', data: filteredRooms[i] });
    if ((i + 1) % adInterval === 0 && adIndex < adCards.length) {
      combinedList.push({ type: 'ad', data: adCards[adIndex] });
      adIndex++;
    }
  }

  const handleSearch = () => {
    setIsSearching(true);
    setTimeout(() => setIsSearching(false), 500);
  };

  const handleCreateRoom = () => {
    setIsCreating(true);
    setTimeout(() => setIsCreating(false), 1000);
  };

  const handleJoinRoom = (room: Room) => {
    console.log(`Joining room: ${room.name}`);
  };

  // Updated renderRoom function
  const renderRoom = (room: Room) => {
    return (
      <Pressable
        key={room.id}
        onPress={() => handleJoinRoom(room)}
        className="rounded-xl p-5 mb-4 bg-gray-900 overflow-hidden"
        style={{
          borderLeftWidth: 1,
          borderRightWidth: 1,
          borderBottomWidth: 1,
          borderTopWidth: 0,
          borderColor: '#374151', // Tailwind's gray-700
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 4,
          },
          shadowOpacity: 0.30,
          shadowRadius: 4.65,
          elevation: 8,
        }}
      >

        {/* Top Gradient-like border (visual approximation, not actual gradient) */}
        {/* Simulated Top Gradient Border using layered views */}

        <LinearGradient
          colors={['#8b5cf6', '#ec4899', '#f59e0b']} // purple-500 → pink-500 → amber-500
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: 6,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            opacity: 0.3, // mimics blur softness
          }}
        />
        {/* Room Name and Live Status */}
        <View className="flex-row justify-between items-center mb-1 mt-2">
          <Text className="text-2xl font-bold text-white">
            {room.name}
          </Text>
          {room.live && (
            <View className="flex-row items-center px-2 py-0.5 rounded-full bg-red-500 border border-red-900">
              <View className="w-2 h-2 rounded-full mr-1 bg-white" />
              <Text className="text-xs font-semibold text-white p-1">
                LIVE
              </Text>
            </View>
          )}
        </View>

        {/* Room Owner */}
        <Text className="text-base mb-6 text-gray-400">
          by {room.owner}
        </Text>

        {/* Participants and Entry Fee */}
        <View className="flex-row justify-between items-center mb-6">
          <View>
            <Text className="text-sm text-gray-300 mb-1">
              Participants
            </Text>
            <View className="flex-row items-center">
              <Ionicons name="people" size={20} color="#94a3b8" />
              <Text className="text-xl font-bold ml-2 text-white">
                {room.participants}/{room.maxParticipants}
              </Text>
            </View>
          </View>
          <View className="items-end">
            <Text className="text-sm text-gray-300 mb-1">
              Entry Fee
            </Text>
            <View className="flex-row items-center">
              {/* The image uses a coin-like icon, not a dollar sign. Using a placeholder or custom icon if available. */}
              {/* Here, I'm using a simple text-based coin symbol as `MaterialIcons` doesn't have a direct coin icon that matches the image. */}
              <Text className="text-xl font-bold text-[#F97316] mr-1">
                ◎
              </Text>
              <Text className="text-xl font-bold text-[#F97316]">
                {room.entryFee.toFixed(2)}
              </Text>
            </View>
          </View>
        </View>

        {/* Join Room Button */}
        <View className="py-4 rounded-lg items-center flex-row justify-center bg-orange-500">
          <Feather name="arrow-right" size={20} color="black" style={{ marginRight: 8 }} />
          <Text className=" text-lg text-black font-bold">
            Join Room
          </Text>
        </View>
      </Pressable>
    );
  };


  return (
    <ScrollView
      className="flex-1 bg-[#242A38] p-4"
      contentContainerStyle={{ paddingBottom: 20 }} // Adds bottom margin to scroll area
    >
      {/* Header */}
      <View className="flex-row items-center justify-center mt-8 mb-4">
        <MaterialIcons name="public" size={35} color="#F97316"  />
        <Text className="text-white text-4xl font-bold ml-2">Public Rooms</Text>
      </View>

      <Text className="text-gray-400 text-lg font-bold mb-6 text-center">
        Find and join public games from around the world.
      </Text>

      {/* Search Bar */}
      <View className='border border-gray-700 bg-gray-900 rounded-lg mb-6'>
        <View  className='ms-4 me-4 mt-4 mb-2'>
          <View className="flex-row items-center bg-gray-900 mt-3 rounded-lg border border-gray-600 p-2 px-3">
            <Ionicons name="search" size={20} color="#94a3b8" />
            <TextInput
              className="flex-1 text-white text-base ml-3"
              placeholder="Search for a room..."
              placeholderTextColor="#94a3b8"
              value={searchText}
              onChangeText={setSearchText}
              onSubmitEditing={handleSearch}
              returnKeyType="search"
            />
            {isSearching && (
              <ActivityIndicator size="small" color="#94a3b8" className="ml-2" />
            )}
          </View>
          <TouchableOpacity
            className={`w-full bg-[#2C3344] p-3 mt-2 rounded-lg border border-gray-600 flex-row items-center justify-center mb-6 ${isCreating ? 'opacity-70' : ''
              }`}
            onPress={handleCreateRoom}
            disabled={isCreating}
          >
            {isCreating ? (
              <ActivityIndicator color="#D1D5DB" />
            ) : (
              <>
                <Feather name="plus-circle" size={20} color="#D1D5DB" className="mr-2" />
                <Text className="text-gray-300 font-semibold text-lg">Create</Text>
              </>
            )}
          </TouchableOpacity>
        </View>
      </View>



      {/* Horizontal Banner */}
      <View className="w-full bg-[#2C3344] border border-dashed border-gray-500 rounded-lg py-12 items-center justify-center mb-6">
        <Text className="text-gray-400 text-lg">Horizontal Banner Ad</Text>
        <Text className="text-gray-400 text-sm">100% x 100</Text>
      </View>

      {/* Combined Rooms and Ads */}
      <View>
        {combinedList.map((item, index) => {
          if (item.type === 'room') {
            return renderRoom(item.data);
          } else if (item.type === 'ad') {
            const ad = item.data;
            return (
              <View key={`ad-${index}`} className="relative bg-[#2C3344] rounded-2xl p-9 border border-amber-500 shadow-lg mb-4">
                <View className="absolute top-2 right-2 bg-gray-700 rounded px-2 py-0.5">
                  <Text className="text-xs text-gray-300 font-semibold">AD</Text>
                </View>
                <View className="flex-row justify-center mb-2">
                  <Ionicons name="star" size={30} color="#F97316" />
                </View>
                <Text className="text-white text-xl font-bold text-center mb-1">{ad.title}</Text>
                <Text className="text-gray-300 text-center mb-4">{ad.subtitle}</Text>
                <TouchableOpacity
                  onPress={ad.onPress}
                  className="bg-orange-500 rounded-lg px-6 py-3 flex-row items-center justify-center"
                >
                  <Text className="text-white font-semibold mr-2">{ad.buttonText}</Text>
                  <Ionicons name="arrow-forward" size={24} color="white" />
                </TouchableOpacity>
              </View>
            );
          }
          return null;
        })}

        {/* Bottom Spacer (optional if contentContainerStyle isn't respected) */}
        <View className="h-10" />
      </View>
    </ScrollView>

  );
};

export default TheCoinTossRoom;