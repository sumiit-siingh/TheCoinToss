import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity, useWindowDimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Svg, { Path, SvgProps } from 'react-native-svg';

// --- SVG Icon Components ---
// Standardized, reusable icon components for consistency and performance.
interface IconProps extends SvgProps {
  size?: number;
  color?: string;
}

const CheckCircleIcon: React.FC<IconProps> = ({ size = 32, color = "#22c55e", ...props }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...props}>
    <Path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
  </Svg>
);

const StarIcon: React.FC<IconProps> = ({ size = 28, color = "#4b5563", ...props }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...props}>
    <Path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.007z" clipRule="evenodd" />
  </Svg>
);

const WalletIcon: React.FC<IconProps> = ({ size = 24, color = "#facc15", ...props }) => (
    <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke={color} {...props}>
        <Path strokeLinecap="round" strokeLinejoin="round" d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m12 0V9" />
    </Svg>
);

const LightningIcon: React.FC<IconProps> = ({ size = 24, color = "#a855f7", ...props }) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke={color} {...props}>
    <Path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
  </Svg>
);

const CalendarIcon: React.FC<IconProps> = ({ size = 24, color = "#ec4899", ...props }) => (
    <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke={color} {...props}>
        <Path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0h18" />
    </Svg>
);

const PlusCircleIcon: React.FC<IconProps> = ({ size = 20, color = "#111217", ...props }) => (
    <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke={color} {...props}>
        <Path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </Svg>
);

const ArrowRightIcon: React.FC<IconProps> = ({ size = 20, color = "#111217", ...props }) => (
    <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke={color} {...props}>
        <Path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
    </Svg>
);

const TrophyIcon: React.FC<IconProps> = ({ size = 20, color = "#111217", ...props }) => (
    <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke={color} {...props}>
        <Path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9a9 9 0 119 0zM16.5 18.75a9 9 0 00-9 0m9 0h.008v.008h-.008v-.008zm-9 0h-.008v.008h.008v-.008zM9 7.5a.75.75 0 01.75.75v3.75c0 .414.336.75.75.75h3a.75.75 0 010 1.5h-3.75a.75.75 0 01-.75-.75V8.25a.75.75 0 01.75-.75zM12 21a8.25 8.25 0 005.25-2.016" />
    </Svg>
);

const UsersIcon: React.FC<IconProps> = ({ size = 24, color = "#c084fc", ...props }) => (
    <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke={color} {...props}>
        <Path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372m-10.5-.372a9.369 9.369 0 01-3.125-1.125m15.507-11.378a9.369 9.369 0 01-3.125 1.125m10.5 3.72a9.38 9.38 0 01-2.625-.372M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </Svg>
);

const GiftIcon: React.FC<IconProps> = ({ size = 24, color = "#f43f5e", ...props }) => (
    <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke={color} {...props}>
        <Path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a2.25 2.25 0 01-2.25 2.25H5.25a2.25 2.25 0 01-2.25-2.25v-8.25M12 4.875A2.625 2.625 0 1014.625 2.25 2.625 2.625 0 0012 4.875z" />
        <Path strokeLinecap="round" strokeLinejoin="round" d="M12 4.875c-1.286 0-2.553.25-3.75.75m0 0c-1.197.5-2.25 1.25-3 2.25m12-3c1.197.5 2.25 1.25 3 2.25M12 15v6.75m0-6.75H4.5m7.5 0H19.5" />
    </Svg>
);

const HistoryIcon: React.FC<IconProps> = ({ size = 24, color = "#facc15", ...props }) => (
    <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke={color} {...props}>
        <Path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0011.664 0l3.181-3.183m-4.991-2.696a8.25 8.25 0 00-11.664 0l-3.181 3.183" />
    </Svg>
);

const ClockIcon: React.FC<IconProps> = ({ size = 24, color = "#3b82f6", ...props }) => (
    <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke={color} {...props}>
        <Path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </Svg>
);

const ChartBarIcon: React.FC<IconProps> = ({ size = 32, color = "#22c55e", ...props }) => (
    <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke={color} {...props}>
        <Path strokeLinecap="round" strokeLinejoin="round" d="M3 13.5l6-6m0 0l6 6m-6-6v12" />
    </Svg>
);

const CoinIcon: React.FC<IconProps> = ({ size = 20, color = "#fde047", ...props }) => (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill={color} {...props}>
        <Path d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12zm0-2a4 4 0 100-8 4 4 0 000 8z" />
    </Svg>
);

// --- Reusable Button Component ---
interface GradientButtonProps {
  onPress: () => void;
  title: string;
  icon?: React.ComponentType<IconProps>;
  style?: object;
  textStyle?: object;
}

const GradientButton: React.FC<GradientButtonProps> = ({ onPress, title, icon: Icon, style, textStyle }) => (
  <TouchableOpacity onPress={onPress} style={style}>
    <LinearGradient colors={['#facc15', '#f97316']} style={styles.gradientButton} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
      {Icon && <Icon style={{ marginRight: 8 }} />}
      <Text style={[styles.gradientButtonText, textStyle]}>{title}</Text>
    </LinearGradient>
  </TouchableOpacity>
);

// --- UI Card Components ---
// Each card is a self-contained component for better organization.

const DailyLoginRewardCard = () => (
  <View style={styles.card}>
    <View style={styles.cardHeader}>
      <View style={{ flex: 1 }}>
        <Text style={styles.cardTitle}>Daily Login Reward</Text>
        <Text style={styles.cardSubtitle}>You are on a -day streak! Claim your bonus.</Text>
      </View>
      <CheckCircleIcon />
    </View>
    <View style={styles.starContainer}>
      {[...Array(5)].map((_, i) => (
        <StarIcon key={i} />
      ))}
    </View>
    <GradientButton title="Reach 5-day streak" onPress={() => {}} />
  </View>
);

const CoinWalletCard = () => (
  <View style={styles.card}>
    <View style={styles.cardHeader}>
      <Text style={styles.cardTitle}>Coin Wallet</Text>
      <WalletIcon />
    </View>
    <View style={styles.coinDisplay}>
      <CoinIcon size={40} />
      <Text style={styles.coinAmount}>500</Text>
    </View>
    <Text style={styles.cardSubtitle}>Use coins to enter special tournaments and get perks.</Text>
  </View>
);

const DailyChallengeCard = () => (
  <View style={styles.card}>
    <View style={styles.cardHeader}>
      <Text style={styles.cardTitle}>Daily Challenge</Text>
      <LightningIcon />
    </View>
    <Text style={styles.cardSubtitle}>Win 10 rooms in a row to earn a special badge!</Text>
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 8 }}>
      <Text style={styles.progressText}>Progress</Text>
      <Text style={styles.progressText}>3/10</Text>
    </View>
    <View style={styles.progressBarBackground}>
      <LinearGradient colors={['#a855f7', '#facc15']} style={styles.progressBarFill} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} />
    </View>
    <TouchableOpacity style={styles.lockedButton} disabled>
      <Text style={styles.lockedButtonText}>Locked</Text>
    </TouchableOpacity>
  </View>
);

const EventsCard = () => (
    <View style={styles.card}>
        <View style={styles.cardHeader}>
            <Text style={styles.cardTitle}>Events</Text>
            <CalendarIcon />
        </View>
        <Text style={styles.cardSubtitle}>"Weekend Champions" tournament is now live!</Text>
        <Text style={styles.prizeText}>Prize Pool: <Text style={{color: '#fde047', fontWeight: 'bold'}}>10,000 Coins</Text></Text>
        <TouchableOpacity style={styles.outlineButton}>
            <Text style={styles.outlineButtonText}>View Events</Text>
        </TouchableOpacity>
    </View>
);

const ActionCard: React.FC<{icon: React.ComponentType<IconProps>, title: string, subtitle: string, buttonTitle: string, buttonIcon: React.ComponentType<IconProps>, onButtonPress: () => void}> = 
({icon: Icon, title, subtitle, buttonTitle, buttonIcon, onButtonPress}) => {
    const [isPressed, setIsPressed] = useState(false);

    return (
        <TouchableOpacity
            activeOpacity={1}
            onPressIn={() => setIsPressed(true)}
            onPressOut={() => setIsPressed(false)}
            onPress={onButtonPress}
            style={styles.actionCardWrapper}
        >
            <LinearGradient
                colors={['#8b5cf6', '#f59e0b']} // purple-600 to amber-500
                start={{x: 0, y: 0}}
                end={{x: 1, y: 1}}
                style={[
                    styles.actionCardGlow,
                    { opacity: isPressed ? 0.75 : 0.25 } 
                ]}
            />
            <View style={[styles.card, styles.actionCardContent]}>
                <Icon size={40} color="#f97316" />
                <Text style={[styles.cardTitle, {textAlign: 'center', marginTop: 12}]}>{title}</Text>
                <Text style={[styles.cardSubtitle, {textAlign: 'center', marginVertical: 4}]}>{subtitle}</Text>
                <GradientButton title={buttonTitle} onPress={() => {}} icon={buttonIcon} style={{marginTop: 16}}/>
            </View>
        </TouchableOpacity>
    );
};

const StatsCard = () => (
  <View style={styles.card}>
    <View style={styles.cardHeader}>
      <UsersIcon size={28} />
      <Text style={[styles.cardTitle, {marginLeft: 8}]}>Your Stats</Text>
    </View>
    <View style={styles.statsGrid}>
      <View style={styles.statItem}>
        <ChartBarIcon />
        <Text style={styles.statValue}>65%</Text>
        <Text style={styles.statLabel}>Win Ratio</Text>
      </View>
      <View style={styles.statItem}>
        <CoinIcon size={32} color="#fde047"/>
        <Text style={styles.statValue}>142</Text>
        <Text style={styles.statLabel}>Total Tosses</Text>
      </View>
      <View style={styles.statItem}>
        <UsersIcon size={32} color="#3b82f6"/>
        <Text style={styles.statValue}>35</Text>
        <Text style={styles.statLabel}>Rooms Joined</Text>
      </View>
      <View style={styles.statItem}>
        <StarIcon size={32} color="#f43f5e"/>
        <Text style={styles.statValue}>12</Text>
        <Text style={styles.statLabel}>Achievements</Text>
      </View>
    </View>
  </View>
);

const InviteFriendsCard = () => (
    <View style={styles.card}>
        <View style={styles.cardHeader}>
            <GiftIcon />
            <Text style={[styles.cardTitle, {marginLeft: 8}]}>Invite Friends</Text>
        </View>
        <Text style={styles.cardSubtitle}>Get 100 bonus coins for every friend that signs up using your referral link!</Text>
        <GradientButton title="Get Invite Link" onPress={() => {}} style={{marginTop: 16}}/>
    </View>
);

const RecentActivityCard = () => {
  const activities = [
    { text: "Won a 50-person room", time: "2h ago" },
    { text: "Created a private room 'Friends Only'", time: "1d ago" },
    { text: "Joined 'Community Toss #12'", time: "1d ago" },
    { text: "Reached a 5-win streak", time: "2d ago" },
  ];
  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <HistoryIcon />
        <Text style={[styles.cardTitle, {marginLeft: 8}]}>Recent Activity</Text>
      </View>
      <View>
        {activities.map((activity, index) => (
          <View key={index} style={styles.activityItem}>
            <View style={styles.activityIconContainer}>
                <CoinIcon size={20} color="#fde047" />
            </View>
            <View style={styles.activityTextContainer}>
                <Text style={styles.activityText}>{activity.text}</Text>
                <Text style={styles.activityTime}>{activity.time}</Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

const TimeInGameCard = () => (
  <View style={styles.card}>
    <View style={styles.cardHeader}>
      <Text style={styles.cardTitle}>Total Time in Game</Text>
      <ClockIcon />
    </View>
    <View style={styles.coinDisplay}>
      <ClockIcon size={40} color="#60a5fa" />
      <Text style={styles.coinAmount}>3h 49m</Text>
    </View>
    <TouchableOpacity style={styles.outlineButton}>
      <Text style={styles.outlineButtonText}>View Game History</Text>
    </TouchableOpacity>
  </View>
);

// --- Main Dashboard Screen Component ---
// This component is now self-contained and fully responsive.
export const DashboardScreen: React.FC = () => {
  const AdBanner = ({style = {}}: {style?: object}) => (
    <View style={[styles.banner, style]}>
      <Text style={styles.bannerText}>Leaderboard Ad</Text>
      <Text style={styles.bannerSubtext}>100% x 90</Text>
    </View>
  );

  return (
    <LinearGradient colors={['#111217', '#1e2029']} style={styles.wrapper}>
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.header}>
            <Text style={styles.welcomeTitle}>
              Welcome prem, <Text style={{ color: '#f97316' }}>The Coin Toss</Text>
            </Text>
            <Text style={styles.welcomeSubtitle}>
                Ready to test your luck? Create or join a room to get started.
            </Text>
          </View>
          
          <AdBanner />

          {/* This View now wraps all cards and ensures a single-column layout */}
          <View>
            <DailyLoginRewardCard />
            <CoinWalletCard />
            <DailyChallengeCard />
            <EventsCard />
            <ActionCard 
                icon={PlusCircleIcon}
                title="Create a New Room"
                subtitle="Start a new game and invite your friends."
                buttonTitle="Create Room"
                buttonIcon={PlusCircleIcon}
                onButtonPress={() => {}}
            />
            <ActionCard 
                icon={ArrowRightIcon}
                title="Join an Existing Room"
                subtitle="Have an invite code? Join a room now."
                buttonTitle="Join Room"
                buttonIcon={ArrowRightIcon}
                onButtonPress={() => {}}
            />
            <ActionCard 
                icon={TrophyIcon}
                title="View Leaderboards"
                subtitle="See how you rank against other players."
                buttonTitle="View Leaderboards"
                buttonIcon={TrophyIcon}
                onButtonPress={() => {}}
            />
            <AdBanner />
            <StatsCard />
            <InviteFriendsCard />
            <AdBanner />
            <RecentActivityCard />
            <TimeInGameCard />
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

// --- Styles ---
// Meticulously crafted to match the target design.
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  scrollContainer: {
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  header: {
    alignItems: 'center',
    marginBottom: 24,
  },
  welcomeTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 20,
    paddingTop: 20,
    paddingBottom: 4,
    color: '#fff',
    textAlign: 'center',
    lineHeight: 40,
  },
  welcomeSubtitle: {
    fontSize: 16,
    color: '#9ca3af',
    textAlign: 'center',
    marginTop: 8,
  },
  banner: {
    width: '100%',
    height: 90,
    borderWidth: 1,
    borderColor: '#374151',
    borderStyle: 'dashed',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#1e2029'
  },
  bannerText: {
    color: '#9ca3af',
    fontSize: 14,
  },
  bannerSubtext: {
    color: '#6b7280',
    fontSize: 12,
  },
  card: {
    backgroundColor: '#1e2029',
    padding: 16,
    marginBottom: 16,
    borderRadius: 16,
    width: '100%',
    borderWidth: 1,
    borderColor: '#374151',
  },
  // --- STYLES ADDED FOR ACTION CARD GLOW ---
  actionCardWrapper: {
    position: 'relative',
    marginBottom: 16,
  },
  actionCardGlow: {
    position: 'absolute',
    top: -2,
    left: -2,
    right: -2,
    bottom: -2,
    borderRadius: 18, // Slightly larger than the card's borderRadius
  },
  actionCardContent: {
    alignItems: 'center',
    marginBottom: 0, // Margin is now handled by the wrapper
  },
  // --- END OF ACTION CARD STYLES ---
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center', // Changed to center for better alignment
    marginBottom: 12, // Increased margin
  },
  cardTitle: {
    fontSize: 20, // Increased font size
    fontWeight: 'bold',
    color: '#fff',
    flexShrink: 1,
  },
  cardSubtitle: {
    fontSize: 14,
    color: '#9ca3af',
    marginTop: 4,
    lineHeight: 20,
  },
  starContainer: {
    flexDirection: 'row',
    marginBottom: 16,
    marginTop: 8,
  },
  gradientButton: {
    flexDirection: 'row',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gradientButtonText: {
    color: '#111217',
    fontWeight: 'bold',
    fontSize: 16,
  },
  outlineButton: {
    backgroundColor: 'transparent',
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 16,
    borderWidth: 1,
    borderColor: '#4b5563',
  },
  outlineButtonText: {
    color: '#d1d5db',
    fontWeight: 'bold',
    fontSize: 16,
  },
  coinDisplay: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 12,
  },
  coinAmount: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#fff',
    marginLeft: 12,
  },
  progressBarBackground: {
    height: 10,
    backgroundColor: '#374151',
    borderRadius: 5,
    width: '100%',
    marginTop: 4,
  },
  progressBarFill: {
    height: '100%',
    width: '30%',
    borderRadius: 5,
  },
  progressText: {
    fontSize: 12,
    color: '#9ca3af',
  },
  prizeText: {
      fontSize: 14,
      color: '#9ca3af',
      marginTop: 12,
  },
  lockedButton: {
    backgroundColor: '#374151',
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 16,
  },
  lockedButtonText: {
    color: '#9ca3af',
    fontWeight: 'bold',
    fontSize: 16,
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  statItem: {
    backgroundColor: '#111217',
    borderRadius: 12,
    padding: 12,
    width: '48%',
    marginBottom: 12,
    alignItems: 'center',
    minHeight: 120,
    justifyContent: 'center',
  },
  statValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 8,
  },
  statLabel: {
    fontSize: 14,
    color: '#9ca3af',
    marginTop: 4,
  },
  activityItem: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    paddingVertical: 12,
  },
  activityIconContainer: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#2a2d3e', 
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
    borderWidth: 1,
    borderColor: '#4b5563'
  },
  activityTextContainer: {
    flex: 1,
  },
  activityText: { 
    color: '#d1d5db',
    fontSize: 14,
    fontWeight: '500',
  },
  activityTime: { 
    color: '#6b7280', 
    fontSize: 12,
    marginTop: 2,
  },
});
