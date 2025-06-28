import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { AppLayout } from '../layout';
import { Button, Card } from '../ui';
import Svg, { Path } from 'react-native-svg';

// --- SVG Icon Components (Optimized for reuse) ---
const StarIcon = ({ style }) => (
  <Svg style={style} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <Path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
  </Svg>
);

const CheckIcon = ({ style }) => (
  <Svg style={style} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
    <Path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </Svg>
);

const WalletIcon = ({ style }) => (
  <Svg style={style} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <Path strokeLinecap="round" strokeLinejoin="round" d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m12 0V9" />
  </Svg>
);

// --- UI Card Components ---
const DailyLoginRewardCard = () => (
  <View style={styles.card}>
    <View style={styles.cardHeader}>
      <View>
        <Text style={styles.cardTitle}>Daily Login Reward</Text>
        <Text style={styles.cardSubtitle}>Claim your daily bonus.</Text>
      </View>
      <CheckIcon style={[styles.icon, styles.greenIcon]} />
    </View>
    <View style={styles.stars}>
      {[...Array(5)].map((_, i) => (
        <StarIcon key={i} style={styles.star} />
      ))}
    </View>
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>Reach 5-day streak</Text>
    </TouchableOpacity>
  </View>
);

const CoinWalletCard = () => (
  <View style={styles.card}>
    <View style={styles.cardHeader}>
      <Text style={styles.cardTitle}>Coin Wallet</Text>
      <View style={styles.iconContainer}>
        <WalletIcon style={[styles.icon, styles.yellowIcon]} />
      </View>
    </View>
    <View style={styles.coinContainer}>
      <Text style={styles.coinAmount}>1000</Text>
    </View>
    <Text style={styles.cardSubtitle}>Use coins to enter special tournaments.</Text>
  </View>
);

// --- Dashboard Screen Component ---
interface DashboardScreenProps {
  onLogout?: () => void;
}

export const DashboardScreen: React.FC<DashboardScreenProps> = ({ onLogout }) => {
  return (
    <AppLayout
      headerTitle="Dashboard"
      mainScreenTitle="Welcome to TheCoinToss"
      showFooter={true}
    >
      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        {/* Account Overview Card */}
        <Card title="Account Overview" subtitle="Your coin toss statistics">
          <View style={styles.accountOverview}>
            <View style={styles.accountRow}>
              <Text style={styles.accountText}>Total Tosses</Text>
              <Text style={styles.accountValue}>1,234</Text>
            </View>
            <View style={styles.accountRow}>
              <Text style={styles.accountText}>Heads</Text>
              <Text style={[styles.accountValue, styles.greenText]}>612</Text>
            </View>
            <View style={styles.accountRow}>
              <Text style={styles.accountText}>Tails</Text>
              <Text style={[styles.accountValue, styles.blueText]}>622</Text>
            </View>
            <View style={styles.accountRow}>
              <Text style={styles.accountText}>Win Rate</Text>
              <Text style={[styles.accountValue, styles.purpleText]}>49.6%</Text>
            </View>
          </View>
        </Card>

        {/* Quick Actions Card */}
        <Card title="Quick Actions" subtitle="What would you like to do?">
          <View style={styles.quickActions}>
            <Button
              title="Toss a Coin"
              onPress={() => console.log('Toss coin pressed')}
              variant="primary"
              size="large"
            />
            <Button
              title="View History"
              onPress={() => console.log('View history pressed')}
              variant="outline"
              size="large"
            />
            <Button
              title="Settings"
              onPress={() => console.log('Settings pressed')}
              variant="secondary"
              size="large"
            />
          </View>
        </Card>

        {/* Recent Activity Card */}
        <Card title="Recent Activity" subtitle="Your latest coin tosses">
          <View style={styles.recentActivity}>
            <View style={styles.activityItem}>
              <Text style={styles.activityText}>Toss #1234</Text>
              <Text style={styles.activityOutcome}>Heads</Text>
            </View>
            <View style={styles.activityItem}>
              <Text style={styles.activityText}>Toss #1233</Text>
              <Text style={styles.activityOutcome}>Tails</Text>
            </View>
            <View style={styles.activityItem}>
              <Text style={styles.activityText}>Toss #1232</Text>
              <Text style={styles.activityOutcome}>Heads</Text>
            </View>
            <View style={styles.activityItem}>
              <Text style={styles.activityText}>Toss #1231</Text>
              <Text style={styles.activityOutcome}>Tails</Text>
            </View>
          </View>
        </Card>

        {/* Logout Button */}
        <View style={styles.logoutContainer}>
          <Button
            title="Logout"
            onPress={onLogout ?? (() => {})}
            variant="outline"
            size="large"
            className="bg-red-50 border-red-300"
          />
        </View>
      </ScrollView>
    </AppLayout>
  );
};

// --- Styles ---
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111217',
    padding: 16,
    justifyContent: 'center',
  },
  accountOverview: {
    marginTop: 16,
  },
  accountRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  accountText: {
    fontSize: 14,
    color: '#888',
  },
  accountValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  greenText: {
    color: 'green',
  },
  blueText: {
    color: 'blue',
  },
  purpleText: {
    color: 'purple',
  },
  quickActions: {
    spaceY: 3,
  },
  recentActivity: {
    marginTop: 8,
  },
  activityItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  activityText: {
    fontSize: 14,
    color: '#888',
  },
  activityOutcome: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'green',
  },
  logoutContainer: {
    marginTop: 16,
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#2a2d3e',
    padding: 16,
    borderRadius: 12,
    width: '100%',
    marginBottom: 16,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  cardTitle: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  cardSubtitle: {
    fontSize: 14,
    color: '#888',
  },
  button: {
    backgroundColor: '#f59e0b',
    paddingVertical: 12,
    borderRadius: 8,
    marginTop: 16,
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  iconContainer: {
    padding: 8,
    backgroundColor: '#1d1f26',
    borderRadius: 8,
  },
  icon: {
    width: 24,
    height: 24,
  },
  greenIcon: {
    backgroundColor: 'rgba(34,197,94,0.2)',
  },
  yellowIcon: {
    backgroundColor: 'rgba(252,211,77,0.2)',
  },
  stars: {
    flexDirection: 'row',
    marginVertical: 8,
  },
  star: {
    marginRight: 4,
  },
  coinContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  coinAmount: {
    fontSize: 40,
    color: 'white',
    fontWeight: 'bold',
  },
  logoutButton: {
    backgroundColor: '#ef4444',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginTop: 20,
  },
  logoutText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
