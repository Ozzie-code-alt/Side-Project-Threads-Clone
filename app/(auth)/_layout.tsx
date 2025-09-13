import { Stack } from "expo-router";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AuthLayout() {
  return (
    <SafeAreaView className=" max-w-screen  border border-blue-500 overflow-x-hidden h-screen">
      <Stack>
        <Stack.Screen name="sign-up" options={{ headerShown: false }} />
        <Stack.Screen name="sign-in" options={{ headerShown: false }} />
      </Stack>
    </SafeAreaView>
  );
}
