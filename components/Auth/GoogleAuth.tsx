import { supabase } from "@/lib/supabase-connection";
import {
  GoogleSignin,
  statusCodes,
} from "@react-native-google-signin/google-signin";
import { useEffect } from "react";
export default function GoogleSignIn() {
  useEffect(() => {
    GoogleSignin.configure({
      webClientId: process.env.EXPO_PUBLIC_GOOGLE_CLIENT_ID!, // Supabase login
      offlineAccess: true,
    });
  }, []);
}

export const handleGoogleSignIn = async (router: any) => {
  try {
    await GoogleSignin.hasPlayServices();
    const userInfo = await GoogleSignin.signIn();

    if (userInfo.data?.idToken) {
      const { data, error } = await supabase.auth.signInWithIdToken({
        provider: "google",
        token: userInfo.data.idToken,
      });

      if (error) {
        console.error("Supabase auth error:", error);
        return;
      }

      console.log("Successfully signed in:", data);
      // Navigate to authenticated screen here
      router.replace("/(tabs)");
    } else {
      throw new Error("No ID token received from Google");
    }
  } catch (error: any) {
    console.error("Google Sign-in error:", error);

    switch (error.code) {
      case statusCodes.SIGN_IN_CANCELLED:
        console.log("User cancelled sign-in");
        break;
      case statusCodes.IN_PROGRESS:
        console.log("Sign-in already in progress");
        break;
      case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
        console.log("Play Services not available");
        break;
      default:
        console.log("Unknown error:", error.message);
    }
  }
};
