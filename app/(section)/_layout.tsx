import { ImageBackground } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";
import React from "react";

const navigationList = [
  { name: "articles", title: "Articles", icon: "book" },
  { name: "explore", title: "Explore", icon: "tree" },
  { name: "index", title: "Home", icon: "home" },
  { name: "garden", title: "Garden", icon: "leaf" },
  { name: "profile", title: "Profile", icon: "user" },
];

const _Layout = () => {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "#61AF2B" }}>
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
                    : nav.icon === "leaf"
                    ? "leaf"
                    : "user"
                }
                size={30}
                color={focused ? "#61AF2B" : "#8C8C8C"} // Change the color of the icon when it is focused
              />
            ),
          }}
        />
      ))}
    </Tabs>
  );
};

export default _Layout;
