import { supabase } from "@/lib/supabase-connection";
import { useAuth } from "@/hooks/useAuth";
import { useEffect, useState } from "react";
import { 
  Alert, 
  StyleSheet, 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity,
  ActivityIndicator,
  ScrollView 
} from "react-native";

export default function Profile() {
  const { session, user } = useAuth();
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState("");
  const [website, setWebsite] = useState("");
  const [avatarUrl, setAvatarUrl] = useState("");
  const [updating, setUpdating] = useState(false);

  useEffect(() => {
    if (session) getProfile();
  }, [session]);

  async function getProfile() {
    try {
      setLoading(true);
      if (!session?.user) throw new Error("No user on the session!");

      const { data, error, status } = await supabase
        .from("profiles")
        .select(`username, website, avatar_url`)
        .eq("id", session?.user.id)
        .single();
        
      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        setUsername(data.username || "");
        setWebsite(data.website || "");
        setAvatarUrl(data.avatar_url || "");
      }
    } catch (error) {
      if (error instanceof Error) {
        Alert.alert("Error", error.message);
      }
    } finally {
      setLoading(false);
    }
  }

  async function updateProfile() {
    try {
      setUpdating(true);
      if (!session?.user) throw new Error("No user on the session!");

      const updates = {
        id: session?.user.id,
        username,
        website,
        avatar_url: avatarUrl,
        updated_at: new Date(),
      };

      const { error } = await supabase.from("profiles").upsert(updates);

      if (error) {
        throw error;
      }

      Alert.alert("Success", "Profile updated successfully!");
    } catch (error) {
      if (error instanceof Error) {
        Alert.alert("Error", error.message);
      }
    } finally {
      setUpdating(false);
    }
  }

  async function signOut() {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) {
        Alert.alert("Error", error.message);
      }
    } catch (error) {
      if (error instanceof Error) {
        Alert.alert("Error", error.message);
      }
    }
  }

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#007AFF" />
        <Text style={styles.loadingText}>Loading profile...</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      
      {/* Email (read-only) */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={[styles.input, styles.disabledInput]}
          value={session?.user?.email || ""}
          editable={false}
        />
      </View>

      {/* Username */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Username</Text>
        <TextInput
          style={styles.input}
          value={username}
          onChangeText={setUsername}
          placeholder="Enter your username"
          autoCapitalize="none"
        />
      </View>

      {/* Website */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Website</Text>
        <TextInput
          style={styles.input}
          value={website}
          onChangeText={setWebsite}
          placeholder="https://yourwebsite.com"
          autoCapitalize="none"
          keyboardType="url"
        />
      </View>

      {/* Update Button */}
      <TouchableOpacity 
        style={[styles.button, updating && styles.buttonDisabled]}
        onPress={updateProfile}
        disabled={updating}
      >
        {updating ? (
          <ActivityIndicator color="white" />
        ) : (
          <Text style={styles.buttonText}>Update Profile</Text>
        )}
      </TouchableOpacity>

      {/* Sign Out Button */}
      <TouchableOpacity 
        style={[styles.button, styles.signOutButton]}
        onPress={signOut}
      >
        <Text style={[styles.buttonText, styles.signOutButtonText]}>Sign Out</Text>
      </TouchableOpacity>

      {/* User Info */}
      <View style={styles.userInfo}>
        <Text style={styles.userInfoTitle}>Account Information</Text>
        <Text style={styles.userInfoText}>User ID: {user?.id}</Text>
        <Text style={styles.userInfoText}>
          Created: {user?.created_at ? new Date(user.created_at).toLocaleDateString() : 'N/A'}
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: '#666',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
    marginTop: 20,
    color: '#333',
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 8,
    color: '#333',
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
    backgroundColor: '#f9f9f9',
  },
  disabledInput: {
    backgroundColor: '#e9ecef',
    color: '#6c757d',
  },
  button: {
    height: 50,
    backgroundColor: '#007AFF',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonDisabled: {
    backgroundColor: '#ccc',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  signOutButton: {
    backgroundColor: '#FF3B30',
    marginTop: 30,
  },
  signOutButtonText: {
    color: 'white',
  },
  userInfo: {
    marginTop: 40,
    padding: 20,
    backgroundColor: '#f8f9fa',
    borderRadius: 8,
  },
  userInfoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  userInfoText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
});