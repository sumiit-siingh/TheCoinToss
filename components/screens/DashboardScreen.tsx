import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Svg, { Path, SvgProps } from 'react-native-svg';
import { Header } from '../layout/Header'; // 1. Import the Header component directly

// --- All your Icon and Card components remain here ---
interface IconProps extends SvgProps { width?: number; height?: number; }
const StarIcon: React.FC<IconProps> = (props) => ( <Svg {...props} viewBox="0 0 24 24" fill="currentColor"><Path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></Svg>);
const CheckIcon: React.FC<IconProps> = (props) => ( <Svg {...props} fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><Path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></Svg>);
const WalletIcon: React.FC<IconProps> = (props) => ( <Svg {...props} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><Path strokeLinecap="round" strokeLinejoin="round" d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m12 0V9" /></Svg>);
const LightningIcon: React.FC<IconProps> = (props) => ( <Svg {...props} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><Path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></Svg>);
const CoinIcon: React.FC<IconProps> = (props) => ( <Svg {...props} viewBox="0 0 20 20" fill="currentColor"><Path d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12zm0-2a4 4 0 100-8 4 4 0 000 8z" /></Svg>);
const PlusCircleIcon: React.FC<IconProps> = (props) => (<Svg {...props} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><Path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" /></Svg>);
const TrophyIcon: React.FC<IconProps> = (props) => ( <Svg {...props} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><Path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9a9 9 0 119 0zM16.5 18.75a9 9 0 00-9 0m9 0h.008v.008h-.008v-.008zm-9 0h-.008v.008h.008v-.008zM9 7.5a.75.75 0 01.75.75v3.75c0 .414.336.75.75.75h3a.75.75 0 010 1.5h-3.75a.75.75 0 01-.75-.75V8.25a.75.75 0 01.75-.75zM12 21a8.25 8.25 0 005.25-2.016" /></Svg>);
const UsersIcon: React.FC<IconProps> = (props) => ( <Svg {...props} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><Path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372m-10.5-.372a9.369 9.369 0 01-3.125-1.125m15.507-11.378a9.369 9.369 0 01-3.125 1.125m10.5 3.72a9.38 9.38 0 01-2.625-.372M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></Svg>);
const HistoryIcon: React.FC<IconProps> = (props) => ( <Svg {...props} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><Path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0011.664 0l3.181-3.183m-4.991-2.696a8.25 8.25 0 00-11.664 0l-3.181 3.183" /></Svg>);
const ClockIcon: React.FC<IconProps> = (props) => ( <Svg {...props} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><Path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></Svg>);
interface GradientButtonProps {
  onPress: () => void;
  title: string;
  style?: object;
  textStyle?: object;
}
const GradientButton: React.FC<GradientButtonProps> = ({ onPress, title, style, textStyle }) => (
  <TouchableOpacity onPress={onPress} style={style}>
    <LinearGradient colors={['#facc15', '#f97316']} style={styles.gradientButton}>
      <Text style={[styles.buttonText, textStyle]}>{title}</Text>
    </LinearGradient>
  </TouchableOpacity>
);
const DailyLoginRewardCard = () => (
  <View style={styles.card}>
    <View style={styles.cardHeader}>
      <View>
        <Text style={styles.cardTitle}>Daily Login Reward</Text>
        <Text style={styles.cardSubtitle}>Claim your daily bonus.</Text>
      </View>
      <View style={[styles.iconContainer, { backgroundColor: 'rgba(34, 197, 94, 0.2)' }]}>
        <CheckIcon style={styles.icon} stroke="#22c55e" />
      </View>
    </View>
    <View style={styles.starContainer}>
      {[...Array(5)].map((_, i) => (
        <StarIcon key={i} style={styles.starIcon} fill="#4b5563" />
      ))}
    </View>
    <GradientButton title="Reach 5-day streak" onPress={() => {}} />
  </View>
);
const CoinWalletCard = () => (<View style={styles.card}><View style={styles.cardHeader}><Text style={styles.cardTitle}>Coin Wallet</Text><View style={[styles.iconContainer, { backgroundColor: 'rgba(250, 204, 21, 0.2)' }]}><WalletIcon style={styles.icon} stroke="#facc15" /></View></View><View style={styles.coinDisplay}><CoinIcon style={styles.largeCoinIcon} fill="#fde047" /><Text style={styles.coinAmount}>1000</Text></View><Text style={styles.cardSubtitle}>Use coins to enter special tournaments.</Text></View>);
const DailyChallengeCard = () => (<View style={styles.card}><View style={styles.cardHeader}><Text style={styles.cardTitle}>Daily Challenge</Text><View style={[styles.iconContainer, { backgroundColor: 'rgba(168, 85, 247, 0.2)' }]}><LightningIcon style={styles.icon} stroke="#a855f7" /></View></View><Text style={styles.cardSubtitle}>Win 10 rooms in a row to earn a badge!</Text><View style={{flexDirection: 'row', justifyContent: 'space-between', marginVertical: 8}}><Text style={styles.progressText}>Progress</Text><Text style={styles.progressText}>3/10</Text></View><View style={styles.progressBarBackground}><LinearGradient colors={['#facc15', '#f97316']} style={styles.progressBarFill} start={{x: 0, y: 0}} end={{x: 1, y: 0}}/></View><TouchableOpacity style={styles.lockedButton}><Text style={styles.lockedButtonText}>Locked</Text></TouchableOpacity></View>);
const StatsCard = () => (<View style={styles.card}><View style={styles.cardHeader}><UsersIcon style={styles.headerIcon} stroke="#c084fc" /><Text style={styles.cardTitle}>Your Stats</Text></View><View style={styles.statsGrid}><View style={styles.statItem}><Text style={styles.statValue}>65%</Text><Text style={styles.statLabel}>Win Ratio</Text></View><View style={styles.statItem}><Text style={styles.statValue}>142</Text><Text style={styles.statLabel}>Total Tosses</Text></View><View style={styles.statItem}><Text style={styles.statValue}>35</Text><Text style={styles.statLabel}>Rooms Joined</Text></View><View style={styles.statItem}><Text style={styles.statValue}>12</Text><Text style={styles.statLabel}>Achievements</Text></View></View></View>);
const RecentActivityCard = () => { const acts = [{t:"Won a 50-person room",i:"2h ago"},{t:"Created a private room 'Friends Only'",i:"1d ago"},{t:"Reached a 5-win streak",i:"2d ago"}]; return (<View style={styles.card}><View style={styles.cardHeader}><HistoryIcon style={styles.headerIcon} stroke="#facc15" /><Text style={styles.cardTitle}>Recent Activity</Text></View><View>{acts.map((act, idx) => (<View key={idx} style={styles.activityItem}><CoinIcon style={styles.activityIcon} fill="#fde047" /><Text style={styles.activityText}>{act.t}</Text><Text style={styles.activityTime}>{act.i}</Text></View>))}</View></View>);};
const TimeInGameCard = () => (<View style={styles.card}><View style={styles.cardHeader}><Text style={styles.cardTitle}>Total Time</Text><View style={[styles.iconContainer, { backgroundColor: 'rgba(59, 130, 246, 0.2)' }]}><ClockIcon style={styles.icon} stroke="#3b82f6" /></View></View><View style={styles.coinDisplay}><ClockIcon style={styles.largeCoinIcon} stroke="#60a5fa" /><Text style={styles.coinAmount}>1h 40m</Text></View><TouchableOpacity style={styles.lockedButton}><Text style={styles.lockedButtonText}>View History</Text></TouchableOpacity></View>);

// --- Main Dashboard Screen Component ---
interface DashboardScreenProps {
  onLogout: () => void;
}

export const DashboardScreen: React.FC<DashboardScreenProps> = ({ onLogout }) => {
  const { width } = Dimensions.get('window');
  const isTablet = width >= 768;

  const mainCards = (
    <View style={isTablet && { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
      <View style={isTablet && { width: '48%' }}><DailyLoginRewardCard /></View>
      <View style={isTablet && { width: '48%' }}><CoinWalletCard /></View>
      <View style={isTablet && { width: '48%' }}><DailyChallengeCard /></View>
      <View style={isTablet && { width: '100%' }}><TrophyIcon style={styles.headerIcon} /></View>
    </View>
  );

  const sideCards = (
    <View style={isTablet && { width: '32%' }}>
      <StatsCard />
      <RecentActivityCard />
      <TimeInGameCard />
    </View>
  );

  return (
    // 2. The AppLayout wrapper is removed. The screen is now self-contained.
    <LinearGradient colors={['#1e2029', '#111217']} style={{flex: 1}}>
      <SafeAreaView style={{flex: 1}}>
        {/* 3. The Header is now part of the Dashboard screen itself */}
        <Header isAuthenticated={true} />
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.dashboard}>
            <Text style={styles.welcomeTitle}>
              Welcome <Text style={{color: '#c084fc'}}>Prem Yadav</Text>
            </Text>
            <View style={styles.banner}>
              <Text style={styles.bannerText}>Horizontal Banner</Text>
              <Text style={styles.bannerSubtext}>100% x 100</Text>
            </View>

            {isTablet ? (
              <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View style={{width: '65%'}}>{mainCards}</View>
                {sideCards}
              </View>
            ) : (
              <>
                {mainCards}
                {sideCards}
              </>
            )}
            
            <TouchableOpacity onPress={onLogout} style={styles.logoutButton}>
              <Text style={styles.buttonText}>Logout</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
}

// --- Styles ---
const styles = StyleSheet.create({
    container: { flex: 1 },
    scrollContainer: { paddingHorizontal: 16, paddingTop: 8, paddingBottom: 16, flexGrow: 1 }, // Adjusted padding
    dashboard: { alignItems: 'center' },
    welcomeTitle: { fontSize: 32, fontWeight: 'bold', color: '#fff', textAlign: 'center', marginBottom: 24, lineHeight: 40 },
    banner: { width: '100%', height: 100, borderWidth: 2, borderColor: '#4b5563', borderStyle: 'dashed', borderRadius: 16, justifyContent: 'center', alignItems: 'center', marginBottom: 24 },
    bannerText: { color: '#9ca3af', fontSize: 16 },
    bannerSubtext: { color: '#6b7280', fontSize: 14 },
    card: { backgroundColor: '#2a2d3e', padding: 16, borderRadius: 16, marginBottom: 16, width: '100%' },
    cardHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 },
    cardTitle: { fontSize: 18, fontWeight: 'bold', color: '#fff', flex: 1, marginRight: 8 },
    cardSubtitle: { fontSize: 14, color: '#9ca3af', marginTop: 4 },
    iconContainer: { width: 32, height: 32, borderRadius: 8, justifyContent: 'center', alignItems: 'center' },
    icon: { width: 20, height: 20 },
    headerIcon: { width: 28, height: 28, marginRight: 12 },
    starContainer: { flexDirection: 'row', marginBottom: 16 },
    starIcon: { width: 28, height: 28, marginRight: 4 },
    gradientButton: { paddingVertical: 12, borderRadius: 8, alignItems: 'center' },
    buttonText: { color: '#000', fontWeight: 'bold', fontSize: 16 },
    coinDisplay: { flexDirection: 'row', alignItems: 'center', marginVertical: 12 },
    largeCoinIcon: { width: 48, height: 48, marginRight: 12 },
    coinAmount: { fontSize: 40, fontWeight: 'bold', color: '#fff' },
    progressBarBackground: { height: 10, backgroundColor: '#4b5563', borderRadius: 5, width: '100%', marginTop: 4, marginBottom: 16 },
    progressBarFill: { height: '100%', width: '30%', borderRadius: 5 },
    progressText: { fontSize: 12, color: '#9ca3af' },
    lockedButton: { backgroundColor: '#3f4359', paddingVertical: 12, borderRadius: 8, alignItems: 'center', marginTop: 16 },
    lockedButtonText: { color: '#9ca3af', fontWeight: 'bold', fontSize: 16 },
    statsGrid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
    statItem: { backgroundColor: '#1e2029', borderRadius: 8, padding: 12, width: '48%', marginBottom: 12, alignItems: 'center' },
    activityItem: { flexDirection: 'row', alignItems: 'center', borderBottomWidth: 1, borderBottomColor: '#374151', paddingVertical: 12 },
    activityIcon: { width: 20, height: 20, marginRight: 16 },
    activityText: { color: '#d1d5db', flex: 1 },
    activityTime: { color: '#6b7280', fontSize: 12 },
    logoutButton: { backgroundColor: '#dc2626', paddingVertical: 12, borderRadius: 8, marginTop: 24, width: '100%', alignItems: 'center' },
    statLabel: { fontSize: 14, color: '#9ca3af', marginTop: 4 },
    statValue: { fontSize: 24, fontWeight: 'bold', color: '#facc15' },
});