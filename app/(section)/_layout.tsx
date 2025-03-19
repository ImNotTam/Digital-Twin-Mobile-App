import { ImageBackground } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";
import React from "react";

const navigationList = [
  { name: "index", title: "Home", icon: "home" },
  { name: "articles", title: "Articles", icon: "book" },
  { name: "explore", title: "Explore", icon: "tree" },
  { name: "saved", title: "Saved", icon: "bookmark" },
  { name: "profile", title: "Profile", icon: "user" },
];

const _Layout = () => {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "#000" }}>
      {navigationList.map((nav) => (
        <Tabs.Screen
          key={nav.title}
          name={nav.name}
          options={{
            title: nav.title,
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <FontAwesome
                name={
                  nav.icon === "home"
                    ? "home"
                    : nav.icon === "book"
                    ? "book"
                    : nav.icon === "tree"
                    ? "tree"
                    : nav.icon === "bookmark"
                    ? "bookmark"
                    : "user"
                }
                size={24}
                color={focused ? "#000" : "#ccc"}
              />
            ),
          }}
        />
      ))}
    </Tabs>
  );
};

export default _Layout;
