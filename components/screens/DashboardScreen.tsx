import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

// Import our shared components
import { Header } from '../layout/Header';
import {
    CheckCircleIcon, StarIcon, WalletIcon, LightningIcon, CalendarIcon, PlusCircleIcon,
    ArrowRightIcon, TrophyIcon, UsersIcon, GiftIcon, HistoryIcon, ClockIcon, ChartBarIcon, CoinIcon
} from '../ui/Icons';

// --- Reusable Button Component ---
// This is used in multiple places, so we keep it as a component
import { StyleProp, ViewStyle, TextStyle } from 'react-native';

export const GradientButton = ({
  onPress,
  title,
  icon: Icon,
  style,
  textStyle,
}: {
  onPress: () => void;
  title: string;
  icon?: React.ComponentType<{ size?: number; color?: string; style?: any }>;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}) => (
  <TouchableOpacity onPress={onPress} style={style} className="rounded-[12px] overflow-hidden">
    <LinearGradient colors={['#facc15', '#f97316']} className="flex-row items-center justify-center py-3 px-6" start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
      {Icon && <Icon size={16} color="#111217" style={{ marginRight: 8 }} />}
      <Text className="text-slate-900 font-bold text-2xl" style={textStyle}>{title}</Text>
    </LinearGradient>
  </TouchableOpacity>
);

// --- ActionCard Component ---
// This card is used 3 times, so keeping it as a component avoids a lot of repeated code.
type ActionCardProps = {
    icon: React.ComponentType<{ size?: number; color?: string; style?: any }>;
    title: string;
    subtitle: string;
    buttonTitle: string;
    buttonIcon?: React.ComponentType<{ size?: number; color?: string; style?: any }>;
    onButtonPress: () => void;
};

const ActionCard: React.FC<ActionCardProps> = ({icon: Icon, title, subtitle, buttonTitle, buttonIcon, onButtonPress}) => {
    const [isPressed, setIsPressed] = useState(false);
    return (
        // --- FIX: Added rounding and overflow-hidden to the parent TouchableOpacity ---
        <TouchableOpacity
            activeOpacity={1}
            onPressIn={() => setIsPressed(true)}
            onPressOut={() => setIsPressed(false)}
            // onPress={onButtonPress}
            className="relative mb-4 rounded-2xl overflow-hidden p-1" // Added rounding and overflow rule
        >
            {/* The gradient for the glow effect */}
            <LinearGradient
                colors={['#8b5cf6', '#f59e0b']}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 1}}
                className={`absolute -top-0.5 -left-0.5 -right-0.5 -bottom-0.5 rounded-[18px] transition-opacity ${isPressed ? 'opacity-75' : 'opacity-25'}`}
            />
            {/* The main content card */}
            <View className="bg-slate-900 p-6 items-center rounded-[16px] w-full border border-slate-700 mb-0">
                <Icon size={40} color="#f97316" />
                <Text className="text-2xl font-bold text-white text-center mt-3">{title}</Text>
                <Text className="text-sm text-gray-400 text-center my-1 leading-5">{subtitle}</Text>
                <GradientButton title={buttonTitle} onPress={onButtonPress} icon={buttonIcon} style={{marginTop: 16}}/>
            </View>
        </TouchableOpacity>
    );
};


// --- Main Dashboard Screen Component ---
export const DashboardScreen = ({ navigation }: { navigation: any }) => {
    // Ad banner can also be a small helper component inside here
    const AdBanner = ({style = {}}) => (
        <View className="w-full h-[90px] border border-dashed border-slate-700 rounded-[16px] justify-center items-center mb-5 bg-slate-900" style={style}>
            <Text className="text-sm text-gray-400">Leaderboard Ad</Text>
            <Text className="text-xs text-gray-500">100% x 90</Text>
        </View>
    );

    // Data for the recent activity card
    const recentActivity = [{t:"Won a 50-person room",i:"2h ago"},{t:"Created a private room",i:"1d ago"},{t:"Reached a 5-win streak",i:"2d ago"}];

    return (
        <View style={{flex: 1}}>
            <Header isAuthenticated={true} />
            <LinearGradient colors={['#111217', '#1e2029']} style={{flex: 1}}>
                <SafeAreaView style={{ flex: 1 }}>
                    <ScrollView contentContainerStyle={{paddingHorizontal: 16, paddingVertical: 24}}>
                        {/* --- Welcome Header --- */}
                        <View className="items-center mb-6">
                            <Text className="text-4xl font-bold text-white text-center leading-tight">
                                Welcome prem, <Text className="text-orange-500">The Coin Toss</Text>
                            </Text>
                            <Text className="text-base text-gray-400 text-center mt-2 px-5">
                                Ready to test your luck? Create or join a room to get started.
                            </Text>
                        </View>
                        
                        <AdBanner />

                        {/* --- ALL CARDS ARE NOW WRITTEN DIRECTLY BELOW --- */}
                        
                        {/* Daily Login Reward Card */}
                        <View className="bg-slate-900 p-4 mb-4 rounded-[16px] w-full border border-slate-700">
                            <View className="flex-row justify-between items-center mb-3">
                                <View className="flex-1">
                                    <Text className="text-xl font-bold text-white">Daily Login Reward</Text>
                                    <Text className="text-sm text-gray-400 mt-1 leading-5">You are on a 3-day streak! Claim your bonus.</Text>
                                </View>
                                <CheckCircleIcon />
                            </View>
                            <View className="flex-row mb-4 mt-2">
                                {[...Array(5)].map((_, i) => ( <StarIcon key={i} style={{marginRight: 4}} /> ))}
                            </View>
                            <GradientButton title="Reach 5-day streak" onPress={() => {}} />
                        </View>

                        {/* Coin Wallet Card */}
                        <View className="bg-slate-900 p-4 mb-4 rounded-[16px] w-full border border-slate-700">
                            <View className="flex-row justify-between items-center mb-3">
                                <Text className="text-xl font-bold text-white">Coin Wallet</Text>
                                <WalletIcon />
                            </View>
                            <View className="flex-row items-center my-3">
                                <CoinIcon size={40} />
                                <Text className="text-4xl font-bold text-white ml-3">500</Text>
                            </View>
                            <Text className="text-sm text-gray-400 mt-1 leading-5">Use coins to enter special tournaments.</Text>
                        </View>

                        {/* Daily Challenge Card */}
                        <View className="bg-slate-900 p-4 mb-4 rounded-[16px] w-full border border-slate-700">
                            <View className="flex-row justify-between items-center mb-3">
                                <Text className="text-xl font-bold text-white">Daily Challenge</Text>
                                <LightningIcon />
                            </View>
                            <Text className="text-sm text-gray-400 mt-1 leading-5">Win 10 rooms in a row to earn a badge!</Text>
                            <View className="flex-row justify-between my-2"><Text className="text-xs text-gray-400">Progress</Text><Text className="text-xs text-gray-400">3/10</Text></View>
                            <View className="h-2.5 bg-slate-700 rounded-full w-full mt-1">
                                <LinearGradient colors={['#a855f7', '#facc15']} className="h-full rounded-full w-[30%]" start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} />
                            </View>
                            <TouchableOpacity className="bg-slate-700 py-3 rounded-[12px] items-center mt-4" disabled><Text className="text-gray-400 font-bold text-base">Locked</Text></TouchableOpacity>
                        </View>

                        {/* Events Card */}
                        <View className="bg-slate-900 p-4 mb-4 rounded-[16px] w-full border border-slate-700">
                            <View className="flex-row justify-between items-center mb-3">
                                <Text className="text-xl font-bold text-white">Events</Text>
                                <CalendarIcon />
                            </View>
                            <Text className="text-sm text-gray-400 mt-1 leading-5">"Weekend Champions" is now live!</Text>
                            <Text className="text-sm text-gray-400 mt-3">Prize Pool: <Text className="text-yellow-300 font-bold">10,000 Coins</Text></Text>
                            <TouchableOpacity className="bg-transparent py-3 rounded-[12px] items-center mt-4 border border-slate-600"><Text className="text-gray-200 font-bold text-base">View Events</Text></TouchableOpacity>
                        </View>
                        
                        {/* Action Cards (reusable component) */}
                        <ActionCard icon={PlusCircleIcon} title="Create a New Room" subtitle="Start a new game and invite your friends." buttonTitle="Create Room" buttonIcon={PlusCircleIcon} onButtonPress={() => navigation.navigate('CreateNewRoom')}  />
                        <ActionCard icon={ArrowRightIcon} title="Join an Existing Room" subtitle="Have an invite code? Join a room now." buttonTitle="Join Room" buttonIcon={ArrowRightIcon} onButtonPress={() => navigation.navigate('JoinRoom')} />
                        <ActionCard icon={TrophyIcon} title="View Leaderboards" subtitle="See how you rank against other players." buttonTitle="View Leaderboards" buttonIcon={TrophyIcon} onButtonPress={() => navigation.navigate('LeaderBoard')} />
                        
                        <AdBanner />

                        {/* Stats Card */}
                        <View className="bg-slate-900 p-4 mb-4 rounded-[16px] w-full border border-slate-700">
                            <View className="flex-row items-center mb-2">
                                <UsersIcon size={28} />
                                <Text className="text-xl font-bold text-white ml-2">Your Stats</Text>
                            </View>
                            <View className="flex-row flex-wrap justify-between mt-2">
                                <View className="bg-slate-950 rounded-[12px] p-3 w-[48%] mb-3 items-center justify-center min-h-[120px]"><ChartBarIcon /><Text className="text-2xl font-bold text-white mt-2">65%</Text><Text className="text-sm text-gray-400 mt-1">Win Ratio</Text></View>
                                <View className="bg-slate-950 rounded-[12px] p-3 w-[48%] mb-3 items-center justify-center min-h-[120px]"><CoinIcon size={32} color="#fde047"/><Text className="text-2xl font-bold text-white mt-2">142</Text><Text className="text-sm text-gray-400 mt-1">Total Tosses</Text></View>
                                <View className="bg-slate-950 rounded-[12px] p-3 w-[48%] mb-3 items-center justify-center min-h-[120px]"><UsersIcon size={32} color="#3b82f6"/><Text className="text-2xl font-bold text-white mt-2">35</Text><Text className="text-sm text-gray-400 mt-1">Rooms Joined</Text></View>
                                <View className="bg-slate-950 rounded-[12px] p-3 w-[48%] mb-3 items-center justify-center min-h-[120px]"><StarIcon size={32} color="#f43f5e"/><Text className="text-2xl font-bold text-white mt-2">12</Text><Text className="text-sm text-gray-400 mt-1">Achievements</Text></View>
                            </View>
                        </View>
                        
                        {/* Invite Friends Card */}
                        <View className="bg-slate-900 p-4 mb-4 rounded-[16px] w-full border border-slate-700">
                            <View className="flex-row items-center mb-3">
                                <GiftIcon />
                                <Text className="text-xl font-bold text-white ml-2">Invite Friends</Text>
                            </View>
                            <Text className="text-sm text-gray-400 mt-1 leading-5">Get 100 bonus coins for every friend that signs up!</Text>
                            <GradientButton title="Get Invite Link" onPress={() => {}} style={{marginTop: 16}}/>
                        </View>
                        
                        <AdBanner />

                        {/* Recent Activity Card */}
                        <View className="bg-slate-900 p-4 mb-4 rounded-[16px] w-full border border-slate-700">
                            <View className="flex-row items-center mb-3">
                                <HistoryIcon />
                                <Text className="text-xl font-bold text-white ml-2">Recent Activity</Text>
                            </View>
                            <View>
                                {recentActivity.map((act, idx) => (
                                    <View key={idx} className="flex-row items-center py-3">
                                        <View className="w-9 h-9 rounded-full bg-slate-800 justify-center items-center mr-3 border border-slate-600"><CoinIcon size={20} color="#fde047" /></View>
                                        <View className="flex-1"><Text className="text-sm font-medium text-gray-200">{act.t}</Text><Text className="text-xs text-gray-500 mt-0.5">{act.i}</Text></View>
                                    </View>
                                ))}
                            </View>
                        </View>

                        {/* Time In Game Card */}
                        <View className="bg-slate-900 p-4 mb-4 rounded-[16px] w-full border border-slate-700">
                            <View className="flex-row justify-between items-center mb-3">
                                <Text className="text-xl font-bold text-white">Total Time in Game</Text>
                                <ClockIcon />
                            </View>
                            <View className="flex-row items-center my-3">
                                <ClockIcon size={40} color="#60a5fa" />
                                <Text className="text-4xl font-bold text-white ml-3">3h 49m</Text>
                            </View>
                            <TouchableOpacity className="bg-transparent py-3 rounded-[12px] items-center mt-4 border border-slate-600"><Text className="text-gray-200 font-bold text-base">View Game History</Text></TouchableOpacity>
                        </View>
                        
                    </ScrollView>
                </SafeAreaView>
            </LinearGradient>
        </View>
    );
};