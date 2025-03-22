import { View, Text, StyleSheet } from "react-native";
import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const Header = () => {
  return (
    <View style={styles.header}>
      <View>
        <Text style={styles.title}>Plant Care</Text>
      </View>
      <View style={styles.icons}>
        <FontAwesome name="search" size={25} color="#333333" />
        <FontAwesome name="bell-o" size={25} color="#333333" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 5,
  },
  title: {
    color: "#25532E",
    fontSize: 20,
    fontWeight: "semibold",
  },
  icons: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 15,
    alignItems: "center",
  },
});

export default Header;
