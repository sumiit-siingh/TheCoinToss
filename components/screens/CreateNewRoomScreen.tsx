import React, { useState } from 'react';
import { View, Text, ScrollView, TextInput, Switch } from 'react-native';
import Slider from '@react-native-community/slider';
import { Header } from '../layout/Header';
import { PlusCircleIcon, CoinIcon } from '../ui/Icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { GradientButton } from './DashboardScreen'; 

type ToggleRowProps = {
    icon: React.ReactNode;
    title: string;
    subtitle: string;
    value: boolean;
    onValueChange: (value: boolean) => void;
};

const ToggleRow: React.FC<ToggleRowProps> = ({ icon, title, subtitle, value, onValueChange }) => (
    <View className="flex-row items-center justify-between bg-slate-900 p-8 rounded-xl">
        <View className="flex-row items-center flex-1 mr-4">
            {icon}
            <View className="ml-4">
                <Text className="text-white font-semibold text-xl">{title}</Text>
                <Text className="text-gray-400 text-lg mt-1">{subtitle}</Text>
            </View>
        </View>
        <Switch
            trackColor={{ false: "#374151", true: "#f59e0b" }}
            thumbColor={value ? "#facc15" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={onValueChange}
            value={value}
        />
    </View>
);

export const CreateNewRoomScreen = () => {
    const [roomName, setRoomName] = useState('');
    const [participantLimit, setParticipantLimit] = useState(50);
    const [isFreeEntry, setIsFreeEntry] = useState(true);
    const [isPublicRoom, setIsPublicRoom] = useState(true);

    return (
        <View className="flex-1 bg-slate-900">
            <Header isAuthenticated={true} />
            <ScrollView contentContainerStyle={{ padding: 16, paddingBottom: 48 }}>

                <View className="items-center mb-12 mt-6">
                    <View className="flex-row items-center">
                        <PlusCircleIcon size={32} color="#f97316" />
                        <Text className="text-4xl font-extrabold text-white ml-3">Create a New Room</Text>
                    </View>
                    <Text className="text-lg text-gray-400 mt-2 text-center mt-6">
                        Setup your game and invite others to join the toss.
                    </Text>
                </View>

                {/* --- Form Card --- */}
                <View className="bg-slate-800 border border-gray-700 rounded-lg p-6 rounded-2xl">
                    
                    {/* Room Name */}
                    <View className="mb-8">
                        <Text className="text-xl font-medium text-gray-300 mb-2">Room Name</Text>
                        <TextInput
                            className="bg-slate-900 text-white p-5 text-lg rounded-lg border border-slate-700"
                            placeholder="e.g., Weekend Champions"
                            placeholderTextColor="#64748b"
                            value={roomName}
                            onChangeText={setRoomName}
                        />
                    </View>

                    {/* Participant Limit */}
                    <View className="mb-6 mt-6">
                        <View className="flex-row justify-between items-center mb-2">
                            <Text className="text-xl font-medium text-gray-300">Participant Limit</Text>
                            <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#facc15' }}>{participantLimit}</Text>
                        </View>
                        {/* New container for the slider and its labels */}
                        <View className="flex-row items-center space-x-3">
                            <Text className="text-base font-bold text-gray-300">2</Text>
                            <Slider
                                // The 'flex-1' class makes the slider take up all available space in the middle
                                style={{ flex: 1, height: 40 }}
                                minimumValue={2}
                                maximumValue={200}
                                step={1}
                                value={participantLimit}
                                onValueChange={setParticipantLimit}
                                minimumTrackTintColor="#f97316"
                                maximumTrackTintColor="#475569"
                                thumbTintColor="#facc15"
                            />
                            <Text className="text-base font-bold text-gray-300">200</Text>
                        </View>
                    </View>
                    
                    {/* --- THIS IS THE UPDATED SECTION --- */}
                    
                    {/* Free Entry Toggle */}
                    <View className="mb-6 border border-gray-700 rounded-lg">
                        <ToggleRow
                            icon={<CoinIcon size={24} color="#22c55e" />}
                            title="Free Entry"
                            subtitle="This room is free to join."
                            value={isFreeEntry}
                            onValueChange={setIsFreeEntry}
                        />
                    </View>

                    {/* Public Room Toggle */}
                    <View className="mb-6 border border-gray-700 rounded-lg">
                        <ToggleRow
                            icon={<FontAwesome5 name="globe-americas" size={24} color="#3b82f6" />}
                            title="Public Room"
                            subtitle="Anyone can join this room."
                            value={isPublicRoom}
                            onValueChange={setIsPublicRoom}
                        />
                    </View>
                    
                    <GradientButton 
                        title="Create Room"
                        onPress={() => console.log('Create Room Pressed')}
                        icon={({size, color, style}) => <PlusCircleIcon size={size} color={color} style={style} />}
                        style={{marginTop: 8}}
                    />

                    <View className="w-full h-14 border border-dashed border-gray-600 rounded-lg justify-center items-center mt-6">
                        <Text className="text-gray-500 text-sm">Banner Ad</Text>
                        <Text className="text-gray-600 text-xs">320 x 50</Text>
                    </View>
                </View>

                <View className="w-full h-24 border-2 border-dashed border-gray-600 rounded-lg justify-center items-center my-8">
                    <Text className="text-gray-500">Leaderboard Ad</Text>
                    <Text className="text-gray-600 text-xs">100% x 90</Text>
                </View>

            </ScrollView>
        </View>
    );
};