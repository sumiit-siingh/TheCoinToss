# Component Structure Documentation

## Overview
This project follows a well-organized component structure with best naming conventions for React Native development, including a complete authentication flow.

## Folder Structure

```
components/
├── layout/           # Layout components (Header, Footer, AppLayout)
├── screens/          # Screen-level components (LoadingScreen, MainScreen, AuthScreen, etc.)
├── ui/              # Reusable UI components (Button, Card)
├── index.ts         # Central export file
└── [legacy files]   # Original components for backward compatibility
```

## App Flow

```
Loading Screen → Landing Page → Authentication → Dashboard
     ↓              ↓              ↓              ↓
Initial Load   Get Started    Login/Signup   Main App
```

## Component Categories

### 1. Layout Components (`/layout`)
Components that define the overall structure of the app.

#### Header.tsx
- **Purpose**: App header with title and optional back button
- **Props**: `title`, `showBackButton`, `onBackPress`
- **Usage**: Used in AppLayout or standalone

#### Footer.tsx
- **Purpose**: Bottom navigation footer
- **Props**: `onHomePress`, `onSettingsPress`, `onProfilePress`
- **Usage**: Used in AppLayout

#### AppLayout.tsx
- **Purpose**: Main layout wrapper combining Header, MainScreen, and Footer
- **Props**: `children`, `headerTitle`, `mainScreenTitle`, `showFooter`, `showHeader`, navigation handlers
- **Usage**: Main wrapper for app screens

### 2. Screen Components (`/screens`)
Components that represent full screens or major content areas.

#### LoadingScreen.tsx
- **Purpose**: App initialization loading screen with animations
- **Props**: `onLoadingComplete`, `loadingText`, `duration`
- **Usage**: Shown during app startup

#### MainScreen.tsx
- **Purpose**: Main content area with optional scrolling
- **Props**: `children`, `title`, `showScroll`
- **Usage**: Content container within AppLayout

#### AuthScreen.tsx
- **Purpose**: Authentication container with login/signup tabs
- **Props**: `onAuthSuccess`, `onBackToLanding`
- **Features**: Tab navigation between login and signup
- **Usage**: Main authentication screen

#### LoginScreen.tsx
- **Purpose**: User login form with validation
- **Props**: `onLoginSuccess`, `onSignupPress`, `onForgotPassword`
- **Features**: Email/password validation, loading states
- **Usage**: Login form within AuthScreen

#### SignupScreen.tsx
- **Purpose**: User registration form with validation
- **Props**: `onSignupSuccess`, `onLoginPress`
- **Features**: Full form validation, password confirmation
- **Usage**: Signup form within AuthScreen

#### DashboardScreen.tsx
- **Purpose**: Main app dashboard after authentication
- **Props**: `onLogout`
- **Features**: Statistics, quick actions, recent activity
- **Usage**: Main app screen after login

### 3. UI Components (`/ui`)
Reusable UI elements used throughout the app.

#### Button.tsx
- **Purpose**: Reusable button component with multiple variants
- **Props**: `title`, `onPress`, `variant`, `size`, `disabled`, `loading`, `className`
- **Variants**: `primary`, `secondary`, `outline`
- **Sizes**: `small`, `medium`, `large`

#### Card.tsx
- **Purpose**: Content container with optional title and shadow
- **Props**: `children`, `title`, `subtitle`, `className`, `shadow`

## Navigation Flow

### 1. App Initialization
```tsx
// App starts with loading screen
<LoadingScreen onLoadingComplete={() => setAppState('landing')} />
```

### 2. Landing Page
```tsx
// User sees landing page with "Get Started" button
<AppLayout>
  <Button title="Get Started" onPress={() => setAppState('auth')} />
</AppLayout>
```

### 3. Authentication
```tsx
// User navigates to auth screen with login/signup tabs
<AuthScreen 
  onAuthSuccess={() => setAppState('dashboard')}
  onBackToLanding={() => setAppState('landing')}
/>
```

### 4. Dashboard
```tsx
// After successful auth, user sees dashboard
<DashboardScreen onLogout={() => setAppState('landing')} />
```

## Naming Conventions

### File Naming
- **PascalCase**: All component files use PascalCase (e.g., `Header.tsx`, `LoadingScreen.tsx`)
- **Descriptive**: Names clearly indicate the component's purpose
- **Consistent**: Similar components follow similar naming patterns

### Component Naming
- **PascalCase**: All component names use PascalCase
- **Descriptive**: Names clearly indicate functionality
- **Consistent**: Similar components follow similar naming patterns

### Props Naming
- **camelCase**: All prop names use camelCase
- **Descriptive**: Props clearly indicate their purpose
- **Optional**: Most props are optional with sensible defaults

### Folder Naming
- **lowercase**: All folder names use lowercase
- **Descriptive**: Folder names clearly indicate their purpose
- **Plural**: Use plural for folders containing multiple components

## Usage Examples

### Complete App Flow
```tsx
import { LoadingScreen, AuthScreen, DashboardScreen } from './components';

export default function App() {
  const [appState, setAppState] = useState('loading');

  if (appState === 'loading') {
    return <LoadingScreen onLoadingComplete={() => setAppState('landing')} />;
  }

  if (appState === 'auth') {
    return <AuthScreen onAuthSuccess={() => setAppState('dashboard')} />;
  }

  if (appState === 'dashboard') {
    return <DashboardScreen onLogout={() => setAppState('landing')} />;
  }

  return <LandingPage onGetStarted={() => setAppState('auth')} />;
}
```

### Authentication Screen
```tsx
import { AuthScreen } from './components';

<AuthScreen 
  onAuthSuccess={() => console.log('User authenticated')}
  onBackToLanding={() => console.log('Back to landing')}
/>
```

### Dashboard with Statistics
```tsx
import { DashboardScreen } from './components';

<DashboardScreen 
  onLogout={() => console.log('User logged out')}
/>
```

## Form Validation

### Login Validation
- Email and password required
- Email format validation
- Loading state during submission

### Signup Validation
- All fields required (firstName, lastName, email, password, confirmPassword)
- Email format validation
- Password minimum length (6 characters)
- Password confirmation matching
- Loading state during submission

## Best Practices

1. **Import from index**: Always import components from `./components` index file
2. **TypeScript**: All components use TypeScript interfaces for props
3. **Default Props**: Provide sensible defaults for optional props
4. **Consistent Styling**: Use Tailwind CSS classes consistently
5. **Component Composition**: Build complex UIs by composing simple components
6. **Reusability**: Design components to be reusable across the app
7. **Accessibility**: Consider accessibility in component design
8. **State Management**: Use local state for UI state, consider global state for auth
9. **Error Handling**: Provide clear error messages and validation feedback
10. **Loading States**: Show loading indicators during async operations

## Migration from Legacy Components

The original components (`ScreenContent`, `EditScreenInfo`, `Container`) are still available for backward compatibility but should be replaced with the new structure when possible.

### Migration Path
- Replace `ScreenContent` with `MainScreen` or `AppLayout`
- Replace inline headers with `Header` component
- Replace custom buttons with `Button` component
- Replace custom containers with `Card` component
- Use new authentication flow instead of custom auth logic 