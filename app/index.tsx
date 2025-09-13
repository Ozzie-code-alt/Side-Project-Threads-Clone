import { useEffect } from 'react';
import { useRouter } from 'expo-router';
import { View, ActivityIndicator, Text } from 'react-native';
import { useAuth } from '@/hooks/useAuth';

export default function Index() {
  const router = useRouter();
  const { user, loading } = useAuth();

  useEffect(() => {
    // Only redirect when we're done loading the initial session
    if (!loading) {
      console.log('Auth loading complete. User:', user ? 'Logged in' : 'Not logged in');
      
      if (user) {
        // User is authenticated, go to main app
        router.replace('/(tabs)');
      } else {
        // User is not authenticated, go to sign in
        router.replace('/(auth)/sign-in');
      }
    }
  }, [user, loading, router]);

  // Show loading screen while checking authentication
  return (
    <View className="flex-1 justify-center items-center bg-white">
      <ActivityIndicator size="large" color="#0066cc" />
      <Text className="mt-4 text-gray-600">Checking authentication...</Text>
    </View>
  );
}