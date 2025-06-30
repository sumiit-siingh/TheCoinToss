import React from 'react';
import { View } from 'react-native';
import { Header } from './Header';
import { Footer } from './Footer';
import { MainScreen } from '../screens/MainScreen';

// This is the fully defined interface, which fixes the error.
interface AppLayoutProps {
  children?: React.ReactNode;
  headerTitle?: string;
  mainScreenTitle?: string;
  showFooter?: boolean;
  showHeader?: boolean;
  onHomePress?: () => void;
  onSettingsPress?: () => void;
  onProfilePress?: () => void;
  isAuthenticated?: boolean; // The prop we added
}

export const AppLayout: React.FC<AppLayoutProps> = ({
  children,
  headerTitle, // Now correctly destructured
  mainScreenTitle,
  showFooter = true,
  showHeader = true,
  onHomePress,
  onSettingsPress,
  onProfilePress,
  isAuthenticated, // The prop we added
}) => {
  return (
    <View className="flex-1 bg-white">
      {/* We pass the isAuthenticated prop to the Header.
        Note: The 'headerTitle' prop is accepted by AppLayout but passed visually 
        by the Header component itself or MainScreen depending on your design. 
        The error was just about defining it in the props interface.
      */}
      {showHeader && (
        <Header isAuthenticated={isAuthenticated} />
      )}
      
      <MainScreen title={mainScreenTitle}>
        {children}
      </MainScreen>
      
      {showFooter && (
        <Footer
          onHomePress={onHomePress}
          onSettingsPress={onSettingsPress}
          onProfilePress={onProfilePress}
        />
      )}
    </View>
  );
};