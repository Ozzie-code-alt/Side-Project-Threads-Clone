import { Image } from "expo-image";
import { Stack } from "expo-router";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const isDark = true; // later: read from context / Appearance

function TabIcon(props: { source: any; color: string }) {
  return (
    <Image
      source={props.source}
      style={{ width: 24, height: 24, tintColor: props.color }}
    />
  );
}

export default function AuthLayout() {
  return (
    <SafeAreaView className=" max-w-screen  border border-blue-500 overflow-x-hidden h-screen">
      <Stack>
        <Stack.Screen name="sign-in" options={{ headerShown: false }} />
        <Stack.Screen name="sign-out" options={{ headerShown: false }} />
    
      </Stack>
    </SafeAreaView>
  );
}
