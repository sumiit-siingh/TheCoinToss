// index.ts

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

// Directly export DashboardScreen (no need for import/export)
export { default as DashboardScreen } from './screens/DashboardScreen';  // Use this for default exports

// UI Components
export { Button } from './ui/Button';
export { Card } from './ui/Card';

// Legacy Components (keeping for backward compatibility)
export { ScreenContent } from './ScreenContent';
export { EditScreenInfo } from './EditScreenInfo';
export { Container } from './Container';
