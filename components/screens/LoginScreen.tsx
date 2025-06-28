import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, ActivityIndicator, Image, StyleSheet } from 'react-native';
import { Feather, FontAwesome } from '@expo/vector-icons'; // Importing Feather and FontAwesome icons

interface LoginScreenProps {
  onLoginSuccess?: () => void;
  onSignupPress?: () => void;
  onForgotPassword?: () => void;
}

export const LoginScreen: React.FC<LoginScreenProps> = ({
  onLoginSuccess,
  onSignupPress,
  onForgotPassword,
}) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleLogin = (): void => {
    if (!email || !password) {
      Alert.alert('Please enter both email and password.'); // Using Alert for better UX
      return;
    }
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      console.log('Login successful!');
      onLoginSuccess && onLoginSuccess();
    }, 1500);
  };

  const handleSocialLogin = (provider: string): void => {
    console.log(`Signing in with ${provider}`);
    // Implement actual social login logic here
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image
          source={require('../../assets/images/Favicon.png')} // Ensure the path is correct
          style={styles.image}
          onError={() => console.log('Error loading Favicon.png')} // Fallback error handling
        />
        <Text style={styles.welcomeText}>Welcome to TheCoinToss</Text>
        <Text style={styles.subtitle}>Sign in to test your luck</Text>

        <View style={styles.inputContainer}>
          <Feather name="mail" size={20} color="#94a3b8" style={styles.icon} />
          <TextInput
            placeholder="Email Address"
            placeholderTextColor="#94a3b8"
            style={styles.input}
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
          />
        </View>

        <View style={styles.inputContainer}>
          <Feather name="lock" size={20} color="#94a3b8" style={styles.icon} />
          <TextInput
            placeholder="Password"
            placeholderTextColor="#94a3b8"
            style={styles.input}
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
        </View>

        <TouchableOpacity
          style={[styles.button, isLoading && styles.buttonDisabled]}
          onPress={handleLogin}
          disabled={isLoading}
        >
          {isLoading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text style={styles.buttonText}>Login Securely</Text>
          )}
        </TouchableOpacity>

        <View style={styles.separator}>
          <View style={styles.line}></View>
          <Text style={styles.orText}>Or continue with</Text>
          <View style={styles.line}></View>
        </View>

        <TouchableOpacity
          style={styles.socialButton}
          onPress={() => handleSocialLogin('Google')}
        >
          <Text style={styles.socialButtonText}>
            <FontAwesome name="google" size={18} color="#D1D5DB" /> Sign in with Google
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.socialButton}
          onPress={() => handleSocialLogin('Twitter')}
        >
          <Text style={styles.socialButtonText}>
            <FontAwesome name="twitter" size={18} color="#D1D5DB" /> Sign in with Twitter
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.socialButton}
          onPress={() => handleSocialLogin('Facebook')}
        >
          <Text style={styles.socialButtonText}>
            <FontAwesome name="facebook" size={18} color="#D1D5DB" /> Sign in with Facebook
          </Text>
        </TouchableOpacity>

        <View style={styles.footer}>
          <Text style={styles.footerText}>Don't have an account? </Text>
          <TouchableOpacity onPress={onSignupPress}>
            <Text style={styles.footerLink}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

// --- Styles ---
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2a2d3e', // Dark background color
    padding: 16,
  },
  card: {
    backgroundColor: '#1e293b', // Dark card background
    borderRadius: 16,
    padding: 24,
    width: '100%',
    maxWidth: 400,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
    alignItems: 'center',
  },
  image: {
    width: 64,
    height: 64,
    borderRadius: 32,
    marginBottom: 16,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: '#94a3b8',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#3C4459',
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginBottom: 16,
    width: '100%',
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    color: '#fff',
    fontSize: 16,
  },
  button: {
    backgroundColor: '#f59e0b',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonDisabled: {
    opacity: 0.7,
  },
  buttonText: {
    color: '#1f2937',
    fontSize: 18,
    fontWeight: 'bold',
  },
  separator: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  line: {
    height: 1,
    backgroundColor: '#D1D5DB',
    flex: 1,
  },
  orText: {
    color: '#D1D5DB',
    marginHorizontal: 10,
  },
  socialButton: {
    backgroundColor: '#3C4459',
    paddingVertical: 16,
    borderRadius: 12,
    marginBottom: 12,
    width: '100%',
    alignItems: 'center',
  },
  socialButtonText: {
    color: '#D1D5DB',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  footerText: {
    color: '#94a3b8',
  },
  footerLink: {
    color: '#f59e0b',
    fontWeight: 'bold',
  },
});

export default LoginScreen;
