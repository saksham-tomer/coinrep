import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { images } from "@/constants/images";

function NavIcon({ srce, notShowTint, focused }) {
  return (
    <View>
      <Image
        source={srce}
        tintColor={notShowTint ? undefined : focused ? "#4338ca" : "#6366f1"}
        alt=""
        className={`${focused ? "size-10" : "size-8"} ${
          focused ? "bg-indigo-100 p-2 rounded-xl" : ""
        }`}
      />
    </View>
  );
}

const _layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: true,
        tabBarStyle: {
          position: "absolute",
          bottom: 10,
          backgroundColor: "#f0f0f0f0",
          marginHorizontal: 20,
          borderRadius: 20,
          paddingTop: 2,
          alignItems: "center",
          marginBottom: 10,
        },
      }}
    >
      <Tabs.Screen
        name="Hero"
        options={{
          title: "Hero",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <NavIcon srce={images.home} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="Search"
        options={{
          title: "Search",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <NavIcon srce={images.coin} notShowTint={true} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="Swap"
        options={{
          title: "Swap",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <NavIcon
              srce={images.wallet}
              focused={focused}
              notShowTint={true}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Home"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <NavIcon srce={images.home} focused={focused} />
          ),
        }}
      />
    </Tabs>
  );
};

export default _layout;
