import React from 'react';
import { View } from 'react-native';
import { Header } from './Header';
import { Footer } from './Footer';

interface AppLayoutProps {
  children: React.ReactNode;
  isAuthenticated?: boolean;
  headerTitle?: string;
  mainScreenTitle?: string;
  showFooter?: boolean;
  showHeader?: boolean;
  onHomePress?: () => void;
  onSettingsPress?: () => void;
  onProfilePress?: () => void;
}


export const AppLayout: React.FC<AppLayoutProps> = ({
  children,
  headerTitle,
  mainScreenTitle,
  showFooter = true,
  showHeader = true,
  onHomePress,
  onSettingsPress,
  onProfilePress
}) => {
  return (
    <View className="flex-1 bg-white">
      {showHeader && (
        <Header />
      )}

      {children}
      
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
