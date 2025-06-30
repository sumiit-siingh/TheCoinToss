// Layout Components
export { Header } from './layout/Header';
export { Footer } from './layout/Footer';
export { AppLayout } from './layout/AppLayout';

// Screen Components
export { LoadingScreen } from './screens/LoadingScreen';
export { MainScreen } from './screens/MainScreen';
export { AuthScreen } from './screens/AuthScreen';
export { LoginScreen } from './screens/LoginScreen';
export { SignupScreen } from './screens/SignupScreen';
export { DashboardScreen } from './screens/DashboardScreen';
export { LeaderboardScreen } from './screens/LeaderboardScreen';
export { TheCoinTossRoomScreen } from './screens/TheCoinTossRoomScreen';
// --- ADD THIS LINE TO FIX THE ERROR ---
export { ProfileScreen } from './screens/ProfileScreen';


// UI Components
export { Button } from './ui/Button';
export { Card } from './ui/Card';
export * from './ui/Icons'; // Also added the export for your new Icons file

// Legacy Components (keeping for backward compatibility)
export { ScreenContent } from './ScreenContent';
export { EditScreenInfo } from './EditScreenInfo';
export { Container } from './Container';