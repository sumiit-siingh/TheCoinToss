import React, { useState } from 'react';
import { View, Text, ScrollView, TextInput, Image, TouchableOpacity } from 'react-native';
import { Header } from '../layout/Header';
import { GradientButton } from '../ui/GradientButton'; // Import our new reusable button
import { ArrowRightIcon } from '../ui/Icons';
import { FontAwesome } from '@expo/vector-icons';

export const JoinRoomScreen = () => {
    const [password, setPassword] = useState('');

    return (
        <View className="flex-1 bg-slate-900">
            <Header isAuthenticated={true} />
            <ScrollView contentContainerStyle={{ padding: 16, paddingBottom: 48 }}>
                {/* --- Header Section --- */}
                <View className="items-center mt-6 mb-6">
                    <View className="flex-row items-center">
                        <ArrowRightIcon size={32} color="#f97316" />
                        <Text className="text-4xl font-extrabold text-white ml-3">Join Room</Text>
                    </View>
                    <Text className="text-lg text-gray-400 mt-2 text-center">
                        You have been invited to a game.
                    </Text>
                </View>

                {/* --- Top Ad Banner --- */}
                <View className="w-full border-2 border-dashed border-gray-600 rounded-lg justify-center items-center mb-6"  style={{ height: 250 }}>
                    <Text className="text-gray-500">Mobile Medium Rectangle</Text>
                    <Text className="text-gray-600 text-xs">100% x 250</Text>
                </View>

                {/* --- Main Card --- */}
                <View className="bg-slate-800  p-6 rounded-2xl items-center">
                    <Image
                        source={{ uri: "https://res.cloudinary.com/dk5ge5xx8/image/upload/v1751023601/Favicon_tugon0.png" }}
                        className="w-24 h-24"
                    />
                    <Text className="text-white text-2xl font-bold mt-6">The Coin Toss</Text>

                    <View className="h-[1px] bg-slate-700 w-full my-7" />

                    <View className="flex-row items-center ">
                        <FontAwesome name="lock" size={25} color="purple" />
                        <Text className="text-white font-bold ml-4 text-2xl">Private</Text>
                    </View>
                    <Text className="text-gray-400 text-md mt-2 mb-6">Room Type</Text>

                    <View className="h-[1px] bg-slate-700 w-full my-5" />

                    <View className="w-full mt-2">
                        <Text className="text-base text-gray-300 font-medium mb-2 mt-6">Room Password</Text>
                        <View className="flex-row items-center bg-slate-900 p-2  rounded-lg border border-slate-700">
                            <View className='ml-4'><FontAwesome name="lock" size={20} color="#94a3b8" /></View>
                            
                            <TextInput
                                className="flex-1 text-white text-lg ml-4"
                                placeholder="Enter the secret password"
                                placeholderTextColor="#64748b"
                                secureTextEntry={true}
                                value={password}
                                onChangeText={setPassword}
                            />
                        </View>
                    </View>

                    <GradientButton
                        title="Join Now"
                        onPress={() => console.log('Join Now Pressed')}
                        icon={({size, color, style}) => <ArrowRightIcon size={size} color={color} style={style} />}
                        style={{marginTop: 24, width: '100%'}}
                    />
                </View>
                    <View className='flex items-center justify-center mt-8'>
                        <Text className='text-gray-400 text-sm'>
                            Or join using an Access Code:
                        </Text>
                        <Text className='text-orange-500 text-lg font-bold mt-2'>
                            Enter Code Manually
                        </Text>
                    </View>
            </ScrollView>
        </View>
    );
};