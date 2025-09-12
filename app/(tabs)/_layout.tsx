import { Image } from "expo-image";
import { Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";

const isDark = true; // later: read from context / Appearance

function TabIcon(props: { source: any; color: string }) {
  return (
    <Image
      source={props.source}
      style={{ width: 24, height: 24, tintColor: props.color }}
    />
  );
}

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: isDark ? "#fff" : "#000",
        tabBarInactiveTintColor: isDark ? "#6b7280" : "#9ca3af",
        tabBarHideOnKeyboard: true,
        tabBarStyle: [
          {
            backgroundColor: isDark ? "#111111" : "#ffffff",
            borderTopWidth: 0.5,
            borderTopColor: isDark ? "#262626" : "#e5e7eb",
            height: Platform.OS === "ios" ? 90 : 60,
            paddingTop: 8,
            paddingBottom: Platform.OS === "ios" ? 16 : 10,
            elevation: 0,
          },
          Platform.OS === "android" && {
            // remove ripple clipping
            overflow: "hidden",
          },
        ],
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <TabIcon
              source={require("../../assets/images/feed.png")}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          tabBarIcon: ({ color }) => (
            <TabIcon
              source={require("../../assets/images/explore.png")}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="notification"
        options={{
          title: "Notifications",
          tabBarIcon: ({ color }) => (
            <TabIcon
              source={require("../../assets/images/heart.png")}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => (
            <TabIcon
              source={require("../../assets/images/profile.png")}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
