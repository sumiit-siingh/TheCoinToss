import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  ActivityIndicator,
  Image,
  Alert,
} from 'react-native';
import { Feather, FontAwesome } from '@expo/vector-icons';
import { Header } from '../layout/Header';

interface SignupScreenProps {
  navigation: any;
  onAuthSuccess?: () => void;
}

export const SignupScreen: React.FC<SignupScreenProps> = ({
  navigation,
  onAuthSuccess,
}) => {
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // --- Your functions (validateForm, handleSignup, etc.) remain the same ---
  const validateForm = () => { /* ... */ return true; };
  const handleSignup = () => { /* ... */ };
  const handleSocialSignup = (provider: string) => { /* ... */ };

  return (
    <View style={{ flex: 1 }}>
      <Header isAuthenticated={false} />
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <View style={styles.card}>
            {/* The content of your card is unchanged */}
            <View style={styles.logoContainer}>
              <Image
                source={require('../../assets/images/Favicon.png')}
                style={styles.logo}
                onError={() => {}}
              />
            </View>
            <Text style={styles.title}>Create Your Account</Text>
            <Text style={styles.subtitle}>Join TheCoinToss and start playing</Text>
            {/* ... all your input fields and buttons ... */}
             <View style={styles.inputRow}>
               <View style={styles.inputContainer}>
                 <View style={styles.inputIconContainer}><Feather name="user" size={20} color="#94a3b8" /></View>
                 <TextInput placeholder="Display Name" placeholderTextColor="#94a3b8" style={styles.input} value={displayName} onChangeText={setDisplayName} autoCapitalize="words" />
               </View>
               <View style={styles.inputContainer}>
                  <View style={styles.inputIconContainer}><Feather name="mail" size={20} color="#94a3b8" /></View>
                  <TextInput placeholder="Email Address" placeholderTextColor="#94a3b8" style={styles.input} value={email} onChangeText={setEmail} keyboardType="email-address" autoCapitalize="none" autoCorrect={false}/>
               </View>
            </View>
            <View style={styles.inputRow}>
              <View style={styles.inputContainer}>
                <View style={styles.inputIconContainer}><Feather name="lock" size={20} color="#94a3b8" /></View>
                <TextInput placeholder="Password" placeholderTextColor="#94a3b8" style={styles.input} value={password} onChangeText={setPassword} secureTextEntry autoCapitalize="none"/>
              </View>
              <View style={styles.inputContainer}>
                 <View style={styles.inputIconContainer}><Feather name="lock" size={20} color="#94a3b8" /></View>
                 <TextInput placeholder="Confirm Password" placeholderTextColor="#94a3b8" style={styles.input} value={confirmPassword} onChangeText={setConfirmPassword} secureTextEntry autoCapitalize="none" />
              </View>
            </View>
            <TouchableOpacity
              style={[styles.button, isLoading && styles.buttonDisabled]}
              onPress={handleSignup}
              disabled={isLoading}
            >
              {isLoading ? <ActivityIndicator color="#fff" /> : <Text style={styles.buttonText}>Create Account</Text>}
            </TouchableOpacity>
            <Text style={styles.orText}>Or sign up with</Text>
            <TouchableOpacity
              style={styles.socialButton}
              onPress={() => handleSocialSignup('Google')}
            >
              <FontAwesome name="google" size={18} color="#D1D5DB" />
              <Text style={styles.socialButtonText}>  Sign up with Google</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.socialButton}
              onPress={() => handleSocialSignup('Twitter')}
            >
              <FontAwesome name="twitter" size={18} color="#D1D5DB" />
              <Text style={styles.socialButtonText}>  Sign up with Twitter</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.socialButton}
              onPress={() => handleSocialSignup('Facebook')}
            >
              <FontAwesome name="facebook" size={18} color="#D1D5DB" />
              <Text style={styles.socialButtonText}>  Sign up with Facebook</Text>
            </TouchableOpacity>
            <View style={styles.loginContainer}>
              <Text style={styles.loginText}>Already have an account? </Text>
              <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text style={styles.loginLink}>Login</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#242A38' },
  scrollContent: { flexGrow: 1, justifyContent: 'center', alignItems: 'center', padding: 16 },
  card: {
    width: '100%',
    maxWidth: 400,
    backgroundColor: '#1e293b',
    borderRadius: 16,
    padding: 24,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
    // --- BORDER ADDED HERE ---
    borderWidth: 1,
    borderColor: '#4B5563', // A subtle, light gray
  },
  logoContainer: { justifyContent: 'center', alignItems: 'center', marginBottom: 16 },
  logo: { width: 64, height: 64, borderRadius: 32 },
  title: { fontSize: 22, fontWeight: 'bold', color: '#fff', textAlign: 'center', marginBottom: 4 },
  subtitle: { fontSize: 14, color: '#9CA3AF', textAlign: 'center', marginBottom: 24 },
  inputRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 12 },
  inputContainer: { flex: 1, flexDirection: 'row', alignItems: 'center', backgroundColor: '#3C4459', borderRadius: 8, borderWidth: 1, borderColor: '#475569', paddingHorizontal: 8, marginHorizontal: 4 },
  inputIconContainer: { marginRight: 8 },
  input: { flex: 1, color: '#fff', paddingVertical: 10 },
  button: { backgroundColor: '#F97316', paddingVertical: 14, borderRadius: 8, alignItems: 'center', marginTop: 12 },
  buttonDisabled: { opacity: 0.7 },
  buttonText: { color: '#fff', fontWeight: '600' },
  orText: { color: '#6B7280', textAlign: 'center', marginVertical: 16 },
  socialButton: { flexDirection: 'row', backgroundColor: '#3C4459', paddingVertical: 12, borderRadius: 8, alignItems: 'center', marginBottom: 8, justifyContent: 'center' },
  socialButtonText: { color: '#D1D5DB', fontWeight: '600' },
  loginContainer: { flexDirection: 'row', justifyContent: 'center', marginTop: 24 },
  loginText: { color: '#9CA3AF' },
  loginLink: { color: '#F97316', fontWeight: '600' },
});