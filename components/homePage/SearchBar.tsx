import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const SearchBar = () => {
  return (
    <View style={styles.view1}>
      <View style={styles.view11}>
        <FontAwesome name="search" size={20} color="#EEE8B3" />
      </View>
      <View style={styles.view12}>
        <TextInput
          placeholder="Search"
          placeholderTextColor={"#EEE8B3"}
          style={{ color: "#EEE8B3" }}
        />
      </View>
      <View>
        <FontAwesome name="align-right" size={20} color="#EEE8B3" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  view1: {
    paddingLeft: 20,
    paddingRight: 20,
    marginLeft: 10,
    marginRight: 10,
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    gap: 5,
    borderRadius: 10,
    backgroundColor: "#25532E",
    margin: 10,
  },
  view11: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 5,
  },
  view12: {
    flexDirection: "row",
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10,
    flexGrow: 1,
  },
});

export default SearchBar;
